import { NextResponse } from "next/server";
import { getStripe, isStripeConfigured, PREMIUM_UNIT_AMOUNT } from "@/lib/stripe";

// Stripe's Node SDK needs the Node.js runtime (not edge).
export const runtime = "nodejs";

/**
 * Creates a Stripe Checkout Session for the FreeTools Premium subscription and
 * returns its URL. Uses inline price_data so no Stripe dashboard product setup
 * is required to test. In TEST mode, complete it with card 4242 4242 4242 4242.
 *
 * NOTE: this is the billing plumbing. It does NOT yet attach the subscription
 * to a signed-in account or grant entitlements — that lands with Supabase auth
 * + the Stripe webhook. Today it validates the Checkout flow end-to-end.
 */
export async function POST(req: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY in .env.local." },
      { status: 503 },
    );
  }

  let billing: "monthly" | "yearly" = "monthly";
  try {
    const body = (await req.json()) as { billing?: string };
    if (body.billing === "yearly") billing = "yearly";
  } catch {
    /* default to monthly */
  }

  const base = process.env.NEXT_PUBLIC_APP_URL ?? new URL(req.url).origin;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: { name: "FreeTools Premium" },
            unit_amount: PREMIUM_UNIT_AMOUNT[billing],
            recurring: { interval: billing === "yearly" ? "year" : "month" },
          },
        },
      ],
      allow_promotion_codes: true,
      success_url: `${base}/pricing?checkout=success`,
      cancel_url: `${base}/pricing?checkout=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

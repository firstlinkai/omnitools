import Stripe from "stripe";

/**
 * Lazily-constructed, server-only Stripe client. Constructing Stripe with an
 * empty key throws, so we must NOT build it at module load (that would crash the
 * production build while Premium is parked and no key is set). Call getStripe()
 * only after isStripeConfigured() passes — i.e. inside a request handler.
 */
let client: Stripe | null = null;

export function getStripe(): Stripe {
  if (!client) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY is not set.");
    client = new Stripe(key);
  }
  return client;
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

/** Premium pricing in the smallest currency unit (cents). */
export const PREMIUM_UNIT_AMOUNT = {
  monthly: 600, // $6.00 / month
  yearly: 5760, // $57.60 / year (20% off)
} as const;

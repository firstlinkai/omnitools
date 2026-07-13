import Stripe from "stripe";

/**
 * Server-only Stripe client. The secret key comes from the environment
 * (.env.local in dev — gitignored). Never import this into a client component.
 */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

/** Premium pricing in the smallest currency unit (cents). */
export const PREMIUM_UNIT_AMOUNT = {
  monthly: 600, // $6.00 / month
  yearly: 5760, // $57.60 / year (20% off)
} as const;

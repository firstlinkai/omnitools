/**
 * Single source of truth for the Pricing page.
 *
 * IMPORTANT / honesty note: FreeTools is 100% client-side, so the Free tier is
 * genuinely unlimited — no per-day limits, no file-size caps, no ads. There is
 * no backend yet, so Premium is a ROADMAP tier: its features are marked
 * `soon: true` and it is not purchasable (the page shows a waitlist, not a
 * checkout). Swap in your real features/price here when you're ready to launch.
 */

export const PREMIUM_PRICE_MONTHLY = 6; // USD / month
export const YEARLY_DISCOUNT = 0.2; // 20% off when billed yearly
/** Effective monthly price when billed yearly. */
export const PREMIUM_PRICE_YEARLY_PER_MONTH =
  Math.round(PREMIUM_PRICE_MONTHLY * (1 - YEARLY_DISCOUNT) * 100) / 100;
/** Total charged once per year. */
export const PREMIUM_PRICE_YEARLY_TOTAL =
  Math.round(PREMIUM_PRICE_MONTHLY * 12 * (1 - YEARLY_DISCOUNT));

/** Set to a real payment URL (e.g. Stripe) to switch Premium from waitlist → buy. */
export const PREMIUM_CHECKOUT_URL: string | null = null;

export interface PricingRow {
  label: string;
  /** Free-tier value. Use "check" / "dash" for the icons. */
  free: string;
  /** Premium-tier value. */
  premium: string;
  /** Marks the Premium value as a not-yet-shipped, planned feature. */
  soon?: boolean;
}

/**
 * Comparison rows. Note the Free column is fully truthful; Premium's extras are
 * planned features (soon) — no free capability is ever taken away or metered.
 */
export const PRICING_ROWS: PricingRow[] = [
  { label: "Tools included", free: "All 60", premium: "All 60" },
  { label: "Runs on your device (nothing uploaded)", free: "check", premium: "check" },
  { label: "Files per day", free: "Unlimited", premium: "Unlimited" },
  { label: "Maximum file size", free: "Your device's memory", premium: "Your device's memory" },
  { label: "Ads", free: "None", premium: "None" },
  { label: "Batch & queue processing", free: "dash", premium: "Many files at once", soon: true },
  { label: "Processing speed", free: "Fast", premium: "Faster (multi-threaded)", soon: true },
  { label: "Encrypted cloud sync", free: "dash", premium: "Across your devices", soon: true },
  { label: "Team workspaces", free: "dash", premium: "Shared presets & tools", soon: true },
  { label: "Support", free: "Community", premium: "Priority", soon: true },
];

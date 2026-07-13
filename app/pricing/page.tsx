import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "OmniTools is free and unlimited — every tool runs in your browser with no uploads, no ads, and no account. Premium power features are on the way.",
};

export default function Page() {
  return <PricingClient />;
}

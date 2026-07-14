import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "FreeTools is completely free — every tool runs in your browser with unlimited use, no ads, no account, and no uploads.",
};

export default function Page() {
  return <PricingClient />;
}

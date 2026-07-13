import Link from "next/link";
import { Check } from "lucide-react";
import { LIVE_TOOL_COUNT } from "@/lib/tools-registry";

const INCLUDED = [
  `All ${LIVE_TOOL_COUNT} tools — every one, no locked features`,
  "Unlimited use — no daily limits, no operation caps",
  "No file-size limit from us — only your device's memory",
  "No ads, ever",
  "No account, no sign-up",
  "100% private — files are processed on your device and never uploaded",
];

export function PricingClient() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing</h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          OmniTools is free. All of it. Forever.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-md rounded-xl border border-border bg-card p-6 text-center shadow-sm">
        <p className="text-sm font-semibold text-accent">Free</p>
        <p className="mt-1 text-4xl font-bold tracking-tight">
          <span className="align-top text-lg font-medium text-muted-foreground">$</span>0
        </p>
        <p className="text-xs text-muted-foreground">forever · no catch</p>

        <ul className="mt-6 space-y-2.5 text-left">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          Browse all tools
        </Link>
      </div>

      <p className="mx-auto mt-8 max-w-md text-center text-xs leading-relaxed text-muted-foreground">
        Because every tool runs on your own device, there&rsquo;s no server to pay
        for — so there&rsquo;s nothing to charge you for. That&rsquo;s the whole idea.
      </p>
    </div>
  );
}

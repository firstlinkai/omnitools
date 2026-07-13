"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Loader2, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  PREMIUM_CHECKOUT_URL,
  PREMIUM_PRICE_MONTHLY,
  PREMIUM_PRICE_YEARLY_PER_MONTH,
  PREMIUM_PRICE_YEARLY_TOTAL,
  PRICING_ROWS,
  YEARLY_DISCOUNT,
} from "@/lib/pricing";

function Value({ v }: { v: string }) {
  if (v === "check")
    return <Check className="mx-auto h-4 w-4 text-accent" aria-label="Included" />;
  if (v === "dash")
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" aria-label="Not included" />;
  return <span>{v}</span>;
}

export function PricingClient() {
  const [yearly, setYearly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<"success" | "cancelled" | null>(null);

  // Surface the Stripe redirect result.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("checkout");
    if (p === "success" || p === "cancelled") setNotice(p);
  }, []);

  const startCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ billing: yearly ? "yearly" : "monthly" }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      throw new Error(data.error ?? "Could not start checkout.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing</h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every OmniTools tool is free, unlimited, and private — forever. Premium
          is an optional tier that adds power features. No free tool is ever
          limited.
        </p>
      </div>

      {/* Redirect notice */}
      {notice && (
        <div
          className={cn(
            "mx-auto mt-6 max-w-md rounded-md border px-4 py-3 text-center text-sm",
            notice === "success"
              ? "border-accent/40 bg-accent-muted/30 text-foreground"
              : "border-border bg-muted text-muted-foreground",
          )}
        >
          {notice === "success"
            ? "Test checkout completed. Once accounts + the webhook are wired, this will unlock Premium on your account."
            : "Checkout cancelled — no charge was made."}
        </div>
      )}

      {/* Monthly / Yearly toggle */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center rounded-full border border-border bg-card p-1 text-sm">
          <button
            type="button"
            onClick={() => setYearly(false)}
            className={cn(
              "rounded-full px-4 py-1.5 font-medium transition-colors",
              !yearly ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setYearly(true)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-1.5 font-medium transition-colors",
              yearly ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Yearly
            <span className={cn("text-[11px]", yearly ? "text-accent-foreground/80" : "text-accent")}>
              −{Math.round(YEARLY_DISCOUNT * 100)}%
            </span>
          </button>
        </div>
      </div>

      {/* Comparison card */}
      <div className="mt-8 overflow-x-auto">
        <div className="min-w-[520px] rounded-xl border border-border bg-card">
          {/* Plan header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] items-end gap-2 border-b border-border p-5">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-sm font-medium">Compare plans</span>
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-foreground">Free</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">
                <span className="align-top text-sm font-medium text-muted-foreground">$</span>0
              </p>
              <p className="text-[11px] text-muted-foreground">forever</p>
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-accent">Premium</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">
                <span className="align-top text-sm font-medium text-muted-foreground">$</span>
                {yearly ? PREMIUM_PRICE_YEARLY_PER_MONTH : PREMIUM_PRICE_MONTHLY}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {yearly ? `per month · $${PREMIUM_PRICE_YEARLY_TOTAL}/yr` : "per month"}
              </p>
            </div>
          </div>

          {/* Rows */}
          <ul>
            {PRICING_ROWS.map((row, i) => (
              <li
                key={row.label}
                className={cn(
                  "grid grid-cols-[1.5fr_1fr_1fr] items-center gap-2 px-5 py-3.5 text-sm",
                  i !== PRICING_ROWS.length - 1 && "border-b border-border",
                )}
              >
                <span className="text-muted-foreground">{row.label}</span>
                <span className="text-center text-foreground">
                  <Value v={row.free} />
                </span>
                <span className="text-center text-foreground">
                  <span className={cn(row.soon && "italic text-muted-foreground")}>
                    <Value v={row.premium} />
                  </span>
                  {row.soon && (
                    <span className="ml-1 rounded-full border border-border bg-muted px-1.5 py-px text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Soon
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] items-center gap-2 border-t border-border p-5">
            <span />
            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-transparent px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Browse tools
              </Link>
            </div>
            <div className="flex justify-center">
              {PREMIUM_CHECKOUT_URL ? (
                <a
                  href={PREMIUM_CHECKOUT_URL}
                  className="inline-flex h-8 items-center justify-center rounded-md bg-accent px-3 text-xs font-medium text-accent-foreground shadow-sm transition-opacity hover:opacity-90"
                >
                  Get Premium
                </a>
              ) : (
                <Button size="sm" onClick={startCheckout} disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                      Redirecting
                    </>
                  ) : (
                    "Get Premium"
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && (
        <p className="mx-auto mt-5 max-w-md rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-center text-sm text-danger">
          {error}
        </p>
      )}

      <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
        The free tier is genuinely unlimited: because every tool runs on your own
        device, there&rsquo;s no server to meter files or cap sizes, and there are
        no ads. Premium simply adds optional cloud-powered extras for people who
        want them.
      </p>
    </div>
  );
}

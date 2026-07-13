"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Bell, Check, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  PREMIUM_CHECKOUT_URL,
  PREMIUM_PRICE_MONTHLY,
  PREMIUM_PRICE_YEARLY_PER_MONTH,
  PREMIUM_PRICE_YEARLY_TOTAL,
  PRICING_ROWS,
  YEARLY_DISCOUNT,
} from "@/lib/pricing";

const WAITLIST_KEY = "omnitools:waitlist";

function joinedAlready(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return Boolean(JSON.parse(localStorage.getItem(WAITLIST_KEY) ?? "{}").premium);
  } catch {
    return false;
  }
}

function Value({ v }: { v: string }) {
  if (v === "check")
    return <Check className="mx-auto h-4 w-4 text-accent" aria-label="Included" />;
  if (v === "dash")
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" aria-label="Not included" />;
  return <span>{v}</span>;
}

export function PricingClient() {
  const [yearly, setYearly] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setJoined(joinedAlready()), []);

  const join = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem(WAITLIST_KEY) ?? "{}");
      list.premium = value;
      localStorage.setItem(WAITLIST_KEY, JSON.stringify(list));
    } catch {
      /* storage blocked — still confirm locally */
    }
    setError(null);
    setJoined(true);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing</h1>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every OmniTools tool is free, unlimited, and private — forever. Premium
          is an optional tier in development that adds power features. No free
          tool is ever limited.
        </p>
      </div>

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
            <span
              className={cn(
                "text-[11px]",
                yearly ? "text-accent-foreground/80" : "text-accent",
              )}
            >
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
              ) : joined ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                  On the list
                </span>
              ) : (
                <Button size="sm" onClick={() => setShowForm((v) => !v)}>
                  <Bell className="h-3.5 w-3.5" aria-hidden />
                  Notify me
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist form / honest note */}
      {!PREMIUM_CHECKOUT_URL && !joined && showForm && (
        <form onSubmit={join} className="mx-auto mt-5 flex max-w-sm flex-col gap-2">
          <div className="flex gap-2">
            <Input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
            />
            <Button type="submit">
              Join
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          {error && <p className="text-xs text-danger">{error}</p>}
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Premium isn&rsquo;t for sale yet — this just saves your interest in
            this browser (no account, no charge, nothing uploaded) so we can tell
            you when it launches.
          </p>
        </form>
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

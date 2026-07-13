"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Cpu, Hammer, Sparkles } from "lucide-react";
import { getTool } from "@/lib/tools-registry";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const WAITLIST_KEY = "omnitools:waitlist";

type Waitlist = Record<string, string>;

function readWaitlist(): Waitlist {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(WAITLIST_KEY) ?? "{}") as Waitlist;
  } catch {
    return {};
  }
}

/**
 * Shared placeholder view for every unbuilt tool. It reads the active tool's
 * metadata straight from the registry — name, engine, and the wireframe schema —
 * renders a blueprint of what the tool will do, and collects priority-waitlist
 * interest. True to the privacy value prop, the "signup" is stored only in this
 * browser's localStorage; nothing is transmitted anywhere.
 */
export function ComingSoonTool({ slug }: { slug: string }) {
  const tool = getTool(slug);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setJoined(Boolean(readWaitlist()[slug]));
  }, [slug]);

  if (!tool) throw new Error(`Tool not in registry: ${slug}`);

  const steps = tool.wireframe ?? [
    "Drop or paste your input",
    "Configure the transformation with inline controls",
    "Everything runs client-side in this tab",
    "Download the result — no upload, ever",
  ];

  const join = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    const list = readWaitlist();
    list[slug] = value;
    try {
      localStorage.setItem(WAITLIST_KEY, JSON.stringify(list));
    } catch {
      /* storage may be full or blocked — the UI still confirms locally */
    }
    setError(null);
    setJoined(true);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
      {/* Wireframe schema visualization */}
      <Panel
        title="Wireframe preview"
        actions={
          <Badge>
            <Hammer className="h-3 w-3" aria-hidden />
            In development
          </Badge>
        }
        bodyClassName="p-4"
      >
        <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Cpu className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          <span>
            Planned engine:{" "}
            <span className="font-medium text-foreground">
              {tool.engine ?? "Client-side, in-browser"}
            </span>
          </span>
        </div>

        <ol className="relative flex flex-col gap-3 border-l border-dashed border-border pl-6">
          {steps.map((step, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-[11px] font-semibold text-muted-foreground"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-foreground">
                {step}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          Like every OmniTool, this will run 100% in your browser with zero
          uploads.
        </p>
      </Panel>

      {/* Priority waitlist */}
      <Panel title="Priority waitlist" bodyClassName="p-4">
        {joined ? (
          <div className="flex flex-col items-start gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-muted/60">
              <Check className="h-5 w-5 text-accent" aria-hidden />
            </span>
            <p className="text-sm font-medium text-foreground">
              You&rsquo;re on the list.
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We saved your interest in <span className="font-medium">{tool.name}</span>{" "}
              locally on this device. Nothing was sent to a server — that&rsquo;s
              the whole point.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-1"
              onClick={() => {
                setJoined(false);
                setEmail("");
              }}
            >
              Use a different email
            </Button>
          </div>
        ) : (
          <form onSubmit={join} className="flex flex-col gap-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Want <span className="font-medium text-foreground">{tool.name}</span>{" "}
              first? Join the priority waitlist and jump the queue when it ships.
            </p>
            <div className="flex flex-col gap-1.5">
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
              {error && <p className="text-xs text-danger">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              Join the Priority Waitlist
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Stored only in this browser. No account, no tracking, no upload.
            </p>
          </form>
        )}
      </Panel>
    </div>
  );
}

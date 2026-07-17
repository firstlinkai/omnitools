"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyButton } from "@/components/tool/copy-button";

/** Parse the timestamp field: auto-detect milliseconds (13+ digits) vs seconds. */
function parseTimestamp(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed || !/^-?\d+$/.test(trimmed)) return null;
  const n = Number(trimmed);
  if (!Number.isFinite(n)) return null;
  // 13-digit (or larger) positive values are milliseconds; otherwise seconds.
  const digits = trimmed.replace("-", "").length;
  const ms = digits >= 13 ? n : n * 1000;
  const date = new Date(ms);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** Format a Date as a local `datetime-local` input value (to the second). */
function toDateTimeLocal(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}

function relativeTime(date: Date, now: number): string {
  const diffSec = Math.round((date.getTime() - now) / 1000);
  const abs = Math.abs(diffSec);
  const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];
  for (const [unit, secs] of units) {
    if (abs >= secs || unit === "second") {
      return rtf.format(Math.round(diffSec / secs), unit);
    }
  }
  return "now";
}

function OutputRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-2 last:border-0">
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate font-mono text-sm text-foreground">{value}</div>
      </div>
      <CopyButton text={value} label="" />
    </div>
  );
}

export function UnixTimestampClient() {
  const [ts, setTs] = useState("");
  const [dt, setDt] = useState("");
  // `now` is only set on the client after mount, keeping the first render deterministic.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const current = Date.now();
    setNow(current);
    setTs(String(Math.floor(current / 1000)));
    setDt(toDateTimeLocal(new Date(current)));
  }, []);

  const setToNow = () => {
    const current = Date.now();
    setNow(current);
    setTs(String(Math.floor(current / 1000)));
    setDt(toDateTimeLocal(new Date(current)));
  };

  const tsDate = parseTimestamp(ts);
  // datetime-local strings parse in the browser's local timezone.
  const dtDate = dt ? new Date(dt) : null;
  const dtValid = dtDate && !Number.isNaN(dtDate.getTime());

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          Convert both ways between Unix time and a calendar date.
        </p>
        <Button variant="outline" size="sm" onClick={setToNow}>
          <Clock className="h-3.5 w-3.5" />
          Now
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Unix timestamp → date">
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <Label htmlFor="ts-input">Unix timestamp (seconds, or ms if 13+ digits)</Label>
              <Input
                id="ts-input"
                value={ts}
                onChange={(e) => setTs(e.target.value)}
                inputMode="numeric"
                placeholder="e.g. 1700000000"
                className="font-mono"
              />
            </div>
            {ts.trim() === "" ? (
              <p className="text-sm text-muted-foreground">Enter a timestamp to convert.</p>
            ) : tsDate ? (
              <div className="rounded-md border border-border bg-card px-3">
                <OutputRow label="Local time" value={tsDate.toString()} />
                <OutputRow label="UTC" value={tsDate.toUTCString()} />
                <OutputRow label="ISO 8601" value={tsDate.toISOString()} />
                {now !== null && (
                  <OutputRow label="Relative" value={relativeTime(tsDate, now)} />
                )}
              </div>
            ) : (
              <div className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
                Enter a whole number of seconds or milliseconds.
              </div>
            )}
          </div>
        </Panel>

        <Panel title="Date → Unix timestamp">
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <Label htmlFor="dt-input">Date &amp; time (your local timezone)</Label>
              <Input
                id="dt-input"
                type="datetime-local"
                step={1}
                value={dt}
                onChange={(e) => setDt(e.target.value)}
              />
            </div>
            {!dt ? (
              <p className="text-sm text-muted-foreground">Pick a date and time to convert.</p>
            ) : dtValid ? (
              <div className="rounded-md border border-border bg-card px-3">
                <OutputRow
                  label="Unix seconds"
                  value={String(Math.floor(dtDate.getTime() / 1000))}
                />
                <OutputRow label="Unix milliseconds" value={String(dtDate.getTime())} />
                <OutputRow label="ISO 8601 (UTC)" value={dtDate.toISOString()} />
              </div>
            ) : (
              <div className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
                That date is not valid.
              </div>
            )}
          </div>
        </Panel>
      </div>

      <p className="text-xs text-muted-foreground">
        Unix time counts seconds since 1 January 1970 UTC (the epoch). All conversions run in your
        browser.
      </p>
    </div>
  );
}

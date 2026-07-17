"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, RefreshCw } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { downloadText } from "@/lib/download";

/** Generate one RFC-4122 version-4 UUID, with a fallback for old browsers. */
function uuidV4(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10
  const hex: string[] = [];
  for (let i = 0; i < 256; i++) hex.push((i + 0x100).toString(16).slice(1));
  const h = Array.from(bytes, (b) => hex[b]);
  return `${h[0]}${h[1]}${h[2]}${h[3]}-${h[4]}${h[5]}-${h[6]}${h[7]}-${h[8]}${h[9]}-${h[10]}${h[11]}${h[12]}${h[13]}${h[14]}${h[15]}`;
}

function formatUuid(raw: string, uppercase: boolean, hyphens: boolean): string {
  let s = raw;
  if (!hyphens) s = s.replace(/-/g, "");
  if (uppercase) s = s.toUpperCase();
  return s;
}

export function UuidGeneratorClient() {
  const [count, setCount] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [raw, setRaw] = useState<string[]>([]);

  const regenerate = useCallback((n: number) => {
    setRaw(Array.from({ length: Math.max(1, Math.min(n, 100)) }, () => uuidV4()));
  }, []);

  // Generate an initial batch on mount.
  useEffect(() => {
    regenerate(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uuids = useMemo(
    () => raw.map((u) => formatUuid(u, uppercase, hyphens)),
    [raw, uppercase, hyphens],
  );

  const text = useMemo(() => uuids.join("\n"), [uuids]);

  const toggle = (
    id: string,
    label: string,
    checked: boolean,
    onChange: (v: boolean) => void,
  ) => (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
    >
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 accent-accent"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
      <Panel
        title={`UUIDs (${uuids.length})`}
        actions={
          <>
            <CopyButton text={text} label="Copy all" disabled={uuids.length === 0} />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => downloadText(text, "uuids.txt")}
              disabled={uuids.length === 0}
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              .txt
            </Button>
            <Button size="sm" onClick={() => regenerate(count)}>
              <RefreshCw className="h-3.5 w-3.5" aria-hidden />
              Regenerate
            </Button>
          </>
        }
        bodyClassName="p-2"
      >
        <ul className="max-h-[26rem] space-y-1 overflow-auto">
          {uuids.map((u, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-1.5"
            >
              <code className="min-w-0 break-all font-mono text-sm text-foreground">{u}</code>
              <CopyButton text={u} label="" variant="ghost" className="shrink-0" />
            </li>
          ))}
        </ul>
      </Panel>

      <div className="flex flex-col gap-4">
        <Panel title="Options">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="uuid-count">How many</Label>
                <span className="text-xs tabular-nums text-muted-foreground">{count}</span>
              </div>
              <Slider
                id="uuid-count"
                min={1}
                max={100}
                step={1}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2.5 border-t border-border pt-4">
              {toggle("uuid-upper", "Uppercase", uppercase, setUppercase)}
              {toggle("uuid-hyphens", "Include hyphens", hyphens, setHyphens)}
            </div>
          </div>
        </Panel>
        <p className="px-1 text-xs text-muted-foreground">
          Version-4 UUIDs generated in your browser with a cryptographically secure
          random source. Nothing is uploaded.
        </p>
      </div>
    </div>
  );
}

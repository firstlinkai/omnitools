"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCw } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.<>/?~";
const AMBIGUOUS = new Set("0O1lI".split(""));

interface Options {
  length: number;
  upper: boolean;
  lower: boolean;
  digits: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
}

/** Build the character pool from the active options. */
function buildPool(opts: Options): string {
  let pool = "";
  if (opts.lower) pool += LOWER;
  if (opts.upper) pool += UPPER;
  if (opts.digits) pool += DIGITS;
  if (opts.symbols) pool += SYMBOLS;
  if (opts.excludeAmbiguous) {
    pool = pool
      .split("")
      .filter((c) => !AMBIGUOUS.has(c))
      .join("");
  }
  return pool;
}

/**
 * Draw `count` uniformly-random indices in [0, max) using crypto.getRandomValues
 * with rejection sampling to avoid modulo bias.
 */
function randomIndices(max: number, count: number): number[] {
  const out: number[] = [];
  if (max <= 0) return out;
  const limit = Math.floor(0xffffffff / max) * max;
  const buf = new Uint32Array(count * 2);
  while (out.length < count) {
    crypto.getRandomValues(buf);
    for (let i = 0; i < buf.length && out.length < count; i++) {
      const v = buf[i];
      if (v < limit) out.push(v % max);
    }
  }
  return out;
}

/** Generate a single password from the pool. */
function generateOne(pool: string, length: number): string {
  if (!pool) return "";
  const idx = randomIndices(pool.length, length);
  let s = "";
  for (const i of idx) s += pool[i];
  return s;
}

interface Strength {
  label: string;
  bits: number;
  ratio: number; // 0..1 for the meter fill
  color: string;
}

function assessStrength(password: string, poolSize: number): Strength {
  if (!password || poolSize <= 1) {
    return { label: "None", bits: 0, ratio: 0, color: "var(--muted-foreground)" };
  }
  const bits = password.length * Math.log2(poolSize);
  const ratio = Math.min(1, bits / 128);
  if (bits < 40) return { label: "Weak", bits, ratio, color: "#ef4444" };
  if (bits < 64) return { label: "Fair", bits, ratio, color: "#f59e0b" };
  if (bits < 100) return { label: "Strong", bits, ratio, color: "#22c55e" };
  return { label: "Very strong", bits, ratio, color: "#16a34a" };
}

export function PasswordGeneratorClient() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  const [count, setCount] = useState(1);
  const [passwords, setPasswords] = useState<string[]>([]);

  const opts: Options = useMemo(
    () => ({ length, upper, lower, digits, symbols, excludeAmbiguous }),
    [length, upper, lower, digits, symbols, excludeAmbiguous],
  );

  const pool = useMemo(() => buildPool(opts), [opts]);
  const noCharset = pool.length === 0;

  const regenerate = useCallback(() => {
    if (pool.length === 0) {
      setPasswords([]);
      return;
    }
    const n = Math.max(1, Math.min(count, 50));
    setPasswords(Array.from({ length: n }, () => generateOne(pool, length)));
  }, [pool, length, count]);

  // Regenerate whenever the options change so the output is never stale.
  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const primary = passwords[0] ?? "";
  const strength = useMemo(() => assessStrength(primary, pool.length), [primary, pool.length]);
  const allText = useMemo(() => passwords.join("\n"), [passwords]);

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
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex flex-col gap-4">
        <Panel
          title={count > 1 ? "Generated passwords" : "Generated password"}
          actions={
            <>
              <CopyButton
                text={count > 1 ? allText : primary}
                label={count > 1 ? "Copy all" : "Copy"}
                disabled={passwords.length === 0}
              />
              <Button size="sm" onClick={regenerate} disabled={noCharset}>
                <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                Regenerate
              </Button>
            </>
          }
        >
          {noCharset ? (
            <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
              Select at least one character type to generate a password.
            </p>
          ) : count > 1 ? (
            <ul className="max-h-[22rem] space-y-1 overflow-auto">
              {passwords.map((pw, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-2 rounded-md bg-muted px-3 py-2"
                >
                  <code className="min-w-0 break-all font-mono text-sm text-foreground">
                    {pw}
                  </code>
                  <CopyButton text={pw} label="" variant="ghost" className="shrink-0" />
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-4">
              <div className="flex min-h-[4rem] items-center rounded-md bg-muted px-4 py-3">
                <code className="break-all font-mono text-lg text-foreground sm:text-xl">
                  {primary}
                </code>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium" style={{ color: strength.color }}>
                    {strength.label}
                  </span>
                  <span className="tabular-nums text-muted-foreground">
                    ~{Math.round(strength.bits)} bits of entropy
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.max(4, strength.ratio * 100)}%`,
                      backgroundColor: strength.color,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </Panel>
      </div>

      <div className="flex flex-col gap-4">
        <Panel title="Options">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pw-length">Length</Label>
                <span className="text-xs tabular-nums text-muted-foreground">{length}</span>
              </div>
              <Slider
                id="pw-length"
                min={4}
                max={64}
                step={1}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {toggle("pw-upper", "Uppercase", upper, setUpper)}
              {toggle("pw-lower", "Lowercase", lower, setLower)}
              {toggle("pw-digits", "Numbers", digits, setDigits)}
              {toggle("pw-symbols", "Symbols", symbols, setSymbols)}
            </div>

            <div className="border-t border-border pt-4">
              {toggle(
                "pw-ambiguous",
                "Exclude ambiguous (0 O 1 l I)",
                excludeAmbiguous,
                setExcludeAmbiguous,
              )}
            </div>

            <div className="space-y-1.5 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="pw-count">How many</Label>
                <span className="text-xs tabular-nums text-muted-foreground">{count}</span>
              </div>
              <Slider
                id="pw-count"
                min={1}
                max={50}
                step={1}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
              />
            </div>
          </div>
        </Panel>
        <p className="px-1 text-xs text-muted-foreground">
          Passwords are drawn with your browser&apos;s cryptographic random number
          generator and never leave your device.
        </p>
      </div>
    </div>
  );
}

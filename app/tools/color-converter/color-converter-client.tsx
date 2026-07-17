"use client";

import { useMemo, useState } from "react";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Rgb {
  r: number;
  g: number;
  b: number;
}
interface Hsl {
  h: number;
  s: number;
  l: number;
}

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

/** Parse a #RGB / #RRGGBB hex string. Returns null when malformed. */
function hexToRgb(hex: string): Rgb | null {
  let h = hex.trim().replace(/^#/, "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }: Rgb): string {
  const to = (n: number) =>
    clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

function rgbToHsl({ r, g, b }: Rgb): Hsl {
  const rf = r / 255;
  const gf = g / 255;
  const bf = b / 255;
  const max = Math.max(rf, gf, bf);
  const min = Math.min(rf, gf, bf);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    switch (max) {
      case rf:
        h = ((gf - bf) / d) % 6;
        break;
      case gf:
        h = (bf - rf) / d + 2;
        break;
      default:
        h = (rf - gf) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb({ h, s, l }: Hsl): Rgb {
  const hn = ((h % 360) + 360) % 360;
  const sn = clamp(s, 0, 100) / 100;
  const ln = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((hn / 60) % 2) - 1));
  const m = ln - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (hn < 60) [r, g, b] = [c, x, 0];
  else if (hn < 120) [r, g, b] = [x, c, 0];
  else if (hn < 180) [r, g, b] = [0, c, x];
  else if (hn < 240) [r, g, b] = [0, x, c];
  else if (hn < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

const rgbString = ({ r, g, b }: Rgb) => `rgb(${r}, ${g}, ${b})`;
const hslString = ({ h, s, l }: Hsl) => `hsl(${h}, ${s}%, ${l}%)`;

export function ColorConverterClient() {
  // rgb is the single source of truth; other fields derive from it.
  const [rgb, setRgb] = useState<Rgb>({ r: 220, g: 38, b: 38 });
  // Hex is kept as its own editable string so partial typing does not fight
  // the user; it only pushes to rgb when it parses cleanly.
  const [hexDraft, setHexDraft] = useState<string>("#dc2626");

  const hsl = useMemo(() => rgbToHsl(rgb), [rgb]);
  const hex = useMemo(() => rgbToHex(rgb), [rgb]);
  const hexValid = hexToRgb(hexDraft) !== null;

  const setFromRgb = (next: Rgb) => {
    setRgb(next);
    setHexDraft(rgbToHex(next));
  };

  const onHexChange = (value: string) => {
    setHexDraft(value);
    const parsed = hexToRgb(value);
    if (parsed) setRgb(parsed);
  };

  const onRgbField = (key: keyof Rgb, value: string) => {
    const n = clamp(Math.round(Number(value) || 0), 0, 255);
    setFromRgb({ ...rgb, [key]: n });
  };

  const onHslField = (key: keyof Hsl, value: string) => {
    const max = key === "h" ? 360 : 100;
    const n = clamp(Math.round(Number(value) || 0), 0, max);
    setFromRgb(hslToRgb({ ...hsl, [key]: n }));
  };

  const onPicker = (value: string) => {
    const parsed = hexToRgb(value);
    if (parsed) setFromRgb(parsed);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
      <Panel title="Preview">
        <div className="space-y-4">
          <div
            className="h-40 w-full rounded-lg border border-border"
            style={{ backgroundColor: hex }}
            aria-label={`Color swatch ${hex}`}
          />
          <div className="space-y-1.5">
            <Label htmlFor="native-picker">Native color picker</Label>
            <input
              id="native-picker"
              type="color"
              value={hex}
              onChange={(e) => onPicker(e.target.value)}
              className="h-10 w-full cursor-pointer rounded-md border border-input bg-card"
              aria-label="Pick a color"
            />
          </div>
        </div>
      </Panel>

      <div className="flex flex-col gap-4">
        <Panel title="HEX">
          <div className="flex items-end gap-2">
            <div className="flex-1 space-y-1.5">
              <Label htmlFor="hex-input">Hex value</Label>
              <Input
                id="hex-input"
                value={hexDraft}
                onChange={(e) => onHexChange(e.target.value)}
                spellCheck={false}
                aria-invalid={!hexValid}
                className={hexValid ? undefined : "border-danger"}
                placeholder="#dc2626"
              />
            </div>
            <CopyButton text={hex} label="Copy" />
          </div>
          {!hexValid && (
            <p className="mt-1.5 text-xs text-danger">
              Enter a valid hex like #dc2626 or #f00.
            </p>
          )}
        </Panel>

        <Panel title="RGB">
          <div className="flex items-end gap-2">
            <div className="grid flex-1 grid-cols-3 gap-2">
              {(["r", "g", "b"] as const).map((k) => (
                <div key={k} className="space-y-1.5">
                  <Label htmlFor={`rgb-${k}`}>{k.toUpperCase()}</Label>
                  <Input
                    id={`rgb-${k}`}
                    type="number"
                    min={0}
                    max={255}
                    value={rgb[k]}
                    onChange={(e) => onRgbField(k, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <CopyButton text={() => rgbString(rgb)} label="Copy" />
          </div>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {rgbString(rgb)}
          </p>
        </Panel>

        <Panel title="HSL">
          <div className="flex items-end gap-2">
            <div className="grid flex-1 grid-cols-3 gap-2">
              {(
                [
                  ["h", "H", 360],
                  ["s", "S %", 100],
                  ["l", "L %", 100],
                ] as const
              ).map(([k, label, max]) => (
                <div key={k} className="space-y-1.5">
                  <Label htmlFor={`hsl-${k}`}>{label}</Label>
                  <Input
                    id={`hsl-${k}`}
                    type="number"
                    min={0}
                    max={max}
                    value={hsl[k]}
                    onChange={(e) => onHslField(k, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <CopyButton text={() => hslString(hsl)} label="Copy" />
          </div>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {hslString(hsl)}
          </p>
        </Panel>
      </div>
    </div>
  );
}

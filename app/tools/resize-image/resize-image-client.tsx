"use client";

import { useCallback, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  ImageCanvasTool,
  type ImageMeta,
} from "@/components/tool/image-canvas-tool";

type Mode = "exact" | "percentage" | "preset";
type Format = "png" | "jpeg";

const PRESETS = [
  { label: "1920 x 1080 (1080p)", w: 1920, h: 1080 },
  { label: "1280 x 720 (720p)", w: 1280, h: 720 },
  { label: "1080 x 1080 (square)", w: 1080, h: 1080 },
  { label: "800 x 600", w: 800, h: 600 },
  { label: "640 x 480", w: 640, h: 480 },
  { label: "320 x 240 (thumbnail)", w: 320, h: 240 },
];

const clampInt = (n: number, min = 1, max = 20000) =>
  Math.min(max, Math.max(min, Math.round(n) || min));

export function ResizeImageClient() {
  const [mode, setMode] = useState<Mode>("exact");
  const [exactW, setExactW] = useState(0);
  const [exactH, setExactH] = useState(0);
  const [lockAspect, setLockAspect] = useState(true);
  const [percent, setPercent] = useState(100);
  const [presetIndex, setPresetIndex] = useState(0);
  const [format, setFormat] = useState<Format>("png");
  const [quality, setQuality] = useState(0.9);

  const aspectRef = useRef(1);

  const onMeta = useCallback((m: ImageMeta) => {
    aspectRef.current = m.height > 0 ? m.width / m.height : 1;
    setExactW(m.width);
    setExactH(m.height);
    setPercent(100);
  }, []);

  const target = (m: ImageMeta) => {
    if (mode === "percentage") {
      return {
        w: clampInt((m.width * percent) / 100),
        h: clampInt((m.height * percent) / 100),
      };
    }
    if (mode === "preset") {
      const p = PRESETS[presetIndex];
      return { w: p.w, h: p.h };
    }
    return { w: clampInt(exactW), h: clampInt(exactH) };
  };

  const setWidth = (value: number) => {
    const w = clampInt(value);
    setExactW(w);
    if (lockAspect) setExactH(clampInt(w / aspectRef.current));
  };

  const setHeight = (value: number) => {
    const h = clampInt(value);
    setExactH(h);
    if (lockAspect) setExactW(clampInt(h * aspectRef.current));
  };

  const toggleLock = (checked: boolean) => {
    setLockAspect(checked);
    if (checked) setExactH(clampInt(exactW / aspectRef.current));
  };

  return (
    <ImageCanvasTool
      hint="PNG, JPEG, or WebP. Resize to exact pixels, a percentage, or a preset."
      downloadSuffix="resized"
      outputMime={format === "jpeg" ? "image/jpeg" : "image/png"}
      outputExt={format === "jpeg" ? "jpg" : "png"}
      outputQuality={format === "jpeg" ? quality : undefined}
      onMeta={onMeta}
      watch={[mode, exactW, exactH, percent, presetIndex, format, quality]}
      controls={(meta) => {
        const t = meta ? target(meta) : null;
        return (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="resize-mode">Resize by</Label>
              <Select
                id="resize-mode"
                value={mode}
                onChange={(e) => setMode(e.target.value as Mode)}
              >
                <option value="exact">Exact pixels</option>
                <option value="percentage">Percentage</option>
                <option value="preset">Preset size</option>
              </Select>
            </div>

            {mode === "exact" && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="resize-w">Width (px)</Label>
                    <Input
                      id="resize-w"
                      type="number"
                      min={1}
                      value={exactW}
                      onChange={(e) => setWidth(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="resize-h">Height (px)</Label>
                    <Input
                      id="resize-h"
                      type="number"
                      min={1}
                      value={exactH}
                      onChange={(e) => setHeight(Number(e.target.value))}
                    />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[var(--accent)]"
                    checked={lockAspect}
                    onChange={(e) => toggleLock(e.target.checked)}
                  />
                  Lock aspect ratio
                </label>
              </div>
            )}

            {mode === "percentage" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="resize-percent">Scale</Label>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {percent}%
                  </span>
                </div>
                <Slider
                  id="resize-percent"
                  min={1}
                  max={200}
                  step={1}
                  value={percent}
                  onChange={(e) => setPercent(Number(e.target.value))}
                />
              </div>
            )}

            {mode === "preset" && (
              <div className="space-y-1.5">
                <Label htmlFor="resize-preset">Preset</Label>
                <Select
                  id="resize-preset"
                  value={presetIndex}
                  onChange={(e) => setPresetIndex(Number(e.target.value))}
                >
                  {PRESETS.map((p, i) => (
                    <option key={p.label} value={i}>
                      {p.label}
                    </option>
                  ))}
                </Select>
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="resize-format">Output format</Label>
              <Select
                id="resize-format"
                value={format}
                onChange={(e) => setFormat(e.target.value as Format)}
              >
                <option value="png">PNG (lossless)</option>
                <option value="jpeg">JPEG (smaller)</option>
              </Select>
            </div>

            {format === "jpeg" && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="resize-quality">JPEG quality</Label>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {Math.round(quality * 100)}%
                  </span>
                </div>
                <Slider
                  id="resize-quality"
                  min={0.1}
                  max={1}
                  step={0.05}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                />
              </div>
            )}

            {t && (
              <p className="text-xs text-muted-foreground">
                Target size:{" "}
                <span className="font-medium text-foreground tabular-nums">
                  {t.w} x {t.h}px
                </span>
                {meta ? ` (from ${meta.width} x ${meta.height}px)` : ""}
              </p>
            )}
          </div>
        );
      }}
      process={(source, canvas) => {
        const dims = target({
          width: source.naturalWidth,
          height: source.naturalHeight,
        });
        canvas.width = Math.max(1, dims.w);
        canvas.height = Math.max(1, dims.h);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas is not supported in this browser.");
        if (format === "jpeg") {
          // JPEG has no alpha; flatten transparency onto white.
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
      }}
    />
  );
}

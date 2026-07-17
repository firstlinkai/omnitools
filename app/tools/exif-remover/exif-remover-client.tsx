"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ImageCanvasTool } from "@/components/tool/image-canvas-tool";

type Format = "png" | "jpeg";

export function ExifRemoverClient() {
  const [format, setFormat] = useState<Format>("png");
  const [quality, setQuality] = useState(0.92);

  return (
    <ImageCanvasTool
      hint="JPEG, PNG, or WebP. Re-encoding the pixels drops all embedded metadata."
      downloadSuffix="clean"
      outputMime={format === "jpeg" ? "image/jpeg" : "image/png"}
      outputExt={format === "jpeg" ? "jpg" : "png"}
      outputQuality={format === "jpeg" ? quality : undefined}
      watch={[format, quality]}
      controls={() => (
        <div className="space-y-4">
          <p className="flex items-start gap-2 rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
            <span>
              Only the visible pixels are kept and re-encoded. EXIF data — GPS
              location, camera model, serial number, and the date and time the
              photo was taken — is left behind and never written to the new file.
            </span>
          </p>
          <div className="space-y-1.5">
            <Label htmlFor="exif-format">Output format</Label>
            <Select
              id="exif-format"
              value={format}
              onChange={(e) => setFormat(e.target.value as Format)}
            >
              <option value="png">PNG (lossless, no metadata)</option>
              <option value="jpeg">JPEG (smaller, keep as photo)</option>
            </Select>
          </div>
          {format === "jpeg" && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="exif-quality">JPEG quality</Label>
                <span className="text-xs tabular-nums text-muted-foreground">
                  {Math.round(quality * 100)}%
                </span>
              </div>
              <Slider
                id="exif-quality"
                min={0.5}
                max={1}
                step={0.02}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
              />
            </div>
          )}
        </div>
      )}
      process={(source, canvas) => {
        canvas.width = source.naturalWidth;
        canvas.height = source.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas is not supported in this browser.");
        if (format === "jpeg") {
          // JPEG has no alpha; flatten transparency onto white.
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(source, 0, 0);
      }}
    />
  );
}

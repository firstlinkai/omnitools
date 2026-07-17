"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ImageCanvasTool } from "@/components/tool/image-canvas-tool";

// 3x3 sharpen (Laplacian) kernel. Full strength = pure kernel output;
// lower amounts blend back toward the original pixel.
const KERNEL = [0, -1, 0, -1, 5, -1, 0, -1, 0];

function sharpen(src: ImageData, amount: number): ImageData {
  const { width: w, height: h, data } = src;
  const out = new Uint8ClampedArray(data); // copy keeps alpha + edges intact
  const t = amount / 100;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      for (let c = 0; c < 3; c++) {
        let sum = 0;
        let ki = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const px = Math.min(w - 1, Math.max(0, x + dx));
            const py = Math.min(h - 1, Math.max(0, y + dy));
            sum += data[(py * w + px) * 4 + c] * KERNEL[ki++];
          }
        }
        const orig = data[idx + c];
        out[idx + c] = orig + (sum - orig) * t;
      }
      out[idx + 3] = data[idx + 3];
    }
  }
  return new ImageData(out, w, h);
}

export function ImageSharpenClient() {
  const [amount, setAmount] = useState(50);

  return (
    <ImageCanvasTool
      hint="PNG, JPEG, or WebP. A sharpening filter brings out edges and fine detail."
      downloadSuffix="sharpened"
      watch={[amount]}
      controls={() => (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="sharpen-amount">Amount</Label>
            <span className="text-xs tabular-nums text-muted-foreground">
              {amount}%
            </span>
          </div>
          <Slider
            id="sharpen-amount"
            min={0}
            max={100}
            step={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <p className="text-xs text-muted-foreground">
            0% leaves the image untouched; higher values push more contrast into
            the edges. Very high amounts can look harsh or noisy.
          </p>
        </div>
      )}
      process={(source, canvas) => {
        canvas.width = source.naturalWidth;
        canvas.height = source.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas is not supported in this browser.");
        ctx.drawImage(source, 0, 0);
        if (amount <= 0) return; // no-op keeps the original crisp
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.putImageData(sharpen(image, amount), 0, 0);
      }}
    />
  );
}

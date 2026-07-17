"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { ImageCanvasTool } from "@/components/tool/image-canvas-tool";

type Method = "luminance" | "average";

export function ImageGrayscaleClient() {
  const [method, setMethod] = useState<Method>("luminance");

  return (
    <ImageCanvasTool
      hint="PNG, JPEG, or WebP. Color is removed to produce a black-and-white image."
      downloadSuffix="grayscale"
      watch={[method]}
      controls={() => (
        <div className="space-y-1.5">
          <Label htmlFor="gray-method">Conversion method</Label>
          <Select
            id="gray-method"
            value={method}
            onChange={(e) => setMethod(e.target.value as Method)}
          >
            <option value="luminance">Luminance (perceptual)</option>
            <option value="average">Average (simple)</option>
          </Select>
          <p className="text-xs text-muted-foreground">
            Luminance weights green highest to match how the eye sees brightness.
            Average treats all channels equally.
          </p>
        </div>
      )}
      process={(source, canvas) => {
        canvas.width = source.naturalWidth;
        canvas.height = source.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas is not supported in this browser.");
        ctx.drawImage(source, 0, 0);
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const p = image.data;
        for (let i = 0; i < p.length; i += 4) {
          const gray =
            method === "luminance"
              ? 0.299 * p[i] + 0.587 * p[i + 1] + 0.114 * p[i + 2]
              : (p[i] + p[i + 1] + p[i + 2]) / 3;
          p[i] = gray;
          p[i + 1] = gray;
          p[i + 2] = gray;
          // alpha (p[i + 3]) is left untouched
        }
        ctx.putImageData(image, 0, 0);
      }}
    />
  );
}

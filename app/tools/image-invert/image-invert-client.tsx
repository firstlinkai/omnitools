"use client";

import { ImageCanvasTool } from "@/components/tool/image-canvas-tool";

export function ImageInvertClient() {
  return (
    <ImageCanvasTool
      hint="PNG, JPEG, or WebP. Every color is flipped to its opposite for a photo-negative look."
      downloadSuffix="inverted"
      process={(source, canvas) => {
        canvas.width = source.naturalWidth;
        canvas.height = source.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas is not supported in this browser.");
        ctx.drawImage(source, 0, 0);
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const p = image.data;
        for (let i = 0; i < p.length; i += 4) {
          p[i] = 255 - p[i];
          p[i + 1] = 255 - p[i + 1];
          p[i + 2] = 255 - p[i + 2];
          // alpha (p[i + 3]) is left untouched
        }
        ctx.putImageData(image, 0, 0);
      }}
    />
  );
}

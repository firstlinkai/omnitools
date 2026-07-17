"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Crop, Download, Maximize, RotateCcw } from "lucide-react";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { downloadBlob } from "@/lib/download";

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

const ASPECTS: { label: string; value: string; ratio: number | null }[] = [
  { label: "Free", value: "free", ratio: null },
  { label: "1:1 (square)", value: "1:1", ratio: 1 },
  { label: "4:3", value: "4:3", ratio: 4 / 3 },
  { label: "16:9", value: "16:9", ratio: 16 / 9 },
  { label: "3:2", value: "3:2", ratio: 3 / 2 },
];

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

function accentColor() {
  if (typeof window === "undefined") return "#6366f1";
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--accent")
    .trim();
  return v || "#6366f1";
}

export function ImageCropperClient() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [fileName, setFileName] = useState("image");
  const [crop, setCrop] = useState<Rect | null>(null);
  const [aspect, setAspect] = useState<string>("free");
  const [error, setError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; active: boolean }>({
    startX: 0,
    startY: 0,
    active: false,
  });

  const ratioOf = (value: string) =>
    ASPECTS.find((a) => a.value === value)?.ratio ?? null;

  const handleFiles = useCallback((files: File[]) => {
    const file = files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("That file is not an image. Drop a PNG, JPEG, or WebP file.");
      return;
    }
    setError(null);
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      setFileName(file.name.replace(/\.[^.]+$/, "") || "image");
      setCrop(null);
      setImage(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError("Could not decode that image file.");
    };
    img.src = url;
  }, []);

  // Draw base image once loaded, size the overlay to match.
  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !image) return;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    if (overlay) {
      overlay.width = image.naturalWidth;
      overlay.height = image.naturalHeight;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
  }, [image]);

  const drawOverlay = useCallback((rect: Rect | null) => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const octx = overlay.getContext("2d");
    if (!octx) return;
    octx.clearRect(0, 0, overlay.width, overlay.height);
    if (!rect || rect.w < 1 || rect.h < 1) return;
    const scale = overlay.width / (overlay.getBoundingClientRect().width || 1);
    // Dim everything, then punch out the crop region.
    octx.fillStyle = "rgba(0,0,0,0.5)";
    octx.fillRect(0, 0, overlay.width, overlay.height);
    octx.clearRect(rect.x, rect.y, rect.w, rect.h);
    octx.strokeStyle = accentColor();
    octx.lineWidth = Math.max(1.5, 1.5 * scale);
    octx.setLineDash([6 * scale, 4 * scale]);
    octx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  }, []);

  // Repaint the committed crop box whenever it changes.
  useEffect(() => {
    drawOverlay(crop);
  }, [crop, drawOverlay]);

  const toCanvasCoords = (
    e: React.PointerEvent,
    overlay: HTMLCanvasElement,
  ) => {
    const rect = overlay.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * overlay.width;
    const y = ((e.clientY - rect.top) / rect.height) * overlay.height;
    return {
      x: clamp(x, 0, overlay.width),
      y: clamp(y, 0, overlay.height),
    };
  };

  /** Build a rect from a drag, applying the aspect constraint (width drives). */
  const rectFromDrag = (
    startX: number,
    startY: number,
    curX: number,
    curY: number,
    ratio: number | null,
    bounds: { w: number; h: number },
  ): Rect => {
    let w = Math.abs(curX - startX);
    let h = Math.abs(curY - startY);
    const dirX = curX >= startX ? 1 : -1;
    const dirY = curY >= startY ? 1 : -1;
    if (ratio) h = w / ratio;
    let x = dirX === 1 ? startX : startX - w;
    let y = dirY === 1 ? startY : startY - h;
    // Keep the box inside the image.
    x = clamp(x, 0, bounds.w);
    y = clamp(y, 0, bounds.h);
    w = clamp(w, 0, bounds.w - x);
    h = clamp(h, 0, bounds.h - y);
    if (ratio) {
      // Re-fit so aspect stays exact after clamping.
      if (w / h > ratio) w = h * ratio;
      else h = w / ratio;
    }
    return { x, y, w, h };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const overlay = overlayRef.current;
    if (!overlay || !image) return;
    e.preventDefault();
    overlay.setPointerCapture(e.pointerId);
    const p = toCanvasCoords(e, overlay);
    dragRef.current = { startX: p.x, startY: p.y, active: true };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const overlay = overlayRef.current;
    if (!overlay || !dragRef.current.active) return;
    const p = toCanvasCoords(e, overlay);
    const rect = rectFromDrag(
      dragRef.current.startX,
      dragRef.current.startY,
      p.x,
      p.y,
      ratioOf(aspect),
      { w: overlay.width, h: overlay.height },
    );
    drawOverlay(rect);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const overlay = overlayRef.current;
    if (!overlay || !dragRef.current.active) return;
    dragRef.current.active = false;
    const p = toCanvasCoords(e, overlay);
    const rect = rectFromDrag(
      dragRef.current.startX,
      dragRef.current.startY,
      p.x,
      p.y,
      ratioOf(aspect),
      { w: overlay.width, h: overlay.height },
    );
    if (rect.w < 3 || rect.h < 3) {
      setCrop(null);
      drawOverlay(null);
      return;
    }
    setCrop({
      x: Math.round(rect.x),
      y: Math.round(rect.y),
      w: Math.round(rect.w),
      h: Math.round(rect.h),
    });
  };

  // Numeric editing of the crop box (also clamped to bounds).
  const editCrop = (key: keyof Rect, value: string) => {
    if (!image) return;
    const n = Math.round(Number(value) || 0);
    setCrop((prev) => {
      const base: Rect =
        prev ?? { x: 0, y: 0, w: image.naturalWidth, h: image.naturalHeight };
      const next = { ...base, [key]: n };
      next.x = clamp(next.x, 0, image.naturalWidth - 1);
      next.y = clamp(next.y, 0, image.naturalHeight - 1);
      next.w = clamp(next.w, 1, image.naturalWidth - next.x);
      next.h = clamp(next.h, 1, image.naturalHeight - next.y);
      return next;
    });
  };

  const selectAll = () => {
    if (!image) return;
    setCrop({ x: 0, y: 0, w: image.naturalWidth, h: image.naturalHeight });
  };

  const cropAndDownload = (mime: "image/png" | "image/jpeg") => {
    const src = canvasRef.current;
    if (!src || !crop || crop.w < 1 || crop.h < 1) return;
    const out = document.createElement("canvas");
    out.width = crop.w;
    out.height = crop.h;
    const ctx = out.getContext("2d");
    if (!ctx) return;
    if (mime === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, out.width, out.height);
    }
    ctx.drawImage(src, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);
    const ext = mime === "image/png" ? "png" : "jpg";
    out.toBlob(
      (blob) => {
        if (blob) downloadBlob(blob, `${fileName}-cropped.${ext}`);
      },
      mime,
      mime === "image/jpeg" ? 0.92 : undefined,
    );
  };

  const reset = () => {
    setImage(null);
    setCrop(null);
    setError(null);
  };

  if (!image) {
    return (
      <div className="space-y-3">
        <FileDropzone
          accept="image/*"
          onFiles={handleFiles}
          hint="PNG, JPEG, or WebP. Then drag on the image to select the crop area."
        />
        {error && (
          <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
      <Panel
        title="Canvas"
        actions={
          <Button variant="ghost" size="sm" onClick={reset}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            New image
          </Button>
        }
        bodyClassName="flex items-center justify-center overflow-auto"
      >
        <div className="relative inline-block max-w-full rounded border border-border">
          <canvas ref={canvasRef} className="block h-auto max-w-full" />
          <canvas
            ref={overlayRef}
            className="absolute inset-0 h-full w-full cursor-crosshair"
            style={{ touchAction: "none" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            aria-label="Drag to select the crop area"
          />
        </div>
      </Panel>

      <div className="flex flex-col gap-4">
        <Panel title="Crop area">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="aspect">Aspect ratio</Label>
              <Select
                id="aspect"
                value={aspect}
                onChange={(e) => setAspect(e.target.value)}
              >
                {ASPECTS.map((a) => (
                  <option key={a.value} value={a.value}>
                    {a.label}
                  </option>
                ))}
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  ["x", "X"],
                  ["y", "Y"],
                  ["w", "Width"],
                  ["h", "Height"],
                ] as const
              ).map(([k, label]) => (
                <div key={k} className="space-y-1.5">
                  <Label htmlFor={`crop-${k}`}>{label}</Label>
                  <Input
                    id={`crop-${k}`}
                    type="number"
                    min={k === "w" || k === "h" ? 1 : 0}
                    value={crop ? crop[k] : ""}
                    placeholder="—"
                    onChange={(e) => editCrop(k, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={selectAll}
            >
              <Maximize className="h-3.5 w-3.5" aria-hidden />
              Select whole image
            </Button>

            <p className="rounded-md bg-muted px-2.5 py-2 text-xs text-muted-foreground">
              {crop ? (
                <>
                  Cropping to{" "}
                  <span className="font-medium text-foreground">
                    {crop.w} x {crop.h}px
                  </span>{" "}
                  from ({crop.x}, {crop.y}).
                </>
              ) : (
                "Drag a box on the image, or type exact values above."
              )}
            </p>
          </div>
        </Panel>

        <Panel title="Export">
          <div className="space-y-2">
            <Button
              className="w-full"
              disabled={!crop}
              onClick={() => cropAndDownload("image/png")}
            >
              <Crop className="h-4 w-4" aria-hidden />
              Crop &amp; download PNG
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={!crop}
              onClick={() => cropAndDownload("image/jpeg")}
            >
              <Download className="h-4 w-4" aria-hidden />
              Download as JPEG
            </Button>
          </div>
        </Panel>
      </div>
    </div>
  );
}

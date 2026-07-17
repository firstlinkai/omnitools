"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pipette, RotateCcw } from "lucide-react";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Button } from "@/components/ui/button";

interface Rgb {
  r: number;
  g: number;
  b: number;
}

// Minimal typing for the experimental EyeDropper API.
interface EyeDropperResult {
  sRGBHex: string;
}
interface EyeDropperInstance {
  open: () => Promise<EyeDropperResult>;
}
type EyeDropperCtor = new () => EyeDropperInstance;

const toHex = ({ r, g, b }: Rgb): string =>
  `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;

const rgbString = ({ r, g, b }: Rgb) => `rgb(${r}, ${g}, ${b})`;

function rgbToHsl({ r, g, b }: Rgb): string {
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
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return `hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function hexToRgb(hex: string): Rgb {
  const h = hex.replace(/^#/, "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

export function ColorPickerClient() {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [hover, setHover] = useState<Rgb | null>(null);
  const [picked, setPicked] = useState<Rgb | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasEyeDropper, setHasEyeDropper] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setHasEyeDropper(
      typeof window !== "undefined" && "EyeDropper" in window,
    );
  }, []);

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
      setPicked(null);
      setHover(null);
      setImage(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError("Could not decode that image file.");
    };
    img.src = url;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.drawImage(image, 0, 0);
  }, [image]);

  const readPixel = (e: React.MouseEvent<HTMLCanvasElement>): Rgb | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return null;
    const d = ctx.getImageData(x, y, 1, 1).data;
    return { r: d[0], g: d[1], b: d[2] };
  };

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rgb = readPixel(e);
    if (rgb) setHover(rgb);
  };

  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rgb = readPixel(e);
    if (rgb) setPicked(rgb);
  };

  const pickFromScreen = async () => {
    const Ctor = (window as unknown as { EyeDropper?: EyeDropperCtor })
      .EyeDropper;
    if (!Ctor) return;
    try {
      const result = await new Ctor().open();
      setPicked(hexToRgb(result.sRGBHex));
    } catch {
      // user cancelled — ignore
    }
  };

  const reset = () => {
    setImage(null);
    setPicked(null);
    setHover(null);
    setError(null);
  };

  const active = picked ?? hover;

  const swatchRows = (rgb: Rgb) =>
    [
      { label: "HEX", value: toHex(rgb) },
      { label: "RGB", value: rgbString(rgb) },
      { label: "HSL", value: rgbToHsl(rgb) },
    ] as const;

  if (!image) {
    return (
      <div className="space-y-3">
        <FileDropzone
          accept="image/*"
          onFiles={handleFiles}
          hint="PNG, JPEG, or WebP. Hover to preview a color, click to lock it in."
        />
        {hasEyeDropper && (
          <div className="flex justify-center">
            <Button variant="outline" size="sm" onClick={pickFromScreen}>
              <Pipette className="h-3.5 w-3.5" aria-hidden />
              Pick from screen
            </Button>
          </div>
        )}
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
        title="Image"
        actions={
          <Button variant="ghost" size="sm" onClick={reset}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            New image
          </Button>
        }
        bodyClassName="flex items-center justify-center overflow-auto"
      >
        <canvas
          ref={canvasRef}
          className="block h-auto max-w-full cursor-crosshair rounded border border-border"
          onMouseMove={onMove}
          onClick={onClick}
          aria-label="Move the pointer over the image to sample a color, click to lock it"
        />
      </Panel>

      <div className="flex flex-col gap-4">
        {hasEyeDropper && (
          <Button variant="outline" onClick={pickFromScreen}>
            <Pipette className="h-4 w-4" aria-hidden />
            Pick from screen
          </Button>
        )}

        <Panel title={picked ? "Picked color" : "Hovered color"}>
          {active ? (
            <div className="space-y-3">
              <div
                className="h-24 w-full rounded-lg border border-border"
                style={{ backgroundColor: toHex(active) }}
                aria-label={`Swatch ${toHex(active)}`}
              />
              <div className="space-y-2">
                {swatchRows(active).map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 rounded-md bg-muted px-2.5 py-1.5"
                  >
                    <div className="min-w-0">
                      <span className="mr-2 text-[11px] font-semibold uppercase text-muted-foreground">
                        {row.label}
                      </span>
                      <span className="font-mono text-xs text-foreground">
                        {row.value}
                      </span>
                    </div>
                    <CopyButton text={row.value} label="" size="sm" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                {picked
                  ? "Locked. Click the image again to pick a different pixel."
                  : "Click the image to lock this color and enable copying a stable value."}
              </p>
            </div>
          ) : (
            <p className="text-xs text-muted-foreground">
              Move your pointer over the image to sample a color.
            </p>
          )}
        </Panel>
      </div>
    </div>
  );
}

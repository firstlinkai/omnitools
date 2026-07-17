"use client";

import { useCallback, useMemo, useState } from "react";
import { Download, RotateCcw } from "lucide-react";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { downloadBlob } from "@/lib/download";

type SizeMode = "width" | "scale";
type Background = "transparent" | "white";

const CHECKERBOARD: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(45deg, #80808033 25%, transparent 25%), linear-gradient(-45deg, #80808033 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #80808033 75%), linear-gradient(-45deg, transparent 75%, #80808033 75%)",
  backgroundSize: "16px 16px",
  backgroundPosition: "0 0, 0 8px, 8px -8px, -8px 0",
};

/** Best-effort intrinsic size of an SVG: width/height attrs, then viewBox, then 512. */
function intrinsicSize(svg: string): { width: number; height: number } {
  const fallback = { width: 512, height: 512 };
  if (typeof window === "undefined") return fallback;
  try {
    const doc = new DOMParser().parseFromString(svg, "image/svg+xml");
    const el = doc.documentElement;
    if (el.nodeName === "parsererror" || el.querySelector("parsererror")) {
      return fallback;
    }
    const parseLen = (v: string | null): number | null => {
      if (!v) return null;
      const n = parseFloat(v);
      return Number.isFinite(n) && n > 0 ? n : null;
    };
    const w = parseLen(el.getAttribute("width"));
    const h = parseLen(el.getAttribute("height"));
    if (w && h) return { width: w, height: h };
    const vb = el.getAttribute("viewBox");
    if (vb) {
      const parts = vb.split(/[\s,]+/).map(Number);
      if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
        return { width: parts[2], height: parts[3] };
      }
    }
    if (w && !h) return { width: w, height: w };
    if (h && !w) return { width: h, height: h };
  } catch {
    return fallback;
  }
  return fallback;
}

function loadSvgImage(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("The SVG could not be rendered. Check that the markup is valid."));
    };
    img.src = url;
  });
}

export function SvgToPngClient() {
  const [svg, setSvg] = useState("");
  const [fileName, setFileName] = useState("image");
  const [sizeMode, setSizeMode] = useState<SizeMode>("width");
  const [widthPx, setWidthPx] = useState(1024);
  const [scale, setScale] = useState(2);
  const [background, setBackground] = useState<Background>("transparent");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const base = useMemo(() => intrinsicSize(svg), [svg]);
  const aspect = base.height / base.width;

  const outWidth =
    sizeMode === "width"
      ? Math.max(1, Math.round(widthPx))
      : Math.max(1, Math.round(base.width * scale));
  const outHeight = Math.max(1, Math.round(outWidth * aspect));

  const handleFiles = useCallback((files: File[]) => {
    const file = files[0];
    if (!file) return;
    if (!/svg/i.test(file.type) && !/\.svg$/i.test(file.name)) {
      setError("That file is not an SVG.");
      return;
    }
    file
      .text()
      .then((text) => {
        setError(null);
        setSvg(text);
        setFileName(file.name.replace(/\.[^.]+$/, "") || "image");
      })
      .catch(() => setError("Could not read that file."));
  }, []);

  const render = async (mime: "image/png" | "image/jpeg") => {
    if (!svg.trim()) {
      setError("Paste some SVG markup or drop an SVG file first.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const img = await loadSvgImage(svg);
      const canvas = document.createElement("canvas");
      canvas.width = outWidth;
      canvas.height = outHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas is not available in this browser.");
      // JPEG has no alpha; always fill it. PNG fills only when white chosen.
      if (background === "white" || mime === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      ctx.drawImage(img, 0, 0, outWidth, outHeight);
      const ext = mime === "image/png" ? "png" : "jpg";
      await new Promise<void>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) downloadBlob(blob, `${fileName}.${ext}`);
            resolve();
          },
          mime,
          mime === "image/jpeg" ? 0.92 : undefined,
        );
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to render the SVG.");
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setSvg("");
    setError(null);
    setFileName("image");
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="flex flex-col gap-4">
        <Panel
          title="SVG source"
          actions={
            svg ? (
              <Button variant="ghost" size="sm" onClick={reset}>
                <RotateCcw className="h-3.5 w-3.5" aria-hidden />
                Clear
              </Button>
            ) : undefined
          }
        >
          <div className="space-y-3">
            <FileDropzone
              accept=".svg,image/svg+xml"
              onFiles={handleFiles}
              hint="Drop an .svg file, or paste the markup below."
            />
            <div className="space-y-1.5">
              <Label htmlFor="svg-source">Paste SVG markup</Label>
              <Textarea
                id="svg-source"
                value={svg}
                onChange={(e) => setSvg(e.target.value)}
                spellCheck={false}
                rows={8}
                placeholder='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>'
                className="min-h-[140px] resize-y font-mono text-xs"
              />
            </div>
          </div>
        </Panel>

        {svg.trim() && (
          <Panel title="Preview">
            <div
              className="flex min-h-[160px] items-center justify-center overflow-auto rounded border border-border"
              style={CHECKERBOARD}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
                alt="SVG preview"
                className="max-h-64 max-w-full"
                onError={() => undefined}
              />
            </div>
          </Panel>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Panel title="Output size">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="size-mode">Size by</Label>
              <Select
                id="size-mode"
                value={sizeMode}
                onChange={(e) => setSizeMode(e.target.value as SizeMode)}
              >
                <option value="width">Exact width (px)</option>
                <option value="scale">Scale multiplier</option>
              </Select>
            </div>

            {sizeMode === "width" ? (
              <div className="space-y-1.5">
                <Label htmlFor="width-px">Width in pixels</Label>
                <Input
                  id="width-px"
                  type="number"
                  min={1}
                  max={8192}
                  value={widthPx}
                  onChange={(e) => setWidthPx(Number(e.target.value))}
                />
              </div>
            ) : (
              <div className="space-y-1.5">
                <Label htmlFor="scale-mult">Scale ({scale}x)</Label>
                <Input
                  id="scale-mult"
                  type="number"
                  min={0.1}
                  max={20}
                  step={0.1}
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="bg">Background</Label>
              <Select
                id="bg"
                value={background}
                onChange={(e) => setBackground(e.target.value as Background)}
              >
                <option value="transparent">Transparent (PNG)</option>
                <option value="white">White</option>
              </Select>
            </div>

            <p className="rounded-md bg-muted px-2.5 py-2 text-xs text-muted-foreground">
              Output:{" "}
              <span className="font-medium text-foreground">
                {outWidth} x {outHeight}px
              </span>
              <br />
              Source is {base.width} x {base.height}px.
            </p>
          </div>
        </Panel>

        <Panel title="Download">
          <div className="space-y-2">
            <Button
              className="w-full"
              disabled={busy || !svg.trim()}
              onClick={() => render("image/png")}
            >
              <Download className="h-4 w-4" aria-hidden />
              Download PNG
            </Button>
            <Button
              variant="outline"
              className="w-full"
              disabled={busy || !svg.trim()}
              onClick={() => render("image/jpeg")}
            >
              <Download className="h-4 w-4" aria-hidden />
              Download JPEG
            </Button>
          </div>
        </Panel>

        {error && (
          <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

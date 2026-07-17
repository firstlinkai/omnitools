"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { downloadBlob, downloadText } from "@/lib/download";

type EccLevel = "L" | "M" | "Q" | "H";

const ECC_LABELS: Record<EccLevel, string> = {
  L: "Low (~7%)",
  M: "Medium (~15%)",
  Q: "Quartile (~25%)",
  H: "High (~30%)",
};

export function QrCodeClient() {
  const [text, setText] = useState("https://www.freetools.click");
  const [size, setSize] = useState(320);
  const [ecc, setEcc] = useState<EccLevel>("M");
  const [dark, setDark] = useState("#000000");
  const [light, setLight] = useState("#ffffff");
  const [error, setError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasContent = text.trim().length > 0;

  // Render the live preview whenever the input or options change.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!hasContent) {
      setError(null);
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const QRCode = await import("qrcode");
        if (cancelled) return;
        await QRCode.toCanvas(canvas, text, {
          errorCorrectionLevel: ecc,
          width: size,
          margin: 2,
          color: { dark, light },
        });
        if (!cancelled) setError(null);
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Could not generate a QR code from that input.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [text, size, ecc, dark, light, hasContent]);

  const downloadPng = async () => {
    try {
      const QRCode = await import("qrcode");
      const url = await QRCode.toDataURL(text, {
        errorCorrectionLevel: ecc,
        width: size,
        margin: 2,
        color: { dark, light },
      });
      const blob = await (await fetch(url)).blob();
      downloadBlob(blob, "qr-code.png");
    } catch {
      setError("Could not export the QR code as PNG.");
    }
  };

  const downloadSvg = async () => {
    try {
      const QRCode = await import("qrcode");
      const svg = await QRCode.toString(text, {
        type: "svg",
        errorCorrectionLevel: ecc,
        margin: 2,
        color: { dark, light },
      });
      downloadText(svg, "qr-code.svg", "image/svg+xml");
    } catch {
      setError("Could not export the QR code as SVG.");
    }
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <Panel
        title="QR code"
        actions={
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={downloadSvg}
              disabled={!hasContent || !!error}
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              SVG
            </Button>
            <Button size="sm" onClick={downloadPng} disabled={!hasContent || !!error}>
              <Download className="h-3.5 w-3.5" aria-hidden />
              PNG
            </Button>
          </>
        }
        bodyClassName="flex min-h-[20rem] items-center justify-center p-6"
      >
        {!hasContent ? (
          <p className="text-sm text-muted-foreground">
            Enter text or a URL to generate a QR code.
          </p>
        ) : error ? (
          <p className="max-w-sm text-center text-sm text-danger">{error}</p>
        ) : (
          <canvas
            ref={canvasRef}
            className="h-auto max-w-full rounded border border-border"
            aria-label="Generated QR code preview"
          />
        )}
      </Panel>

      <div className="flex flex-col gap-4">
        <Panel title="Content">
          <div className="space-y-1.5">
            <Label htmlFor="qr-text">Text or URL</Label>
            <Textarea
              id="qr-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              spellCheck={false}
              placeholder="https://example.com or any text"
              className="min-h-[6rem] resize-y text-sm"
            />
          </div>
        </Panel>

        <Panel title="Appearance">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="qr-size">Size</Label>
                <span className="text-xs tabular-nums text-muted-foreground">{size}px</span>
              </div>
              <Slider
                id="qr-size"
                min={128}
                max={1024}
                step={32}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="qr-ecc">Error correction</Label>
              <Select
                id="qr-ecc"
                value={ecc}
                onChange={(e) => setEcc(e.target.value as EccLevel)}
              >
                {(Object.keys(ECC_LABELS) as EccLevel[]).map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl} — {ECC_LABELS[lvl]}
                  </option>
                ))}
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="qr-dark">Foreground</Label>
                <input
                  id="qr-dark"
                  type="color"
                  value={dark}
                  onChange={(e) => setDark(e.target.value)}
                  className="h-9 w-full cursor-pointer rounded-md border border-input bg-card"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="qr-light">Background</Label>
                <input
                  id="qr-light"
                  type="color"
                  value={light}
                  onChange={(e) => setLight(e.target.value)}
                  className="h-9 w-full cursor-pointer rounded-md border border-input bg-card"
                />
              </div>
            </div>
          </div>
        </Panel>
        <p className="px-1 text-xs text-muted-foreground">
          Higher error correction survives scuffs and logos but packs the code more
          densely. Everything is generated in your browser.
        </p>
      </div>
    </div>
  );
}

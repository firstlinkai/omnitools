"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { downloadBlob, downloadText } from "@/lib/download";

interface Format {
  value: string;
  label: string;
  sample: string;
  hint: string;
}

const FORMATS: Format[] = [
  { value: "CODE128", label: "Code 128", sample: "FREETOOLS-123", hint: "Any text or digits" },
  { value: "CODE39", label: "Code 39", sample: "FREETOOLS 39", hint: "A-Z, 0-9 and a few symbols" },
  { value: "EAN13", label: "EAN-13", sample: "5901234123457", hint: "12 or 13 digits" },
  { value: "EAN8", label: "EAN-8", sample: "96385074", hint: "7 or 8 digits" },
  { value: "UPC", label: "UPC-A", sample: "036000291452", hint: "11 or 12 digits" },
  { value: "ITF14", label: "ITF-14", sample: "1234567890123", hint: "13 or 14 digits" },
  { value: "MSI", label: "MSI", sample: "1234567", hint: "Digits only" },
  { value: "pharmacode", label: "Pharmacode", sample: "1234", hint: "A number 3 to 131070" },
  { value: "codabar", label: "Codabar", sample: "A40156B", hint: "Digits with optional A-D start/stop" },
];

function sampleFor(format: string): string {
  return FORMATS.find((f) => f.value === format)?.sample ?? "";
}
function hintFor(format: string): string {
  return FORMATS.find((f) => f.value === format)?.hint ?? "";
}

export function BarcodeGeneratorClient() {
  const [format, setFormat] = useState("CODE128");
  const [data, setData] = useState("FREETOOLS-123");
  const [showText, setShowText] = useState(true);
  const [barWidth, setBarWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [error, setError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasData = data.trim().length > 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!hasData) {
      setError(null);
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const mod = await import("jsbarcode");
        if (cancelled) return;
        const JsBarcode = mod.default;
        let ok = true;
        JsBarcode(canvas, data, {
          format,
          displayValue: showText,
          width: barWidth,
          height,
          margin: 10,
          valid: (valid: boolean) => {
            ok = valid;
          },
        });
        if (cancelled) return;
        if (ok) {
          setError(null);
        } else {
          setError(
            `"${data}" is not valid for ${format}. Expected: ${hintFor(format)}.`,
          );
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error
              ? e.message
              : `Could not render a ${format} barcode from that input.`,
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [format, data, showText, barWidth, height, hasData]);

  const downloadPng = () => {
    const canvas = canvasRef.current;
    if (!canvas || error) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `barcode-${format.toLowerCase()}.png`);
    }, "image/png");
  };

  const downloadSvg = async () => {
    try {
      const mod = await import("jsbarcode");
      const JsBarcode = mod.default;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      let ok = true;
      JsBarcode(svg, data, {
        format,
        displayValue: showText,
        width: barWidth,
        height,
        margin: 10,
        valid: (valid: boolean) => {
          ok = valid;
        },
      });
      if (!ok) return;
      const source = new XMLSerializer().serializeToString(svg);
      downloadText(
        `<?xml version="1.0" encoding="UTF-8"?>\n${source}`,
        `barcode-${format.toLowerCase()}.svg`,
        "image/svg+xml",
      );
    } catch {
      setError("Could not export the barcode as SVG.");
    }
  };

  const onFormatChange = (next: string) => {
    setFormat(next);
    // Swap in a valid sample so the preview never sits in an error state.
    setData(sampleFor(next));
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <Panel
        title="Barcode"
        actions={
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={downloadSvg}
              disabled={!hasData || !!error}
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              SVG
            </Button>
            <Button size="sm" onClick={downloadPng} disabled={!hasData || !!error}>
              <Download className="h-3.5 w-3.5" aria-hidden />
              PNG
            </Button>
          </>
        }
        bodyClassName="flex min-h-[16rem] items-center justify-center overflow-auto p-6"
      >
        {!hasData ? (
          <p className="text-sm text-muted-foreground">
            Enter data to generate a barcode.
          </p>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="rounded bg-white p-2" style={{ display: error ? "none" : "block" }}>
              <canvas ref={canvasRef} className="block h-auto max-w-full" />
            </div>
            {error && <p className="max-w-sm text-center text-sm text-danger">{error}</p>}
          </div>
        )}
      </Panel>

      <div className="flex flex-col gap-4">
        <Panel title="Barcode data">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="bc-format">Format</Label>
              <Select
                id="bc-format"
                value={format}
                onChange={(e) => onFormatChange(e.target.value)}
              >
                {FORMATS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="bc-data">Data</Label>
              <Input
                id="bc-data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                spellCheck={false}
                placeholder="Value to encode"
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground">{hintFor(format)}.</p>
            </div>
          </div>
        </Panel>

        <Panel title="Appearance">
          <div className="space-y-5">
            <label
              htmlFor="bc-showtext"
              className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
            >
              <input
                id="bc-showtext"
                type="checkbox"
                className="h-4 w-4 accent-accent"
                checked={showText}
                onChange={(e) => setShowText(e.target.checked)}
              />
              Show text below bars
            </label>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="bc-width">Bar width</Label>
                <span className="text-xs tabular-nums text-muted-foreground">{barWidth}px</span>
              </div>
              <Slider
                id="bc-width"
                min={1}
                max={6}
                step={1}
                value={barWidth}
                onChange={(e) => setBarWidth(Number(e.target.value))}
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="bc-height">Height</Label>
                <span className="text-xs tabular-nums text-muted-foreground">{height}px</span>
              </div>
              <Slider
                id="bc-height"
                min={40}
                max={200}
                step={10}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
          </div>
        </Panel>
        <p className="px-1 text-xs text-muted-foreground">
          Barcodes are rendered in your browser and never uploaded. EAN and UPC
          require the exact digit count shown above.
        </p>
      </div>
    </div>
  );
}

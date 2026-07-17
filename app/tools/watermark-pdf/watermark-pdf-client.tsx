"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Download, FileText, Loader2, RotateCcw, X } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { downloadBlob, formatBytes } from "@/lib/download";
import { loadPdfjs } from "@/lib/pdf";

type Mode = "text" | "image";
type Layout = "center" | "tile";

/** Convert a #rrggbb hex string to pdf-lib's 0–1 rgb components. */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return { r: 0, g: 0, b: 0 };
  const n = parseInt(m[1], 16);
  return {
    r: ((n >> 16) & 255) / 255,
    g: ((n >> 8) & 255) / 255,
    b: (n & 255) / 255,
  };
}

export function WatermarkPdfClient() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [mode, setMode] = useState<Mode>("text");
  const [layout, setLayout] = useState<Layout>("tile");
  const [text, setText] = useState("CONFIDENTIAL");
  const [fontSize, setFontSize] = useState(48);
  const [color, setColor] = useState("#ff0000");
  const [opacity, setOpacity] = useState(0.3);
  const [rotation, setRotation] = useState(45);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageScale, setImageScale] = useState(0.5); // fraction of page width

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const bufferRef = useRef<ArrayBuffer | null>(null);
  const genRef = useRef(0);

  useEffect(
    () => () => {
      genRef.current++;
      bufferRef.current = null;
    },
    [],
  );

  // Manage the object URL for the uploaded watermark image.
  useEffect(() => {
    if (!imageFile) {
      setImageUrl(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const reset = useCallback(() => {
    genRef.current++;
    bufferRef.current = null;
    setFileName(null);
    setFileSize(0);
    setPageCount(0);
    setPreview(null);
    setLoading(false);
    setLoadError(null);
    setImageFile(null);
    setSaving(false);
    setSaveError(null);
  }, []);

  const loadFile = useCallback(
    async (file: File) => {
      reset();
      setLoading(true);
      setFileName(file.name);
      setFileSize(file.size);
      const gen = ++genRef.current;
      try {
        const buffer = await file.arrayBuffer();
        if (genRef.current !== gen) return;
        bufferRef.current = buffer;

        const pdfjs = await loadPdfjs();
        const doc = await pdfjs.getDocument({
          data: new Uint8Array(buffer.slice(0)),
        }).promise;
        if (genRef.current !== gen) {
          void doc.destroy();
          return;
        }
        setPageCount(doc.numPages);

        const page = await doc.getPage(1);
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: 460 / base.width });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext("2d");
        if (ctx) {
          await page.render({ canvasContext: ctx, viewport }).promise;
          if (genRef.current === gen) setPreview(canvas.toDataURL("image/jpeg", 0.82));
        }
        page.cleanup();
        void doc.destroy();
        setLoading(false);
      } catch (err) {
        if (genRef.current !== gen) return;
        const name = (err as { name?: string } | null)?.name;
        setLoading(false);
        setLoadError(
          name === "PasswordException"
            ? "This PDF is password protected. Unlock it first, then add a watermark."
            : "Could not read this file. It may be corrupted or not a valid PDF.",
        );
      }
    },
    [reset],
  );

  const save = useCallback(async () => {
    const buffer = bufferRef.current;
    if (!buffer || saving) return;
    if (mode === "text" && text.trim() === "") {
      setSaveError("Enter some watermark text first.");
      return;
    }
    if (mode === "image" && !imageFile) {
      setSaveError("Choose a PNG or JPG image to use as the watermark.");
      return;
    }

    setSaving(true);
    setSaveError(null);
    const gen = genRef.current;

    try {
      const { PDFDocument, StandardFonts, rgb, degrees } = await import("pdf-lib");
      const doc = await PDFDocument.load(buffer.slice(0), {
        ignoreEncryption: true,
      });
      const pages = doc.getPages();

      if (mode === "text") {
        const font = await doc.embedFont(StandardFonts.HelveticaBold);
        const { r, g, b } = hexToRgb(color);
        const col = rgb(r, g, b);
        const value = text.trim();
        const textWidth = font.widthOfTextAtSize(value, fontSize);
        const rad = (rotation * Math.PI) / 180;

        for (const page of pages) {
          const { width, height } = page.getSize();
          if (layout === "center") {
            // Anchor at text bottom-left; offset so the rotated text centres.
            const x =
              width / 2 -
              (textWidth / 2) * Math.cos(rad) +
              (fontSize / 2) * Math.sin(rad);
            const y =
              height / 2 -
              (textWidth / 2) * Math.sin(rad) -
              (fontSize / 2) * Math.cos(rad);
            page.drawText(value, {
              x,
              y,
              size: fontSize,
              font,
              color: col,
              opacity,
              rotate: degrees(rotation),
            });
          } else {
            const gapX = textWidth + fontSize * 2.5;
            const gapY = fontSize * 3.5;
            for (let y = -height; y < height * 2; y += gapY) {
              for (let x = -textWidth; x < width + textWidth; x += gapX) {
                page.drawText(value, {
                  x,
                  y,
                  size: fontSize,
                  font,
                  color: col,
                  opacity,
                  rotate: degrees(rotation),
                });
              }
            }
          }
        }
      } else {
        const imgBytes = await imageFile!.arrayBuffer();
        const isPng =
          imageFile!.type === "image/png" ||
          /\.png$/i.test(imageFile!.name);
        const img = isPng
          ? await doc.embedPng(imgBytes)
          : await doc.embedJpg(imgBytes);

        for (const page of pages) {
          const { width, height } = page.getSize();
          const drawWidth = width * imageScale;
          const drawHeight = (img.height / img.width) * drawWidth;
          if (layout === "center") {
            page.drawImage(img, {
              x: (width - drawWidth) / 2,
              y: (height - drawHeight) / 2,
              width: drawWidth,
              height: drawHeight,
              opacity,
              rotate: degrees(rotation),
            });
          } else {
            const gapX = drawWidth + drawWidth * 0.4;
            const gapY = drawHeight + drawHeight * 0.4;
            for (let y = 0; y < height; y += gapY) {
              for (let x = 0; x < width; x += gapX) {
                page.drawImage(img, {
                  x,
                  y,
                  width: drawWidth,
                  height: drawHeight,
                  opacity,
                  rotate: degrees(rotation),
                });
              }
            }
          }
        }
      }

      const bytes = await doc.save();
      if (genRef.current !== gen) return;
      const baseName =
        (fileName ?? "document").replace(/\.pdf$/i, "") || "document";
      downloadBlob(
        new Blob([bytes as BlobPart], { type: "application/pdf" }),
        `${baseName}-watermarked.pdf`,
      );
    } catch {
      setSaveError(
        "Could not watermark this PDF. The file may be encrypted or corrupted, or the image may be an unsupported format (use PNG or JPG).",
      );
    } finally {
      setSaving(false);
    }
  }, [
    saving,
    mode,
    text,
    color,
    fontSize,
    opacity,
    rotation,
    layout,
    imageFile,
    imageScale,
    fileName,
  ]);

  // Approximate CSS preview overlay of the watermark.
  const tileCells = useMemo(() => Array.from({ length: 24 }), []);

  // ── Empty state ──────────────────────────────────────────────────────
  if (!fileName) {
    return (
      <Panel bodyClassName="p-6">
        <FileDropzone
          accept="application/pdf,.pdf"
          onFiles={(files) => void loadFile(files[0])}
          hint="PDF only. The watermark is stamped on every page."
        />
      </Panel>
    );
  }

  const canSave =
    !loading &&
    (mode === "text" ? text.trim() !== "" : imageFile !== null);

  return (
    <div className="space-y-4">
      <Panel bodyClassName="flex flex-wrap items-center gap-3 p-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileText className="h-4 w-4 text-muted-foreground" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">{fileName}</p>
          <p className="text-xs text-muted-foreground">
            {loading ? "Reading file" : `${pageCount} page${pageCount === 1 ? "" : "s"}`}
            {" · "}
            {formatBytes(fileSize)}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          Start over
        </Button>
      </Panel>

      {loadError && (
        <div className="rounded-md border border-border bg-card px-3 py-2 text-sm text-danger">
          {loadError}
        </div>
      )}

      {!loadError && (
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Preview */}
          <Panel
            title="Preview (page 1)"
            bodyClassName="flex items-center justify-center bg-muted/30 p-4"
          >
            {preview ? (
              <div className="relative inline-block max-w-full overflow-hidden rounded border border-border shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="First page preview"
                  className="max-h-[520px] w-auto max-w-full"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  {mode === "text" && layout === "center" && (
                    <span
                      className="whitespace-nowrap font-bold"
                      style={{
                        color,
                        opacity,
                        fontSize: `${Math.max(fontSize / 2.4, 8)}px`,
                        transform: `rotate(${-rotation}deg)`,
                      }}
                    >
                      {text || " "}
                    </span>
                  )}
                  {mode === "text" && layout === "tile" && (
                    <div
                      className="absolute inset-[-40%] flex flex-wrap content-center items-center justify-center gap-x-6 gap-y-8"
                      style={{ transform: `rotate(${-rotation}deg)` }}
                    >
                      {tileCells.map((_, i) => (
                        <span
                          key={i}
                          className="whitespace-nowrap font-bold"
                          style={{
                            color,
                            opacity,
                            fontSize: `${Math.max(fontSize / 2.8, 7)}px`,
                          }}
                        >
                          {text || " "}
                        </span>
                      ))}
                    </div>
                  )}
                  {mode === "image" && imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imageUrl}
                      alt="Watermark"
                      style={{
                        width: `${imageScale * 100}%`,
                        opacity,
                        transform: `rotate(${-rotation}deg)`,
                      }}
                      className="h-auto object-contain"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 py-16 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Rendering preview…
              </div>
            )}
          </Panel>

          {/* Options */}
          <div className="flex flex-col gap-4">
            <Panel title="Watermark" bodyClassName="space-y-4 p-4">
              <div className="space-y-1.5">
                <Label htmlFor="wm-mode">Type</Label>
                <Select
                  id="wm-mode"
                  value={mode}
                  onChange={(e) => setMode(e.target.value as Mode)}
                >
                  <option value="text">Text</option>
                  <option value="image">Image (PNG / JPG)</option>
                </Select>
              </div>

              {mode === "text" ? (
                <>
                  <div className="space-y-1.5">
                    <Label htmlFor="wm-text">Watermark text</Label>
                    <Input
                      id="wm-text"
                      value={text}
                      placeholder="e.g. CONFIDENTIAL"
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="wm-size">Font size</Label>
                      <Input
                        id="wm-size"
                        type="number"
                        min={8}
                        max={200}
                        value={fontSize}
                        onChange={(e) =>
                          setFontSize(
                            Math.min(200, Math.max(8, Number(e.target.value))),
                          )
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="wm-color">Colour</Label>
                      <input
                        id="wm-color"
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="h-9 w-full cursor-pointer rounded-md border border-input bg-card px-1"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-1.5">
                  <Label>Watermark image</Label>
                  {imageFile ? (
                    <div className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
                      <span className="min-w-0 flex-1 truncate text-sm text-foreground">
                        {imageFile.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        aria-label="Remove image"
                        onClick={() => setImageFile(null)}
                      >
                        <X className="h-3.5 w-3.5" aria-hidden />
                      </Button>
                    </div>
                  ) : (
                    <FileDropzone
                      accept="image/png,image/jpeg,.png,.jpg,.jpeg"
                      onFiles={(files) => files[0] && setImageFile(files[0])}
                      hint="PNG or JPG. A transparent PNG works best."
                    />
                  )}
                  <div className="space-y-1.5 pt-1">
                    <Label htmlFor="wm-scale">
                      Size ({Math.round(imageScale * 100)}% of page width)
                    </Label>
                    <Slider
                      id="wm-scale"
                      min={5}
                      max={100}
                      value={Math.round(imageScale * 100)}
                      onChange={(e) => setImageScale(Number(e.target.value) / 100)}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="wm-layout">Placement</Label>
                <Select
                  id="wm-layout"
                  value={layout}
                  onChange={(e) => setLayout(e.target.value as Layout)}
                >
                  <option value="tile">Tiled (repeat across page)</option>
                  <option value="center">Centered (once per page)</option>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="wm-opacity">
                  Opacity ({Math.round(opacity * 100)}%)
                </Label>
                <Slider
                  id="wm-opacity"
                  min={5}
                  max={100}
                  value={Math.round(opacity * 100)}
                  onChange={(e) => setOpacity(Number(e.target.value) / 100)}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="wm-rotation">Rotation ({rotation}°)</Label>
                <Slider
                  id="wm-rotation"
                  min={-90}
                  max={90}
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                />
              </div>
            </Panel>

            <Button onClick={() => void save()} disabled={saving || !canSave}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Download className="h-4 w-4" aria-hidden />
              )}
              Download watermarked PDF
            </Button>
            {saveError && (
              <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
                {saveError}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

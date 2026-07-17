"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, RotateCcw } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { downloadBlob, formatBytes } from "@/lib/download";

export interface ImageMeta {
  width: number;
  height: number;
}

/**
 * Shared shell for canvas-based image tools (invert, grayscale, sharpen, resize,
 * strip-EXIF, SVG→PNG, …). The tool supplies `process(source, canvas)` which
 * sizes and draws the result onto the canvas; it re-runs whenever the image or
 * any value in `watch` changes. The shell handles the drop zone, live preview,
 * download, object-URL cleanup, errors, and reset.
 */
export function ImageCanvasTool({
  accept = "image/*",
  hint,
  process,
  controls,
  watch = [],
  outputMime = "image/png",
  outputExt = "png",
  outputQuality,
  downloadSuffix = "edited",
  onMeta,
}: {
  accept?: string;
  hint?: string;
  /** Draw the processed result onto `canvas` (set canvas.width/height first). May be async. */
  process: (source: HTMLImageElement, canvas: HTMLCanvasElement) => void | Promise<void>;
  /** Tool-specific option UI; receives the source image's natural size. */
  controls?: (meta: ImageMeta | null) => React.ReactNode;
  /** Extra reactive deps (option state) that should re-run `process`. */
  watch?: unknown[];
  outputMime?: string;
  outputExt?: string;
  outputQuality?: number;
  downloadSuffix?: string;
  onMeta?: (meta: ImageMeta) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [meta, setMeta] = useState<ImageMeta | null>(null);
  const [resultSize, setResultSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const srcUrlRef = useRef<string | null>(null);

  useEffect(
    () => () => {
      if (srcUrlRef.current) URL.revokeObjectURL(srcUrlRef.current);
    },
    [],
  );

  const handleFiles = useCallback(
    (files: File[]) => {
      const f = files[0];
      if (!f) return;
      if (!f.type.startsWith("image/")) {
        setError("That file isn't an image.");
        return;
      }
      setError(null);
      const url = URL.createObjectURL(f);
      const image = new Image();
      image.onload = () => {
        if (srcUrlRef.current) URL.revokeObjectURL(srcUrlRef.current);
        srcUrlRef.current = url;
        const m = { width: image.naturalWidth, height: image.naturalHeight };
        setFile(f);
        setImg(image);
        setMeta(m);
        onMeta?.(m);
      };
      image.onerror = () => {
        URL.revokeObjectURL(url);
        setError("Could not decode that image.");
      };
      image.src = url;
    },
    [onMeta],
  );

  // Live re-render whenever the image or an option changes.
  useEffect(() => {
    if (!img) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    Promise.resolve()
      .then(() => process(img, canvas))
      .then(() => {
        if (cancelled) return;
        canvas.toBlob(
          (b) => !cancelled && setResultSize(b?.size ?? null),
          outputMime,
          outputQuality,
        );
        setError(null);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Processing failed.");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img, outputMime, outputQuality, ...watch]);

  const download = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !file) return;
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const base = file.name.replace(/\.[^.]+$/, "") || "image";
        downloadBlob(blob, `${base}-${downloadSuffix}.${outputExt}`);
      },
      outputMime,
      outputQuality,
    );
  }, [file, outputMime, outputExt, outputQuality, downloadSuffix]);

  const reset = useCallback(() => {
    if (srcUrlRef.current) {
      URL.revokeObjectURL(srcUrlRef.current);
      srcUrlRef.current = null;
    }
    setFile(null);
    setImg(null);
    setMeta(null);
    setResultSize(null);
    setError(null);
  }, []);

  if (!file || !img) {
    return (
      <div className="space-y-3">
        <FileDropzone accept={accept} onFiles={handleFiles} hint={hint} />
        {error && (
          <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Panel bodyClassName="flex flex-wrap items-center gap-3 p-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
          <p className="text-xs text-muted-foreground">
            {meta ? `${meta.width}×${meta.height}px · ` : ""}
            {formatBytes(file.size)}
            {resultSize != null ? ` → ${formatBytes(resultSize)}` : ""}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={reset}>
          <RotateCcw className="h-3.5 w-3.5" aria-hidden />
          New image
        </Button>
      </Panel>

      {controls && (
        <Panel title="Options" bodyClassName="p-4">
          {controls(meta)}
        </Panel>
      )}

      <Panel title="Preview" bodyClassName="flex items-center justify-center overflow-auto bg-muted/30 p-3">
        <canvas
          ref={canvasRef}
          className="mx-auto max-h-[460px] w-auto max-w-full rounded border border-border"
        />
      </Panel>

      {error && (
        <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      <Button onClick={download}>
        <Download className="h-4 w-4" aria-hidden />
        Download {outputExt.toUpperCase()}
      </Button>
    </div>
  );
}

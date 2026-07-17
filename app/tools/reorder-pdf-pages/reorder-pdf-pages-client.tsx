"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  GripVertical,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { downloadBlob, formatBytes } from "@/lib/download";
import { loadPdfjs } from "@/lib/pdf";

interface Thumb {
  dataUrl: string;
  aspect: number; // width / height
}

/** Fallback A4 portrait aspect for skeleton placeholders. */
const DEFAULT_ASPECT = 210 / 297;

/** Move the item at `from` to position `to`, returning a new array. */
function moveItem<T>(arr: T[], from: number, to: number): T[] {
  if (to < 0 || to >= arr.length || from === to) return arr;
  const next = arr.slice();
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function ReorderPdfPagesClient() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  // thumbs is keyed by ORIGINAL page index; order holds original indices in
  // the current display sequence.
  const [thumbs, setThumbs] = useState<(Thumb | null)[]>([]);
  const [order, setOrder] = useState<number[]>([]);
  const [renderingPage, setRenderingPage] = useState<number | null>(null);

  const [dragIndex, setDragIndex] = useState<number | null>(null);

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

  const reset = useCallback(() => {
    genRef.current++;
    bufferRef.current = null;
    setFileName(null);
    setFileSize(0);
    setPageCount(0);
    setLoading(false);
    setLoadError(null);
    setThumbs([]);
    setOrder([]);
    setRenderingPage(null);
    setDragIndex(null);
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
        setThumbs(new Array<Thumb | null>(doc.numPages).fill(null));
        setOrder(Array.from({ length: doc.numPages }, (_, i) => i));
        setLoading(false);

        for (let i = 1; i <= doc.numPages; i++) {
          if (genRef.current !== gen) {
            void doc.destroy();
            return;
          }
          setRenderingPage(i);
          const page = await doc.getPage(i);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: 320 / base.width });
          const canvas = document.createElement("canvas");
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          await page.render({ canvasContext: ctx, viewport }).promise;
          const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
          const aspect = base.width / base.height;
          page.cleanup();
          if (genRef.current !== gen) {
            void doc.destroy();
            return;
          }
          setThumbs((prev) => {
            const next = prev.slice();
            next[i - 1] = { dataUrl, aspect };
            return next;
          });
        }
        setRenderingPage(null);
        void doc.destroy();
      } catch (err) {
        if (genRef.current !== gen) return;
        const name = (err as { name?: string } | null)?.name;
        setLoading(false);
        setRenderingPage(null);
        setLoadError(
          name === "PasswordException"
            ? "This PDF is password protected. Unlock it first, then reorder."
            : "Could not read this file. It may be corrupted or not a valid PDF.",
        );
      }
    },
    [reset],
  );

  const move = useCallback((pos: number, delta: number) => {
    setOrder((prev) => moveItem(prev, pos, pos + delta));
  }, []);

  const restoreOrder = useCallback(() => {
    setOrder(Array.from({ length: pageCount }, (_, i) => i));
  }, [pageCount]);

  const onDrop = useCallback(
    (pos: number) => {
      setOrder((prev) => {
        if (dragIndex === null) return prev;
        return moveItem(prev, dragIndex, pos);
      });
      setDragIndex(null);
    },
    [dragIndex],
  );

  const save = useCallback(async () => {
    const buffer = bufferRef.current;
    if (!buffer || saving) return;
    setSaving(true);
    setSaveError(null);
    const gen = genRef.current;

    try {
      const { PDFDocument } = await import("pdf-lib");
      const src = await PDFDocument.load(buffer.slice(0), {
        ignoreEncryption: true,
      });
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, order);
      for (const page of pages) out.addPage(page);
      const bytes = await out.save();
      if (genRef.current !== gen) return;
      const baseName =
        (fileName ?? "document").replace(/\.pdf$/i, "") || "document";
      downloadBlob(
        new Blob([bytes as BlobPart], { type: "application/pdf" }),
        `${baseName}-reordered.pdf`,
      );
    } catch {
      setSaveError(
        "Could not save the PDF. It may be encrypted or corrupted.",
      );
    } finally {
      setSaving(false);
    }
  }, [saving, order, fileName]);

  // ── Empty state ──────────────────────────────────────────────────────
  if (!fileName) {
    return (
      <Panel bodyClassName="p-6">
        <FileDropzone
          accept="application/pdf,.pdf"
          onFiles={(files) => void loadFile(files[0])}
          hint="PDF only. Drag pages or use the arrows to rearrange them."
        />
      </Panel>
    );
  }

  const changed = order.some((original, pos) => original !== pos);

  return (
    <div className="flex flex-col gap-4">
      <Panel bodyClassName="flex flex-wrap items-center gap-3 p-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted">
          <FileText className="h-4 w-4 text-muted-foreground" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">
            {fileName}
          </p>
          <p className="text-xs text-muted-foreground">
            {loading
              ? "Reading file"
              : `${pageCount} page${pageCount === 1 ? "" : "s"}`}
            {" · "}
            {formatBytes(fileSize)}
          </p>
        </div>
        {renderingPage !== null && (
          <Badge>
            <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
            Rendering {renderingPage}/{pageCount}
          </Badge>
        )}
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

      {!loadError && !loading && pageCount > 0 && (
        <>
          <Panel bodyClassName="flex flex-wrap items-center gap-2 p-3">
            <span className="text-xs font-medium text-muted-foreground">
              Drag a page or use its arrows to move it. New order is shown
              below.
            </span>
            {changed && (
              <Button
                variant="ghost"
                size="sm"
                onClick={restoreOrder}
                className="ml-auto"
              >
                Restore original order
              </Button>
            )}
          </Panel>

          <Panel title="Pages" bodyClassName="p-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {order.map((original, pos) => {
                const thumb = thumbs[original];
                return (
                  <div
                    key={original}
                    draggable
                    onDragStart={() => setDragIndex(pos)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => onDrop(pos)}
                    onDragEnd={() => setDragIndex(null)}
                    className={cn(
                      "flex flex-col overflow-hidden rounded-lg border bg-card transition-colors",
                      dragIndex === pos
                        ? "border-accent opacity-60"
                        : "border-border hover:border-muted-foreground/40",
                    )}
                  >
                    <span className="relative flex w-full items-center justify-center bg-muted p-2">
                      <span className="absolute left-1.5 top-1.5 flex h-5 w-5 cursor-grab items-center justify-center rounded bg-black/40 text-white">
                        <GripVertical className="h-3 w-3" aria-hidden />
                      </span>
                      <span className="absolute right-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-xs font-medium text-accent-foreground shadow-sm">
                        {pos + 1}
                      </span>
                      {thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb.dataUrl}
                          alt={`Original page ${original + 1}`}
                          className="h-auto max-w-full rounded-sm border border-border shadow-sm"
                          style={{ aspectRatio: `${thumb.aspect}` }}
                          draggable={false}
                        />
                      ) : (
                        <span
                          className="w-full animate-pulse rounded-sm bg-border/60"
                          style={{ aspectRatio: `${DEFAULT_ASPECT}` }}
                        />
                      )}
                    </span>
                    <div className="flex items-center justify-between gap-1 border-t border-border px-2 py-1.5">
                      <span className="text-xs text-muted-foreground">
                        was p{original + 1}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          aria-label={`Move page to position ${pos}`}
                          disabled={pos === 0}
                          onClick={() => move(pos, -1)}
                        >
                          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          aria-label={`Move page to position ${pos + 2}`}
                          disabled={pos === order.length - 1}
                          onClick={() => move(pos, 1)}
                        >
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Button>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Panel>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => void save()} disabled={saving || !changed}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Download className="h-4 w-4" aria-hidden />
              )}
              Download reordered PDF
            </Button>
            {!changed && (
              <span className="text-xs text-muted-foreground">
                Move at least one page to enable the download.
              </span>
            )}
          </div>

          {saveError && (
            <div className="rounded-md border border-border bg-card px-3 py-2 text-sm text-danger">
              {saveError}
            </div>
          )}
        </>
      )}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Download, FileText, Loader2, RotateCcw, Trash2 } from "lucide-react";
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

export function DeletePdfPagesClient() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [thumbs, setThumbs] = useState<(Thumb | null)[]>([]);
  const [renderingPage, setRenderingPage] = useState<number | null>(null);

  // Indices marked for deletion.
  const [toDelete, setToDelete] = useState<Set<number>>(new Set());

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
    setRenderingPage(null);
    setToDelete(new Set());
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
            ? "This PDF is password protected. Unlock it first, then delete pages."
            : "Could not read this file. It may be corrupted or not a valid PDF.",
        );
      }
    },
    [reset],
  );

  const toggle = useCallback((index: number) => {
    setToDelete((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const clearSelection = useCallback(() => setToDelete(new Set()), []);

  const save = useCallback(async () => {
    const buffer = bufferRef.current;
    if (!buffer || saving) return;
    // Keep only pages not marked for deletion.
    const keep: number[] = [];
    for (let i = 0; i < pageCount; i++) if (!toDelete.has(i)) keep.push(i);
    if (keep.length === 0) {
      setSaveError("You can't delete every page — keep at least one.");
      return;
    }

    setSaving(true);
    setSaveError(null);
    const gen = genRef.current;

    try {
      const { PDFDocument } = await import("pdf-lib");
      const src = await PDFDocument.load(buffer.slice(0), {
        ignoreEncryption: true,
      });
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, keep);
      for (const page of pages) out.addPage(page);
      const bytes = await out.save();
      if (genRef.current !== gen) return;
      const baseName =
        (fileName ?? "document").replace(/\.pdf$/i, "") || "document";
      downloadBlob(
        new Blob([bytes as BlobPart], { type: "application/pdf" }),
        `${baseName}-edited.pdf`,
      );
    } catch {
      setSaveError(
        "Could not save the PDF. It may be encrypted or corrupted.",
      );
    } finally {
      setSaving(false);
    }
  }, [saving, toDelete, pageCount, fileName]);

  // ── Empty state ──────────────────────────────────────────────────────
  if (!fileName) {
    return (
      <Panel bodyClassName="p-6">
        <FileDropzone
          accept="application/pdf,.pdf"
          onFiles={(files) => void loadFile(files[0])}
          hint="PDF only. Click the pages you want to remove."
        />
      </Panel>
    );
  }

  const deleteCount = toDelete.size;
  const keepCount = pageCount - deleteCount;

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
              Click a page to mark it for deletion.
            </span>
            <span className="ml-auto text-xs text-muted-foreground">
              {deleteCount} to delete · {keepCount} kept
            </span>
            {deleteCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearSelection}>
                Clear
              </Button>
            )}
          </Panel>

          <Panel title="Pages" bodyClassName="p-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {thumbs.map((thumb, i) => {
                const marked = toDelete.has(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={marked}
                    aria-label={`Page ${i + 1}${marked ? ", marked for deletion" : ""}`}
                    className={cn(
                      "group relative flex flex-col overflow-hidden rounded-lg border bg-card text-left transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      marked
                        ? "border-danger ring-2 ring-danger"
                        : "border-border hover:border-muted-foreground/40",
                    )}
                  >
                    <span className="flex w-full items-center justify-center bg-muted p-2">
                      {thumb ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb.dataUrl}
                          alt={`Page ${i + 1}`}
                          className={cn(
                            "h-auto max-w-full rounded-sm border border-border shadow-sm transition-opacity",
                            marked && "opacity-40",
                          )}
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
                    <span className="px-2 py-1.5 text-center text-xs text-muted-foreground">
                      Page {i + 1}
                    </span>
                    {marked && (
                      <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white shadow-sm">
                        <Trash2 className="h-3 w-3" aria-hidden />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </Panel>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => void save()} disabled={saving || deleteCount === 0}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Download className="h-4 w-4" aria-hidden />
              )}
              Download PDF ({keepCount} page{keepCount === 1 ? "" : "s"})
            </Button>
            {deleteCount === 0 && (
              <span className="text-xs text-muted-foreground">
                Mark at least one page to enable the download.
              </span>
            )}
            {deleteCount > 0 && keepCount > 0 && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
                Removing {deleteCount} page{deleteCount === 1 ? "" : "s"}
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

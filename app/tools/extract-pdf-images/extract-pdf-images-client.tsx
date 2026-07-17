"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Download,
  FileArchive,
  FileText,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { downloadBlob, downloadDataUrl, formatBytes } from "@/lib/download";
import { loadPdfjs } from "@/lib/pdf";

interface PageImage {
  dataUrl: string;
  width: number;
  height: number;
}

/** Decode a PNG data URL into raw bytes for zipping. */
function dataUrlToBytes(dataUrl: string): Uint8Array {
  const base64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export function ExtractPdfImagesClient() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [renderingPage, setRenderingPage] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<PageImage[]>([]);
  const [zipping, setZipping] = useState(false);

  const genRef = useRef(0);

  useEffect(
    () => () => {
      genRef.current++;
    },
    [],
  );

  const reset = useCallback(() => {
    genRef.current++;
    setFileName(null);
    setFileSize(0);
    setPageCount(0);
    setRenderingPage(null);
    setLoading(false);
    setError(null);
    setPages([]);
    setZipping(false);
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

        const pdfjs = await loadPdfjs();
        const doc = await pdfjs.getDocument({
          data: new Uint8Array(buffer.slice(0)),
        }).promise;
        if (genRef.current !== gen) {
          void doc.destroy();
          return;
        }
        setPageCount(doc.numPages);
        setLoading(false);

        for (let i = 1; i <= doc.numPages; i++) {
          if (genRef.current !== gen) {
            void doc.destroy();
            return;
          }
          setRenderingPage(i);
          const page = await doc.getPage(i);
          // Render at 2x for a crisp, print-usable image.
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement("canvas");
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          await page.render({ canvasContext: ctx, viewport }).promise;
          const dataUrl = canvas.toDataURL("image/png");
          page.cleanup();
          if (genRef.current !== gen) {
            void doc.destroy();
            return;
          }
          setPages((prev) => [
            ...prev,
            { dataUrl, width: canvas.width, height: canvas.height },
          ]);
        }
        setRenderingPage(null);
        void doc.destroy();
      } catch (err) {
        if (genRef.current !== gen) return;
        const name = (err as { name?: string } | null)?.name;
        setLoading(false);
        setRenderingPage(null);
        setError(
          name === "PasswordException"
            ? "This PDF is password protected. Unlock it first, then extract images."
            : "Could not read this file. It may be corrupted or not a valid PDF.",
        );
      }
    },
    [reset],
  );

  const baseName = (fileName ?? "document").replace(/\.pdf$/i, "") || "document";

  const downloadOne = useCallback(
    (index: number) => {
      const page = pages[index];
      if (page) downloadDataUrl(page.dataUrl, `${baseName}-page-${index + 1}.png`);
    },
    [pages, baseName],
  );

  const downloadZip = useCallback(async () => {
    if (pages.length === 0 || zipping) return;
    setZipping(true);
    try {
      const JSZip = (await import("jszip")).default;
      const zip = new JSZip();
      pages.forEach((page, i) => {
        zip.file(`${baseName}-page-${i + 1}.png`, dataUrlToBytes(page.dataUrl));
      });
      const blob = await zip.generateAsync({ type: "blob" });
      downloadBlob(blob, `${baseName}-images.zip`);
    } finally {
      setZipping(false);
    }
  }, [pages, zipping, baseName]);

  // ── Empty state ──────────────────────────────────────────────────────
  if (!fileName) {
    return (
      <Panel bodyClassName="p-6">
        <FileDropzone
          accept="application/pdf,.pdf"
          onFiles={(files) => void loadFile(files[0])}
          hint="PDF only. Each page is extracted as a high-resolution PNG image."
        />
      </Panel>
    );
  }

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

      {error && (
        <div className="rounded-md border border-border bg-card px-3 py-2 text-sm text-danger">
          {error}
        </div>
      )}

      {!error && (
        <>
          <Panel bodyClassName="flex flex-wrap items-center gap-3 p-3">
            <p className="text-xs text-muted-foreground">
              Each page is rendered as a high-resolution PNG. Download them one
              at a time or grab everything as a ZIP.
            </p>
            <Button
              size="sm"
              onClick={() => void downloadZip()}
              disabled={pages.length === 0 || zipping || renderingPage !== null}
              className="ml-auto"
            >
              {zipping ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
              ) : (
                <FileArchive className="h-3.5 w-3.5" aria-hidden />
              )}
              Download all as ZIP
            </Button>
          </Panel>

          {pages.length > 0 && (
            <Panel title="Page images" bodyClassName="p-3">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {pages.map((page, i) => (
                  <div
                    key={i}
                    className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
                  >
                    <span className="flex w-full items-center justify-center bg-muted p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={page.dataUrl}
                        alt={`Page ${i + 1}`}
                        className="h-auto max-w-full rounded-sm border border-border shadow-sm"
                        style={{ aspectRatio: `${page.width / page.height}` }}
                        draggable={false}
                      />
                    </span>
                    <div className="flex items-center justify-between gap-1 border-t border-border px-2 py-1.5">
                      <span className="text-xs text-muted-foreground">
                        Page {i + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        aria-label={`Download page ${i + 1} as PNG`}
                        onClick={() => downloadOne(i)}
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {pages.length === 0 && renderingPage !== null && (
            <Panel bodyClassName="flex items-center justify-center gap-2 p-8 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Rendering page {renderingPage} of {pageCount}…
            </Panel>
          )}
        </>
      )}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, FileText, Loader2, RotateCcw } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/tool/copy-button";
import { downloadText, formatBytes } from "@/lib/download";
import { loadPdfjs } from "@/lib/pdf";

export function ExtractPdfTextClient() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [extractingPage, setExtractingPage] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [empty, setEmpty] = useState(false);

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
    setExtractingPage(null);
    setLoading(false);
    setError(null);
    setText("");
    setEmpty(false);
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

        const parts: string[] = [];
        for (let i = 1; i <= doc.numPages; i++) {
          if (genRef.current !== gen) {
            void doc.destroy();
            return;
          }
          setExtractingPage(i);
          const page = await doc.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item) => ("str" in item ? item.str : ""))
            .join(" ")
            .replace(/[ \t]+/g, " ")
            .trim();
          parts.push(pageText);
          page.cleanup();
        }
        void doc.destroy();
        if (genRef.current !== gen) return;

        const joined = parts.join("\n\n");
        setText(joined);
        setEmpty(joined.trim().length === 0);
        setExtractingPage(null);
        setLoading(false);
      } catch (err) {
        if (genRef.current !== gen) return;
        const name = (err as { name?: string } | null)?.name;
        setLoading(false);
        setExtractingPage(null);
        setError(
          name === "PasswordException"
            ? "This PDF is password protected. Unlock it first, then extract text."
            : "Could not read this file. It may be corrupted or not a valid PDF.",
        );
      }
    },
    [reset],
  );

  const download = useCallback(() => {
    const baseName = (fileName ?? "document").replace(/\.pdf$/i, "") || "document";
    downloadText(text, `${baseName}.txt`);
  }, [text, fileName]);

  // ── Empty state ──────────────────────────────────────────────────────
  if (!fileName) {
    return (
      <Panel bodyClassName="p-6">
        <FileDropzone
          accept="application/pdf,.pdf"
          onFiles={(files) => void loadFile(files[0])}
          hint="PDF only. Selectable text is pulled from every page."
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
        {extractingPage !== null && (
          <Badge>
            <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
            Reading {extractingPage}/{pageCount}
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

      {!error && !loading && (
        <Panel
          title="Extracted text"
          actions={
            <div className="flex items-center gap-2">
              <CopyButton text={() => text} disabled={!text} />
              <Button
                variant="secondary"
                size="sm"
                onClick={download}
                disabled={!text}
              >
                <Download className="h-3.5 w-3.5" aria-hidden />
                Download .txt
              </Button>
            </div>
          }
          bodyClassName="p-3"
        >
          {empty ? (
            <p className="rounded-md border border-border bg-muted/40 px-3 py-6 text-center text-sm text-muted-foreground">
              No selectable text was found. This PDF is likely a scanned image —
              try an OCR tool to recognise the text first.
            </p>
          ) : (
            <Textarea
              value={text}
              readOnly
              rows={18}
              className="font-mono text-xs leading-relaxed"
              aria-label="Extracted text"
            />
          )}
        </Panel>
      )}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { ExternalLink, RotateCcw, Loader2 } from "lucide-react";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Button } from "@/components/ui/button";

type Status =
  | { kind: "idle" }
  | { kind: "decoding" }
  | { kind: "found"; text: string; preview: string }
  | { kind: "none"; preview: string }
  | { kind: "error"; message: string };

const MAX_DIMENSION = 2000;

/** Decode a QR code from an image File. Returns the payload or null. */
async function decodeImage(
  file: File,
): Promise<{ text: string | null; preview: string }> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("decode"));
      el.src = url;
    });

    let { naturalWidth: w, naturalHeight: h } = img;
    const scale = Math.min(1, MAX_DIMENSION / Math.max(w, h));
    w = Math.max(1, Math.round(w * scale));
    h = Math.max(1, Math.round(h * scale));

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) throw new Error("canvas");
    ctx.drawImage(img, 0, 0, w, h);
    const preview = canvas.toDataURL("image/png");
    const imageData = ctx.getImageData(0, 0, w, h);

    const jsQR = (await import("jsqr")).default;
    const result = jsQR(imageData.data, w, h, { inversionAttempts: "attemptBoth" });
    return { text: result ? result.data : null, preview };
  } finally {
    URL.revokeObjectURL(url);
  }
}

function isUrl(text: string): boolean {
  try {
    const u = new URL(text.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function QrScannerClient() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const scan = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setStatus({ kind: "error", message: "That file is not an image. Upload a PNG, JPEG, or WebP." });
      return;
    }
    setStatus({ kind: "decoding" });
    try {
      const { text, preview } = await decodeImage(file);
      if (text) setStatus({ kind: "found", text, preview });
      else setStatus({ kind: "none", preview });
    } catch {
      setStatus({ kind: "error", message: "Could not read that image file." });
    }
  }, []);

  // Allow pasting an image straight from the clipboard.
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const item = Array.from(e.clipboardData?.items ?? []).find((i) =>
        i.type.startsWith("image/"),
      );
      const file = item?.getAsFile();
      if (file) {
        e.preventDefault();
        void scan(file);
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [scan]);

  const reset = () => setStatus({ kind: "idle" });

  const preview =
    status.kind === "found" || status.kind === "none" ? status.preview : null;

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Panel
        title="Image"
        actions={
          status.kind !== "idle" ? (
            <Button variant="ghost" size="sm" onClick={reset}>
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              New scan
            </Button>
          ) : undefined
        }
        bodyClassName="flex min-h-[16rem] items-center justify-center"
      >
        {status.kind === "idle" || status.kind === "error" ? (
          <div className="w-full space-y-3">
            <FileDropzone
              accept="image/*"
              onFiles={(files) => files[0] && void scan(files[0])}
              hint="PNG, JPEG, or WebP — or paste an image with Ctrl/Cmd+V."
            />
            {status.kind === "error" && (
              <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
                {status.message}
              </p>
            )}
          </div>
        ) : status.kind === "decoding" ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Scanning…
          </div>
        ) : (
          preview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt="Uploaded QR code"
              className="max-h-[24rem] max-w-full rounded border border-border object-contain"
            />
          )
        )}
      </Panel>

      <Panel title="Result">
        {status.kind === "found" ? (
          <div className="space-y-3">
            <div className="rounded-md bg-muted p-3">
              <p className="break-all font-mono text-sm text-foreground">{status.text}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <CopyButton text={status.text} />
              {isUrl(status.text) && (
                <a
                  href={status.text}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex h-8 items-center gap-1.5 rounded-md bg-muted px-3 text-xs font-medium text-foreground transition-colors hover:bg-border/70"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  Open link
                </a>
              )}
            </div>
            {isUrl(status.text) && (
              <p className="text-xs text-muted-foreground">
                Links open in a new tab. Only open URLs you recognise and trust.
              </p>
            )}
          </div>
        ) : status.kind === "none" ? (
          <p className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-foreground">
            No QR code found in that image. Try a clearer, higher-contrast photo, or
            crop tighter around the code.
          </p>
        ) : (
          <p className="p-2 text-sm text-muted-foreground">
            Upload or paste an image containing a QR code and its decoded contents will
            appear here.
          </p>
        )}
      </Panel>
    </div>
  );
}

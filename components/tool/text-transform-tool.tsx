"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/tool/copy-button";
import { downloadText } from "@/lib/download";
import { cn } from "@/lib/utils";

/**
 * Shared shell for text-in / text-out utilities (case converter, slug, base64,
 * URL/HTML encode, JSON minifier, XML→JSON, SQL formatter, hashers, …).
 *
 * The tool supplies a `transform(input)` (sync or async) plus optional
 * `controls`. Output recomputes whenever the input or any value in `watch`
 * changes. Errors thrown by `transform` render in a red panel instead of output.
 */
export function TextTransformTool({
  transform,
  watch = [],
  controls,
  inputLabel = "Input",
  outputLabel = "Output",
  inputPlaceholder = "Paste or type here…",
  emptyOutput = "",
  download,
  monospaceOutput = true,
  acceptFile,
  initialInput = "",
}: {
  /** Pure transform; may be async (e.g. Web Crypto hashing). Throw to show an error. */
  transform: (input: string) => string | Promise<string>;
  /** Extra reactive deps (option state) that should re-run the transform. */
  watch?: unknown[];
  /** Tool-specific option UI. */
  controls?: React.ReactNode;
  inputLabel?: string;
  outputLabel?: string;
  inputPlaceholder?: string;
  /** Shown in the output pane when input is empty. */
  emptyOutput?: string;
  /** Enables a Download button for the output. */
  download?: { filename: string; mime?: string };
  monospaceOutput?: boolean;
  /** If set, shows a "load a file" affordance (e.g. ".txt,.json"). */
  acceptFile?: string;
  initialInput?: string;
}) {
  const [input, setInput] = useState(initialInput);
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let cancelled = false;
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }
    Promise.resolve()
      .then(() => transform(input))
      .then((result) => {
        if (cancelled) return;
        setOutput(result);
        setError(null);
      })
      .catch((e) => {
        if (cancelled) return;
        setOutput("");
        setError(e instanceof Error ? e.message : "Could not process this input.");
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, ...watch]);

  const loadFile = (file: File | undefined) => {
    if (!file) return;
    file.text().then(setInput);
  };

  return (
    <div className="space-y-4">
      {controls && (
        <Panel title="Options" bodyClassName="p-4">
          {controls}
        </Panel>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel
          title={inputLabel}
          actions={
            acceptFile ? (
              <>
                <Button variant="ghost" size="sm" onClick={() => fileRef.current?.click()}>
                  <Upload className="h-3.5 w-3.5" aria-hidden />
                  Load file
                </Button>
                <input
                  ref={fileRef}
                  type="file"
                  accept={acceptFile}
                  hidden
                  onChange={(e) => {
                    loadFile(e.target.files?.[0]);
                    e.target.value = "";
                  }}
                />
              </>
            ) : undefined
          }
          bodyClassName="p-0"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={inputPlaceholder}
            spellCheck={false}
            className="min-h-[280px] w-full resize-y bg-transparent p-3 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </Panel>

        <Panel
          title={outputLabel}
          actions={
            <>
              <CopyButton text={() => output} disabled={!output} />
              {download && (
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={!output}
                  onClick={() =>
                    downloadText(output, download.filename, download.mime ?? "text/plain")
                  }
                >
                  <Download className="h-3.5 w-3.5" aria-hidden />
                  Download
                </Button>
              )}
            </>
          }
          bodyClassName="p-0"
        >
          {error ? (
            <div className="m-3 rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
              {error}
            </div>
          ) : (
            <textarea
              value={output}
              readOnly
              placeholder={emptyOutput}
              spellCheck={false}
              className={cn(
                "min-h-[280px] w-full resize-y bg-transparent p-3 text-sm text-foreground outline-none placeholder:text-muted-foreground",
                monospaceOutput && "font-mono",
              )}
            />
          )}
        </Panel>
      </div>

      <p className="text-xs text-muted-foreground">
        {input.length.toLocaleString()} characters in ·{" "}
        {output.length.toLocaleString()} out. Processed entirely in your browser.
      </p>
    </div>
  );
}

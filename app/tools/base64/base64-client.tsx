"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";
import { Button } from "@/components/ui/button";

type Mode = "encode" | "decode";

/** btoa/atob operate on binary strings; these helpers add correct UTF-8 handling. */
function bytesToBinaryString(bytes: Uint8Array): string {
  let binary = "";
  const CHUNK = 0x8000; // avoid call-stack overflow on large inputs
  for (let i = 0; i < bytes.length; i += CHUNK) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return binary;
}

function encodeBase64(text: string, urlSafe: boolean): string {
  const bytes = new TextEncoder().encode(text);
  let b64 = btoa(bytesToBinaryString(bytes));
  if (urlSafe) b64 = b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return b64;
}

function decodeBase64(input: string, urlSafe: boolean): string {
  let b64 = input.trim();
  if (urlSafe) b64 = b64.replace(/-/g, "+").replace(/_/g, "/");
  // Tolerate missing padding (common in URL-safe Base64).
  const pad = b64.length % 4;
  if (pad === 2) b64 += "==";
  else if (pad === 3) b64 += "=";
  else if (pad === 1) throw new Error("This isn't valid Base64 — the length is malformed.");

  let binary: string;
  try {
    binary = atob(b64);
  } catch {
    throw new Error("This isn't valid Base64 — check for stray characters.");
  }
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new Error("Decoded bytes are not valid UTF-8 text.");
  }
}

export function Base64Client() {
  const [mode, setMode] = useState<Mode>("encode");
  const [urlSafe, setUrlSafe] = useState(false);

  const transform = (input: string): string =>
    mode === "encode" ? encodeBase64(input, urlSafe) : decodeBase64(input, urlSafe);

  return (
    <TextTransformTool
      transform={transform}
      watch={[mode, urlSafe]}
      controls={
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-foreground">Mode</span>
            <Button
              variant={mode === "encode" ? "primary" : "outline"}
              size="sm"
              onClick={() => setMode("encode")}
            >
              Encode
            </Button>
            <Button
              variant={mode === "decode" ? "primary" : "outline"}
              size="sm"
              onClick={() => setMode("decode")}
            >
              Decode
            </Button>
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              className="h-4 w-4 accent-accent"
              checked={urlSafe}
              onChange={(e) => setUrlSafe(e.target.checked)}
            />
            URL-safe (-_ , no padding)
          </label>
        </div>
      }
      inputLabel={mode === "encode" ? "Text input" : "Base64 input"}
      outputLabel={mode === "encode" ? "Base64 output" : "Decoded text"}
      inputPlaceholder={
        mode === "encode" ? "Type or paste text to encode…" : "Paste Base64 to decode…"
      }
      emptyOutput={mode === "encode" ? "The Base64 will appear here…" : "The decoded text will appear here…"}
      download={{
        filename: mode === "encode" ? "encoded.txt" : "decoded.txt",
        mime: "text/plain",
      }}
      acceptFile=".txt"
    />
  );
}

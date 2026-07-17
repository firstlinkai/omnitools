"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";
import { Button } from "@/components/ui/button";

type Mode = "encode" | "decode";

const NAMED: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escapes the five HTML-significant characters, optionally all non-ASCII too. */
function encodeHtml(text: string, allNonAscii: boolean): string {
  let out = "";
  // Iterating with for..of yields whole code points, so surrogate pairs (emoji) stay intact.
  for (const ch of text) {
    const named = NAMED[ch];
    if (named) {
      out += named;
      continue;
    }
    const code = ch.codePointAt(0) ?? 0;
    if (allNonAscii && code > 0x7f) out += `&#${code};`;
    else out += ch;
  }
  return out;
}

/**
 * Decodes named and numeric HTML entities. Uses a textarea, whose content is
 * parsed as text (RCDATA) — entities are resolved but no markup is executed,
 * so this is safe.
 */
function decodeHtml(input: string): string {
  const el = document.createElement("textarea");
  el.innerHTML = input;
  return el.value;
}

export function HtmlEncodeClient() {
  const [mode, setMode] = useState<Mode>("encode");
  const [allNonAscii, setAllNonAscii] = useState(false);

  const transform = (input: string): string =>
    mode === "encode" ? encodeHtml(input, allNonAscii) : decodeHtml(input);

  return (
    <TextTransformTool
      transform={transform}
      watch={[mode, allNonAscii]}
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
          {mode === "encode" && (
            <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
              <input
                type="checkbox"
                className="h-4 w-4 accent-accent"
                checked={allNonAscii}
                onChange={(e) => setAllNonAscii(e.target.checked)}
              />
              Also encode all non-ASCII (numeric entities)
            </label>
          )}
        </div>
      }
      inputLabel={mode === "encode" ? "Text / HTML input" : "Encoded input"}
      outputLabel={mode === "encode" ? "Encoded output" : "Decoded text"}
      inputPlaceholder={
        mode === "encode"
          ? 'Type or paste text to escape…\ne.g. <a href="x">Tom & Jerry</a>'
          : "Paste HTML entities to decode…\ne.g. &lt;a&gt;Tom &amp; Jerry&lt;/a&gt;"
      }
      emptyOutput={
        mode === "encode" ? "The escaped text will appear here…" : "The decoded text will appear here…"
      }
      download={{
        filename: mode === "encode" ? "encoded.html.txt" : "decoded.txt",
        mime: "text/plain",
      }}
      acceptFile=".txt,.html,.htm"
    />
  );
}

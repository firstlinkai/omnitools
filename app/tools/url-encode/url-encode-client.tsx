"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";
import { Button } from "@/components/ui/button";

type Mode = "encode" | "decode";
type Scope = "component" | "full";

export function UrlEncodeClient() {
  const [mode, setMode] = useState<Mode>("encode");
  const [scope, setScope] = useState<Scope>("component");

  const transform = (input: string): string => {
    if (mode === "encode") {
      return scope === "component" ? encodeURIComponent(input) : encodeURI(input);
    }
    try {
      return scope === "component" ? decodeURIComponent(input) : decodeURI(input);
    } catch {
      throw new Error(
        "This isn't valid percent-encoded text — look for a stray % or an incomplete %XX sequence.",
      );
    }
  };

  return (
    <TextTransformTool
      transform={transform}
      watch={[mode, scope]}
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
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-medium text-foreground">Scope</span>
            <Button
              variant={scope === "component" ? "primary" : "outline"}
              size="sm"
              onClick={() => setScope("component")}
            >
              Component
            </Button>
            <Button
              variant={scope === "full" ? "primary" : "outline"}
              size="sm"
              onClick={() => setScope("full")}
            >
              Whole URL
            </Button>
          </div>
        </div>
      }
      inputLabel={mode === "encode" ? "Text input" : "Encoded input"}
      outputLabel={mode === "encode" ? "Encoded output" : "Decoded text"}
      inputPlaceholder={
        mode === "encode"
          ? "Type or paste text to encode…\ne.g. name=Ada & role=dev"
          : "Paste percent-encoded text to decode…\ne.g. name%3DAda%20%26%20role%3Ddev"
      }
      emptyOutput={
        mode === "encode" ? "The encoded text will appear here…" : "The decoded text will appear here…"
      }
      download={{
        filename: mode === "encode" ? "encoded.txt" : "decoded.txt",
        mime: "text/plain",
      }}
      acceptFile=".txt"
    />
  );
}

"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";
import { Button } from "@/components/ui/button";

type Mode = "min" | "pretty";

/** Formats the message from a JSON.parse failure into a friendly one-liner. */
function jsonError(e: unknown): Error {
  const raw = e instanceof Error ? e.message : String(e);
  return new Error(`Invalid JSON — ${raw}`);
}

export function JsonMinifierClient() {
  const [mode, setMode] = useState<Mode>("min");

  const transform = (input: string): string => {
    let value: unknown;
    try {
      value = JSON.parse(input);
    } catch (e) {
      throw jsonError(e);
    }
    const space = mode === "pretty" ? 2 : undefined;
    // JSON.parse never yields undefined, so stringify always returns a string here.
    return JSON.stringify(value, null, space) ?? "";
  };

  return (
    <TextTransformTool
      transform={transform}
      watch={[mode]}
      controls={
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-foreground">Mode</span>
          <Button
            variant={mode === "min" ? "primary" : "outline"}
            size="sm"
            onClick={() => setMode("min")}
          >
            Minify
          </Button>
          <Button
            variant={mode === "pretty" ? "primary" : "outline"}
            size="sm"
            onClick={() => setMode("pretty")}
          >
            Prettify (2-space)
          </Button>
        </div>
      }
      inputLabel="JSON input"
      outputLabel={mode === "min" ? "Minified JSON" : "Prettified JSON"}
      inputPlaceholder={'Paste JSON here, e.g.\n{\n  "name": "Ada",\n  "tags": ["dev", "math"],\n  "active": true\n}'}
      emptyOutput="The compressed JSON will appear here…"
      download={{
        filename: mode === "min" ? "minified.json" : "formatted.json",
        mime: "application/json",
      }}
      acceptFile=".json,.txt"
    />
  );
}

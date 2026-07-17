"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function Sha256HashClient() {
  const [uppercase, setUppercase] = useState(false);

  return (
    <TextTransformTool
      inputLabel="Text"
      outputLabel="SHA-256 hash"
      inputPlaceholder="Type or paste any text to hash…"
      emptyOutput="The 64-character hexadecimal hash appears here."
      acceptFile=".txt,.json,.csv,.md,.log"
      monospaceOutput
      watch={[uppercase]}
      transform={async (input) => {
        const hex = await sha256Hex(input);
        return uppercase ? hex.toUpperCase() : hex;
      }}
      controls={
        <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            className="h-4 w-4 accent-accent"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          Uppercase hex
        </label>
      }
    />
  );
}

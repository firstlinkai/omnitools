"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";

export function Md5HashClient() {
  const [uppercase, setUppercase] = useState(false);

  return (
    <TextTransformTool
      inputLabel="Text"
      outputLabel="MD5 hash"
      inputPlaceholder="Type or paste any text to hash…"
      emptyOutput="The 32-character hexadecimal hash appears here."
      acceptFile=".txt,.json,.csv,.md,.log"
      monospaceOutput
      watch={[uppercase]}
      transform={async (input) => {
        const { default: SparkMD5 } = await import("spark-md5");
        const hex = SparkMD5.hash(input);
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

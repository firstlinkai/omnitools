"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { TextTransformTool } from "@/components/tool/text-transform-tool";

type Separator = "-" | "_";

function slugify(line: string, separator: Separator, lowercase: boolean, maxLength: number): string {
  let s = line
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, ""); // strip combining accent marks
  if (lowercase) s = s.toLowerCase();
  s = s
    .replace(/[^A-Za-z0-9]+/g, separator) // non-alphanumerics → separator
    .replace(new RegExp(`\\${separator}{2,}`, "g"), separator) // collapse repeats
    .replace(new RegExp(`^\\${separator}+|\\${separator}+$`, "g"), ""); // trim ends
  if (maxLength > 0 && s.length > maxLength) {
    s = s.slice(0, maxLength).replace(new RegExp(`\\${separator}+$`, "g"), "");
  }
  return s;
}

export function SlugGeneratorClient() {
  const [separator, setSeparator] = useState<Separator>("-");
  const [lowercase, setLowercase] = useState(true);
  const [maxLengthRaw, setMaxLengthRaw] = useState("");

  const maxLength = (() => {
    const n = Number.parseInt(maxLengthRaw, 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  })();

  return (
    <TextTransformTool
      transform={(input) =>
        input
          .split(/\r?\n/)
          .map((line) => slugify(line, separator, lowercase, maxLength))
          .join("\n")
      }
      watch={[separator, lowercase, maxLength]}
      inputLabel="Title or text"
      outputLabel="Slug"
      inputPlaceholder={"My Great Blog Post!\nAnother Título with Accents"}
      monospaceOutput
      download={{ filename: "slugs.txt" }}
      acceptFile=".txt,.csv"
      controls={
        <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="slug-sep">Separator</Label>
            <Select
              id="slug-sep"
              value={separator}
              onChange={(e) => setSeparator(e.target.value as Separator)}
              className="w-40"
            >
              <option value="-">Hyphen ( - )</option>
              <option value="_">Underscore ( _ )</option>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="slug-max">Max length (optional)</Label>
            <Input
              id="slug-max"
              type="number"
              min={1}
              value={maxLengthRaw}
              onChange={(e) => setMaxLengthRaw(e.target.value)}
              placeholder="none"
              className="w-32"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-2 pb-2 text-sm text-foreground">
            <input
              type="checkbox"
              className="h-4 w-4 accent-accent"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            Lowercase
          </label>
        </div>
      }
    />
  );
}

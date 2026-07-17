"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { TextTransformTool } from "@/components/tool/text-transform-tool";

type CaseMode =
  | "upper"
  | "lower"
  | "title"
  | "sentence"
  | "camel"
  | "pascal"
  | "snake"
  | "kebab"
  | "constant"
  | "alternating";

const MODE_LABELS: Record<CaseMode, string> = {
  upper: "UPPERCASE",
  lower: "lowercase",
  title: "Title Case",
  sentence: "Sentence case",
  camel: "camelCase",
  pascal: "PascalCase",
  snake: "snake_case",
  kebab: "kebab-case",
  constant: "CONSTANT_CASE",
  alternating: "aLtErNaTiNg",
};

/** Modes that collapse each line into a single identifier token. */
const IDENTIFIER_MODES = new Set<CaseMode>(["camel", "pascal", "snake", "kebab", "constant"]);

/** Splits a string into words, honouring camelCase and acronym boundaries. */
function toWords(s: string): string[] {
  return s
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);
}

const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();

function toTitleCase(s: string): string {
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

function toSentenceCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/(^\s*[a-z])|([.!?]\s+[a-z])|(\n\s*[a-z])/g, (m) => m.toUpperCase());
}

function toAlternating(s: string): string {
  let upper = false; // first letter lowercase
  let out = "";
  for (const ch of s) {
    if (/[a-z]/i.test(ch)) {
      out += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = !upper;
    } else {
      out += ch;
    }
  }
  return out;
}

function convertLine(line: string, mode: CaseMode): string {
  const words = toWords(line);
  if (words.length === 0) return "";
  switch (mode) {
    case "camel":
      return words.map((w, i) => (i === 0 ? w.toLowerCase() : cap(w))).join("");
    case "pascal":
      return words.map(cap).join("");
    case "snake":
      return words.map((w) => w.toLowerCase()).join("_");
    case "kebab":
      return words.map((w) => w.toLowerCase()).join("-");
    case "constant":
      return words.map((w) => w.toUpperCase()).join("_");
    default:
      return line;
  }
}

function convert(input: string, mode: CaseMode): string {
  switch (mode) {
    case "upper":
      return input.toUpperCase();
    case "lower":
      return input.toLowerCase();
    case "title":
      return toTitleCase(input);
    case "sentence":
      return toSentenceCase(input);
    case "alternating":
      return toAlternating(input);
    default:
      // Identifier styles: convert each line independently so lists keep their rows.
      return input.split(/\r?\n/).map((line) => convertLine(line, mode)).join("\n");
  }
}

export function CaseConverterClient() {
  const [mode, setMode] = useState<CaseMode>("upper");

  return (
    <TextTransformTool
      transform={(input) => convert(input, mode)}
      watch={[mode]}
      inputLabel="Your text"
      outputLabel={MODE_LABELS[mode]}
      inputPlaceholder="Type or paste text to re-case…"
      monospaceOutput={IDENTIFIER_MODES.has(mode)}
      download={{ filename: "converted.txt" }}
      acceptFile=".txt,.md,.csv"
      controls={
        <div className="flex flex-col gap-1">
          <Label htmlFor="case-mode">Case style</Label>
          <Select
            id="case-mode"
            value={mode}
            onChange={(e) => setMode(e.target.value as CaseMode)}
            className="w-60"
          >
            {(Object.keys(MODE_LABELS) as CaseMode[]).map((m) => (
              <option key={m} value={m}>
                {MODE_LABELS[m]}
              </option>
            ))}
          </Select>
        </div>
      }
    />
  );
}

"use client";

import { useState } from "react";
import { TextTransformTool } from "@/components/tool/text-transform-tool";
import { Button } from "@/components/ui/button";

type Direction = "json2csv" | "csv2json";

export function JsonCsvClient() {
  const [dir, setDir] = useState<Direction>("json2csv");

  const transform = async (input: string): Promise<string> => {
    const Papa = await import("papaparse");

    if (dir === "json2csv") {
      let data: unknown;
      try {
        data = JSON.parse(input);
      } catch (e) {
        throw new Error(`Invalid JSON — ${e instanceof Error ? e.message : String(e)}`);
      }
      if (!Array.isArray(data)) {
        throw new Error(
          'JSON must be an array of objects, e.g. [{"name":"Ada","age":36},{"name":"Alan","age":41}].',
        );
      }
      if (data.length === 0) {
        throw new Error("The JSON array is empty — there is nothing to convert.");
      }
      return Papa.unparse(data as object[]);
    }

    // CSV → JSON
    const result = Papa.parse<Record<string, unknown>>(input.trim(), {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });
    if (result.errors.length > 0) {
      const first = result.errors[0];
      const where = typeof first.row === "number" ? ` (row ${first.row + 1})` : "";
      throw new Error(`CSV parse error: ${first.message}${where}`);
    }
    return JSON.stringify(result.data, null, 2);
  };

  return (
    <TextTransformTool
      transform={transform}
      watch={[dir]}
      controls={
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-foreground">Direction</span>
          <Button
            variant={dir === "json2csv" ? "primary" : "outline"}
            size="sm"
            onClick={() => setDir("json2csv")}
          >
            JSON → CSV
          </Button>
          <Button
            variant={dir === "csv2json" ? "primary" : "outline"}
            size="sm"
            onClick={() => setDir("csv2json")}
          >
            CSV → JSON
          </Button>
        </div>
      }
      inputLabel={dir === "json2csv" ? "JSON input (array of objects)" : "CSV input"}
      outputLabel={dir === "json2csv" ? "CSV output" : "JSON output"}
      inputPlaceholder={
        dir === "json2csv"
          ? '[\n  {"name": "Ada", "role": "dev"},\n  {"name": "Alan", "role": "math"}\n]'
          : "name,role\nAda,dev\nAlan,math"
      }
      emptyOutput={
        dir === "json2csv" ? "The CSV will appear here…" : "The JSON array will appear here…"
      }
      download={
        dir === "json2csv"
          ? { filename: "data.csv", mime: "text/csv" }
          : { filename: "data.json", mime: "application/json" }
      }
      acceptFile=".json,.csv,.txt"
    />
  );
}

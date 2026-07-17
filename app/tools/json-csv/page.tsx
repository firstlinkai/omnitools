import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { JsonCsvClient } from "./json-csv-client";
import content from "./content";

export const metadata: Metadata = {
  title: "JSON to CSV",
  description: "Convert JSON arrays to CSV and back, in both directions.",
};

export default function Page() {
  return (
    <ToolPage slug="json-csv" content={content}>
      <JsonCsvClient />
    </ToolPage>
  );
}

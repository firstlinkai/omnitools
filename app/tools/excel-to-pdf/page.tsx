import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ExcelToPdfClient } from "./excel-to-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Excel to PDF",
  description:
    "Convert an Excel (.xlsx) sheet into a clean tabular PDF. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="excel-to-pdf" content={content}>
      <ExcelToPdfClient />
    </ToolPage>
  );
}

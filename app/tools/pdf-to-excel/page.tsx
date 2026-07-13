import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PdfToExcelClient } from "./pdf-to-excel-client";

export const metadata: Metadata = {
  title: "PDF to Excel",
  description:
    "Extract tables from a PDF into a spreadsheet-ready CSV. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-to-excel">
      <PdfToExcelClient />
    </ToolPage>
  );
}

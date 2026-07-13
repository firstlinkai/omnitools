import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { DocumentConverterClient } from "./document-converter-client";

export const metadata: Metadata = {
  title: "Document Converter",
  description: "Convert between Markdown, HTML, and plain text. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="document-converter">
      <DocumentConverterClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PdfToHtmlClient } from "./pdf-to-html-client";

export const metadata: Metadata = {
  title: "PDF to HTML",
  description:
    "Convert a PDF into a clean, standalone HTML document. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-to-html">
      <PdfToHtmlClient />
    </ToolPage>
  );
}

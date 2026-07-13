import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PdfToWordClient } from "./pdf-to-word-client";
import content from "./content";

export const metadata: Metadata = {
  title: "PDF to Word",
  description:
    "Extract a PDF's text into an editable Word (.docx) document. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-to-word" content={content}>
      <PdfToWordClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PdfToWordClient } from "./pdf-to-word-client";

export const metadata: Metadata = {
  title: "PDF to Word",
  description:
    "Extract a PDF's text into an editable Word (.docx) document. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-to-word">
      <PdfToWordClient />
    </ToolPage>
  );
}

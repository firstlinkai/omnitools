import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ExtractPdfTextClient } from "./extract-pdf-text-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Extract Text from PDF",
  description:
    "Pull all the selectable text out of a PDF into plain text. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="extract-pdf-text" content={content}>
      <ExtractPdfTextClient />
    </ToolPage>
  );
}

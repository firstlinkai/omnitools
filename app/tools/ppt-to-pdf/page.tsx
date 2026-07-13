import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PptToPdfClient } from "./ppt-to-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "PPT to PDF",
  description:
    "Convert the text of a PowerPoint (.pptx) deck into a clean PDF, one page per slide. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="ppt-to-pdf" content={content}>
      <PptToPdfClient />
    </ToolPage>
  );
}

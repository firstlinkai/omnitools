import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ExtractPdfImagesClient } from "./extract-pdf-images-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Extract Images from PDF",
  description:
    "Pull the embedded images out of a PDF and download them. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="extract-pdf-images" content={content}>
      <ExtractPdfImagesClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PdfToImagesClient } from "../_shared/pdf-to-images-client";
import content from "./content";

export const metadata: Metadata = {
  title: "PDF to PNG",
  description:
    "Render every PDF page to a crisp, lossless PNG. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-to-png" content={content}>
      <PdfToImagesClient format="image/png" ext="png" />
    </ToolPage>
  );
}

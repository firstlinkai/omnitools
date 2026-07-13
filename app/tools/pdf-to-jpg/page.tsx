import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PdfToImagesClient } from "../_shared/pdf-to-images-client";
import content from "./content";

export const metadata: Metadata = {
  title: "PDF to JPG",
  description:
    "Render every PDF page to a downloadable JPG image. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-to-jpg" content={content}>
      <PdfToImagesClient format="image/jpeg" ext="jpg" />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { WatermarkPdfClient } from "./watermark-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Watermark PDF",
  description:
    "Stamp text or an image watermark across every page of a PDF. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="watermark-pdf" content={content}>
      <WatermarkPdfClient />
    </ToolPage>
  );
}

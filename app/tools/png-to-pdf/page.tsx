import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImagesToPdfClient } from "../_shared/images-to-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "PNG to PDF",
  description:
    "Combine PNG images into a single multi-page PDF. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="png-to-pdf" content={content}>
      <ImagesToPdfClient
        accept="image/png,.png"
        hint="Drop one or more PNGs. Reorder them, then export a single PDF."
      />
    </ToolPage>
  );
}

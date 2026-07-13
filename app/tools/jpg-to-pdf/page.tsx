import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImagesToPdfClient } from "../_shared/images-to-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "JPG to PDF",
  description:
    "Combine JPG photos into a single multi-page PDF. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="jpg-to-pdf" content={content}>
      <ImagesToPdfClient
        accept="image/jpeg,.jpg,.jpeg"
        hint="Drop one or more JPGs. Reorder them, then export a single PDF."
      />
    </ToolPage>
  );
}

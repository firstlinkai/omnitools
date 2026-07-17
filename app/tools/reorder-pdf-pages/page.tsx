import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ReorderPdfPagesClient } from "./reorder-pdf-pages-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Reorder PDF Pages",
  description:
    "Drag PDF pages into a new order and export the rearranged file. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="reorder-pdf-pages" content={content}>
      <ReorderPdfPagesClient />
    </ToolPage>
  );
}

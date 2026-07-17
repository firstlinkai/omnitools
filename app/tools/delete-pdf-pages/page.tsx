import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { DeletePdfPagesClient } from "./delete-pdf-pages-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Delete PDF Pages",
  description:
    "Remove unwanted pages from a PDF and download the slimmed-down file. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="delete-pdf-pages" content={content}>
      <DeletePdfPagesClient />
    </ToolPage>
  );
}

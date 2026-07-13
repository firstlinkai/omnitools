import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { WordToPdfClient } from "./word-to-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Word to PDF",
  description:
    "Convert the text of a Word (.docx) document into a clean PDF. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="word-to-pdf" content={content}>
      <WordToPdfClient />
    </ToolPage>
  );
}

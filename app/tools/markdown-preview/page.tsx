import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { MarkdownPreviewClient } from "./markdown-preview-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Markdown Preview",
  description: "Write Markdown and see the rendered HTML live.",
};

export default function Page() {
  return (
    <ToolPage slug="markdown-preview" content={content}>
      <MarkdownPreviewClient />
    </ToolPage>
  );
}

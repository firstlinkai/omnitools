import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SplitTextClient } from "./split-text-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Split a Text",
  description: "Chop text into blocks by character count, word count, or delimiter.",
};

export default function Page() {
  return (
    <ToolPage slug="split-text" content={content}>
      <SplitTextClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { DiffCheckerClient } from "./diff-checker-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Diff Checker",
  description: "Compare two blocks of text and highlight what changed.",
};

export default function Page() {
  return (
    <ToolPage slug="diff-checker" content={content}>
      <DiffCheckerClient />
    </ToolPage>
  );
}

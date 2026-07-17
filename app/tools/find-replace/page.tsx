import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { FindReplaceClient } from "./find-replace-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Find & Replace",
  description: "Find and replace text, with optional regex and case sensitivity.",
};

export default function Page() {
  return (
    <ToolPage slug="find-replace" content={content}>
      <FindReplaceClient />
    </ToolPage>
  );
}

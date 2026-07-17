import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SqlFormatterClient } from "./sql-formatter-client";
import content from "./content";

export const metadata: Metadata = {
  title: "SQL Formatter",
  description: "Beautify and indent messy SQL into a readable query.",
};

export default function Page() {
  return (
    <ToolPage slug="sql-formatter" content={content}>
      <SqlFormatterClient />
    </ToolPage>
  );
}

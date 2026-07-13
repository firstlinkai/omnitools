import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ReadabilityClient } from "./readability-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Readability Analyzer",
  description:
    "Flesch-Kincaid scoring with dense-paragraph and key-phrase highlighting.",
};

export default function Page() {
  return (
    <ToolPage slug="readability" content={content}>
      <ReadabilityClient />
    </ToolPage>
  );
}

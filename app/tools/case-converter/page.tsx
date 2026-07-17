import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { CaseConverterClient } from "./case-converter-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Case Converter",
  description: "Convert text between UPPER, lower, Title, camelCase, snake_case and more.",
};

export default function Page() {
  return (
    <ToolPage slug="case-converter" content={content}>
      <CaseConverterClient />
    </ToolPage>
  );
}

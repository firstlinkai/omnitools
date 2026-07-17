import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { XmlToJsonClient } from "./xml-to-json-client";
import content from "./content";

export const metadata: Metadata = {
  title: "XML to JSON",
  description: "Convert XML into clean, readable JSON.",
};

export default function Page() {
  return (
    <ToolPage slug="xml-to-json" content={content}>
      <XmlToJsonClient />
    </ToolPage>
  );
}

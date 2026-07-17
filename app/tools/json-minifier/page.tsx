import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { JsonMinifierClient } from "./json-minifier-client";
import content from "./content";

export const metadata: Metadata = {
  title: "JSON Minifier",
  description: "Strip whitespace to compress JSON to the smallest valid form.",
};

export default function Page() {
  return (
    <ToolPage slug="json-minifier" content={content}>
      <JsonMinifierClient />
    </ToolPage>
  );
}

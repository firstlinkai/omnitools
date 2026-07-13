import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PrettifyJsonClient } from "./prettify-json-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Prettify JSON",
  description: "Validate, format, and color-code raw or minified JSON.",
};

export default function Page() {
  return (
    <ToolPage slug="prettify-json" content={content}>
      <PrettifyJsonClient />
    </ToolPage>
  );
}

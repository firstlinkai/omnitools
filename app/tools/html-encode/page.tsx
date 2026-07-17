import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { HtmlEncodeClient } from "./html-encode-client";
import content from "./content";

export const metadata: Metadata = {
  title: "HTML Entity Encoder",
  description: "Encode text to HTML entities or decode them back.",
};

export default function Page() {
  return (
    <ToolPage slug="html-encode" content={content}>
      <HtmlEncodeClient />
    </ToolPage>
  );
}

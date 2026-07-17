import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { UrlEncodeClient } from "./url-encode-client";
import content from "./content";

export const metadata: Metadata = {
  title: "URL Encoder / Decoder",
  description: "Percent-encode text for URLs or decode it back.",
};

export default function Page() {
  return (
    <ToolPage slug="url-encode" content={content}>
      <UrlEncodeClient />
    </ToolPage>
  );
}

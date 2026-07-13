import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { CompressPdfClient } from "./compress-pdf-client";

export const metadata: Metadata = {
  title: "Compress PDF",
  description:
    "Shrink a bulky PDF by rasterizing pages to compressed images. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="compress-pdf">
      <CompressPdfClient />
    </ToolPage>
  );
}

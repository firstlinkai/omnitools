import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { CompressPngClient } from "./compress-png-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Compress PNG",
  description:
    "Compress images and knock out a background color to transparency. 100% in your browser, nothing is uploaded.",
};

export default function Page() {
  return (
    <ToolPage slug="compress-png" content={content}>
      <CompressPngClient />
    </ToolPage>
  );
}

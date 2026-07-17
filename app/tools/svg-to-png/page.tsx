import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SvgToPngClient } from "./svg-to-png-client";
import content from "./content";

export const metadata: Metadata = {
  title: "SVG to PNG",
  description: "Rasterize an SVG to a PNG at any resolution.",
};

export default function Page() {
  return (
    <ToolPage slug="svg-to-png" content={content}>
      <SvgToPngClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "Color Filter Studio",
  description:
    "Apply grayscale, invert, and pixelate filters right on the canvas. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="color-filter-studio">
      <ComingSoonTool slug="color-filter-studio" />
    </ToolPage>
  );
}

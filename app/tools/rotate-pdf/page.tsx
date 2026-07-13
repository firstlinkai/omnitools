import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "Rotate PDF",
  description:
    "Fix sideways scans by rotating pages 90°, 180°, or 270°. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="rotate-pdf">
      <ComingSoonTool slug="rotate-pdf" />
    </ToolPage>
  );
}

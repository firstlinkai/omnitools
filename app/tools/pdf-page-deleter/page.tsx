import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "PDF Page Deleter",
  description:
    "Drop pages you don't need and download a slimmed-down PDF. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="pdf-page-deleter">
      <ComingSoonTool slug="pdf-page-deleter" />
    </ToolPage>
  );
}

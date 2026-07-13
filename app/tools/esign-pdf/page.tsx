import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "eSign PDF",
  description:
    "Draw or type a signature and stamp it anywhere on a PDF. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="esign-pdf">
      <ComingSoonTool slug="esign-pdf" />
    </ToolPage>
  );
}

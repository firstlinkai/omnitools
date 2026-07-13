import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "Meme Maker",
  description:
    "Add classic top-and-bottom text to any image and export a meme. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="meme-maker">
      <ComingSoonTool slug="meme-maker" />
    </ToolPage>
  );
}

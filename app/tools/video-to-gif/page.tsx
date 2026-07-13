import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "Video to GIF Converter",
  description:
    "Turn a short clip into a shareable animated GIF, frame by frame. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="video-to-gif">
      <ComingSoonTool slug="video-to-gif" />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ComingSoonTool } from "@/components/tool/coming-soon-tool";

export const metadata: Metadata = {
  title: "Mute Video",
  description:
    "Strip the audio track from a video without re-encoding the picture. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="mute-video">
      <ComingSoonTool slug="mute-video" />
    </ToolPage>
  );
}

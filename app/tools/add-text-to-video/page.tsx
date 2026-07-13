import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AddTextToVideoClient } from "./add-text-to-video-client";

export const metadata: Metadata = {
  title: "Add Text to Video",
  description: "Overlay a text caption onto a video. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="add-text-to-video">
      <AddTextToVideoClient />
    </ToolPage>
  );
}

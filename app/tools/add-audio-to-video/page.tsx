import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AddAudioToVideoClient } from "./add-audio-to-video-client";

export const metadata: Metadata = {
  title: "Add Audio to Video",
  description:
    "Lay a music or voiceover track over a video. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="add-audio-to-video">
      <AddAudioToVideoClient />
    </ToolPage>
  );
}

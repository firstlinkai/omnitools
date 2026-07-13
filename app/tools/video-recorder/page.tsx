import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { VideoRecorderClient } from "./video-recorder-client";

export const metadata: Metadata = {
  title: "Video Recorder",
  description:
    "Record video from your webcam with live preview. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="video-recorder">
      <VideoRecorderClient />
    </ToolPage>
  );
}

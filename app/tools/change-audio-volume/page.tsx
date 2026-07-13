import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ChangeAudioVolumeClient } from "./change-audio-volume-client";

export const metadata: Metadata = {
  title: "Change Volume",
  description:
    "Amplify or quiet an audio file and download the result. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="change-audio-volume">
      <ChangeAudioVolumeClient />
    </ToolPage>
  );
}

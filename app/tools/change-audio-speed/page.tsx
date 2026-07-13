import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ChangeAudioSpeedClient } from "./change-audio-speed-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Change Speed",
  description:
    "Speed up or slow down audio while preserving pitch. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="change-audio-speed" content={content}>
      <ChangeAudioSpeedClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AudioMixerClient } from "./audio-mixer-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Audio Mixer",
  description: "Layer multiple audio tracks together into a single mix.",
};

export default function Page() {
  return (
    <ToolPage slug="audio-mixer" content={content}>
      <AudioMixerClient />
    </ToolPage>
  );
}

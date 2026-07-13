import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ChangeAudioPitchClient } from "./change-audio-pitch-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Change Pitch",
  description:
    "Shift audio pitch up or down in semitones while preserving tempo. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="change-audio-pitch" content={content}>
      <ChangeAudioPitchClient />
    </ToolPage>
  );
}

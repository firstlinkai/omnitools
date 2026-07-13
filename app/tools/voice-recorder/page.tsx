import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { VoiceRecorderClient } from "./voice-recorder-client";

export const metadata: Metadata = {
  title: "Voice Recorder",
  description:
    "Record microphone audio with a live waveform and export it as a local audio file. 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="voice-recorder">
      <VoiceRecorderClient />
    </ToolPage>
  );
}

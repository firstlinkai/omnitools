import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AudioConverterClient } from "./audio-converter-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Audio Converter",
  description: "Convert audio between MP3, WAV, OGG, and M4A. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="audio-converter" content={content}>
      <AudioConverterClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AudioEqualizerClient } from "./audio-equalizer-client";

export const metadata: Metadata = {
  title: "Equalizer",
  description:
    "Shape audio with a multi-band graphic equalizer. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="audio-equalizer">
      <AudioEqualizerClient />
    </ToolPage>
  );
}

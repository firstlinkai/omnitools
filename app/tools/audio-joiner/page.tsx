import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AudioJoinerClient } from "./audio-joiner-client";

export const metadata: Metadata = {
  title: "Audio Joiner",
  description:
    "Join multiple audio clips into one file in the order you choose. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="audio-joiner">
      <AudioJoinerClient />
    </ToolPage>
  );
}

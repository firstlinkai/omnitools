import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ScreenRecorderClient } from "./screen-recorder-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Screen Recorder",
  description:
    "Record your screen with optional microphone, system audio, and webcam overlay. Runs 100% in your browser — nothing is uploaded.",
};

export default function Page() {
  return (
    <ToolPage slug="screen-recorder" content={content}>
      <ScreenRecorderClient />
    </ToolPage>
  );
}

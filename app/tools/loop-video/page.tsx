import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { LoopVideoClient } from "./loop-video-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Loop Video",
  description:
    "Repeat a clip a set number of times into one longer file. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="loop-video" content={content}>
      <LoopVideoClient />
    </ToolPage>
  );
}

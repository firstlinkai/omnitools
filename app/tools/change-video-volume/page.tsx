import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ChangeVideoVolumeClient } from "./change-video-volume-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Change Video Volume",
  description:
    "Boost or lower a video's audio track. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="change-video-volume" content={content}>
      <ChangeVideoVolumeClient />
    </ToolPage>
  );
}

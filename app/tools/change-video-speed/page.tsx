import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ChangeVideoSpeedClient } from "./change-video-speed-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Change Video Speed",
  description:
    "Speed up or slow down footage, keeping audio in sync. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="change-video-speed" content={content}>
      <ChangeVideoSpeedClient />
    </ToolPage>
  );
}

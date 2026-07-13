import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { RotateVideoClient } from "./rotate-video-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Rotate Video",
  description:
    "Rotate footage 90°, 180°, or 270° to fix orientation. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="rotate-video" content={content}>
      <RotateVideoClient />
    </ToolPage>
  );
}

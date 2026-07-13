import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ResizeVideoClient } from "./resize-video-client";

export const metadata: Metadata = {
  title: "Resize Video",
  description:
    "Scale a video to a new resolution or preset. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="resize-video">
      <ResizeVideoClient />
    </ToolPage>
  );
}

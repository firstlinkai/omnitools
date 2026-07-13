import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AddImageToVideoClient } from "./add-image-to-video-client";

export const metadata: Metadata = {
  title: "Add Image to Video",
  description:
    "Overlay a logo, watermark, or image onto the video frame. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="add-image-to-video">
      <AddImageToVideoClient />
    </ToolPage>
  );
}

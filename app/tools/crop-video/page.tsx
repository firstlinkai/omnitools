import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { CropVideoClient } from "./crop-video-client";

export const metadata: Metadata = {
  title: "Crop Video",
  description:
    "Crop a video to a rectangular region of the frame. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="crop-video">
      <CropVideoClient />
    </ToolPage>
  );
}

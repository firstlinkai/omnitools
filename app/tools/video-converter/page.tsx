import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { VideoConverterClient } from "./video-converter-client";

export const metadata: Metadata = {
  title: "Video Converter",
  description:
    "Convert between MP4, WebM, MOV, and MKV. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="video-converter">
      <VideoConverterClient />
    </ToolPage>
  );
}

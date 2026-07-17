import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { VideoToGifClient } from "./video-to-gif-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Video to GIF",
  description: "Turn a short video clip into a looping animated GIF.",
};

export default function Page() {
  return (
    <ToolPage slug="video-to-gif" content={content}>
      <VideoToGifClient />
    </ToolPage>
  );
}

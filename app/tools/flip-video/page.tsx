import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { FlipVideoClient } from "./flip-video-client";

export const metadata: Metadata = {
  title: "Flip Video",
  description:
    "Mirror a video horizontally or vertically. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="flip-video">
      <FlipVideoClient />
    </ToolPage>
  );
}

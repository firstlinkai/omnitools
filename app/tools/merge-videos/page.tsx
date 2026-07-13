import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { MergeVideosClient } from "./merge-videos-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Merge Videos",
  description:
    "Stitch multiple clips into one continuous video. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="merge-videos" content={content}>
      <MergeVideosClient />
    </ToolPage>
  );
}

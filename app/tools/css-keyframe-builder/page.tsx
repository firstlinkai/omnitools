import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { KeyframeClient } from "./keyframe-client";
import content from "./content";

export const metadata: Metadata = {
  title: "CSS Keyframe Builder",
  description: "Build animations on a visual timeline and export pure @keyframes CSS.",
};

export default function Page() {
  return (
    <ToolPage slug="css-keyframe-builder" content={content}>
      <KeyframeClient />
    </ToolPage>
  );
}

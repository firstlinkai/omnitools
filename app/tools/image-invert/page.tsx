import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImageInvertClient } from "./image-invert-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Invert Colors",
  description:
    "Invert the colors of an image to a photo negative, right in your browser. No uploads, no sign-up.",
};

export default function Page() {
  return (
    <ToolPage slug="image-invert" content={content}>
      <ImageInvertClient />
    </ToolPage>
  );
}

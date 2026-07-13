import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { CompressImageSizeClient } from "./compress-image-size-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Compress Image Size",
  description:
    "Shrink PNG, JPG, and WebP images with a live quality slider and side-by-side preview. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="compress-image-size" content={content}>
      <CompressImageSizeClient />
    </ToolPage>
  );
}

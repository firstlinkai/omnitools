import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImageCropperClient } from "./image-cropper-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Image Cropper",
  description:
    "Crop an image to any region or aspect ratio, right in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="image-cropper" content={content}>
      <ImageCropperClient />
    </ToolPage>
  );
}

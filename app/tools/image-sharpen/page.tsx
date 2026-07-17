import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImageSharpenClient } from "./image-sharpen-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Sharpen Image",
  description:
    "Apply a sharpening filter to bring out image detail, right in your browser. No uploads, no sign-up.",
};

export default function Page() {
  return (
    <ToolPage slug="image-sharpen" content={content}>
      <ImageSharpenClient />
    </ToolPage>
  );
}

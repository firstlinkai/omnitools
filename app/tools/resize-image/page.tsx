import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ResizeImageClient } from "./resize-image-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Resize Image",
  description:
    "Resize an image to exact pixels, a percentage, or a preset — right in your browser. No uploads, no sign-up.",
};

export default function Page() {
  return (
    <ToolPage slug="resize-image" content={content}>
      <ResizeImageClient />
    </ToolPage>
  );
}

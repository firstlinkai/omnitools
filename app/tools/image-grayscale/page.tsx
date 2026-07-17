import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImageGrayscaleClient } from "./image-grayscale-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Grayscale Converter",
  description:
    "Convert a color image to black and white in your browser. No uploads, no sign-up.",
};

export default function Page() {
  return (
    <ToolPage slug="image-grayscale" content={content}>
      <ImageGrayscaleClient />
    </ToolPage>
  );
}

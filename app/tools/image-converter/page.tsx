import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImageConverterClient } from "./image-converter-client";

export const metadata: Metadata = {
  title: "Image Converter",
  description:
    "Convert images between PNG, JPEG, and WebP. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="image-converter">
      <ImageConverterClient />
    </ToolPage>
  );
}

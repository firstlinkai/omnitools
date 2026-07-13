import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ImageFormatConverterClient } from "./image-format-converter-client";

export const metadata: Metadata = {
  title: "Image Format Converter",
  description:
    "Convert images between PNG, JPEG, and WebP with a single canvas re-encode. 100% in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="image-format-converter">
      <ImageFormatConverterClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ColorConverterClient } from "./color-converter-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Color Converter",
  description: "Convert a color between HEX, RGB, HSL and more.",
};

export default function Page() {
  return (
    <ToolPage slug="color-converter" content={content}>
      <ColorConverterClient />
    </ToolPage>
  );
}

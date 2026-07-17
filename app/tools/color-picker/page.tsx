import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ColorPickerClient } from "./color-picker-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Color Picker",
  description:
    "Pick any color from an image and get its HEX, RGB and HSL values.",
};

export default function Page() {
  return (
    <ToolPage slug="color-picker" content={content}>
      <ColorPickerClient />
    </ToolPage>
  );
}

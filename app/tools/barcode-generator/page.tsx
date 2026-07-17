import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { BarcodeGeneratorClient } from "./barcode-generator-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Barcode Generator",
  description: "Generate 1D barcodes (Code128, EAN, UPC and more).",
};

export default function Page() {
  return (
    <ToolPage slug="barcode-generator" content={content}>
      <BarcodeGeneratorClient />
    </ToolPage>
  );
}

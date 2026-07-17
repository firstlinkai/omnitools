import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { QrCodeClient } from "./qr-code-client";
import content from "./content";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Turn any text or URL into a downloadable QR code.",
};

export default function Page() {
  return (
    <ToolPage slug="qr-code" content={content}>
      <QrCodeClient />
    </ToolPage>
  );
}

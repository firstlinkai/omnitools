import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { QrScannerClient } from "./qr-scanner-client";
import content from "./content";

export const metadata: Metadata = {
  title: "QR Code Scanner",
  description: "Read a QR code from an uploaded image.",
};

export default function Page() {
  return (
    <ToolPage slug="qr-scanner" content={content}>
      <QrScannerClient />
    </ToolPage>
  );
}

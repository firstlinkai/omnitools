import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ProtectPdfClient } from "./protect-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Protect PDF",
  description:
    "Password protect a PDF with real AES-256 encryption. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="protect-pdf" content={content}>
      <ProtectPdfClient />
    </ToolPage>
  );
}

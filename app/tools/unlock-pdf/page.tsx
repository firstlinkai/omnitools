import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { UnlockPdfClient } from "./unlock-pdf-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Unlock PDF",
  description:
    "Remove the password from a PDF so it opens without one. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="unlock-pdf" content={content}>
      <UnlockPdfClient />
    </ToolPage>
  );
}

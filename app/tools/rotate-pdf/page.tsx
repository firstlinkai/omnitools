import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { RotatePdfClient } from "./rotate-pdf-client";

export const metadata: Metadata = {
  title: "Rotate PDF",
  description:
    "Rotate PDF pages 90°, 180°, or 270° to fix sideways scans. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="rotate-pdf">
      <RotatePdfClient />
    </ToolPage>
  );
}

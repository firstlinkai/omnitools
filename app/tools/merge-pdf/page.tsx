import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { MergePdfClient } from "./merge-pdf-client";

export const metadata: Metadata = {
  title: "Merge PDF",
  description:
    "Combine multiple PDFs into one, in any order, entirely in your browser. No uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="merge-pdf">
      <MergePdfClient />
    </ToolPage>
  );
}

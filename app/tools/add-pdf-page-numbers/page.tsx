import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { AddPageNumbersClient } from "./add-page-numbers-client";

export const metadata: Metadata = {
  title: "Add Page Numbers",
  description:
    "Stamp page numbers onto a PDF with your choice of position and format. Runs 100% in your browser — no uploads.",
};

export default function Page() {
  return (
    <ToolPage slug="add-pdf-page-numbers">
      <AddPageNumbersClient />
    </ToolPage>
  );
}

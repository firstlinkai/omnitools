import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SortListClient } from "./sort-list-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Sort a List",
  description: "Sort multi-line text alphabetically, numerically, or reversed.",
};

export default function Page() {
  return (
    <ToolPage slug="sort-list" content={content}>
      <SortListClient />
    </ToolPage>
  );
}

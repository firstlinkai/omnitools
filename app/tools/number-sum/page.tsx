import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { NumberSumClient } from "./number-sum-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Number Sum",
  description: "Extract every number from messy text: sum, average, median, min, max.",
};

export default function Page() {
  return (
    <ToolPage slug="number-sum" content={content}>
      <NumberSumClient />
    </ToolPage>
  );
}

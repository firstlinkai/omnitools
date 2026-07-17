import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { UuidGeneratorClient } from "./uuid-generator-client";
import content from "./content";

export const metadata: Metadata = {
  title: "UUID Generator",
  description: "Generate random UUIDs (v4) individually or in bulk.",
};

export default function Page() {
  return (
    <ToolPage slug="uuid-generator" content={content}>
      <UuidGeneratorClient />
    </ToolPage>
  );
}

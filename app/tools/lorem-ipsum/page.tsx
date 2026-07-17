import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { LoremIpsumClient } from "./lorem-ipsum-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator",
  description: "Generate placeholder paragraphs, sentences or words.",
};

export default function Page() {
  return (
    <ToolPage slug="lorem-ipsum" content={content}>
      <LoremIpsumClient />
    </ToolPage>
  );
}

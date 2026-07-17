import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { SlugGeneratorClient } from "./slug-generator-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Slug Generator",
  description: "Turn any title into a clean, URL-friendly slug.",
};

export default function Page() {
  return (
    <ToolPage slug="slug-generator" content={content}>
      <SlugGeneratorClient />
    </ToolPage>
  );
}

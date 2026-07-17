import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { WordCounterClient } from "./word-counter-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Word & Character Counter",
  description: "Count words, characters, sentences and reading time as you type.",
};

export default function Page() {
  return (
    <ToolPage slug="word-counter" content={content}>
      <WordCounterClient />
    </ToolPage>
  );
}

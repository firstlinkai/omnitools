import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { FlashcardsClient } from "./flashcards-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Flashcard Studio",
  description: "Build decks and study with flip cards. Saved in your browser.",
};

export default function Page() {
  return (
    <ToolPage slug="flashcards" content={content}>
      <FlashcardsClient />
    </ToolPage>
  );
}

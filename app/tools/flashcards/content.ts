import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Flashcard Studio lets you build decks of flashcards and study them with 3D flip cards, right in your browser. Add cards one at a time or paste a whole batch, then run a study session that shuffles, tracks progress, and loops cards you missed until every one gets a 'Got it'. Your decks are saved automatically in your browser's local storage — no account and no sync. Nothing is uploaded, so your cards stay on your device.",
  steps: [
    {
      title: "Create a deck",
      body: "Click Create your first deck (or New deck) to start, or Load sample deck to see how it works. Give the deck a name in the editor.",
    },
    {
      title: "Add your cards",
      body: "Fill in a front and back for each card with Add card, or use Quick add to paste many at once — one per line in 'front :: back' format. The import reports how many were added and skipped.",
    },
    {
      title: "Start a study session",
      body: "Hit Study, optionally tick Shuffle, then Start studying. Cards appear one at a time and a progress bar tracks how far you are through the queue.",
    },
    {
      title: "Flip and grade each card",
      body: "Click the card or press Space to flip it. Choose Got it (ArrowRight) to keep going, or Again (ArrowLeft) to send the card to the back of the queue and see it again later.",
    },
    {
      title: "Finish and revisit",
      body: "When every card has been learned you get a summary with repeat count, and can Restart. Back on the deck list you can edit or delete decks anytime — all saved in your browser.",
    },
  ],
  useCases: [
    "Study vocabulary for a new language with flip cards",
    "Memorize terms and definitions for an exam",
    "Drill formulas, dates, or facts with spaced repetition-style repeats",
    "Paste a batch of question-and-answer pairs into a deck fast",
    "Build multiple subject decks and keep them in your browser",
    "Practice hands-free using keyboard shortcuts to flip and grade",
  ],
  faqs: [
    {
      q: "Is Flashcard Studio free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Where are my decks stored?",
      a: "In your browser's local storage on this device. They're never uploaded to a server, which also means they aren't synced across devices or backed up online — they live in the browser you created them in.",
    },
    {
      q: "Will I lose my decks if I clear my browser data?",
      a: "Yes. Because decks are kept in local storage, clearing your browser's site data or using a different browser or device will make them unavailable. Keep a copy of important cards elsewhere.",
    },
    {
      q: "How does the 'front :: back' quick add work?",
      a: "In Quick add, put one card per line with the front, then ::, then the back — for example 'la casa :: the house'. Lines missing the separator or either side are skipped and counted in the import report.",
    },
    {
      q: "What do Got it and Again do during study?",
      a: "Got it advances to the next card. Again re-queues the current card at the end so it comes back before the session ends, and the final summary counts how many repeats you needed.",
    },
  ],
};

export default content;

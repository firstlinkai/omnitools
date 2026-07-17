import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Word & Character Counter tallies your writing live as you type — words, characters with and without spaces, sentences, paragraphs, and lines. It also estimates reading and speaking time and shows your most frequent words, so you can shape a paragraph to fit a tweet, an essay limit, or a timed talk. Nothing is uploaded; every count is computed in your browser.",
  steps: [
    {
      title: "Add your text",
      body: "Type directly or paste into the text box, or click Load sample to see the counter in action. Stats recalculate on every keystroke.",
    },
    {
      title: "Read the core counts",
      body: "The Statistics panel shows words, characters, characters without spaces, sentences, paragraphs, and lines at a glance.",
    },
    {
      title: "Check reading and speaking time",
      body: "Reading time assumes about 200 words per minute and speaking time about 130 words per minute — handy for sizing blog posts or rehearsing a script.",
    },
    {
      title: "Scan the top words",
      body: "The Top words panel ranks your most-used words with a bar for each, so you can spot repetition and tighten your prose.",
    },
    {
      title: "Write to a target",
      body: "Watch the counts as you edit to hit a limit — 280 characters for a tweet, a word cap for an assignment, or a two-minute talk.",
    },
  ],
  useCases: [
    "Keep an essay or article under a word or character limit",
    "Fit a post within a platform's character cap",
    "Estimate how long a piece takes to read",
    "Time a speech or script against a target duration",
    "Spot overused words with the frequency list",
    "Check paragraph and sentence counts while editing",
  ],
  faqs: [
    {
      q: "Is the Word & Character Counter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. All counting happens locally in your browser as you type, so your text never leaves your device.",
    },
    {
      q: "How is a word counted?",
      a: "Text is split on any run of whitespace, so a word is any group of non-space characters. Leading and trailing spaces are ignored.",
    },
    {
      q: "How are sentences detected?",
      a: "Sentences are counted by terminators — periods, question marks, exclamation points, and ellipses. Unusual punctuation or abbreviations can shift the count slightly.",
    },
    {
      q: "How accurate are the reading and speaking times?",
      a: "They are estimates based on average rates of roughly 200 words per minute for reading and 130 for speaking. Your real pace will vary with the material and delivery.",
    },
  ],
};

export default content;

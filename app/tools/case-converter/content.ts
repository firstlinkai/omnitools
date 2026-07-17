import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Case Converter re-cases any text between ten styles — UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, and aLtErNaTiNg. Pick a style and the result updates instantly, ready to copy or download. Programmer styles like camelCase and snake_case convert each line into its own clean identifier, so lists convert row by row. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Paste your text",
      body: "Type or paste into the input box, or click Load file to pull in a .txt, .md, or .csv. The converted result appears on the right straight away.",
    },
    {
      title: "Choose a case style",
      body: "Open the Case style menu and pick from UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, or aLtErNaTiNg.",
    },
    {
      title: "See the live result",
      body: "The output pane relabels to the style you chose and recomputes on every keystroke and every style change, so you can compare options quickly.",
    },
    {
      title: "Understand identifier styles",
      body: "camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE split each line into words — even across existing camelCase boundaries — and rejoin them as one token per line, perfect for turning labels into variable names.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the result, or Download to save it as converted.txt. The footer shows how many characters went in and came out.",
    },
  ],
  useCases: [
    "Turn a heading into Title Case or Sentence case",
    "Shout or quiet text with UPPERCASE and lowercase",
    "Convert a label like \"User Full Name\" into camelCase or snake_case for code",
    "Build kebab-case slugs or CONSTANT_CASE config keys from plain words",
    "Normalize inconsistent casing pasted from different sources",
    "Create playful aLtErNaTiNg text for captions and memes",
  ],
  faqs: [
    {
      q: "Is Case Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. All conversion happens locally in your browser, so your text never leaves your device.",
    },
    {
      q: "How do the programmer cases handle multiple lines?",
      a: "camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE convert each line on its own, producing one identifier per line so pasted lists stay as separate rows.",
    },
    {
      q: "How does it split words for camelCase and snake_case?",
      a: "It breaks on spaces, punctuation, and existing camelCase or acronym boundaries. So \"parseHTMLString\" and \"parse HTML string\" both become the same words before re-casing.",
    },
    {
      q: "What is the difference between Title Case and Sentence case?",
      a: "Title Case capitalizes the first letter of every word. Sentence case lowercases the text and only capitalizes the first letter of each sentence and line.",
    },
  ],
};

export default content;

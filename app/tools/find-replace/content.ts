import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Find & Replace searches your text for a word, phrase, or pattern and swaps it for something else, showing the result and a live count of how many replacements were made. Turn on Match case, Whole word, or Regex mode for precise control, and use Replace all to change every match or just the first. In regex mode you can reference captured groups like $1 in the replacement, and invalid patterns are flagged cleanly instead of crashing. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Paste your text",
      body: "Drop the text you want to edit into the Input box. The Result updates live as you set up the find and replace.",
    },
    {
      title: "Enter find and replace terms",
      body: "Type what to look for in Find and what to swap it with in Replace with. Leave Replace with empty to simply delete every match.",
    },
    {
      title: "Fine-tune with toggles",
      body: "Enable Match case for case-sensitive matching, Whole word to avoid partial hits, and Replace all (on by default) to change every occurrence instead of only the first.",
    },
    {
      title: "Use regex for patterns",
      body: "Switch on Regex mode to match with a regular expression and reference captured groups in the replacement using $1, $2, and $&. Invalid patterns show a clear red message.",
    },
    {
      title: "Copy or download",
      body: "Check the replacement count under the panels, then Copy the result or Download it as replaced.txt.",
    },
  ],
  useCases: [
    "Rename a variable or term throughout a document",
    "Delete unwanted characters by replacing them with nothing",
    "Reformat data using regex capture groups",
    "Fix a repeated typo across a long article",
    "Swap straight quotes, dashes, or spacing conventions",
    "Bulk-edit lists, logs, or exported text",
  ],
  faqs: [
    {
      q: "Is Find & Replace free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. All searching and replacing happen locally in your browser, so your text never leaves your device.",
    },
    {
      q: "How does regex mode work?",
      a: "Your Find term is treated as a JavaScript regular expression, and the replacement can reference captured groups with $1, $2, or the whole match with $&. If the pattern is invalid, a red message explains the error instead of breaking.",
    },
    {
      q: "What does Whole word do?",
      a: "It wraps your search in word boundaries so it only matches complete words. Searching for \"cat\" then skips \"category\" and \"scatter\".",
    },
    {
      q: "Can I replace only the first match?",
      a: "Yes. Turn off Replace all and only the first occurrence is changed. The counter then shows 1 when a match is found.",
    },
  ],
};

export default content;

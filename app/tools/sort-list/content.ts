import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Sort a List reorders any multi-line text — one item per line — alphabetically, numerically, by length, in reverse, or shuffled at random. Toggle case-insensitive matching, whitespace trimming, duplicate removal, and empty-line stripping to clean the list as you sort it. The result updates live and shows how many lines went in versus came out. It all runs in your browser, so your list is never uploaded.",
  steps: [
    {
      title: "Paste your list",
      body: "Put one item per line in the Input box, or click Load sample to try a messy mixed example. The sorted result appears on the right immediately.",
    },
    {
      title: "Pick a sort mode",
      body: "Choose Alphabetical A-Z or Z-A, Numeric ascending or descending, Length (short to long), Reverse lines, or Shuffle. Numeric sort reads the first number in each line and sinks number-less lines to the bottom.",
    },
    {
      title: "Clean the list with toggles",
      body: "Enable Case-insensitive, Trim whitespace, Remove duplicates, and Remove empty lines in any combination. Sorting is stable, so equal items keep their original order.",
    },
    {
      title: "Reshuffle if needed",
      body: "In Shuffle mode a Shuffle button appears — click it to get a fresh random order each time using a Fisher-Yates shuffle.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the sorted lines, or Download to save them as sorted.txt. The footer shows the line count in and out.",
    },
  ],
  useCases: [
    "Alphabetize a list of names, tags, or imports",
    "Rank numbers, prices, or scores that are buried in text lines",
    "Remove duplicate entries from a pasted list",
    "Clean up a list by trimming whitespace and dropping blank lines",
    "Reverse the order of a log or changelog",
    "Randomly shuffle a list to pick an order or draw names",
  ],
  faqs: [
    {
      q: "Is Sort a List free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my list sent to a server?",
      a: "No. All sorting and cleaning happen locally in your browser, so your text never leaves your device.",
    },
    {
      q: "How does numeric sort decide the order?",
      a: "It reads the first number it finds in each line — including decimals and negatives — and sorts by that. Lines that contain no number sink to the bottom while keeping their relative order.",
    },
    {
      q: "Does sorting keep equal items in place?",
      a: "Yes. The sort is stable, so lines that compare equal stay in the order you pasted them. This makes the toggles predictable when values tie.",
    },
    {
      q: "Will it remember which lines were duplicates?",
      a: "Remove duplicates keeps the first occurrence of each line and drops later ones. With Case-insensitive on, entries that differ only in capitalization count as the same.",
    },
  ],
};

export default content;

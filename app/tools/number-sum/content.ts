import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Number Sum pulls every number out of messy text — expense logs, reports, chat messages — and instantly shows the count, sum, average, median, min, and max. It handles decimals, negatives, and thousands-separated values like 1,250, and lists every extracted number so you can check the pull. There's nothing to add up by hand and no spreadsheet to build. It all runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Paste your text",
      body: "Drop any text into the Input box — a receipt, a paragraph, a column of figures. Or click Load example to see it work on a sample expense log. Stats update live.",
    },
    {
      title: "Set how numbers are read",
      body: "Keep 'Treat commas as thousands separators' on so 1,250 reads as 1250, and 'Include negative numbers' on to count values like -45.99. Turn either off to change how the text is parsed.",
    },
    {
      title: "Read the six stat tiles",
      body: "Count, Sum, Average, Median, Min, and Max appear as tiles and recalculate as you edit. Numbers are formatted with grouping for easy reading.",
    },
    {
      title: "Check the extracted numbers",
      body: "Every number found is listed as a chip below so you can confirm nothing unexpected was picked up. Large sets show the first 500 with a note.",
    },
    {
      title: "Copy the results",
      body: "Use Copy list to grab the extracted numbers as a comma-separated line, or Copy stats to grab the full summary of all six statistics.",
    },
  ],
  useCases: [
    "Total a pasted expense log or receipt without a calculator",
    "Get the average and median of a column of figures",
    "Find the min and max value hidden in a report",
    "Sum quantities scattered across chat messages or notes",
    "Sanity-check that commas are being read as thousands, not new numbers",
    "Count how many numeric values appear in a block of text",
  ],
  faqs: [
    {
      q: "Is Number Sum free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text uploaded anywhere?",
      a: "No. Number extraction and all the statistics are computed locally in your browser, so your text never leaves your device.",
    },
    {
      q: "How does it treat 1,250 — one number or two?",
      a: "With 'Treat commas as thousands separators' enabled (the default), 1,250 is read as the single number 1250. Turn the option off if your commas separate distinct values instead.",
    },
    {
      q: "Does it pick up negative numbers?",
      a: "Yes, when 'Include negative numbers' is on. A value like -45.99 is counted as negative; turn the option off to treat the minus sign as ordinary punctuation.",
    },
    {
      q: "How is the median calculated?",
      a: "The numbers are sorted and the middle value is taken. With an even count, the median is the average of the two middle values.",
    },
  ],
};

export default content;

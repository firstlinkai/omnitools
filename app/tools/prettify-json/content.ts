import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Prettify JSON validates, formats, and color-codes raw or minified JSON so you can actually read it. Paste a blob, pick an indent style, and see a clean, syntax-highlighted result instantly — or switch to Minified to strip every space for the smallest possible output. If the JSON is broken, you get the parser's message plus the exact line and column so you can fix it fast. Everything runs in your browser, so your data is never uploaded.",
  steps: [
    {
      title: "Paste your JSON",
      body: "Drop raw, minified, or messy JSON into the Input box on the left. Or click Load sample to try it with a realistic example. Formatting happens live as you type.",
    },
    {
      title: "Choose an indent style",
      body: "Pick 2 spaces, 4 spaces, or Tab for pretty output — or Minified to collapse everything onto one line. The formatted, color-coded result appears on the right.",
    },
    {
      title: "Sort keys if you want a canonical shape",
      body: "Tick Sort keys to alphabetize every object's keys recursively (arrays keep their order). This is handy for diffing two objects or producing stable, comparable output.",
    },
    {
      title: "Fix any errors it flags",
      body: "If the JSON is invalid, the output panel shows the parser message and the line and column where parsing failed, so you can jump straight to the problem.",
    },
    {
      title: "Copy or download the result",
      body: "Use Copy to grab the formatted text, or Download to save it as formatted.json. The panel also shows the byte size in and out.",
    },
  ],
  useCases: [
    "Make a minified API response readable while debugging",
    "Validate that a config or payload is well-formed JSON before shipping it",
    "Minify JSON to shrink a request body or config file",
    "Alphabetize keys to produce a stable shape for clean diffs",
    "Pinpoint the exact line and column of a syntax error",
    "Reformat copied JSON to a consistent 2-space or tab style",
  ],
  faqs: [
    {
      q: "Is Prettify JSON free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my JSON uploaded to a server?",
      a: "No. Parsing, formatting, and highlighting all run locally in your browser with the built-in JSON engine, so your data never leaves your device.",
    },
    {
      q: "What does Sort keys do to arrays?",
      a: "Nothing — arrays keep their original order. Sort keys only alphabetizes the keys inside objects, and it does so recursively at every level of nesting.",
    },
    {
      q: "Why does it say my JSON is invalid?",
      a: "The tool uses strict JSON rules, so trailing commas, single quotes, comments, and unquoted keys all fail. The error message and the line and column tell you exactly where to look.",
    },
    {
      q: "Can it handle very large JSON?",
      a: "Yes, within your browser's memory. Because nothing is uploaded, huge files simply use more local memory; formatting stays instant for typical payloads.",
    },
  ],
};

export default content;

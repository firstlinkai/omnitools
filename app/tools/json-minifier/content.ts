import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "JSON Minifier strips every unnecessary space, tab, and line break from your JSON, re-serializing it into the smallest valid form — perfect for shrinking config files, API payloads, and embedded data. It parses the input first, so you also get instant validation: malformed JSON shows a clear error instead of silently breaking. Flip to Prettify mode when you need the readable, indented version back. Everything runs in your browser, so your data is never uploaded.",
  steps: [
    {
      title: "Paste your JSON",
      body: "Drop raw or already-formatted JSON into the input box, or use Load file to open a .json file from your device. The result updates as you type.",
    },
    {
      title: "Choose Minify or Prettify",
      body: "Minify (the default) removes all insignificant whitespace for the most compact output. Prettify re-indents the same data with two spaces when you need it human-readable again.",
    },
    {
      title: "Watch for validation errors",
      body: "If the JSON is invalid, a red message explains what went wrong so you can fix the offending bracket, comma, or quote before minifying.",
    },
    {
      title: "Check the size savings",
      body: "The footer shows characters in versus out, so you can see exactly how much smaller the minified version is.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the result, or Download to save it as minified.json (or formatted.json in Prettify mode).",
    },
  ],
  useCases: [
    "Shrink JSON config or data files before committing or shipping them",
    "Compress API request and response bodies to reduce payload size",
    "Inline JSON into a single-line environment variable or data attribute",
    "Validate that a snippet is well-formed JSON before using it",
    "Reformat minified JSON back into readable, indented text",
    "Prepare compact JSON for embedding in HTML, scripts, or QR codes",
  ],
  faqs: [
    {
      q: "Is JSON Minifier free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my JSON sent to a server?",
      a: "No. Parsing and minifying happen entirely in your browser using the built-in JSON engine, so your data never leaves your device.",
    },
    {
      q: "Does minifying change my data?",
      a: "No. Only whitespace between tokens is removed. Keys, values, arrays, and object structure are preserved exactly — it is the same JSON, just more compact.",
    },
    {
      q: "What happens if my JSON is invalid?",
      a: "The tool parses your input first, so invalid JSON produces a clear error message describing the problem instead of returning broken output.",
    },
    {
      q: "Can I get the formatted version back?",
      a: "Yes. Switch to Prettify mode and the same data is re-indented with two spaces, making minifying reversible for readability.",
    },
  ],
};

export default content;

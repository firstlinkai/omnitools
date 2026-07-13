import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Format Converter turns data between JSON, YAML, CSV, and Markdown tables in one step. Pick a source and target format, paste your data, and the converted output appears instantly — with a Swap button to reverse the direction and feed the result back in. Tabular targets like CSV and Markdown expect an array of objects, and any parse error is shown clearly. Everything runs in your browser, so your data is never uploaded.",
  steps: [
    {
      title: "Choose source and target formats",
      body: "Set the Source dropdown to what you're pasting and the Target dropdown to what you want out — any pairing of JSON, YAML, CSV, and Markdown table works.",
    },
    {
      title: "Paste your data",
      body: "Put your data into the Input box on the left, or click Load example to see a sample in the current source format. Conversion runs live as you type.",
    },
    {
      title: "Read the converted output",
      body: "The result appears on the right in the target format. If parsing fails, a clear 'Conversion failed' message explains what went wrong so you can fix the input.",
    },
    {
      title: "Swap to reverse the direction",
      body: "Click the swap button between the dropdowns to flip source and target. If the output was valid, it's loaded back into the input so you can round-trip a conversion.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the output, or Download to save it with the right extension and file type for the target format.",
    },
  ],
  useCases: [
    "Convert a JSON API response into a readable YAML config",
    "Turn a CSV export into a JSON array for code",
    "Generate a Markdown table from JSON to drop into docs or a README",
    "Reshape YAML into CSV for a spreadsheet",
    "Round-trip data between two formats using Swap to verify it survives",
    "Paste a Markdown table and pull the data back out as JSON",
  ],
  faqs: [
    {
      q: "Is Format Converter free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my data sent to a server?",
      a: "No. Parsing and serializing between formats happen entirely in your browser, so your data never leaves your device.",
    },
    {
      q: "Why do CSV and Markdown outputs fail on my data?",
      a: "CSV and Markdown tables need tabular data — typically an array of objects with consistent keys. Deeply nested or non-tabular structures can't be laid out as rows and columns, so pick JSON or YAML as the target instead.",
    },
    {
      q: "What does the Swap button do?",
      a: "It flips the source and target formats and, when the current output is valid, loads that output back into the input box. That lets you convert one way and immediately convert back.",
    },
    {
      q: "Which formats can I convert between?",
      a: "Any combination of JSON, YAML, CSV, and Markdown tables, in either direction. Just set the source to what you have and the target to what you need.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "URL Encoder / Decoder percent-encodes text so it can travel safely inside a URL, and decodes percent-encoded text back to plain readable form. Switch between Encode and Decode with one click, and choose Component to escape a single query value or path segment, or Whole URL to encode a full address while leaving structural characters like : / ? & intact. Malformed input shows a friendly error instead of crashing. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Pick Encode or Decode",
      body: "Choose Encode to turn text into percent-encoded form, or Decode to turn it back. The labels update so you always know which side you're on.",
    },
    {
      title: "Choose the scope",
      body: "Component uses encodeURIComponent, escaping reserved characters like & = ? / — ideal for a single query parameter or path piece. Whole URL uses encodeURI, which preserves the characters that give a URL its structure.",
    },
    {
      title: "Enter your text",
      body: "Type or paste into the input box, or use Load file to open a .txt file. The result updates live as you type.",
    },
    {
      title: "Fix decode errors",
      body: "Decoding text with a stray % or an incomplete %XX escape shows a red message so you can correct the malformed sequence.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the result, or Download to save it as encoded.txt or decoded.txt.",
    },
  ],
  useCases: [
    "Encode a query parameter value that contains spaces, & or = signs",
    "Decode a percent-encoded URL to read what it actually points to",
    "Build safe links with names, search terms, or filters in the query string",
    "Escape a path segment that includes special characters",
    "Encode an entire URL while keeping its scheme, host, and separators intact",
    "Inspect redirect or tracking URLs by decoding their nested parameters",
  ],
  faqs: [
    {
      q: "Is URL Encoder / Decoder free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Encoding and decoding run entirely in your browser using its built-in URI functions, so your text never leaves your device.",
    },
    {
      q: "What's the difference between Component and Whole URL?",
      a: "Component (encodeURIComponent) escapes reserved characters such as & = ? and /, which is what you want for a single query value or path piece. Whole URL (encodeURI) leaves those structural characters alone so a complete URL stays usable.",
    },
    {
      q: "Why does decoding sometimes show an error?",
      a: "Percent-decoding fails when the text contains a lone % or an incomplete escape like %2 instead of %20. The error message points you to the malformed sequence to fix.",
    },
    {
      q: "Does it handle spaces and Unicode correctly?",
      a: "Yes. Spaces become %20 and Unicode characters are encoded as their UTF-8 byte sequences, so international text round-trips correctly when you decode it again.",
    },
  ],
};

export default content;

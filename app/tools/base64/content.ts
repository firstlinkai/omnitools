import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Base64 Encode / Decode converts text to Base64 and back with correct UTF-8 handling, so emoji, accents, and non-Latin scripts survive the round trip intact. Switch between Encode and Decode with one click, and turn on URL-safe mode to produce Base64 that uses - and _ with no padding — the variant used in tokens, JWTs, and query strings. Invalid Base64 shows a clear error instead of garbled output. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Pick Encode or Decode",
      body: "Choose Encode to turn plain text into Base64, or Decode to turn Base64 back into text. The input and output labels update to match.",
    },
    {
      title: "Enter your text",
      body: "Type or paste into the input box, or use Load file to open a .txt file. The result updates live as you go.",
    },
    {
      title: "Toggle URL-safe if needed",
      body: "Turn on URL-safe to use the -_ alphabet and drop = padding, which is required for URLs, cookies, and JWT segments. When decoding, the tool accepts both standard and URL-safe input and restores any missing padding.",
    },
    {
      title: "Handle errors",
      body: "If you try to decode text that isn't valid Base64, or the bytes aren't valid UTF-8, a red message explains exactly what went wrong.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the result, or Download to save it as encoded.txt or decoded.txt.",
    },
  ],
  useCases: [
    "Encode text for embedding in JSON, XML, or data URIs",
    "Decode a Base64 string from an API response or config file",
    "Read the payload of a JWT by decoding its URL-safe segments",
    "Prepare URL-safe tokens that travel cleanly in query strings",
    "Inspect Base64-encoded credentials or headers during debugging",
    "Convert text with emoji or accented characters without corruption",
  ],
  faqs: [
    {
      q: "Is Base64 Encode / Decode free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Encoding and decoding run entirely in your browser, so your text never leaves your device.",
    },
    {
      q: "Does it handle emoji and non-English characters?",
      a: "Yes. Text is encoded as UTF-8 before Base64, so emoji, accents, and non-Latin scripts round-trip correctly instead of breaking.",
    },
    {
      q: "What is URL-safe Base64?",
      a: "A variant that replaces + and / with - and _ and removes = padding, so the result is safe to drop into URLs, cookies, and JWTs. Toggle it on to encode that way; decoding accepts either variant.",
    },
    {
      q: "Why do I get an error when decoding?",
      a: "Decoding fails if the input contains characters outside the Base64 alphabet, has an invalid length, or produces bytes that aren't valid UTF-8 text. The error message tells you which case it is.",
    },
  ],
};

export default content;

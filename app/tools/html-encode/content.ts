import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "HTML Entity Encoder escapes the characters that break or exploit markup — &, <, >, \" and ' — into safe HTML entities, and decodes entities back to plain text. Switch between Encode and Decode with one click, and optionally convert every non-ASCII character to a numeric entity so your markup stays pure ASCII. Decoding understands both named entities like &amp; and numeric ones like &#38;. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Pick Encode or Decode",
      body: "Choose Encode to turn raw text into entity-escaped HTML, or Decode to turn entities back into readable text. The labels change to match.",
    },
    {
      title: "Enter your text",
      body: "Type or paste into the input box, or use Load file to open a .txt or .html file. The result updates live as you type.",
    },
    {
      title: "Optionally encode all non-ASCII",
      body: "In Encode mode, turn on 'Also encode all non-ASCII' to convert accents, emoji, and other characters into numeric entities like &#233; — useful when a document must stay strictly ASCII.",
    },
    {
      title: "Decode any entities",
      body: "Decode resolves both named entities (such as &amp;, &lt;, &copy;) and numeric ones (such as &#38; or &#x26;) back to the original characters.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the result, or Download to save it as a text file.",
    },
  ],
  useCases: [
    "Escape user input before inserting it into a web page to prevent XSS",
    "Show literal HTML tags in a tutorial or documentation code sample",
    "Decode entity-encoded text pulled from an RSS feed or API",
    "Force a document to pure ASCII by encoding accents and emoji",
    "Safely place text containing < > & inside an HTML attribute",
    "Clean up copied markup that arrived double-encoded",
  ],
  faqs: [
    {
      q: "Is HTML Entity Encoder free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Encoding and decoding happen entirely in your browser, so your text never leaves your device.",
    },
    {
      q: "Which characters get encoded?",
      a: "By default the five markup-significant characters — & < > \" and ' — are escaped. Turn on 'Also encode all non-ASCII' to additionally convert every character above ASCII into a numeric entity.",
    },
    {
      q: "Does decoding handle named and numeric entities?",
      a: "Yes. Decoding resolves named entities like &amp; and &copy; as well as numeric entities in decimal (&#38;) and hexadecimal (&#x26;) form.",
    },
    {
      q: "Is decoding safe from malicious HTML?",
      a: "Yes. Decoding reads entities as plain text rather than rendering markup, so scripts and tags in the input are never executed — you only get the decoded characters back.",
    },
  ],
};

export default content;

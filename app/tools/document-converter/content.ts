import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Document Converter translates text between Markdown, HTML, and plain text as you type, with side-by-side input and output panels. Paste content or drop a file, choose source and target formats, then copy or download the result. All parsing runs in your browser, so your documents never leave your device.",
  steps: [
    {
      title: "Choose source and target formats",
      body: "Set the Source dropdown to what you're pasting in — Markdown, HTML, or Plain text — and the Target to what you want out. The swap button flips the two and moves the current output into the input for a quick round-trip.",
    },
    {
      title: "Add your content",
      body: "Paste text into the input panel on the left, or drop a .txt, .md, or .html file to load it and auto-detect its source format. Try Load example to see a sample Markdown document.",
    },
    {
      title: "Watch the live conversion",
      body: "The output panel on the right updates instantly as you type or change formats — headings, bold, italic, inline code, links, and lists are carried across where the formats support them.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the converted text, or Download to save it with the right extension (.md, .html, or .txt). No conversion is uploaded — it all happens locally.",
    },
  ],
  useCases: [
    "Turn Markdown notes into clean HTML to paste into a CMS or email",
    "Strip HTML tags out of a snippet to get readable plain text",
    "Convert an HTML fragment back into tidy Markdown for a README",
    "Paste rich HTML and pull out just the words for a word count",
    "Reformat plain-text notes into HTML paragraphs for the web",
    "Quickly preview how Markdown will render as HTML",
  ],
  faqs: [
    {
      q: "Is Document Converter free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my document uploaded anywhere?",
      a: "No. All conversion runs in your browser as you type, and dropped files are read locally. Your text is never uploaded to a server.",
    },
    {
      q: "Which formats can I convert between?",
      a: "Any direction among Markdown, HTML, and plain text — for example Markdown to HTML, HTML to plain text, or HTML back to Markdown.",
    },
    {
      q: "Will complex documents convert perfectly?",
      a: "Conversion is best-effort and covers common elements like headings, bold, italic, inline code, links, lists, and paragraphs. Very complex HTML, tables, or unusual formatting may not survive with full fidelity.",
    },
    {
      q: "Can I load a file instead of pasting?",
      a: "Yes. Drop a .txt, .md, .markdown, .html, or .htm file onto the drop zone and its contents load into the input, with the source format detected from the file extension.",
    },
  ],
};

export default content;

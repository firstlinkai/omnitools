import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Split PDF turns a document into a thumbnail grid so you can pick exactly the pages you want and pull them into a new PDF. Select pages by clicking, or type a range like 1-3, 5, 8-10 to grab them all at once. Everything runs in your browser with pdfjs and pdf-lib, so the file is never uploaded.",
  steps: [
    {
      title: "Drop in your PDF",
      body: "Drag a PDF onto the drop zone or click to browse. Each page renders as a thumbnail one at a time, and a badge shows the rendering progress so you always know where it's up to.",
    },
    {
      title: "Pick the pages you need",
      body: "Click any thumbnail to select or deselect it — a checkmark marks the ones you've chosen. Use Select all, Clear, or Invert for quick bulk changes.",
    },
    {
      title: "Or type a page range",
      body: "Enter something like 1-3, 5, 8-10 in the Page range box and press Apply. The tool validates the range against the page count and selects those pages for you.",
    },
    {
      title: "Choose your output",
      body: "Pick One PDF with selected pages to combine them into a single file, or Each selected page as its own PDF to save every page separately.",
    },
    {
      title: "Extract and download",
      body: "Click Extract pages. A single combined PDF downloads instantly; separate pages download one after another, spaced out so your browser keeps all of them.",
    },
  ],
  useCases: [
    "Pull a single chapter or section out of a long report",
    "Separate a scanned batch back into individual documents",
    "Remove confidential pages before sharing a file",
    "Grab just the pages you need to email or print",
    "Break a merged PDF back into its original parts",
    "Extract the signature or form page from a larger document",
  ],
  faqs: [
    {
      q: "Is Split PDF free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Does my PDF get uploaded to a server?",
      a: "No. The file is read and split entirely in your browser using pdfjs and pdf-lib, so it never leaves your device.",
    },
    {
      q: "Can I extract each page as its own file?",
      a: "Yes. Choose \"Each selected page as its own PDF\" and every page you selected downloads as a separate file, named with its page number.",
    },
    {
      q: "How do page ranges work?",
      a: "Type comma-separated pages and ranges, like 1-3, 5, 8-10, then press Apply. Anything outside the document's page count is rejected with an error so you can fix it.",
    },
    {
      q: "Does splitting keep the original text and quality?",
      a: "Yes. Selected pages are copied intact into the new PDF, so text, fonts, and image quality are preserved exactly — nothing is rasterized or re-compressed.",
    },
  ],
};

export default content;

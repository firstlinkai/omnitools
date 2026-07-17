import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Delete PDF Pages lets you strip out the pages you don't want — blank scans, cover sheets, ads, or anything else — and download a clean, slimmed-down PDF. Every page appears as a thumbnail you simply click to mark for removal, so you can see exactly what you're cutting before you save. It runs entirely in your browser using pdfjs to preview and pdf-lib to rebuild the file, so your document never gets uploaded anywhere.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop a PDF onto the page or click to browse. Each page renders as a thumbnail, with a badge showing rendering progress for longer documents.",
    },
    {
      title: "Mark pages to delete",
      body: "Click any page to mark it for deletion — it dims and gets a red trash badge. Click again to keep it. A running count shows how many pages will be removed and how many will remain.",
    },
    {
      title: "Review the result",
      body: "Kept pages stay bright while deleted pages fade out, so you can confirm the final document at a glance before saving.",
    },
    {
      title: "Download the edited PDF",
      body: "Click Download PDF. The remaining pages are copied into a fresh document and it downloads instantly. You must keep at least one page.",
    },
  ],
  useCases: [
    "Remove blank pages left behind by a scanner",
    "Delete a cover sheet or fax header before sharing",
    "Cut advertising or filler pages from a downloaded document",
    "Trim a long report down to just the sections you need",
    "Drop duplicate pages from a merged PDF",
    "Clean up a contract by removing outdated appendices",
  ],
  faqs: [
    {
      q: "Is Delete PDF Pages free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to delete pages?",
      a: "No. Pages are rendered and rebuilt entirely in your browser with pdfjs and pdf-lib, so the file never leaves your device.",
    },
    {
      q: "Can I get the deleted pages back?",
      a: "The tool never changes your original file — it builds a new PDF with only the pages you kept. Your source file stays exactly as it was, so just re-open it to start over.",
    },
    {
      q: "Does deleting pages reduce the file size?",
      a: "Usually yes. Removing pages drops the content they held, so the downloaded PDF is typically smaller than the original.",
    },
    {
      q: "Can I delete every page?",
      a: "No — a PDF must have at least one page, so the download stays disabled if you've marked all of them for deletion.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Reorder PDF Pages lets you rearrange a document into the sequence you actually want — move a page to the front, swap two sections, or fix a scan that came out in the wrong order. Every page shows as a thumbnail you can drag into place, or nudge with left and right arrows, and a badge on each one shows its new position. It works entirely in your browser with pdfjs for previews and pdf-lib to rebuild the file, so nothing is ever uploaded.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop a PDF onto the page or click to browse. Each page renders as a thumbnail in its original order, with a progress badge for longer files.",
    },
    {
      title: "Drag pages into place",
      body: "Grab any page by its handle and drop it where you want it. The rest of the pages shuffle around it, and the position badge updates live.",
    },
    {
      title: "Or use the arrows",
      body: "Prefer precision? Use each page's left and right arrows to move it one slot at a time — handy for a single out-of-place page.",
    },
    {
      title: "Check the new order",
      body: "The number badge on each thumbnail shows its final position, and a 'was p3' label reminds you where it started. Restore original order resets everything if you change your mind.",
    },
    {
      title: "Download the reordered PDF",
      body: "Click Download reordered PDF. The pages are copied into a new document in your chosen order and it downloads instantly.",
    },
  ],
  useCases: [
    "Move an appendix or cover page to the front of a document",
    "Fix a double-sided scan that came out interleaved",
    "Put chapters back in the right sequence after merging files",
    "Rearrange slides exported to PDF into a better flow",
    "Swap two pages that were scanned in the wrong order",
    "Reorganize a photo album or portfolio PDF",
  ],
  faqs: [
    {
      q: "Is Reorder PDF Pages free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to reorder it?",
      a: "No. Pages are previewed and rearranged entirely in your browser with pdfjs and pdf-lib, so the file never leaves your device.",
    },
    {
      q: "Can I drag pages, or only use buttons?",
      a: "Both. You can drag any page onto a new spot, or use its left and right arrows to move it one position at a time — whichever you find easier.",
    },
    {
      q: "Does reordering change the page content or quality?",
      a: "No. Pages are copied intact into a new document, so their text, fonts, and image quality are identical to the original — only the order changes.",
    },
    {
      q: "Why is the download disabled?",
      a: "The download stays disabled until you've actually moved a page. If the order still matches the original, there's nothing new to save.",
    },
  ],
};

export default content;

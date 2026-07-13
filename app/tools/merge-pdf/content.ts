import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Merge PDF combines two or more PDFs into a single document in whatever order you choose. Add your files, drag them into place or nudge them up and down, then merge — all in your browser with pdf-lib, so nothing is ever uploaded. Page counts and total size are shown as you build the list.",
  steps: [
    {
      title: "Add two or more PDFs",
      body: "Drop your files onto the drop zone or click to browse. Each one appears in a list with its page count and size; unreadable or encrypted files are flagged so you can remove them.",
    },
    {
      title: "Put them in order",
      body: "Drag a file by its handle to reposition it, or use the up and down arrows. The numbered badges show the exact order the pages will appear in the merged file.",
    },
    {
      title: "Add more or remove files",
      body: "Use the smaller drop zone at the bottom of the list to add more PDFs at any time, and click the X on any file to take it out of the merge.",
    },
    {
      title: "Merge and download",
      body: "Once at least two valid PDFs are listed, click Merge. The combined PDF is assembled in memory and downloads as merged.pdf — no upload, no watermark.",
    },
  ],
  useCases: [
    "Combine separate chapters into one finished document",
    "Join scanned pages that came in as individual files",
    "Bundle an invoice, receipt, and cover letter into a single PDF",
    "Assemble a portfolio from several exported files",
    "Merge signed pages back into the original contract",
    "Stitch together handouts before printing or sharing",
  ],
  faqs: [
    {
      q: "Is Merge PDF free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are my PDFs uploaded anywhere?",
      a: "No. All merging happens locally in your browser with pdf-lib, so your files never leave your device.",
    },
    {
      q: "How many PDFs can I merge at once?",
      a: "You need at least two, and there's no fixed upper limit. Because everything runs on your device, very large sets simply use more memory.",
    },
    {
      q: "Can I control the order of the pages?",
      a: "Yes. Drag files to reorder them or use the up and down arrows. The merged PDF follows the order shown in the list, top to bottom.",
    },
    {
      q: "Why is one of my files flagged as unreadable?",
      a: "That file couldn't be parsed as a PDF, often because it's password-protected or corrupted. Remove it — or unlock it first — and the merge will proceed with the rest.",
    },
  ],
};

export default content;

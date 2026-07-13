import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PDF to JPG renders every page of a PDF into a separate JPG image you can download one at a time or all at once. Choose the resolution — 1x, 2x, or 3x — to balance sharpness against file size, and see each page appear as it finishes. It runs in your browser with pdfjs, so your PDF is never uploaded. JPG keeps files small, which makes it a great fit for photos, scans, and sharing.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop in a PDF or click to browse. Rendering starts automatically and each page shows up in the grid as it's converted.",
    },
    {
      title: "Pick a resolution",
      body: "Choose 1x, 2x, or 3x from the Resolution menu. Higher settings make sharper, larger images; changing it re-renders every page at the new scale.",
    },
    {
      title: "Download individual pages",
      body: "Each page has its own download button and shows its file size, so you can grab just the ones you need.",
    },
    {
      title: "Or download them all",
      body: "Click Download all to save every page as a JPG. Downloads are spaced out slightly so your browser reliably keeps every file.",
    },
  ],
  useCases: [
    "Turn a PDF page into an image to drop into a document or slide",
    "Post a page online where only images are accepted",
    "Save a scan as a photo you can view anywhere",
    "Extract product shots from a PDF catalogue",
    "Share a single page as a lightweight image instead of the whole file",
    "Create thumbnails or previews of each page",
  ],
  faqs: [
    {
      q: "Is PDF to JPG free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to convert it?",
      a: "No. Every page is rendered to an image locally in your browser with pdfjs, so the file never leaves your device.",
    },
    {
      q: "What's the difference between the 1x, 2x, and 3x options?",
      a: "They control how many pixels each page is rendered at. 1x is smallest and fastest, 2x is a sharp default, and 3x gives the most detail for zooming or printing at the cost of larger files.",
    },
    {
      q: "Can I download all the pages at once?",
      a: "Yes. Use Download all to save every page as its own JPG, or use the per-page buttons to grab only the ones you want.",
    },
    {
      q: "Should I choose JPG or PNG?",
      a: "JPG produces much smaller files and is ideal for photos, scans, and sharing. If you need lossless quality or transparency — for line art or diagrams — use the PDF to PNG tool instead.",
    },
  ],
};

export default content;

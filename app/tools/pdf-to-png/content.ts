import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PDF to PNG renders every page of a PDF into a crisp, lossless PNG image you can download individually or all together. Pick the resolution — 1x, 2x, or 3x — and watch each page appear in the grid as it's converted. It runs in your browser with pdfjs, so your PDF is never uploaded. PNG preserves sharp edges and quality perfectly, which makes it ideal for text, diagrams, and screenshots.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop in a PDF or click to browse. Conversion starts on its own and each page appears in the grid as it finishes rendering.",
    },
    {
      title: "Choose a resolution",
      body: "Select 1x, 2x, or 3x from the Resolution menu. Higher values give sharper, larger PNGs; switching re-renders every page at the new scale.",
    },
    {
      title: "Download single pages",
      body: "Every page shows its file size and has its own download button, so you can save exactly the pages you want.",
    },
    {
      title: "Or grab all of them",
      body: "Click Download all to save each page as a PNG. Downloads are staggered slightly so the browser doesn't drop any of them.",
    },
  ],
  useCases: [
    "Export a page with text or diagrams at pixel-sharp quality",
    "Capture a page as an image for a presentation or doc",
    "Save a form or certificate as a lossless image",
    "Turn chart or infographic pages into clean images",
    "Keep crisp edges on line art that JPG would blur",
    "Create high-quality page images for editing in a design tool",
  ],
  faqs: [
    {
      q: "Is PDF to PNG free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to convert it?",
      a: "No. Every page is rendered to a PNG locally in your browser with pdfjs, so the file never leaves your device.",
    },
    {
      q: "What do the 1x, 2x, and 3x settings do?",
      a: "They set the pixel scale each page is rendered at. 1x is smallest, 2x is a sharp default, and 3x gives the highest detail for zooming or printing — at the cost of larger files.",
    },
    {
      q: "Can I download every page at once?",
      a: "Yes. Download all saves each page as its own PNG, or you can use the per-page buttons to save only the ones you need.",
    },
    {
      q: "Should I pick PNG or JPG?",
      a: "PNG is lossless and keeps text, lines, and edges perfectly crisp, and it supports transparency — best for diagrams and screenshots. If you'd rather have much smaller files for photos or scans, use the PDF to JPG tool.",
    },
  ],
};

export default content;

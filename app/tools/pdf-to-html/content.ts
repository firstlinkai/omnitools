import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PDF to HTML converts the text of a PDF into a clean, standalone HTML page you can open in any browser or publish on the web. It reads each page, reconstructs the reading order line by line, and wraps the result in a single self-contained HTML file with one section per page and simple built-in styling. This converts the text flow, not the exact visual layout — fonts, images, columns, and positioning are simplified into a linear document. It all runs in your browser, so the PDF is never uploaded.",
  steps: [
    {
      title: "Select your PDF",
      body: "Drag a PDF onto the drop zone or click to browse. Text-based PDFs convert cleanly; scanned or image-only pages have no text to extract.",
    },
    {
      title: "Convert to HTML",
      body: "Click Convert to HTML. The tool reads every page in order, rebuilding each line of text and grouping it under a per-page section, with a live progress counter.",
    },
    {
      title: "Preview the result",
      body: "A preview shows the first 40 lines with page markers, plus the page and line counts, so you can confirm the text before you save.",
    },
    {
      title: "Download the HTML",
      body: "Click Download HTML to save one self-contained .html file, styled and ready to open in a browser, edit, or host anywhere.",
    },
  ],
  useCases: [
    "Publish the contents of a PDF as a simple web page",
    "Make a PDF's text readable and searchable in a browser",
    "Convert a PDF into HTML you can paste into a CMS or email",
    "Create an accessible, reflowable version of a fixed-layout PDF",
    "Extract clean HTML markup from a PDF for a website",
    "Turn a PDF handout into a shareable link-friendly page",
  ],
  faqs: [
    {
      q: "Is PDF to HTML free?",
      a: "Yes. It is completely free — no account, no watermark, and no sign-up, like all OmniTools tools.",
    },
    {
      q: "Is my PDF uploaded to convert it?",
      a: "No. The conversion runs entirely in your browser, so your PDF never leaves your device.",
    },
    {
      q: "Will the HTML match the PDF's layout exactly?",
      a: "No. It converts the text flow into a clean linear document, not a pixel-perfect copy — fonts, images, columns, and precise positioning are simplified into ordinary paragraphs and per-page sections.",
    },
    {
      q: "Is the HTML file self-contained?",
      a: "Yes. It's a single standalone .html file with its styling included, so you can open it directly in any browser or host it without extra assets.",
    },
    {
      q: "Nothing was extracted from my PDF — why?",
      a: "The PDF is likely a scan or uses images for its text, so there's no selectable text to convert. Run it through OCR first, then convert the output.",
    },
  ],
};

export default content;

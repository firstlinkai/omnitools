import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PPT to PDF converts the text of a PowerPoint (.pptx) deck into a clean, readable PDF with one page per slide. It reads the text from every slide, adds a slide-number heading, wraps the content to fit the page, and outputs a single PDF. This is a text-content conversion: slide themes, images, colors, and exact layout are not reproduced — you get the words from each slide in order. Everything runs in your browser, so your presentation is never uploaded.",
  steps: [
    {
      title: "Add your presentation",
      body: "Drag a .pptx file onto the drop zone or click to browse. The tool reads the slides locally and reports how many it found.",
    },
    {
      title: "Preview slide one",
      body: "Check the preview of the first slide's text to confirm the content extracted correctly before converting.",
    },
    {
      title: "Convert to PDF",
      body: "Click Convert to PDF. Each slide becomes its own page, headed by its slide number, with the text wrapped to fit cleanly.",
    },
    {
      title: "Download",
      body: "The PDF downloads automatically, named after your deck — a tidy, one-page-per-slide document ready to share or print.",
    },
  ],
  useCases: [
    "Share the content of a deck with people who don't have PowerPoint",
    "Create printable speaker notes or a text outline of a presentation",
    "Turn a slideshow into a readable PDF handout",
    "Extract all the wording from a deck into one document",
    "Make a lightweight, text-only PDF of a large presentation",
    "Archive the talking points of a deck in a portable format",
  ],
  faqs: [
    {
      q: "Is PPT to PDF free?",
      a: "Yes — free with no account, no watermark, and no sign-up, like every FreeTools tool.",
    },
    {
      q: "Is my presentation uploaded?",
      a: "No. The .pptx is read and converted entirely in your browser, so it never leaves your device.",
    },
    {
      q: "Will the PDF look like my slides?",
      a: "No. This converts the text of each slide into a clean, one-page-per-slide document — themes, backgrounds, images, colors, and exact layout are not reproduced. You get the wording, not a visual copy of the deck.",
    },
    {
      q: "Which PowerPoint format works?",
      a: "The modern .pptx format. The older .ppt format isn't supported — open it in PowerPoint and resave as .pptx first.",
    },
    {
      q: "What happens to images and charts on my slides?",
      a: "They're not included — only slide text is carried into the PDF. If you need the visuals, export to PDF from PowerPoint itself.",
    },
  ],
};

export default content;

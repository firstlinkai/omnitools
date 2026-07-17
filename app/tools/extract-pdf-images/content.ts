import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Extract Images from PDF turns each page of your document into a high-resolution PNG you can save individually or download together as a ZIP. It renders every page at 2x with pdfjs, so text and graphics stay crisp enough to reuse in slides, docs, or on the web. The whole process runs in your browser — the PDF is never uploaded — so it's a fast, private way to get picture versions of your pages.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop a PDF onto the page or click to browse. A badge tracks progress as each page is rendered to an image.",
    },
    {
      title: "Watch the pages render",
      body: "Each page is drawn onto a canvas at double resolution and appears as a PNG thumbnail as soon as it's ready.",
    },
    {
      title: "Download single pages",
      body: "Use the download icon on any page to save just that image as a PNG named after your file and its page number.",
    },
    {
      title: "Or grab everything as a ZIP",
      body: "Click Download all as ZIP to bundle every page image into a single archive, built entirely in your browser with JSZip.",
    },
  ],
  useCases: [
    "Turn PDF pages into PNGs for a slide deck or presentation",
    "Save a page as an image to embed on a web page",
    "Share a single page as a picture without sending the whole file",
    "Create image thumbnails of a document for a gallery",
    "Get a picture of a certificate or diploma page",
    "Export a poster or flyer PDF as an image for social media",
  ],
  faqs: [
    {
      q: "Is Extract Images from PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to extract images?",
      a: "No. Every page is rendered to an image entirely in your browser with pdfjs, and the ZIP is built locally with JSZip, so nothing ever leaves your device.",
    },
    {
      q: "Does it pull out the original embedded photos, or a picture of each page?",
      a: "It renders a high-resolution picture of each whole page — text, graphics, and photos combined. This is the most reliable approach and works on any PDF, rather than trying to isolate individual embedded image objects.",
    },
    {
      q: "What resolution are the images?",
      a: "Each page is rendered at 2x its native size, which keeps text sharp and the images large enough for print or on-screen use.",
    },
    {
      q: "What format are the images?",
      a: "Pages are saved as lossless PNG files, so there's no compression artefacting around text or fine lines.",
    },
  ],
};

export default content;

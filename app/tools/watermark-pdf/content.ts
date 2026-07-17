import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Watermark PDF stamps a text label or an image across every page of your document — perfect for marking files CONFIDENTIAL, DRAFT, or with your own logo. You control the wording, colour, size, opacity, rotation, and whether it sits once in the centre or repeats diagonally across the whole page, with a live preview of the first page as you tweak. It runs entirely in your browser using pdfjs for the preview and pdf-lib to write the watermark, so your PDF is never uploaded.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop a PDF onto the page or click to browse. The first page renders as a live preview you'll watermark against.",
    },
    {
      title: "Choose text or image",
      body: "Pick a text watermark and type your wording, or switch to Image and upload a PNG or JPG — a transparent PNG logo works best.",
    },
    {
      title: "Style it",
      body: "Adjust the font size and colour (or image size), then set the opacity and rotation. The preview updates instantly so you can dial in a subtle or bold look.",
    },
    {
      title: "Pick a placement",
      body: "Choose Tiled to repeat the watermark diagonally across the whole page, or Centered to place it once in the middle of every page.",
    },
    {
      title: "Download the watermarked PDF",
      body: "Click Download watermarked PDF. The watermark is drawn onto every page and the new file downloads instantly.",
    },
  ],
  useCases: [
    "Mark a document CONFIDENTIAL, DRAFT, or COPY before sharing",
    "Stamp your company logo across a proposal or report",
    "Add a 'SAMPLE' or 'SPECIMEN' overlay to a template",
    "Brand a PDF portfolio or invoice with your name",
    "Deter copying by tiling your name across every page",
    "Label internal documents so they aren't mistaken for final versions",
  ],
  faqs: [
    {
      q: "Is Watermark PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark limits, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to add a watermark?",
      a: "No. The preview is rendered with pdfjs and the watermark is written with pdf-lib entirely in your browser, so the file — and any logo you upload — never leaves your device.",
    },
    {
      q: "Can I use my own logo as the watermark?",
      a: "Yes. Switch the type to Image and upload a PNG or JPG. A PNG with a transparent background gives the cleanest result, and you can scale it to any share of the page width.",
    },
    {
      q: "Will the watermark appear on every page?",
      a: "Yes. Whether you choose centered or tiled placement, the watermark is stamped onto all pages of the document.",
    },
    {
      q: "Can the watermark be removed later?",
      a: "The watermark is drawn into the page content, so it isn't a separate layer someone can simply toggle off. It's not a security feature, but it's baked into the visible page rather than sitting in easily deleted metadata.",
    },
  ],
};

export default content;

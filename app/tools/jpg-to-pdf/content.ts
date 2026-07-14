import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "JPG to PDF merges your JPG photos into a single, multi-page PDF — one photo per page, in the order you set. Add your images, reorder them by dragging, choose how each page should be sized, and download a finished PDF. It runs entirely in your browser with no uploads, so your photos stay on your device. It's free, with no account or watermark.",
  steps: [
    {
      title: "Add your JPGs",
      body: "Drag one or more JPG photos onto the drop zone or click to browse. You can keep adding more using the drop zone beneath the list.",
    },
    {
      title: "Arrange the order",
      body: "Drag rows to reorder them, or use the up and down arrows. Each photo becomes one page in the sequence, and you can remove any you don't need.",
    },
    {
      title: "Pick a page size",
      body: "Choose Fit page to each image to size every page to its photo, or A4 or US Letter to center each photo on a standard page with margins.",
    },
    {
      title: "Create the PDF",
      body: "Click Create PDF to combine your photos into one multi-page document and download it instantly.",
    },
  ],
  useCases: [
    "Combine phone photos of a document into one PDF to send",
    "Turn a batch of scanned JPGs into a single file",
    "Bundle event or product photos into a shareable PDF",
    "Create a simple photo PDF for printing in order",
    "Package ID or receipt photos into one document to submit",
    "Assemble a portfolio of images into a single PDF",
  ],
  faqs: [
    {
      q: "Is JPG to PDF free?",
      a: "Yes — completely free, with no account, no watermark, and no sign-up, like all FreeTools tools.",
    },
    {
      q: "Do my photos get uploaded anywhere?",
      a: "No. The PDF is created entirely in your browser, so your photos never leave your device.",
    },
    {
      q: "Can I set the order of the photos?",
      a: "Yes. Drag the rows or use the up and down arrows to arrange them, and the photos appear in the PDF in that exact order — one photo per page.",
    },
    {
      q: "How is each page sized?",
      a: "Choose Fit page to each image to match every page to its photo, or pick A4 or US Letter to center each photo on a standard page with margins. Pages auto-orient to portrait or landscape to match the photo.",
    },
    {
      q: "Will the photo quality stay the same?",
      a: "Yes. JPGs are embedded directly into the PDF at their original quality, so the pages match your source photos.",
    },
  ],
};

export default content;

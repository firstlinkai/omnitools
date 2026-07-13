import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PNG to PDF combines one or more PNG images into a single, multi-page PDF — one image per page, in the order you choose. Add your images, drag them into the sequence you want, pick how each page should be sized, and export a ready-to-share PDF. Because it runs entirely in your browser with no uploads, your images stay on your device. It's free, with no account or watermark.",
  steps: [
    {
      title: "Add your PNGs",
      body: "Drag one or more PNG images onto the drop zone or click to browse. Add more at any time using the drop zone below the list.",
    },
    {
      title: "Put them in order",
      body: "Drag the rows to reorder, or use the up and down arrows. Each image becomes one page, top to bottom, and you can remove any you don't want.",
    },
    {
      title: "Choose the page size",
      body: "Pick Fit page to each image to match every page to its image, or A4 or US Letter to center each image on a standard page with margins.",
    },
    {
      title: "Create the PDF",
      body: "Click Create PDF to build and download a single multi-page document with your images in the chosen order.",
    },
  ],
  useCases: [
    "Bundle several screenshots into one easy-to-share PDF",
    "Combine scanned pages saved as PNGs into a single document",
    "Turn a set of design mockups into a PDF for review",
    "Package chart or diagram exports into one file to attach",
    "Assemble receipts or invoices into a single PDF to submit",
    "Make a printable PDF from a series of images in a set order",
  ],
  faqs: [
    {
      q: "Is PNG to PDF free?",
      a: "Yes. It's completely free — no account, no watermark, and no sign-up, like every OmniTools tool.",
    },
    {
      q: "Are my images uploaded to a server?",
      a: "No. The PDF is built entirely in your browser, so your images never leave your device.",
    },
    {
      q: "Can I control the order of the pages?",
      a: "Yes. Drag the rows or use the up and down arrows to arrange them, and the images appear in the PDF in exactly that order — one image per page.",
    },
    {
      q: "How are the pages sized?",
      a: "Choose Fit page to each image so every page matches its image's dimensions, or pick A4 or US Letter to center each image on a standard page with margins. Pages auto-orient to portrait or landscape to match the image.",
    },
    {
      q: "Does it keep the image quality and transparency?",
      a: "Yes. PNGs are embedded directly at full quality, so the pages look exactly like your source images.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Compress PDF shrinks a bulky file by rendering each page to a JPEG image and rebuilding the document from those images. You control the image quality and resolution, then see exactly how much smaller the result is before downloading. It all runs in your browser with pdfjs and pdf-lib, so nothing is uploaded. Because pages become images, selectable text and links are removed — this works best for scans and image-heavy PDFs.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop in a PDF or click to browse. It's best suited to scanned or image-heavy documents where a large chunk of the size comes from pictures.",
    },
    {
      title: "Set image quality",
      body: "Use the quality slider (10–95%) to trade sharpness against file size. Lower quality means smaller files; higher quality keeps more detail.",
    },
    {
      title: "Choose a resolution",
      body: "Pick Standard (72 dpi), Good (108 dpi), or High (144 dpi). Lower resolutions produce smaller files, higher ones keep text and lines crisper.",
    },
    {
      title: "Compress",
      body: "Click Compress PDF. Each page is rendered and re-embedded as a compressed image, with a live counter showing which page is being processed.",
    },
    {
      title: "Check the savings and download",
      body: "The result panel shows the before and after size and the percent saved. If it came out larger, try a lower quality or resolution — then download the compressed PDF.",
    },
  ],
  useCases: [
    "Shrink a scanned document so it fits an email size limit",
    "Reduce a photo-heavy brochure before uploading it",
    "Compress a bulky receipt or statement for storage",
    "Make an image-based PDF small enough for a web form",
    "Cut the size of a scanned book or manual to share faster",
    "Trim a large presentation export down for quick sending",
  ],
  faqs: [
    {
      q: "Is Compress PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to compress it?",
      a: "No. Every page is rendered and recompressed locally in your browser with pdfjs and pdf-lib, so the file never leaves your device.",
    },
    {
      q: "Will the text in my PDF still be selectable?",
      a: "No. Compression works by flattening each page into a compressed image, which removes the selectable text and link layers. It's ideal for scans, not for documents where you need to keep the text.",
    },
    {
      q: "Why did my file get larger instead of smaller?",
      a: "Some PDFs are already efficiently compressed, so rasterizing them adds size. The result panel warns you when that happens — try a lower quality or resolution, or keep the original.",
    },
    {
      q: "Which settings give the smallest file?",
      a: "A lower quality percentage combined with the Standard (72 dpi) resolution produces the smallest output. Raise either one if the pages look too soft.",
    },
  ],
};

export default content;

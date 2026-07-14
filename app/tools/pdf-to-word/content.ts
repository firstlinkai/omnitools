import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PDF to Word pulls the selectable text out of a PDF and rebuilds it as an editable Word (.docx) document you can open in Microsoft Word, Google Docs, or LibreOffice. It reads each page, groups the text back into visual lines and paragraphs, and hands you a clean document to edit. This is a text-fidelity conversion: the words come across accurately, but original fonts, images, and exact page layout are not reproduced. Everything runs in your browser, so the PDF is never uploaded.",
  steps: [
    {
      title: "Drop in your PDF",
      body: "Drag a PDF onto the drop zone or click to browse. Only text-based PDFs work — scanned or image-only pages have no selectable text to extract.",
    },
    {
      title: "Convert to Word",
      body: "Click Convert to Word. The tool reads every page in order, showing a page-by-page progress counter as it reconstructs the lines and paragraphs.",
    },
    {
      title: "Check the extracted text",
      body: "A preview shows the first 40 lines it recovered, along with the page and line counts, so you can confirm the text came through before downloading.",
    },
    {
      title: "Download the .docx",
      body: "Click Download .docx to save an editable Word file, named after your PDF. Open it in Word or Google Docs and edit freely.",
    },
  ],
  useCases: [
    "Reuse the text of a PDF report without retyping it",
    "Update an old contract or letter that only exists as a PDF",
    "Pull quotes and paragraphs out of a whitepaper for a new document",
    "Make a read-only PDF editable for revisions or corrections",
    "Extract body copy from a PDF to repurpose in a blog post or email",
    "Recover the wording from a form or template you no longer have the source for",
  ],
  faqs: [
    {
      q: "Is PDF to Word free?",
      a: "Yes. Like every FreeTools tool it is completely free — no account, no watermark, and no sign-up.",
    },
    {
      q: "Does my PDF get uploaded to a server?",
      a: "No. The PDF is read and converted entirely in your browser, so the file never leaves your device.",
    },
    {
      q: "Will the Word file look exactly like the original PDF?",
      a: "No. This is a text-only conversion — it recovers the words and paragraph flow, but fonts, colors, images, and the exact page layout are not reproduced. Expect a clean, editable document rather than a pixel-perfect copy.",
    },
    {
      q: "Why does it say no text was found?",
      a: "The PDF is likely a scan or uses images for its text, so there is no selectable text to extract. Run it through an OCR tool first, then convert the result.",
    },
    {
      q: "It says my PDF is password protected — what now?",
      a: "Encrypted PDFs can't be read directly. Remove the password or unlock the file first, then convert it here.",
    },
  ],
};

export default content;

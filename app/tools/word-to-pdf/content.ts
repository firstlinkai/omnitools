import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Word to PDF turns the text of a Word (.docx) document into a clean, portable PDF that looks the same on any device. It reads the paragraphs from your document, wraps them neatly to the page, and lays them out on standard A4 pages with sensible margins. This is a text-content conversion: the wording comes across faithfully, but original fonts, colors, images, and exact layout are not reproduced. Everything happens in your browser, so your document is never uploaded.",
  steps: [
    {
      title: "Add your Word file",
      body: "Drag a .docx document onto the drop zone or click to browse. The tool reads it locally and counts the paragraphs it found.",
    },
    {
      title: "Preview the text",
      body: "Check the preview of the first 30 paragraphs to confirm the content extracted correctly before you convert.",
    },
    {
      title: "Convert to PDF",
      body: "Click Convert to PDF. The text is wrapped to fit A4 pages with clean margins and rendered into a fresh PDF in the browser.",
    },
    {
      title: "Download",
      body: "Your PDF downloads automatically, named after the original document. Open it anywhere — the layout stays identical on every device.",
    },
  ],
  useCases: [
    "Send a document as a locked-down PDF that can't be easily edited",
    "Make sure a letter or report looks the same on every device",
    "Produce a PDF from a .docx when you don't have Word installed",
    "Create a lightweight, shareable PDF of a text document",
    "Prepare a plain-text PDF for uploading to a form or portal",
    "Archive the wording of a document in a portable, fixed format",
  ],
  faqs: [
    {
      q: "Is Word to PDF free?",
      a: "Yes — free with no account, no watermark, and no sign-up, like every FreeTools tool.",
    },
    {
      q: "Does my document get uploaded?",
      a: "No. The .docx is read and converted entirely in your browser, so it never leaves your device.",
    },
    {
      q: "Will the PDF look exactly like my Word document?",
      a: "No. This converts the text content into a clean PDF — the original fonts, colors, images, tables, and exact layout are not reproduced. You get a tidy, readable document rather than a pixel-perfect copy.",
    },
    {
      q: "Which file types can I convert?",
      a: "Modern Word documents in .docx format. The older .doc format isn't supported — resave it as .docx first.",
    },
    {
      q: "What if my document has images or tables?",
      a: "Only the text is carried into the PDF; images, charts, and table formatting are dropped. If you need those preserved, export to PDF from Word itself.",
    },
  ],
};

export default content;

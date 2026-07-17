import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Extract Text from PDF pulls all of the selectable text out of a document and drops it into a plain-text box you can copy or download. It reads every page in order with pdfjs and separates them with blank lines, so the result mirrors the structure of the original. Everything happens in your browser — the PDF is never uploaded — making it a quick, private way to lift text out of a file for reuse.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop a PDF onto the page or click to browse. A badge tracks progress as each page is read.",
    },
    {
      title: "Let it read every page",
      body: "The tool walks through the document page by page, collecting the text and joining pages with a blank line between them.",
    },
    {
      title: "Review the text",
      body: "The extracted text appears in a scrollable box. If the PDF is a scanned image with no real text layer, you'll see a note suggesting OCR instead.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to send everything to your clipboard, or Download .txt to save it as a plain-text file named after your PDF.",
    },
  ],
  useCases: [
    "Copy quotes or passages out of a report or ebook",
    "Get the raw text of a contract for editing elsewhere",
    "Feed a document's text into a translator or summariser",
    "Pull addresses or figures out of an invoice",
    "Save an article as a plain .txt file for archiving",
    "Grab reference text from a research paper",
  ],
  faqs: [
    {
      q: "Is Extract Text from PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to extract the text?",
      a: "No. The document is read entirely in your browser with pdfjs, so neither the file nor its text ever leaves your device.",
    },
    {
      q: "Why did it find no text?",
      a: "If the PDF is a scan or photo of a page, it contains an image rather than a real text layer, so there's nothing selectable to extract. Run it through an OCR tool first to recognise the text.",
    },
    {
      q: "Does it keep the original formatting?",
      a: "It extracts the plain text content with pages separated by blank lines, but complex layout like columns, tables, and exact spacing isn't preserved — the output is meant for reuse as text, not a visual copy.",
    },
    {
      q: "Can it handle large PDFs?",
      a: "Yes. Pages are read one at a time so even long documents work, though very large files naturally take a little longer to process in the browser.",
    },
  ],
};

export default content;

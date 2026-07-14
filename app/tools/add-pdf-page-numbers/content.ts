import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Add Page Numbers stamps a page number onto every page of a PDF, with control over where it sits, how it's formatted, what number it starts at, and how big it is. A live preview of page one shows the number in place before you commit. It runs in your browser with pdfjs and pdf-lib, so the file is never uploaded, and the real text is drawn straight into the PDF.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop in a PDF or click to browse. The first page renders as a preview and the number of pages is shown.",
    },
    {
      title: "Choose a position",
      body: "Place the number at the bottom or top, aligned left, center, or right — six positions in all. The preview overlay moves to match your choice.",
    },
    {
      title: "Pick a format",
      body: "Select a plain number (1, 2, 3…), a number with total (1 / N), or a labelled style (Page 1). The preview updates as you switch.",
    },
    {
      title: "Set the starting number and size",
      body: "Choose which number the first page starts at — useful when front matter shouldn't count — and set the font size anywhere from 6 to 48 points.",
    },
    {
      title: "Download the numbered PDF",
      body: "Click Download numbered PDF. The number is drawn as real Helvetica text onto every page and the file downloads right away.",
    },
  ],
  useCases: [
    "Number the pages of a report or thesis before printing",
    "Add reference numbers to a legal or contract document",
    "Paginate a scanned booklet that has no numbers",
    "Start numbering after a cover and table of contents",
    "Put page counts on handouts so no one loses their place",
    "Prepare a numbered PDF for citation or review",
  ],
  faqs: [
    {
      q: "Is Add Page Numbers free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to add numbers?",
      a: "No. The preview and the stamping both run in your browser with pdfjs and pdf-lib, so your file never leaves your device.",
    },
    {
      q: "Can I start numbering from a page other than 1?",
      a: "Yes. The Start at field lets you begin from any number, so you can skip a cover page or continue numbering from an earlier document.",
    },
    {
      q: "Where can the number be placed?",
      a: "In any of six spots: bottom or top, aligned left, center, or right. The live preview on page one shows exactly where it will land.",
    },
    {
      q: "Are the page numbers real text or an image?",
      a: "They're real text, drawn in Helvetica directly onto each page with pdf-lib, so they stay crisp at any zoom and don't rasterize the rest of your document.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Excel to PDF converts the values in a spreadsheet's first worksheet into a simple, tabular PDF you can share or print. It reads each row and cell, arranges them in evenly-spaced columns across A4 pages, and clips long cells so the table stays tidy. This is a text-values conversion: formulas, cell styling, charts, and exact layout are not reproduced, and up to eight columns are rendered. It all runs in your browser, so your spreadsheet is never uploaded.",
  steps: [
    {
      title: "Add your spreadsheet",
      body: "Drag an .xlsx file onto the drop zone or click to browse. The tool reads the first worksheet locally and reports how many rows it found.",
    },
    {
      title: "Preview the table",
      body: "Check the preview of the first 15 rows to confirm the values came through correctly before converting.",
    },
    {
      title: "Convert to PDF",
      body: "Click Convert to PDF. The rows are laid out in up to eight evenly-spaced columns on A4 pages, with long cells clipped to fit.",
    },
    {
      title: "Download",
      body: "The PDF downloads automatically, named after your spreadsheet, ready to email, print, or archive.",
    },
  ],
  useCases: [
    "Share a data table as a fixed PDF that recipients can't accidentally edit",
    "Print a clean copy of a spreadsheet's values",
    "Turn an .xlsx export into a PDF for a report or attachment",
    "Create a portable snapshot of a list or roster",
    "Produce a PDF from a spreadsheet without opening Excel",
    "Archive the current values of a sheet in a fixed, shareable format",
  ],
  faqs: [
    {
      q: "Is Excel to PDF free?",
      a: "Yes. It's completely free — no account, no watermark, and no sign-up, like all OmniTools tools.",
    },
    {
      q: "Does my spreadsheet get uploaded?",
      a: "No. It's read and converted entirely in your browser, so the file never leaves your device.",
    },
    {
      q: "Will the PDF match my spreadsheet's formatting?",
      a: "No. This converts the cell values into a simple table — formulas, colors, fonts, borders, charts, and exact layout are not reproduced. You get the underlying data laid out cleanly, not a visual copy of the sheet.",
    },
    {
      q: "What if my sheet has more than eight columns?",
      a: "Only the first eight columns are rendered, and wider tables are truncated. For very wide sheets, split or reorder the columns you need before converting.",
    },
    {
      q: "Does it convert every worksheet in the file?",
      a: "No — it converts the first worksheet only. Move the sheet you need to the front, or save it as its own file, before converting.",
    },
  ],
};

export default content;

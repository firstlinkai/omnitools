import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "PDF to Excel extracts the text from a PDF and reconstructs it as rows and columns you can open in Excel, Numbers, or Google Sheets. It reads the position of every text fragment, clusters fragments on the same line into a row, and splits each row into cells by their horizontal position, then exports a CSV. Column detection is heuristic, so it works best on simple, evenly-spaced tables — complex or merged layouts may need a little cleanup. Everything runs in your browser and the PDF is never uploaded.",
  steps: [
    {
      title: "Add a text-based PDF",
      body: "Drop your PDF onto the drop zone. It works best on simple, text-based tables — scanned images have no positioned text to turn into cells.",
    },
    {
      title: "Let it detect the rows",
      body: "The tool reads each page, groups text into rows by vertical position, and splits them into cells by column position, showing a page-by-page progress counter.",
    },
    {
      title: "Review the detected table",
      body: "A scrollable table preview shows the first 15 rows exactly as they were parsed, so you can spot any columns that need adjusting before exporting.",
    },
    {
      title: "Download the CSV",
      body: "Click Download CSV to save a comma-separated file that opens directly in Excel, Numbers, or Google Sheets, ready to sort, filter, or fix up.",
    },
  ],
  useCases: [
    "Turn a PDF bank or credit-card statement into a spreadsheet",
    "Pull a price list or product table out of a supplier PDF",
    "Get invoice line items into Excel for bookkeeping",
    "Extract a data table from a report so you can chart it",
    "Convert a PDF schedule or roster into an editable sheet",
    "Recover tabular data from a PDF export when you've lost the original file",
  ],
  faqs: [
    {
      q: "Is PDF to Excel free?",
      a: "Yes — completely free, with no account, no watermark, and no sign-up, like every OmniTools tool.",
    },
    {
      q: "Does the file get uploaded anywhere?",
      a: "No. The PDF is parsed entirely in your browser and never leaves your device.",
    },
    {
      q: "Do I get an .xlsx file?",
      a: "It exports a CSV, which opens directly in Excel, Numbers, and Google Sheets. You can save it as .xlsx from there if you want the native format.",
    },
    {
      q: "Why are some columns split or merged incorrectly?",
      a: "Column detection is heuristic — it infers cell boundaries from the horizontal position of text, so simple, evenly-spaced tables come out cleanest. Merged cells, multi-column pages, or irregular spacing may need a quick tidy-up in your spreadsheet.",
    },
    {
      q: "It found no text in my PDF — why?",
      a: "The PDF is probably a scanned image, which has no selectable text to position into cells. Run it through OCR first, then extract the table.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "JSON to CSV converts a JSON array of objects into clean spreadsheet-ready CSV, and converts CSV right back into a JSON array — pick the direction with one click. It reads the object keys as column headers, quotes and escapes fields correctly, and infers numbers and booleans when parsing CSV. Bad input, like JSON that isn't an array, produces a friendly error rather than a broken file. It all runs in your browser, so your data is never uploaded.",
  steps: [
    {
      title: "Choose a direction",
      body: "Pick JSON → CSV to turn a JSON array into a table, or CSV → JSON to turn a table back into a JSON array. The labels and download name update to match.",
    },
    {
      title: "Paste or load your data",
      body: "Paste into the input box, or use Load file to open a .json or .csv file. For JSON → CSV the input must be an array of objects; for CSV → JSON the first row is treated as the header.",
    },
    {
      title: "Let it convert live",
      body: "The output updates as you type. Fields are quoted and escaped for CSV, and numbers and booleans are automatically typed when reading CSV into JSON.",
    },
    {
      title: "Fix any errors",
      body: "If the JSON isn't an array of objects, or the CSV can't be parsed, a red message explains the problem so you can correct it.",
    },
    {
      title: "Copy or download",
      body: "Use Copy for the result, or Download to save it as data.csv or data.json depending on the direction you chose.",
    },
  ],
  useCases: [
    "Turn an API's JSON response into a spreadsheet you can open in Excel or Sheets",
    "Convert exported CSV data into JSON for use in code or another API",
    "Flatten a JSON array of records into columns for reporting",
    "Round-trip data between a database export and a JSON config",
    "Prepare CSV for import into a CRM, analytics tool, or bulk uploader",
    "Quickly inspect tabular data as structured JSON objects",
  ],
  faqs: [
    {
      q: "Is JSON to CSV free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my data uploaded anywhere?",
      a: "No. The conversion runs entirely in your browser, so your JSON and CSV never leave your device.",
    },
    {
      q: "What JSON shape do I need for JSON → CSV?",
      a: "An array of objects, such as [{\"name\":\"Ada\"},{\"name\":\"Alan\"}]. Each object's keys become the CSV columns. A single object or a non-array value will show an error.",
    },
    {
      q: "Does it handle commas, quotes, and line breaks in fields?",
      a: "Yes. Values that contain commas, quotes, or newlines are wrapped in quotes and escaped following the standard CSV rules, so the output stays valid.",
    },
    {
      q: "Will numbers and booleans survive the CSV → JSON conversion?",
      a: "Yes. When reading CSV into JSON, values that look like numbers or true/false are automatically converted to their JSON types instead of staying as strings.",
    },
  ],
};

export default content;

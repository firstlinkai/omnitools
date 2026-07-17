import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Barcode Generator creates standard 1D barcodes from your own data in seconds. Pick a symbology — Code 128, Code 39, EAN-13, EAN-8, UPC-A, ITF-14, MSI, Pharmacode, or Codabar — type your value, and adjust the bar width, height, and label. Invalid input for strict formats like EAN and UPC is caught and explained rather than producing a broken code. Download the result as a PNG for printing or an SVG for perfectly sharp scaling, all without anything leaving your browser.",
  steps: [
    {
      title: "Choose a format",
      body: "Select the barcode symbology from the Format menu. Each one has a sample value loaded automatically so you can see a valid code straight away.",
    },
    {
      title: "Enter your data",
      body: "Type the value to encode into the Data field. The hint under the box tells you what each format accepts — for example EAN-13 needs 12 or 13 digits and UPC-A needs 11 or 12.",
    },
    {
      title: "Fix any validation errors",
      body: "If the data doesn't fit the chosen format, a clear message explains what's expected instead of rendering an unscannable barcode. Adjust the value until the preview appears.",
    },
    {
      title: "Style the barcode",
      body: "Toggle the human-readable text on or off and use the sliders to set bar width and height so the code fits your label or packaging.",
    },
    {
      title: "Download PNG or SVG",
      body: "Click PNG for a raster image ready to place in a document, or SVG for a vector file that stays crisp at any print size.",
    },
  ],
  useCases: [
    "Print product barcodes for retail inventory and shelf labels",
    "Encode SKUs or asset tags for warehouse and stock management",
    "Generate EAN-13 or UPC-A codes for packaging",
    "Create Code 128 labels for shipping and logistics",
    "Add scannable serial numbers to equipment or documents",
    "Produce Pharmacode or Codabar symbols for specialised workflows",
  ],
  faqs: [
    {
      q: "Is the Barcode Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my data sent to a server?",
      a: "No. Barcodes are rendered entirely in your browser, so the values you encode never leave your device and are never stored.",
    },
    {
      q: "Which barcode formats are supported?",
      a: "Code 128, Code 39, EAN-13, EAN-8, UPC-A, ITF-14, MSI, Pharmacode, and Codabar. Each format has its own rules for the characters and length it accepts, shown as a hint below the data field.",
    },
    {
      q: "Why does it say my value is invalid?",
      a: "Strict retail formats like EAN and UPC require an exact number of digits and a valid check digit. If your input doesn't match, the tool tells you what's expected rather than drawing a barcode that scanners would reject.",
    },
    {
      q: "Should I download PNG or SVG?",
      a: "Use PNG for quick placement in documents and screens. Choose SVG when you need to scale the barcode for large-format printing, because vector output stays perfectly sharp at any size — which matters for reliable scanning.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Image Format Converter changes an image between PNG, JPEG, and WebP with a single canvas re-encode in your browser. Drop in a file, pick a target format, and the preview and file size update automatically so you can compare before saving. Nothing is uploaded, so your image stays entirely on your device.",
  steps: [
    {
      title: "Add your image",
      body: "Drop an image onto the drop zone. The tool detects its current format and shows it as the read-only source format.",
    },
    {
      title: "Pick a target format",
      body: "Choose PNG, JPEG, or WebP. It defaults to a format different from the source, and the image is re-encoded immediately whenever you change it.",
    },
    {
      title: "Preview the result",
      body: "The converted image appears in the preview, and a summary line shows the source format and size next to the target format and size, including how much smaller or larger the result is.",
    },
    {
      title: "Download the converted file",
      body: "Click Download to save the image in the new format, named after your original file with the correct extension.",
    },
  ],
  useCases: [
    "Convert a PNG to WebP to shave off file size for the web",
    "Turn a WebP into a PNG or JPEG for an app that doesn't support WebP",
    "Flatten a transparent PNG to a JPEG with a clean white background",
    "Standardize a batch of mixed images to one format, one at a time",
    "Produce a JPEG version of a screenshot for easier sharing",
    "Compare how the same image weighs in across PNG, JPEG, and WebP",
  ],
  faqs: [
    {
      q: "Is the Image Format Converter free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded anywhere?",
      a: "No. The image is decoded and re-encoded on a local canvas in your browser, so it never leaves your device.",
    },
    {
      q: "What happens to transparency when I convert to JPEG?",
      a: "JPEG has no alpha channel, so transparent areas are filled with a white background before encoding to avoid turning black. Convert to PNG or WebP if you need to keep transparency.",
    },
    {
      q: "Which formats are supported?",
      a: "You can convert to PNG, JPEG, or WebP. Most common image types can be loaded as the source; the output is encoded via your browser's canvas at high quality.",
    },
    {
      q: "Will the converted file always be smaller?",
      a: "Not always. WebP and JPEG are usually smaller than PNG, but converting a JPEG to PNG can increase the size. The summary line shows the exact size difference so there are no surprises.",
    },
  ],
};

export default content;

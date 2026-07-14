import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Compress PNG shrinks your image's file size and can optionally knock a background color out to transparency in the same pass. Pick the color to remove by clicking the preview, tune the tolerance for clean edges, then compress with a quality and maximum-dimension setting. It all happens in your browser — nothing is uploaded — and you get a before-and-after size comparison before you download.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a PNG, JPEG, or WebP onto the drop zone. It appears in the live preview over a checkerboard so you can see any transparency.",
    },
    {
      title: "Optionally remove a background color",
      body: "Turn on Remove background color, then click the preview to eyedrop the color to knock out, or pick it manually. Adjust the Tolerance slider until the background disappears cleanly with soft, feathered edges.",
    },
    {
      title: "Set the compression",
      body: "Choose a quality level and a maximum dimension to cap the width or height. Larger images are scaled down proportionally to fit that limit.",
    },
    {
      title: "Pick an output format",
      body: "Export as PNG to keep transparency, or JPEG for a smaller file with no alpha. While background knockout is on, PNG is used automatically since JPEG cannot store transparency.",
    },
    {
      title: "Process and download",
      body: "Click Process image to compress, then review the original-versus-result comparison with the exact byte sizes and percentage saved before downloading.",
    },
  ],
  useCases: [
    "Shrink a large PNG so a page loads faster",
    "Turn a solid-color background into transparency for a logo or product shot",
    "Prepare a transparent PNG sticker or icon from a flat image",
    "Cut a screenshot down to a smaller file for email or chat",
    "Cap an oversized image to a sensible maximum resolution",
    "Convert a heavy PNG to a lighter JPEG when transparency isn't needed",
  ],
  faqs: [
    {
      q: "Is Compress PNG free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded anywhere?",
      a: "No. Compression and background removal both run in your browser, so your image never leaves your device.",
    },
    {
      q: "How does the background removal work?",
      a: "You pick a target color and the tool makes matching pixels transparent, measuring color distance and using the Tolerance slider to decide how close a pixel must be. Pixels just outside the threshold are feathered for soft edges. It works best on flat, evenly colored backgrounds.",
    },
    {
      q: "Why is the format forced to PNG when I remove a background?",
      a: "Transparency needs an alpha channel, and JPEG doesn't have one. So while background knockout is active, the output stays PNG to preserve the transparent areas.",
    },
    {
      q: "Can I compress an image without removing anything?",
      a: "Yes. Leave Remove background color off and just use the quality, maximum-dimension, and format controls to reduce the file size.",
    },
  ],
};

export default content;

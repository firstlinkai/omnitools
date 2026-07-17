import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Resize Image scales any photo to the exact dimensions you need — set precise pixel width and height, shrink or enlarge by a percentage, or pick a ready-made preset like 1080p or a square. Lock the aspect ratio to avoid stretching, choose a lossless PNG or a smaller JPEG, and watch the target size update live. Everything runs on a canvas in your browser, so your image is never uploaded.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a PNG, JPEG, or WebP onto the drop zone, or click to browse. The tool reads its original width and height and fills them in for you.",
    },
    {
      title: "Choose how to resize",
      body: "Pick Exact pixels to type a width and height, Percentage to scale from 1% to 200%, or Preset to select a common size such as 1920x1080, a square 1080x1080, or a 320x240 thumbnail.",
    },
    {
      title: "Keep the proportions",
      body: "In Exact mode, leave Lock aspect ratio on so changing the width updates the height automatically and your image never looks squashed. Turn it off to stretch to any dimensions on purpose.",
    },
    {
      title: "Pick an output format",
      body: "Choose PNG for a lossless result with transparency, or JPEG for a smaller file with an adjustable quality slider. JPEG flattens transparent areas onto a white background.",
    },
    {
      title: "Download the resized image",
      body: "The target size is shown as you adjust settings. Click Download to save the resized image, named after your original file with a -resized suffix.",
    },
  ],
  useCases: [
    "Shrink a large photo to fit an upload size limit",
    "Resize an image to exact dimensions for a website or banner",
    "Create a square crop-free version for social profiles",
    "Scale a screenshot down by percentage without guessing pixels",
    "Generate a small thumbnail from a full-resolution photo",
    "Convert a big PNG to a lighter JPEG at a target size",
  ],
  faqs: [
    {
      q: "Is Resize Image free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is decoded onto a local canvas and resized in your browser, so the picture never leaves your device.",
    },
    {
      q: "Will resizing distort my image?",
      a: "Not if you keep Lock aspect ratio enabled — the width and height stay in proportion, so the image is never stretched. Percentage and preset modes that match the original ratio also avoid distortion; unlocking the ratio lets you stretch intentionally.",
    },
    {
      q: "Should I choose PNG or JPEG?",
      a: "Use PNG when you need a lossless result or transparency. Use JPEG for photos when a smaller file matters — the quality slider trades size against detail, and transparent areas are filled with white.",
    },
    {
      q: "Can I enlarge an image, not just shrink it?",
      a: "Yes. You can enter dimensions larger than the original or scale above 100%. Enlarging can't add detail that isn't there, so upscaled images may look softer, but the tool uses high-quality smoothing to keep them as clean as possible.",
    },
  ],
};

export default content;

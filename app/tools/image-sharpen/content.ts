import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Sharpen Image runs a convolution filter over your photo to boost edge contrast and pull out fine detail that looks soft or slightly out of focus. An Amount slider lets you dial the effect from subtle to strong and watch the preview update live. Drop in a PNG, JPEG, or WebP and download a lossless PNG — the whole thing runs in your browser, so your image is never uploaded.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a PNG, JPEG, or WebP onto the drop zone, or click to browse. It loads at full resolution and is decoded locally.",
    },
    {
      title: "Set the sharpening amount",
      body: "Drag the Amount slider from 0% to 100%. At 0% the image is untouched; as you raise it, a 3x3 sharpening kernel adds more contrast around edges. The preview refreshes as you slide.",
    },
    {
      title: "Find the right balance",
      body: "A little sharpening rescues a soft photo, while too much introduces halos and noise. Nudge the slider until edges look crisp but natural.",
    },
    {
      title: "Download the PNG",
      body: "Click Download PNG to save the sharpened image, named after your original file with a -sharpened suffix.",
    },
  ],
  useCases: [
    "Rescue a slightly soft or out-of-focus photo",
    "Make text in a scanned document more legible",
    "Bring out texture and detail in product shots",
    "Crisp up a screenshot before sharing it",
    "Add definition to an image that was downscaled",
    "Emphasize edges in a diagram or chart capture",
  ],
  faqs: [
    {
      q: "Is Sharpen Image free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is decoded onto a local canvas and the sharpening runs in your browser, so the picture never leaves your device.",
    },
    {
      q: "How does the sharpening work?",
      a: "It applies a 3x3 convolution kernel that amplifies the difference between each pixel and its neighbors, which increases contrast along edges. The Amount slider blends this result back toward the original, so 50% is a gentle pass and 100% is the full effect.",
    },
    {
      q: "Can sharpening fix a badly blurred photo?",
      a: "Only up to a point. Sharpening enhances detail that is already present; it cannot invent detail lost to heavy motion blur or an out-of-focus shot. Use it to refine images that are close to sharp already.",
    },
    {
      q: "What file do I get back?",
      a: "You get a PNG named after your original file with a -sharpened suffix. PNG is lossless, so the sharpened edges stay clean.",
    },
  ],
};

export default content;

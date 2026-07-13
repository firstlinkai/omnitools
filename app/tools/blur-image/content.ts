import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Image Blur Tool lets you hide sensitive parts of an image by dragging boxes over them, then export a redacted PNG. Choose blur, pixelate, or a solid black box for each region, and stack as many as you need. Because the whole thing runs on a canvas in your browser, the picture is never uploaded — ideal for redacting anything private before you share it.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a PNG, JPEG, or WebP onto the drop zone, or click to browse. It loads onto the editing canvas at full resolution.",
    },
    {
      title: "Pick a redaction mode",
      body: "Choose Blur, Pixelate, or Black box. For blur and pixelate, set the strength with the radius or pixel-size slider. New boxes use the current settings, and each box keeps whatever settings it was drawn with.",
    },
    {
      title: "Drag boxes over what to hide",
      body: "Drag across the image to draw a box. The region is redacted the moment you release, so faces, names, addresses, and account numbers disappear instantly.",
    },
    {
      title: "Manage your regions",
      body: "Every box appears in the Regions list with its mode and size. Undo the last one, delete individual boxes, or clear them all if you want to start over.",
    },
    {
      title: "Download the redacted PNG",
      body: "Click Download PNG to export the flattened image with all redactions baked in. The blurred and pixelated pixels are permanently rewritten, not just visually covered.",
    },
  ],
  useCases: [
    "Hide faces or bystanders before posting a photo",
    "Redact names, emails, and account numbers in a screenshot",
    "Cover a home address or license plate in an image",
    "Blur confidential figures in a chart or document capture",
    "Mask API keys, tokens, or IDs in a shared screenshot",
    "Pixelate a logo or signature you don't have rights to show",
  ],
  faqs: [
    {
      q: "Is the Image Blur Tool free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is loaded onto a local canvas and every redaction is applied in your browser, so the picture never leaves your device.",
    },
    {
      q: "Can the blur or pixelation be reversed?",
      a: "No. On export, the tool rewrites the actual pixels inside each region and flattens everything into a new PNG. The original detail is discarded, unlike a layer you could simply peel back. A solid black box removes the pixels entirely.",
    },
    {
      q: "What file do I get back?",
      a: "You always get a PNG, named after your original file with a -redacted suffix. PNG is lossless, so the unredacted parts of the image stay sharp.",
    },
    {
      q: "Which formats can I open?",
      a: "You can load PNG, JPEG, and WebP images. Whatever you drop in, the redacted result is exported as a PNG.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Invert Colors flips every pixel in your image to its exact opposite, turning a photo into a color negative — light becomes dark, blue becomes orange, and white becomes black. Drop in a PNG, JPEG, or WebP and the inverted result appears instantly, ready to download as a lossless PNG. The whole conversion runs on a canvas in your browser, so your image is never uploaded.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a PNG, JPEG, or WebP onto the drop zone, or click to browse. It loads at full resolution and is decoded locally.",
    },
    {
      title: "See the inverted preview",
      body: "The tool reads every pixel and replaces each red, green, and blue value with 255 minus itself. The negative version appears in the preview immediately.",
    },
    {
      title: "Check the result",
      body: "Transparency is preserved — only the colors are inverted, so a PNG with a transparent background keeps it. Compare the file size shown before and after.",
    },
    {
      title: "Download the PNG",
      body: "Click Download PNG to save the inverted image, named after your original file with an -inverted suffix.",
    },
  ],
  useCases: [
    "Create a photo-negative effect for artwork or posters",
    "Turn a dark-mode screenshot into a light one (or vice versa)",
    "Recover detail from a scanned film negative by inverting it",
    "Preview how a design looks with reversed colors",
    "Make white-on-black diagrams into black-on-white for printing",
    "Produce a striking inverted version of a logo or icon",
  ],
  faqs: [
    {
      q: "Is Invert Colors free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is decoded onto a local canvas and every pixel is inverted in your browser, so the picture never leaves your device.",
    },
    {
      q: "What does inverting actually do?",
      a: "Each color channel is replaced with 255 minus its value, so 0 becomes 255 and 200 becomes 55. This is the same as a photographic negative and is fully reversible — inverting an inverted image gives back the original.",
    },
    {
      q: "Does it keep transparency?",
      a: "Yes. Only the red, green, and blue channels are inverted; the alpha (transparency) channel is left exactly as it was, so transparent areas stay transparent.",
    },
    {
      q: "What file do I get back?",
      a: "You get a PNG named after your original file with an -inverted suffix. PNG is lossless, so no extra compression artifacts are introduced.",
    },
  ],
};

export default content;

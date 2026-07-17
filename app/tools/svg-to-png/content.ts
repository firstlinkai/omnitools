import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "SVG to PNG rasterizes a scalable vector graphic into a crisp PNG (or JPEG) at any resolution you choose. Drop an .svg file or paste the markup, set an exact output width or a scale multiplier, pick a transparent or white background, and download. Because SVGs are resolution-independent, you can export the same icon at 32px or 4096px with equal sharpness. Everything renders locally in your browser — the file is never uploaded.",
  steps: [
    {
      title: "Add your SVG",
      body: "Drop an .svg file onto the dropzone, or paste the raw <svg> markup into the text box. A live preview appears so you can confirm it renders correctly.",
    },
    {
      title: "Set the output size",
      body: "Choose Exact width to type a pixel width, or Scale multiplier to render at 2x, 3x, and so on. The height is computed automatically to keep the aspect ratio.",
    },
    {
      title: "Pick a background",
      body: "Keep it Transparent for a PNG with an alpha channel, or choose White to flatten it. JPEG exports are always flattened to white since they have no transparency.",
    },
    {
      title: "Check the dimensions",
      body: "The panel shows the final output size and the SVG's detected source size. If the SVG has no width or height, the viewBox — or a 512px fallback — is used.",
    },
    {
      title: "Download the raster",
      body: "Click Download PNG for a lossless image with transparency, or Download JPEG for a smaller flattened file.",
    },
  ],
  useCases: [
    "Turn a logo SVG into a high-resolution PNG for social media",
    "Export an icon at exact pixel sizes for an app or favicon set",
    "Rasterize a chart or diagram for a slide deck or document",
    "Create a 2x or 3x PNG for high-DPI (Retina) displays",
    "Convert an SVG a tool won't accept into a widely supported PNG",
    "Flatten a transparent vector onto a white background for print",
  ],
  faqs: [
    {
      q: "Is SVG to PNG free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my SVG uploaded anywhere?",
      a: "No. The SVG is rendered to a canvas and exported entirely in your browser, so the file and its markup never leave your device.",
    },
    {
      q: "What if my SVG has no width or height?",
      a: "The tool falls back to the SVG's viewBox dimensions, and if there is no viewBox either, it uses a 512px default. You can always override the size with an exact width or scale.",
    },
    {
      q: "Can I export at very high resolutions?",
      a: "Yes. Set a large exact width or a high scale multiplier. Because SVGs are vectors, the PNG stays sharp at any size, limited only by your browser's canvas memory.",
    },
    {
      q: "Why is my JPEG on a white background?",
      a: "JPEG has no transparency, so any transparent areas are filled with white on export. Use PNG if you need to keep a transparent background.",
    },
  ],
};

export default content;

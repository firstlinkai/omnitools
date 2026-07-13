import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "SVG Wave Generator creates smooth, organic waves and blobs from a handful of sliders, then hands you clean, raw SVG you can drop straight into a page. Switch between Wave and Blob modes, tune the shape and colors, and copy or download the markup. Everything renders live in your browser, and the preview is the exact SVG string you export, so what you see is what you ship.",
  steps: [
    {
      title: "Choose wave or blob",
      body: "Use the toggle at the top of the Controls panel to pick Wave for layered section dividers or Blob for a rounded organic shape.",
    },
    {
      title: "Shape it with the sliders",
      body: "For waves, adjust complexity (number of points), variance, height, layers, and opacity. For blobs, set the number of points and variance. More variance means a more irregular, hand-drawn feel.",
    },
    {
      title: "Pick your colors",
      body: "Choose a fill color with the swatch, flip a wave vertically, or enable a gradient fill for blobs and set both start and end colors.",
    },
    {
      title: "Randomize until it clicks",
      body: "Click Randomize to roll a new seed and instantly regenerate the shape while keeping your slider settings. The current seed is shown so you can reproduce a result.",
    },
    {
      title: "Copy or download the SVG",
      body: "Reveal the SVG code panel to copy the markup, or click Download to save a wave.svg or blob.svg file. The exported SVG is exactly what the preview shows.",
    },
  ],
  useCases: [
    "Add a flowing wave divider between website sections",
    "Generate a soft blob backdrop for a hero or profile photo",
    "Create layered, semi-transparent waves for a footer or header",
    "Produce lightweight decorative shapes without opening a design app",
    "Match brand colors by setting exact hex values on the fill or gradient",
    "Roll random variations quickly to find a shape you like",
  ],
  faqs: [
    {
      q: "Is the SVG Wave Generator free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is anything uploaded to a server?",
      a: "No. The SVG is generated entirely in your browser from your slider settings, so nothing is uploaded and no data leaves your device.",
    },
    {
      q: "What exactly do I get when I export?",
      a: "You get raw, standalone SVG markup — the same string shown in the preview and code panel. You can paste it directly into HTML, a React component, or an SVG file.",
    },
    {
      q: "Can I scale the shapes without losing quality?",
      a: "Yes. Because the output is vector SVG, waves and blobs stay crisp at any size and are tiny compared to a raster image.",
    },
    {
      q: "What does the seed do?",
      a: "The seed drives the randomized geometry. Randomize picks a new seed to generate a fresh shape while keeping your other settings, and the same seed with the same settings always reproduces the same result.",
    },
  ],
};

export default content;

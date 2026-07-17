import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Color Picker reads the exact color of any pixel in an image and gives you its HEX, RGB, and HSL values, ready to copy. Drop a photo, screenshot, or design, then hover to preview a color and click to lock it in. On supported browsers you can also use the built-in eyedropper to sample a pixel from anywhere on your screen. It all runs in your browser, so your image is never uploaded.",
  steps: [
    {
      title: "Add an image",
      body: "Drop a PNG, JPEG, or WebP onto the dropzone, or click to browse. The image is drawn to a canvas so every pixel can be sampled.",
    },
    {
      title: "Hover to preview",
      body: "Move your pointer across the image to see a live swatch and the color values update in real time as you go.",
    },
    {
      title: "Click to lock a color",
      body: "Click any pixel to freeze that color. The swatch stays put so you can copy a stable value without it changing as your mouse moves.",
    },
    {
      title: "Copy HEX, RGB, or HSL",
      body: "Each format has its own Copy button. Grab #RRGGBB for CSS and design tools, rgb() for the web, or hsl() when you want to tweak hue and lightness.",
    },
    {
      title: "Sample from your screen",
      body: "On browsers that support it, click Pick from screen to use the native eyedropper and sample a color from anywhere — even outside the image.",
    },
  ],
  useCases: [
    "Grab a brand's exact color from a logo or screenshot",
    "Match a UI element's color while building a design",
    "Extract a palette from a photo for a mood board",
    "Find the HEX code of a color you can only see in an image",
    "Convert a sampled color between HEX, RGB, and HSL instantly",
    "Sample any on-screen color with the browser eyedropper",
  ],
  faqs: [
    {
      q: "Is Color Picker free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image sent to a server?",
      a: "No. The image is drawn to a canvas and read pixel-by-pixel in your browser, so it never leaves your device.",
    },
    {
      q: "Why doesn't the 'Pick from screen' button always appear?",
      a: "It relies on the browser's EyeDropper API, which is available in Chromium-based browsers (Chrome, Edge, Opera). When your browser doesn't support it, the button is hidden and you can still sample colors from the image.",
    },
    {
      q: "What's the difference between HEX, RGB, and HSL?",
      a: "They describe the same color three ways: HEX (#RRGGBB) is compact and common in CSS, RGB lists red/green/blue from 0–255, and HSL uses hue, saturation, and lightness, which is handy for adjusting a color by feel.",
    },
    {
      q: "Why does the hovered color keep changing?",
      a: "Hovering shows a live preview that follows your pointer. Click the pixel you want to lock the color in place, then copy it.",
    },
  ],
};

export default content;

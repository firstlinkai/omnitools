import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Color Converter translates a single color between HEX, RGB, and HSL, keeping every field in sync as you type. Edit the hex code, nudge an RGB channel, or drag a hue value and all the other formats update instantly, alongside a live swatch and a native color picker. Copy any format as a ready-to-paste CSS string. It runs entirely in your browser — nothing is sent anywhere.",
  steps: [
    {
      title: "Enter a color",
      body: "Type a hex code like #dc2626, set R/G/B values, or adjust H/S/L. You can also open the native color picker to choose visually.",
    },
    {
      title: "Watch the fields sync",
      body: "Editing any format instantly recalculates the others. The swatch at the top always shows the current color so you can see your changes.",
    },
    {
      title: "Adjust with HSL",
      body: "Use the Hue, Saturation, and Lightness fields to fine-tune a color by feel — bump lightness for a tint or drop saturation for a muted tone.",
    },
    {
      title: "Copy a CSS value",
      body: "Each format has a Copy button that gives you a ready-to-use string: #hex, rgb(r, g, b), or hsl(h, s%, l%).",
    },
    {
      title: "Handle invalid input gracefully",
      body: "If a hex code is incomplete or malformed, the field flags it without crashing — finish typing a valid value and everything resyncs.",
    },
  ],
  useCases: [
    "Convert a designer's HEX code into rgb() for CSS",
    "Turn an RGB value from a screenshot into a shareable hex code",
    "Switch a color to HSL to build a lighter or darker variant",
    "Sanity-check that two color formats describe the same shade",
    "Pick a color visually and read out its exact codes",
    "Build a consistent palette by tweaking hue and lightness",
  ],
  faqs: [
    {
      q: "Is Color Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Does my color data leave the browser?",
      a: "No. All conversions run locally in JavaScript in your browser — nothing is uploaded or stored on a server.",
    },
    {
      q: "What hex formats are accepted?",
      a: "Both shorthand three-digit (#f00) and full six-digit (#ff0000) hex codes work, with or without the leading #. Invalid codes are flagged instead of applied.",
    },
    {
      q: "Why do HSL values sometimes round slightly?",
      a: "HSL and RGB don't map perfectly one-to-one, so converting back and forth can shift a value by a point due to rounding. The color stays visually identical.",
    },
    {
      q: "Can I use the output directly in CSS?",
      a: "Yes. The copied strings are valid CSS — paste #hex, rgb(r, g, b), or hsl(h, s%, l%) straight into your stylesheet.",
    },
  ],
};

export default content;

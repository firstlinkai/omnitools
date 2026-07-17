import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Grayscale Converter strips the color from any photo and turns it into a clean black-and-white image. Choose a perceptual luminance conversion that matches how your eye reads brightness, or a simple channel average, and see the result update live. Drop in a PNG, JPEG, or WebP and download a lossless PNG — everything runs in your browser, so your image is never uploaded.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a PNG, JPEG, or WebP onto the drop zone, or click to browse. It loads at full resolution and is decoded locally.",
    },
    {
      title: "Pick a conversion method",
      body: "Luminance weights the green channel highest (0.299R + 0.587G + 0.114B) to match human vision, giving natural-looking tones. Average treats red, green, and blue equally for a flatter, simpler result.",
    },
    {
      title: "Preview the black-and-white result",
      body: "The tool recomputes every pixel and shows the grayscale image immediately. Switch methods any time to compare which looks better for your photo.",
    },
    {
      title: "Download the PNG",
      body: "Click Download PNG to save the grayscale image, named after your original file with a -grayscale suffix.",
    },
  ],
  useCases: [
    "Convert a photo to black and white for a classic look",
    "Prepare an image for grayscale or monochrome printing",
    "Remove distracting color to focus on shapes and contrast",
    "Create a neutral background image behind text",
    "Standardize product photos to a consistent monochrome style",
    "Reduce an image to luminance before further editing",
  ],
  faqs: [
    {
      q: "Is Grayscale Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is decoded onto a local canvas and converted in your browser, so the picture never leaves your device.",
    },
    {
      q: "What's the difference between luminance and average?",
      a: "Luminance weights green most and blue least to mirror how the human eye perceives brightness, producing natural tones. Average adds the three channels and divides by three, which is simpler but can make some colors look too light or too dark.",
    },
    {
      q: "Does it keep transparency?",
      a: "Yes. Only the color channels are converted to gray; the alpha (transparency) channel is preserved, so transparent areas stay transparent.",
    },
    {
      q: "What file do I get back?",
      a: "You get a PNG named after your original file with a -grayscale suffix. PNG is lossless, so the tones stay smooth with no compression artifacts.",
    },
  ],
};

export default content;

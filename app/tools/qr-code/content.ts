import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "QR Code Generator turns any text, link, or short message into a scannable QR code you can download and use anywhere. Type your content, tune the size, error-correction level, and colours, and watch the code update live. Save it as a crisp PNG for print and screens or as an SVG that scales to any dimension without blurring. It runs entirely in your browser, so whatever you encode stays on your device.",
  steps: [
    {
      title: "Enter your content",
      body: "Type or paste a URL, plain text, contact details, Wi-Fi credentials, or any short string into the Text or URL box. The QR code regenerates as you type.",
    },
    {
      title: "Set the size",
      body: "Use the Size slider to choose an output resolution from 128 up to 1024 pixels. Larger sizes are better for print; smaller ones are fine for on-screen use.",
    },
    {
      title: "Pick an error-correction level",
      body: "Choose L, M, Q, or H. Higher levels let the code still scan when part of it is damaged or covered — useful if you overlay a logo — at the cost of a denser pattern.",
    },
    {
      title: "Customise the colours",
      body: "Set the foreground and background colours to match your brand. Keep strong contrast (dark on light works best) so scanners read it reliably.",
    },
    {
      title: "Download PNG or SVG",
      body: "Click PNG for a ready-to-use raster image, or SVG for a vector file that stays sharp at any size. Both download instantly to your device.",
    },
  ],
  useCases: [
    "Link to a website, landing page, or app download from a poster or flyer",
    "Add a scannable menu, price list, or brochure to a printed sheet",
    "Share Wi-Fi details or contact info without typing",
    "Put a payment or donation link on packaging or a receipt",
    "Add a quick link to business cards, stickers, or product labels",
    "Drop a code into a slide deck so an audience can jump straight to a resource",
  ],
  faqs: [
    {
      q: "Is the QR Code Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text or link sent to a server?",
      a: "No. The QR code is generated entirely in your browser, so whatever you encode never leaves your device and is never logged.",
    },
    {
      q: "Do the QR codes expire or stop working?",
      a: "No. These are static QR codes — the content is baked directly into the pattern. They will keep scanning forever and never depend on our servers or a redirect.",
    },
    {
      q: "Should I download PNG or SVG?",
      a: "Use PNG for quick use on screens or when a tool needs a raster image. Choose SVG when you need to print large or resize the code, since vector files stay perfectly sharp at any dimension.",
    },
    {
      q: "Why won't my code scan?",
      a: "The most common causes are low contrast between foreground and background, or too much content packed into a small size. Keep a dark code on a light background, raise the size, and lower the error-correction level if the pattern looks too dense.",
    },
  ],
};

export default content;

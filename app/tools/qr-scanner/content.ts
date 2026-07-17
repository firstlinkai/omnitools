import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "QR Code Scanner reads the contents of a QR code from an image you already have — a screenshot, a photo, or a saved graphic. Upload or paste the picture and the decoded text, link, or data appears instantly, ready to copy. If the code is a web address, a one-click Open link button lets you follow it safely in a new tab. The whole scan happens inside your browser, so your images are never uploaded.",
  steps: [
    {
      title: "Add your image",
      body: "Drag a file onto the drop zone, click to browse, or paste an image straight from your clipboard with Ctrl+V or Cmd+V. PNG, JPEG, and WebP all work.",
    },
    {
      title: "Let it decode",
      body: "The image is drawn to a canvas and scanned automatically. A tightly cropped, high-contrast code decodes fastest and most reliably.",
    },
    {
      title: "Read the result",
      body: "The decoded contents appear in the Result panel — a URL, plain text, Wi-Fi details, contact info, or whatever the code holds.",
    },
    {
      title: "Copy or open",
      body: "Click Copy to place the text on your clipboard. If the payload is a web link, use Open link to visit it in a new tab — only follow URLs you trust.",
    },
    {
      title: "Scan another",
      body: "Press New scan to clear the current image and read a different QR code without reloading the page.",
    },
  ],
  useCases: [
    "Read a QR code from a screenshot when you can't point a camera at it",
    "Decode a QR code saved in a PDF, email, or downloaded image",
    "Recover the link behind a QR code on a poster you photographed",
    "Check what a QR code actually points to before visiting it",
    "Extract Wi-Fi, contact, or event details encoded in a code",
    "Read a QR code on a desktop that has no camera",
  ],
  faqs: [
    {
      q: "Is the QR Code Scanner free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded anywhere?",
      a: "No. The image is decoded entirely in your browser using a canvas, so it never leaves your device and is never stored on a server.",
    },
    {
      q: "Why can't it find the QR code in my image?",
      a: "Decoding needs a reasonably clear, high-contrast code. Blur, glare, extreme angles, or a very small code in a busy photo can all prevent a read. Crop tighter around the code and try a sharper image.",
    },
    {
      q: "Can it scan from my camera in real time?",
      a: "This tool reads QR codes from images you upload or paste. To scan a live code, take a photo or screenshot first, then drop it in — the decoding works exactly the same way.",
    },
    {
      q: "Is it safe to open the decoded link?",
      a: "The tool only shows you where a link points; it never opens anything automatically. Links open in a new tab when you choose to, and you should only open URLs from sources you trust.",
    },
  ],
};

export default content;

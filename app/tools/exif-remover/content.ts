import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "EXIF Remover strips the hidden metadata that cameras and phones bake into your photos — GPS coordinates, the exact date and time, the camera or phone model, and its serial number. It works by decoding the image and re-encoding only the visible pixels onto a fresh canvas, which leaves every metadata tag behind. Because it all runs in your browser, the photo is never uploaded, so cleaning it up is genuinely private.",
  steps: [
    {
      title: "Add your photo",
      body: "Drag a JPEG, PNG, or WebP onto the drop zone, or click to browse. The image is decoded locally so its pixels can be re-encoded without the metadata.",
    },
    {
      title: "Choose an output format",
      body: "PNG gives a lossless, definitively metadata-free file. JPEG keeps it a smaller photo-style file with an adjustable quality slider. Either way, no EXIF is written to the result.",
    },
    {
      title: "Preview the clean image",
      body: "The picture looks identical because only the invisible metadata is removed — the visible pixels are untouched (aside from optional JPEG compression you control).",
    },
    {
      title: "Download the stripped image",
      body: "Click Download to save the cleaned photo, named after your original file with a -clean suffix. Share it knowing the location and camera details are gone.",
    },
  ],
  useCases: [
    "Remove GPS location before posting a photo publicly",
    "Strip the camera model and serial number from an image",
    "Clear the original capture date and time from a picture",
    "Sanitize screenshots and photos before sharing them online",
    "Protect your home or workplace location in a listing photo",
    "Meet a platform or client requirement to submit metadata-free images",
  ],
  faqs: [
    {
      q: "Is EXIF Remover free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my photo uploaded to a server?",
      a: "No. The image is decoded onto a local canvas and re-encoded in your browser, so the photo — and its metadata — never leaves your device.",
    },
    {
      q: "How does it actually remove the metadata?",
      a: "The tool draws your image onto an HTML canvas, which keeps only the raw pixels, then exports a brand-new file from that canvas. EXIF, GPS, and other metadata blocks live outside the pixel data, so they simply aren't carried over into the new file.",
    },
    {
      q: "Does removing EXIF change how the photo looks?",
      a: "No visible change with PNG, which is lossless. With JPEG, the pixels are re-compressed at the quality you choose, so very low settings can soften detail slightly. In all cases the metadata is gone.",
    },
    {
      q: "Which metadata gets removed?",
      a: "All embedded metadata is dropped, including GPS location, the capture date and time, camera and lens model, serial number, exposure settings, and orientation and software tags. You get a clean image with just the picture itself.",
    },
  ],
};

export default content;

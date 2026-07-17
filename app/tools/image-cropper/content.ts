import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Image Cropper lets you trim any photo or graphic down to just the region you want, straight in your browser. Drag a box over the image to select an area, or lock it to a common aspect ratio like 1:1, 4:3, 16:9, or 3:2 for perfectly proportioned crops. The selection maps to the image's true pixels, so what you cut is exactly what you get. Nothing is uploaded — your image never leaves your device.",
  steps: [
    {
      title: "Add your image",
      body: "Drop a PNG, JPEG, or WebP onto the dropzone, or click to browse. The image appears on the canvas at full resolution, ready to crop.",
    },
    {
      title: "Choose an aspect ratio",
      body: "Leave it on Free to crop any shape, or pick 1:1, 4:3, 16:9, or 3:2. When a ratio is set, the selection box stays perfectly proportioned as you drag.",
    },
    {
      title: "Select the crop area",
      body: "Drag on the image to draw the crop box. The area outside dims so you can see the result, and the live dimensions show the exact pixel size and position.",
    },
    {
      title: "Fine-tune the numbers",
      body: "Type exact X, Y, Width, and Height values for pixel-perfect crops, or click Select whole image to reset the box to the full frame.",
    },
    {
      title: "Crop and download",
      body: "Click Crop & download PNG to save a lossless cut, or Download as JPEG for a smaller file. The output is the exact region you selected.",
    },
  ],
  useCases: [
    "Crop a profile picture to a perfect square",
    "Trim a screenshot down to the important part",
    "Reframe a photo to 16:9 for a video thumbnail or slide",
    "Remove borders, watermarks, or dead space from an image",
    "Cut a product shot to a consistent 4:3 for a catalog",
    "Extract one detail from a larger picture at full resolution",
  ],
  faqs: [
    {
      q: "Is Image Cropper free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is decoded and cropped entirely in your browser using an HTML canvas, so it never leaves your device.",
    },
    {
      q: "Does cropping lose any quality?",
      a: "No. Cropping copies the selected pixels at full resolution. Save as PNG to keep the exact pixels lossless; JPEG re-encodes for a smaller file.",
    },
    {
      q: "Can I crop to an exact size in pixels?",
      a: "Yes. Type precise Width and Height (and X/Y offset) into the number fields, or drag freely and then adjust the values for pixel-perfect results.",
    },
    {
      q: "What image formats are supported?",
      a: "Any format your browser can display — including PNG, JPEG, WebP, and GIF (first frame). You can export the crop as PNG or JPEG.",
    },
  ],
};

export default content;

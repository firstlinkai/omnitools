import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Image Converter re-encodes a picture into PNG, JPEG, or WebP using your browser's built-in canvas, with a live preview and a before/after size comparison. Drop an image, choose a target format, and download the result — no upload, no quality survey, no account. Every pixel is processed on your device and nothing is ever sent to a server.",
  steps: [
    {
      title: "Drop an image",
      body: "Drag a file onto the drop zone or click to browse. PNG, JPEG, and WebP are fully supported, and other common image types like GIF or BMP can be read as the source.",
    },
    {
      title: "Pick a target format",
      body: "The source format is detected and shown for reference. Choose PNG, JPEG, or WebP from the Target format dropdown; the tool defaults to a format different from your original.",
    },
    {
      title: "Check the preview and size",
      body: "The converted image renders instantly, and a summary line shows the old size versus the new one — with the difference highlighted so you can see how much you saved.",
    },
    {
      title: "Download the result",
      body: "Click Download as to save the converted image, keeping your original filename with the new extension. Choose New image to convert another file.",
    },
  ],
  useCases: [
    "Shrink a large PNG by converting it to WebP for faster page loads",
    "Convert a WebP image to PNG or JPEG for an app that can't read WebP",
    "Flatten a transparent PNG to JPEG with a clean white background",
    "Standardize screenshots to one format before sharing",
    "Create a JPEG version of a photo to cut its file size for email",
    "Turn an image into WebP to save storage without a visible quality drop",
  ],
  faqs: [
    {
      q: "Is Image Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are my images uploaded anywhere?",
      a: "No. Conversion happens entirely in your browser using an HTML canvas, and the file is saved straight to your device. Your images are never uploaded.",
    },
    {
      q: "Which formats are supported?",
      a: "You can convert to PNG, JPEG, or WebP. Many other formats such as GIF and BMP can be loaded as the source, then re-encoded into one of those three targets.",
    },
    {
      q: "What happens to transparency when I convert to JPEG?",
      a: "JPEG has no transparency, so any transparent areas are filled with a white background before encoding. Convert to PNG or WebP instead if you need to keep transparency.",
    },
    {
      q: "Will converting reduce the image quality?",
      a: "PNG is lossless, while JPEG and WebP use a high-quality setting (about 92%) that keeps images looking sharp while reducing file size. Results vary by image, which is why the before/after size is shown.",
    },
  ],
};

export default content;

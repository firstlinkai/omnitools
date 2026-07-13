import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Compress Image Size reduces a photo's file size with a live quality slider and an optional width cap, showing the original and compressed versions side by side. As you drag the slider the image is re-encoded instantly and the new file size updates in real time, so you can trade quality for weight with your eyes on the result. It runs entirely in your browser, your image is never uploaded, and the download is a JPEG.",
  steps: [
    {
      title: "Add your image",
      body: "Drop a PNG, JPG, or WebP onto the drop zone. It loads immediately and the width cap defaults to the image's native width so nothing is upscaled.",
    },
    {
      title: "Set the target quality",
      body: "Drag the quality slider from 10 to 100 percent. The image is re-encoded on the fly and the compressed preview and size counter update as you go.",
    },
    {
      title: "Cap the width if needed",
      body: "Enter a maximum width in pixels to scale the image down proportionally. The tool never upscales past the source resolution.",
    },
    {
      title: "Compare side by side",
      body: "Review the original and compressed images next to each other, along with the original size, compressed size, and the percentage of disk space saved.",
    },
    {
      title: "Download the JPEG",
      body: "Click Download compressed image to save the result as a JPEG, named after your original file with a -compressed suffix.",
    },
  ],
  useCases: [
    "Get a photo under an email or upload size limit",
    "Lighten large images so a web page loads faster",
    "Resize a high-resolution photo down to a sensible width",
    "Reduce a phone photo before sharing it in a chat",
    "Trade a little quality for a much smaller file with instant visual feedback",
    "Batch through several images quickly, one at a time, without any tool to install",
  ],
  faqs: [
    {
      q: "Is Compress Image Size free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my image uploaded to a server?",
      a: "No. The image is re-encoded on a local canvas in your browser, so it never leaves your device.",
    },
    {
      q: "What format is the output?",
      a: "The compressed image is always a JPEG. JPEG's lossy compression is what lets the quality slider shrink the file so effectively, which is ideal for photos.",
    },
    {
      q: "Will it make my image blurry?",
      a: "Only if you push the quality low. Because the preview updates live, you can see exactly where compression starts to show and stop at a setting that still looks good.",
    },
    {
      q: "Does it enlarge small images?",
      a: "No. The width cap defaults to the native width and the tool never upscales beyond the source resolution, so you only ever scale down.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Crop Video cuts your footage down to a rectangular region of the frame, right in your browser. Set the crop width, height, and offsets in pixels, then export a tightly framed MP4. The re-encode runs locally with in-browser FFmpeg (WebAssembly), so your video is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. A preview appears and the in-browser engine loads automatically.",
    },
    {
      title: "Set the crop size",
      body: "Enter the Width and Height in pixels for the region you want to keep. These default to the video's full dimensions, so start there and shrink to taste.",
    },
    {
      title: "Position the crop",
      body: "Use Left offset and Top offset to move the crop box, measured in pixels from the top-left corner of the frame. Increase the left offset to move right, the top offset to move down.",
    },
    {
      title: "Crop and download",
      body: "Click Crop video to re-encode the cropped region to MP4 (H.264), then download it. Values are rounded to even pixels as H.264 requires. Everything is processed on your device.",
    },
  ],
  useCases: [
    "Remove black bars or letterboxing from around the picture",
    "Reframe a landscape video into a vertical portrait crop for social",
    "Cut out a webcam bubble or overlay from a screen recording",
    "Zoom in on one part of the frame by cropping tightly around it",
    "Trim off a watermark or timestamp sitting in a corner",
    "Fix framing that left too much empty space on one side",
  ],
  faqs: [
    {
      q: "Do you upload my video to a server?",
      a: "No. Cropping runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Is Crop Video free?",
      a: "Yes. It's completely free with no account, no sign-up, and no watermark added to the result.",
    },
    {
      q: "How are the offsets measured?",
      a: "Both offsets are measured in pixels from the top-left corner of the frame. Left offset shifts the crop box rightward; top offset shifts it downward.",
    },
    {
      q: "What format does the cropped video come out as?",
      a: "Cropping re-encodes the picture to MP4 (H.264) and copies the original audio. Width and height are rounded to even pixels, which H.264 requires.",
    },
    {
      q: "Is there a size limit on the video?",
      a: "There's no fixed limit because nothing is uploaded. Processing happens in your browser, so larger files use more memory and take longer — shorter clips finish faster.",
    },
  ],
};

export default content;

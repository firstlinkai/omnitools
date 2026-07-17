import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Video to GIF turns a short clip into a smooth, looping animated GIF right in your browser. Drop in an MP4, WebM, or MOV, pick the start time and duration, then dial in the frame rate and width — the tool trims and converts using a two-pass palette for clean, banding-free colour. Because it runs on the powerful FFmpeg engine locally, your video is never uploaded anywhere.",
  steps: [
    {
      title: "Add a short clip",
      body: "Drop a video file, or click to browse. The video engine (~31 MB) downloads once on first use and is then cached by your browser. Shorter clips make far smaller, more shareable GIFs.",
    },
    {
      title: "Trim to the moment",
      body: "Set the Start time and Duration in seconds to capture just the part you want. A two-to-four second window is ideal for a reaction or highlight.",
    },
    {
      title: "Choose frame rate and width",
      body: "Higher frame rates look smoother but grow the file; 10–15 fps is a good balance. Width sets the output size — height scales automatically to keep the aspect ratio.",
    },
    {
      title: "Make the GIF",
      body: "Click Make GIF. The tool runs a palette-generation pass and a rendering pass with high-quality Lanczos scaling, then shows a live preview when it finishes.",
    },
    {
      title: "Preview and download",
      body: "The looping GIF appears instantly. Click Download GIF to save it, or adjust the trim and settings and render again until it looks right.",
    },
  ],
  useCases: [
    "Turn a funny moment from a video into a reaction GIF",
    "Make a looping product or app demo for a landing page",
    "Create a short GIF for a chat, forum, or issue tracker",
    "Capture a highlight from gameplay or a screen recording",
    "Preview an animation as a lightweight, autoplaying GIF",
    "Share a clip where GIFs autoplay but videos don't",
  ],
  faqs: [
    {
      q: "Is Video to GIF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my video uploaded to a server?",
      a: "No. The conversion runs entirely in your browser using FFmpeg compiled to WebAssembly, so your video never leaves your device.",
    },
    {
      q: "Why is my GIF file so large?",
      a: "GIFs are an old format and grow quickly with length, frame rate, and width. Keep the clip to a few seconds, lower the frame rate, and reduce the width to shrink the file.",
    },
    {
      q: "What video formats can I use?",
      a: "Common formats like MP4, WebM, MOV, MKV, and M4V work. The FFmpeg engine decodes a wide range of codecs entirely on your device.",
    },
    {
      q: "Why does the first conversion take a moment?",
      a: "The first time you use a video tool, the browser downloads the ~31 MB FFmpeg engine. After that it is cached, so later conversions start almost instantly.",
    },
  ],
};

export default content;

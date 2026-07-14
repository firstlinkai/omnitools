import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Video Converter changes a clip from one container and codec to another — MP4, MOV, MKV, or WebM — entirely in your browser. Drop in a video, pick a target format, and download the converted file. The MP4, MOV, and MKV targets use H.264 video with AAC audio, while WebM uses VP8 with Vorbis. Because it runs locally with in-browser FFmpeg (WebAssembly), your footage is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. Most common formats can be read as input. The in-browser video engine loads in the background while you choose a target.",
    },
    {
      title: "Pick a target format",
      body: "Choose MP4 (H.264 / AAC), MOV (H.264 / AAC), MKV (H.264 / AAC), or WebM (VP8 / Vorbis) from the Target format menu. MP4 is the safest choice for broad compatibility.",
    },
    {
      title: "Convert",
      body: "Click Convert to run the transcode. Note that WebM (VP8) encoding is noticeably slower than the H.264 targets, so allow extra time for longer clips.",
    },
    {
      title: "Preview and download",
      body: "Play the converted clip in the built-in preview to confirm it looks right, then download it. Everything is processed on your device, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Convert a MOV or MKV file to MP4 for wide device compatibility",
    "Turn a clip into WebM for lighter, web-friendly playback",
    "Repackage footage into MP4 before using another FreeTools video tool",
    "Change an incompatible file into a format your editor or player accepts",
    "Standardize a mix of clips to a single container and codec",
    "Get an H.264 MP4 from a format that won't play on a target device",
  ],
  faqs: [
    {
      q: "Is Video Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my video to a server?",
      a: "No. The conversion runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Which output formats are available?",
      a: "MP4, MOV, and MKV (all H.264 video with AAC audio) and WebM (VP8 video with Vorbis audio). MP4 is the most broadly compatible choice.",
    },
    {
      q: "Why is WebM conversion slower?",
      a: "WebM uses the VP8 encoder, which is more computationally intensive than the H.264 encoder behind the MP4, MOV, and MKV targets. Longer clips will take more time.",
    },
    {
      q: "Is there a file-size limit?",
      a: "There is no fixed limit because nothing is uploaded. Processing happens on your device, so very large files use more memory and time — shorter clips convert fastest.",
    },
  ],
};

export default content;

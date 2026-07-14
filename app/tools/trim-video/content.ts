import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Trim Video lets you cut a clip down to exactly the part you need, right in your browser. Mark a start and end point on the timeline, preview the selection, and download the trimmed clip. Because the editing runs locally with in-browser FFmpeg (WebAssembly), your footage is never uploaded — it never leaves your device.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. The in-browser video engine loads automatically in the background.",
    },
    {
      title: "Set the range",
      body: "Drag the two handles on the slider — or type exact timestamps — to mark where the clip should start and end. The live preview shows your current selection.",
    },
    {
      title: "Pick a trim mode",
      body: "Choose Fast copy for an instant, lossless cut, or Precise re-encode for a frame-exact trim that outputs MP4 (H.264).",
    },
    {
      title: "Trim and download",
      body: "Click Trim video, then download the finished clip. Everything is processed on your device, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Cut dead air from the start and end of a recording",
    "Clip a short highlight from a longer video to share",
    "Shorten a screen recording before sending it to a colleague",
    "Extract a single scene from raw footage",
    "Prepare a clip to fit a platform's length limit",
    "Remove a mistake or interruption from the middle of a take",
  ],
  faqs: [
    {
      q: "Is Trim Video free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my video to a server?",
      a: "No. Trimming runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device. That is the whole point of FreeTools.",
    },
    {
      q: "Which video formats can I trim?",
      a: "MP4, MOV, and WebM are best supported. Fast-copy mode keeps the original format; precise mode re-encodes to MP4 (H.264).",
    },
    {
      q: "Is there a file-size limit?",
      a: "There is no fixed limit because nothing is uploaded. Processing happens on your device, so very large files simply use more memory — shorter clips are faster.",
    },
    {
      q: "Why does the fast cut sometimes start slightly early?",
      a: "Fast copy snaps the cut to the nearest keyframe to stay instant and lossless. If you need a frame-exact cut, switch to Precise re-encode.",
    },
  ],
};

export default content;

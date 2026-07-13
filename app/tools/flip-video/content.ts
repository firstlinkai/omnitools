import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Flip Video mirrors your footage horizontally or vertically, right in your browser. Choose a direction and export a mirrored MP4 in a couple of clicks. The re-encode runs locally with in-browser FFmpeg (WebAssembly), so your video is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. A preview appears and the in-browser engine loads automatically.",
    },
    {
      title: "Pick a direction",
      body: "From the Direction dropdown, choose Horizontal to mirror left and right, or Vertical to mirror top and bottom.",
    },
    {
      title: "Flip and export",
      body: "Click Flip video. The picture is mirrored and re-encoded to MP4 (H.264), while the audio is copied through unchanged.",
    },
    {
      title: "Preview and download",
      body: "Review the flipped result in the built-in player, then click Download to save the file. All processing stays on your device.",
    },
  ],
  useCases: [
    "Un-mirror selfie or webcam footage so text reads correctly",
    "Flip a clip horizontally to match the framing of other shots",
    "Mirror a tutorial so a demonstrated action appears on the opposite side",
    "Create a mirrored version of a clip for a symmetrical edit",
    "Correct footage that a front-facing camera recorded reversed",
    "Vertically flip video that was captured through a mirror or prism rig",
  ],
  faqs: [
    {
      q: "Do you upload my video to a server?",
      a: "No. Flipping runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Is Flip Video free?",
      a: "Yes. It's completely free — no account, no sign-up, and no watermark on the result.",
    },
    {
      q: "What's the difference between horizontal and vertical flip?",
      a: "Horizontal mirrors the frame left to right, like a mirror image. Vertical mirrors it top to bottom, turning the picture upside down along the horizontal axis.",
    },
    {
      q: "Will flipping affect the audio?",
      a: "No. Only the picture is mirrored and re-encoded to MP4 (H.264); the audio track is copied through exactly as it was.",
    },
    {
      q: "Is there a limit on file size?",
      a: "There's no fixed limit since nothing is uploaded. The work happens in your browser, so bigger files use more memory and take a little longer.",
    },
  ],
};

export default content;

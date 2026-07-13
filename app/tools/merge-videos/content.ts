import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Merge Videos joins two or more clips end to end into a single file, entirely in your browser. Add your clips, drag them into the order you want, and download one continuous video. It uses fast, lossless stream copy — nothing is re-encoded and nothing is uploaded, because the work happens locally with in-browser FFmpeg (WebAssembly).",
  steps: [
    {
      title: "Add your clips",
      body: "Drop two or more videos on the drop zone or click to browse. MP4, WebM, MOV, MKV, and M4V are accepted. The in-browser engine starts loading in the background as soon as you add files.",
    },
    {
      title: "Set the order",
      body: "Drag clips by their grip handles, or use the up and down arrows, to arrange them top to bottom. That top-to-bottom order is the order they'll play in the merged file. Use the X to remove any clip.",
    },
    {
      title: "Merge",
      body: "Click Merge to concatenate every clip into one video. Because it copies the streams without re-encoding, merging is fast — but every clip must share the same codec, resolution, and frame rate.",
    },
    {
      title: "Preview and download",
      body: "Watch the merged result in the built-in player, then click Download to save the combined MP4. All of it stays on your device.",
    },
  ],
  useCases: [
    "Combine screen-recording segments into one walkthrough",
    "Stitch several phone clips from an event into a single video",
    "Join an intro, main take, and outro into one file",
    "Assemble multiple exported render passes into one continuous clip",
    "Merge short social clips shot back to back into one upload",
    "Concatenate GoPro or dashcam segments that were split automatically",
  ],
  faqs: [
    {
      q: "Do you upload my videos to a server?",
      a: "No. Merging runs entirely in your browser using WebAssembly FFmpeg, so your clips never leave your device — no uploads, ever.",
    },
    {
      q: "Is Merge Videos free?",
      a: "Yes, completely free. No account, no sign-up, and no watermark on the output.",
    },
    {
      q: "Why does my merge fail or look glitchy?",
      a: "Fast concatenation copies the streams without re-encoding, so every clip needs the same codec, resolution, and frame rate. If they differ, run each one through Resize Video or Video Converter first so they match, then merge.",
    },
    {
      q: "Can I reorder clips after adding them?",
      a: "Yes. Drag them by the grip handle or use the up and down arrows. The order shown top to bottom is exactly the order they play in the final file.",
    },
    {
      q: "What format is the merged file?",
      a: "The output is saved as an MP4 container. Because it's a stream copy, the underlying video and audio are kept as-is from your source clips rather than re-encoded.",
    },
  ],
};

export default content;

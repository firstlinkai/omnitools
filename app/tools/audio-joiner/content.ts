import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Audio Joiner stitches two or more clips into a single continuous file, right in your browser. Add your files, drag them into the order you want, and download the combined result. Each clip is decoded and concatenated with the Web Audio API on your device, so nothing is ever uploaded.",
  steps: [
    {
      title: "Add your clips",
      body: "Drag two or more audio files onto the drop zone, or click to browse. MP3, WAV, M4A, AAC, OGG, FLAC, and WebM are accepted, and you can keep adding more with the smaller drop zone below the list.",
    },
    {
      title: "Set the order",
      body: "Reorder the list by dragging the handle on each row, or use the up and down arrows. The numbered badges show the exact sequence the clips will play in.",
    },
    {
      title: "Trim the lineup",
      body: "Remove any clip you do not want with its X button. You need at least two clips in the list before joining.",
    },
    {
      title: "Join and download",
      body: "Click Join clips to concatenate them into one WAV, which downloads automatically. All the work happens locally, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Combine several voice memos into one recording",
    "Stitch podcast segments into a single episode file",
    "Assemble music clips into one continuous mix",
    "Merge chapters of an audiobook into one file",
    "Chain sound effects into a single cue",
    "Join interview parts recorded separately into one track",
  ],
  faqs: [
    {
      q: "Is Audio Joiner free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. Every clip is decoded and joined entirely in your browser with the Web Audio API, so your files never leave your device.",
    },
    {
      q: "Do my clips need to be the same format?",
      a: "No — you can mix formats the browser can decode. However, all clips are joined at the first file's sample rate and are assumed to share it. If they use different sample rates, convert them to a common rate first, or the joined result may play at the wrong speed.",
    },
    {
      q: "What format is the joined file?",
      a: "The combined audio is saved as a single WAV file. WAV is uncompressed, so the download may be larger than the compressed sources added together.",
    },
    {
      q: "How many clips can I join at once?",
      a: "You need at least two, and there is no fixed upper limit. Because everything is processed on your device, more and longer clips simply use more memory.",
    },
  ],
};

export default content;

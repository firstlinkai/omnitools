import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Rotate Video turns footage that was shot at the wrong angle back upright, entirely in your browser. Pick a rotation of 90°, 180°, or 270° and export a corrected MP4. The re-encode happens locally with in-browser FFmpeg (WebAssembly), so your video is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. A preview appears and the in-browser engine begins loading on its own.",
    },
    {
      title: "Choose a rotation",
      body: "From the Rotation dropdown, pick 90° clockwise, 180°, or 90° counter-clockwise to spin the picture the amount you need.",
    },
    {
      title: "Rotate and export",
      body: "Click Rotate video. The picture is re-encoded to MP4 (H.264) at the new orientation while the audio is copied through untouched.",
    },
    {
      title: "Preview and download",
      body: "Check the rotated result in the built-in player, then click Download to save it. Every step runs on your device.",
    },
  ],
  useCases: [
    "Fix a phone clip that recorded sideways",
    "Correct footage that came out upside down",
    "Turn a horizontally shot video to vertical orientation",
    "Rotate a clip a drone or action camera saved at the wrong angle",
    "Straighten scanned or screen-captured video that's rotated 90°",
    "Reorient a clip before merging it with others that are upright",
  ],
  faqs: [
    {
      q: "Do you upload my video to a server?",
      a: "No. Rotation runs entirely in your browser using WebAssembly FFmpeg, so your file stays on your device the whole time.",
    },
    {
      q: "Is Rotate Video free?",
      a: "Yes, it's free to use with no account, no sign-up, and no watermark on the output.",
    },
    {
      q: "What rotation angles can I choose?",
      a: "You can rotate 90° clockwise, 180°, or 90° counter-clockwise. Between them these cover any right-angle orientation problem.",
    },
    {
      q: "Does rotating reduce quality?",
      a: "Rotating re-encodes the picture to MP4 (H.264), which is a fresh encode, but the default quality setting is visually close to the source. Your audio is copied as-is with no re-encode.",
    },
    {
      q: "Why does the file come out as MP4?",
      a: "The tool standardizes on MP4 (H.264) for the rotated picture so the result plays reliably everywhere, while keeping your original audio stream intact.",
    },
  ],
};

export default content;

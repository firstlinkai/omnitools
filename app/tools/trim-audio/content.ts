import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Trim Audio lets you cut a clip down to just the section you want, right in your browser. Drop in an MP3, WAV, M4A, or OGG file, drag the start and end sliders to mark the section, and download the result. All decoding and slicing happens locally with the Web Audio API, so your file is never uploaded.",
  steps: [
    {
      title: "Add your audio",
      body: "Drag a file onto the drop zone or click to browse. MP3, WAV, M4A, and OGG are supported. The tool decodes it in the background and shows a playable preview.",
    },
    {
      title: "Set the start point",
      body: "Drag the Start slider to where the clip should begin. The timestamp beside it updates live so you can land on the exact moment.",
    },
    {
      title: "Set the end point",
      body: "Drag the End slider to where the clip should stop. The two handles clamp against each other, and the panel shows the resulting clip length.",
    },
    {
      title: "Trim and download",
      body: "Click Trim & download WAV to slice the selection and save it. Everything runs on your device, so nothing leaves your browser.",
    },
  ],
  useCases: [
    "Cut silence or dead air from the start and end of a recording",
    "Grab a short ringtone or sample from a longer track",
    "Isolate a single quote or line from an interview",
    "Shorten a voice memo before sharing it",
    "Extract a loop-worthy section from a song",
    "Remove a false start from the beginning of a take",
  ],
  faqs: [
    {
      q: "Is Trim Audio free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. The file is decoded and trimmed entirely in your browser with the Web Audio API, so it never leaves your device.",
    },
    {
      q: "What format is the trimmed file?",
      a: "The clip is saved as a WAV file. WAV is uncompressed, so the download may be larger than a compressed MP3 source of the same length.",
    },
    {
      q: "Which formats can I trim?",
      a: "Any audio your browser can decode — MP3, WAV, M4A, and OGG all work well. The output is always WAV regardless of the input format.",
    },
    {
      q: "Is there a length or file-size limit?",
      a: "There is no fixed limit because nothing is uploaded. Very long files use more memory to decode, so shorter clips process fastest.",
    },
  ],
};

export default content;

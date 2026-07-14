import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Reverse Audio plays any clip backwards and saves the flipped version, all inside your browser. Drop in an MP3, WAV, M4A, or OGG file, click one button, and preview the reversed result before downloading. Every sample is flipped end to end with the Web Audio API on your device, so your file is never uploaded.",
  steps: [
    {
      title: "Add your audio",
      body: "Drag a file onto the drop zone or click to browse. MP3, WAV, M4A, and OGG all work. The tool decodes it and shows a playable preview with its duration.",
    },
    {
      title: "Reverse it",
      body: "Click Reverse & download WAV. Every channel is flipped sample by sample so the audio plays back to front.",
    },
    {
      title: "Compare the result",
      body: "A reversed preview player appears beneath the button so you can play the flipped audio and compare it against the original above.",
    },
    {
      title: "Download",
      body: "The reversed WAV downloads automatically when you run the tool. All processing is local, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Create a reverse-cymbal or backwards swell for a track",
    "Design reversed sound effects for video or games",
    "Check a recording for hidden backmasked messages",
    "Make an eerie backwards vocal or ambience",
    "Build a reversed intro that leads into a downbeat",
    "Explore how a familiar sound behaves played in reverse",
  ],
  faqs: [
    {
      q: "Is Reverse Audio free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. The audio is decoded and reversed entirely in your browser with the Web Audio API, so it never leaves your device.",
    },
    {
      q: "What format is the reversed file?",
      a: "The result is saved as a WAV file. WAV is uncompressed, so the download may be larger than a compressed source of the same length.",
    },
    {
      q: "Does reversing lose any quality?",
      a: "No. Reversing simply flips the order of the samples, so no audio quality is lost in the process itself.",
    },
    {
      q: "Which formats can I reverse?",
      a: "Any audio your browser can decode — MP3, WAV, M4A, and OGG all work. The output is always a WAV file.",
    },
  ],
};

export default content;

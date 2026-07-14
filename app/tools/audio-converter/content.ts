import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Audio Converter changes an audio file into MP3, WAV, OGG, or M4A right in your browser, powered by FFmpeg compiled to WebAssembly. Drop a track, pick a target format, and convert — with players for both the original and the result so you can compare them. Your audio is decoded and re-encoded locally and is never uploaded.",
  steps: [
    {
      title: "Add an audio file",
      body: "Drag a file onto the drop zone or click to browse. MP3, WAV, OGG, M4A, and many other formats are accepted. The in-browser conversion engine begins loading in the background as soon as you add a file.",
    },
    {
      title: "Preview the original",
      body: "The source track loads into an audio player so you can confirm it's the right file and hear how it sounds before converting.",
    },
    {
      title: "Choose a target format",
      body: "Pick MP3, WAV, OGG, or M4A from the Target format dropdown. Wait for the engine status to show it's ready — a percentage indicates the WebAssembly core is still downloading.",
    },
    {
      title: "Convert and download",
      body: "Click Convert to run the encode; a progress percentage tracks the work. Play the result to check it, then click Download to save the new file. Choose Start over to convert another track.",
    },
  ],
  useCases: [
    "Turn a WAV recording into a smaller MP3 for easy sharing",
    "Convert an M4A voice memo into MP3 for wider compatibility",
    "Extract a lossless WAV from a compressed source for editing",
    "Standardize a folder of mixed audio to one format, one file at a time",
    "Create an OGG version of a track for web or game use",
    "Re-encode audio to a format your player or device accepts",
  ],
  faqs: [
    {
      q: "Is Audio Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are my files uploaded to a server?",
      a: "No. Conversion runs entirely in your browser with WebAssembly FFmpeg, so your audio never leaves your device. That's the whole point of FreeTools.",
    },
    {
      q: "Which formats can I convert to?",
      a: "You can convert to MP3, WAV, OGG, or M4A. A wide range of input formats is accepted since FFmpeg decodes many codecs.",
    },
    {
      q: "Why did my conversion fail for one format?",
      a: "Codec availability depends on the in-browser FFmpeg core, so a specific target may occasionally be unavailable. If one format fails, try a different target format — the tool suggests this when it happens.",
    },
    {
      q: "Why does the first conversion take a moment to start?",
      a: "The FFmpeg engine is a WebAssembly module that downloads once when you add your first file. After it's loaded, conversions run without that initial wait.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Change Volume raises or lowers the loudness of an audio file and saves the adjusted version, all inside your browser. Drop in an MP3, WAV, M4A, or OGG file and move a single slider from 0% up to 400% of the original level. The gain is applied with the Web Audio API on your device, so your file is never uploaded.",
  steps: [
    {
      title: "Add your audio",
      body: "Drag a file onto the drop zone or click to browse. The tool decodes it and shows a playable preview alongside its name, size, and duration.",
    },
    {
      title: "Set the volume",
      body: "Drag the Volume slider between 0% and 400%. 100% keeps the original level, values below reduce it, and values above amplify it.",
    },
    {
      title: "Watch for clipping",
      body: "Boosting well above 100% can push loud peaks past the maximum and cause distortion. Nudge the level down if the result sounds harsh.",
    },
    {
      title: "Apply and download",
      body: "Click Apply & download to render the new level and save it. All processing happens locally, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Boost a quiet recording that is hard to hear",
    "Turn down a clip that is uncomfortably loud",
    "Even out the level of a voice memo before sharing",
    "Amplify a faint interview or lecture capture",
    "Reduce a backing track so it sits under narration",
    "Rescue audio recorded too far from the microphone",
  ],
  faqs: [
    {
      q: "Is Change Volume free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. The gain change is applied entirely in your browser with the Web Audio API, so the file never leaves your device.",
    },
    {
      q: "What format is the output?",
      a: "The adjusted audio is saved as a WAV file. WAV is uncompressed, so the download may be larger than a compressed source of the same length.",
    },
    {
      q: "Why does the loud version sound distorted?",
      a: "Amplifying above 100% can push peaks beyond the maximum level, which clips and distorts them. Lower the percentage until the audio stays clean.",
    },
    {
      q: "How high can I turn the volume up?",
      a: "The slider goes up to 400% — four times the original level. That much gain will clip most material, so use the highest settings only on very quiet audio.",
    },
  ],
};

export default content;

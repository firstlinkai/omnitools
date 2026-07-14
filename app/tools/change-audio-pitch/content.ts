import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Change Pitch shifts an audio file up or down by whole semitones while keeping its tempo intact, so nothing speeds up or slows down. Drop in a file and move the slider anywhere from -12 to +12 semitones — a full octave in each direction. It runs on in-browser FFmpeg (WebAssembly), so your audio is processed on your device and never uploaded.",
  steps: [
    {
      title: "Add your audio",
      body: "Drag an MP3, WAV, or other audio file onto the drop zone. The in-browser FFmpeg engine starts loading in the background with a visible status line.",
    },
    {
      title: "Set the pitch shift",
      body: "Drag the semitone slider between -12 and +12. Positive values raise the pitch, negative values lower it, and 0 leaves the audio unchanged.",
    },
    {
      title: "Change pitch",
      body: "Click Change pitch once the engine is ready. FFmpeg resamples and re-times the audio so the tempo stays the same while the pitch moves.",
    },
    {
      title: "Preview and download",
      body: "Play the result to confirm it sounds right, then click Download to save the WAV. All processing is local, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Transpose a backing track into a singer's comfortable key",
    "Raise or lower a vocal to match another recording",
    "Nudge an instrument sample into tune with a project",
    "Create a deeper or higher voice effect",
    "Shift a sample up or down before layering it in a beat",
    "Match the key of two clips you plan to mix together",
  ],
  faqs: [
    {
      q: "Is Change Pitch free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. The pitch shift runs entirely in your browser with WebAssembly FFmpeg, so the file never leaves your device.",
    },
    {
      q: "Does shifting the pitch change the length or speed?",
      a: "No. The tempo is preserved, so the clip stays the same length and plays at the same speed — only the pitch moves.",
    },
    {
      q: "How far can I shift the pitch?",
      a: "Up or down by up to 12 semitones, which is a full octave in each direction. Steps are whole semitones. Larger shifts naturally introduce more processing artifacts.",
    },
    {
      q: "What format is the output?",
      a: "The result is saved as a WAV file. WAV is uncompressed, so the download may be larger than a compressed source of the same length.",
    },
  ],
};

export default content;

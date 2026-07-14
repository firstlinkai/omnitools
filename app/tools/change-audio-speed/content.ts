import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Change Speed makes an audio file play faster or slower without shifting its pitch, so voices and music stay natural. Drop in a file and set a speed between 0.5x and 2x. The work is done by in-browser FFmpeg (WebAssembly) using its atempo filter, so your audio is processed on your device and never uploaded.",
  steps: [
    {
      title: "Add your audio",
      body: "Drag an MP3, WAV, or other audio file onto the drop zone. The in-browser FFmpeg engine begins loading in the background and a status line shows its progress.",
    },
    {
      title: "Set the speed",
      body: "Drag the speed slider between 0.5x (half speed) and 2x (double speed). 1.00x leaves the audio unchanged, and the pitch is preserved at every setting.",
    },
    {
      title: "Change speed",
      body: "Click Change speed once the engine is ready. A percentage indicator shows the processing progress while FFmpeg re-times the audio.",
    },
    {
      title: "Preview and download",
      body: "Play the result to check it, then click Download to save the WAV. Everything runs locally, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Speed up a lecture or podcast to get through it faster",
    "Slow down a fast passage to transcribe it accurately",
    "Slow music to learn a solo or vocal line note by note",
    "Tighten the timing of a voiceover to fit a set length",
    "Slow a language recording to catch every word",
    "Pace-match narration to a video edit",
  ],
  faqs: [
    {
      q: "Is Change Speed free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. Processing runs entirely in your browser with WebAssembly FFmpeg, so the file never leaves your device.",
    },
    {
      q: "Does changing speed also change the pitch?",
      a: "No. The atempo filter preserves pitch as it re-times the audio, so a sped-up voice does not turn into a chipmunk and a slowed one does not drop in tone.",
    },
    {
      q: "What format is the output?",
      a: "The result is saved as a WAV file. WAV is uncompressed, so the download may be larger than a compressed source of the same length.",
    },
    {
      q: "Why is there a short wait before I can process?",
      a: "The FFmpeg engine is a WebAssembly module that loads the first time you use it. Once it is ready the status line clears and processing is quick.",
    },
  ],
};

export default content;

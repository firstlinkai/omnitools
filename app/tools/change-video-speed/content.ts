import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Change Video Speed lets you slow footage down for dramatic slow motion or speed it up into a quick time-lapse, right in your browser. Drag a single slider from 0.5× to 2× and the tool retimes both the picture and the audio together, keeping them in sync and preserving the audio's pitch. Because it runs locally with in-browser FFmpeg (WebAssembly), your video is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. The in-browser video engine loads in the background while you choose a speed.",
    },
    {
      title: "Choose a speed",
      body: "Drag the slider between 0.5× and 2×. 0.5× is half speed (slow motion), 1× is normal, and 2× is double speed. The audio is retimed to match and its pitch is preserved, so voices don't turn chipmunk-high.",
    },
    {
      title: "Change the speed",
      body: "Click Change speed. The video is re-encoded with H.264 at the new timing and the audio is stretched or compressed to stay perfectly in sync with the picture.",
    },
    {
      title: "Preview and download",
      body: "Watch the retimed clip in the built-in preview, then download the MP4. Everything is processed on your device, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Slow a sports or action clip into smooth slow motion for review",
    "Speed up a long screen recording or tutorial to keep it snappy",
    "Turn a slow pan or build sequence into a quick time-lapse",
    "Fit a clip into a tighter length limit by speeding it up",
    "Slow down a demo so viewers can follow each step",
    "Create a dramatic slow-mo highlight without pitch-shifting the audio",
  ],
  faqs: [
    {
      q: "Is Change Video Speed free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my video to a server?",
      a: "No. The retiming runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Does the audio stay in sync?",
      a: "Yes. The picture and the audio are retimed by the same factor, so they stay aligned. The audio's pitch is also preserved, so sped-up voices don't sound squeaky.",
    },
    {
      q: "Why is the range limited to 0.5×–2×?",
      a: "Pitch-preserving audio retiming is reliable within that range in a single pass. To go faster or slower, run the tool again on the output to compound the effect.",
    },
    {
      q: "What format does it output?",
      a: "The result is an MP4 (H.264 video, retimed audio). MP4, MOV, and WebM inputs work best; if a clip won't process, convert it to MP4 first with the Video Converter tool.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Video Recorder captures video and audio straight from your webcam with a live preview, so you can record a clip without any app or upload. Pick which camera to use, then Start, Pause, Resume, and Stop the take, preview it, and download the file. Recording and encoding run entirely in your browser — the footage never leaves your device.",
  steps: [
    {
      title: "Pick your camera",
      body: "In the Camera panel, choose an input device from the dropdown, or leave it on System default camera. Device names appear once you've granted camera permission at least once.",
    },
    {
      title: "Start recording",
      body: "Click Start recording. Your browser asks for camera and microphone access the first time; allow it to begin. The live preview then shows exactly what's being captured.",
    },
    {
      title: "Pause, resume, or stop",
      body: "A red badge and timer confirm recording is active. Use Pause to hold and Resume to keep adding to the same clip, or click Stop to finish. Unplugging or closing the camera also ends the take cleanly.",
    },
    {
      title: "Preview and download",
      body: "The recorded clip loads into a player with full controls. Click Download to save it — most browsers export WebM, and Safari can produce MP4. Use New recording to record another take.",
    },
  ],
  useCases: [
    "Record a quick video message instead of typing a long reply",
    "Capture a talking-head intro or outro for a larger project",
    "Film a self-tape audition or practice a presentation on camera",
    "Record a video journal or diary entry privately on your device",
    "Grab test footage to check lighting, framing, or a new webcam",
    "Create a short clip to attach to an email or chat",
  ],
  faqs: [
    {
      q: "Is Video Recorder free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my video uploaded to a server?",
      a: "No. The webcam stream is recorded and encoded inside your browser tab and saved directly to your device. Nothing is ever uploaded.",
    },
    {
      q: "What format is the saved file?",
      a: "Most browsers save WebM, which opens in modern players and editors. Safari can export MP4 where supported. The download button shows the exact extension before you save.",
    },
    {
      q: "Why doesn't my camera or microphone work?",
      a: "You need to grant camera and microphone permission in the browser prompt. If access was denied, re-enable it in your browser's site settings, then click Start recording again.",
    },
    {
      q: "Can I choose a different camera?",
      a: "Yes. Use the Input device dropdown to pick any connected camera. Detailed device names show up after you've allowed camera access once.",
    },
  ],
};

export default content;

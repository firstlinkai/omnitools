import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Voice Recorder captures audio from your microphone with a live waveform so you can watch your levels as you speak. Pick an input device, then Start, Pause, Resume, and Stop the recording, play it back, and download the file. Everything is recorded and saved in your browser — your audio never leaves your device.",
  steps: [
    {
      title: "Choose your microphone",
      body: "In the Microphone panel, select an input device from the dropdown, or keep System default microphone. Device names fill in once you've allowed microphone access.",
    },
    {
      title: "Start recording",
      body: "Click Start recording and allow microphone access when prompted. A live waveform draws your voice in real time so you can confirm the mic is picking you up.",
    },
    {
      title: "Pause, resume, or stop",
      body: "A red badge and timer show recording is active. Use Pause to hold and Resume to continue in the same file, or click Stop when you're finished.",
    },
    {
      title: "Play back and download",
      body: "The recording appears in an audio player so you can listen before saving. Click Download to keep the file — it saves as WebM, OGG, or M4A depending on your browser. Use New recording to start over.",
    },
  ],
  useCases: [
    "Record a voice memo or reminder without opening a separate app",
    "Capture song ideas, melodies, or lyrics the moment they strike",
    "Dictate notes, a to-do list, or a first draft out loud",
    "Record a voiceover clip for a video or slideshow",
    "Practise a speech or interview answer and play it back",
    "Save a spoken message to send to a friend or colleague",
  ],
  faqs: [
    {
      q: "Is Voice Recorder free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my audio uploaded anywhere?",
      a: "No. Recording and encoding happen entirely in your browser, and the file is saved directly to your device. Nothing is ever uploaded to a server.",
    },
    {
      q: "What audio format do I get?",
      a: "It depends on your browser: most save WebM (Opus), some produce OGG, and Safari typically exports M4A. The download button shows the exact extension before you save.",
    },
    {
      q: "Why isn't my microphone working?",
      a: "You need to grant microphone permission in the browser prompt. If it was blocked, re-enable it in your browser's site settings and click Start recording again. You can also pick a specific device from the dropdown.",
    },
    {
      q: "Is there a time limit on recordings?",
      a: "There's no fixed limit because nothing is uploaded — length is bounded only by your device's available memory. Longer recordings simply use more memory before you save them.",
    },
  ],
};

export default content;

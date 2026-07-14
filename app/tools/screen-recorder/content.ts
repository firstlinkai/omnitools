import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Screen Recorder captures whatever you share from your screen — a whole display, a single window, or one browser tab — with optional microphone narration, system audio, and a webcam overlay in the corner. You control the session with Start, Pause, Resume, and Stop, then preview the result and download it. Capture and encoding happen entirely in your browser, so no stream is ever uploaded.",
  steps: [
    {
      title: "Choose what to capture",
      body: "In the Capture options panel, toggle Microphone, System audio, and Camera overlay on or off. Leave the camera off for a clean screen capture, or turn it on for a picture-in-picture bubble in the bottom-right corner.",
    },
    {
      title: "Start recording",
      body: "Click Start recording. Your browser's share dialog asks which screen, window, or tab to capture — and, on Chrome or Edge, whether to include that surface's system audio. Grant microphone and camera permission if you enabled those toggles.",
    },
    {
      title: "Pause and resume as needed",
      body: "The live preview and a red timer show the session is running. Use Pause to hold and Resume to continue in the same file, or click Stop when you're done. Ending the share from the browser's own control stops the recording cleanly too.",
    },
    {
      title: "Preview and download",
      body: "The finished recording appears in the player with playback controls. Click Download to save it — most browsers export WebM, while Safari can produce MP4. Choose New recording to start again.",
    },
  ],
  useCases: [
    "Record a software demo or product walkthrough with voice narration",
    "Capture a bug or error to send to your support team or developers",
    "Make a tutorial with your webcam in the corner for a personal touch",
    "Save a video call or webinar window along with its system audio",
    "Record a presentation or slide deck as you talk through it",
    "Grab a short screen clip to drop into a message or ticket",
  ],
  faqs: [
    {
      q: "Is Screen Recorder free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my recording uploaded anywhere?",
      a: "No. Screen capture and encoding run entirely in your browser tab, and the file is saved straight to your device. Nothing is ever uploaded to a server.",
    },
    {
      q: "What file format do I get?",
      a: "Most browsers save WebM, which plays in modern players and editors. Safari can export MP4 where its recorder supports it. The download button shows the exact extension before you save.",
    },
    {
      q: "Why can't I capture system audio?",
      a: "System audio is granted in your browser's share dialog and is best supported in Chrome and Edge, often only when sharing a tab or an entire screen. If it isn't offered, enable Microphone to narrate instead.",
    },
    {
      q: "Do I need to install anything or give permission?",
      a: "No install is needed — it runs in the browser. You will be prompted to pick a screen to share, and to allow microphone or camera access if you turned those options on.",
    },
  ],
};

export default content;

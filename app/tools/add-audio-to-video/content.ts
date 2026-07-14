import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Add Audio to Video lays a music track or voiceover over a clip by combining two files — your video and a separate audio file — into one MP4. The video track is copied untouched while the new audio is encoded to AAC, and the result is trimmed to whichever of the two is shorter. The original audio in the video is replaced by the track you add. Everything runs locally with in-browser FFmpeg (WebAssembly), so neither file is ever uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag the video onto the first drop zone or click to browse. MP4, MOV, and WebM work best. The in-browser video engine starts loading as soon as the video is added.",
    },
    {
      title: "Add an audio track",
      body: "In the Audio track panel, drop an MP3, WAV, or other audio file. This becomes the new soundtrack — it replaces the video's original audio rather than mixing with it.",
    },
    {
      title: "Combine the two",
      body: "Click Add audio to video. The video stream is copied as-is, the audio is encoded to AAC, and the output is cut to the shorter of the video and audio lengths.",
    },
    {
      title: "Preview and download",
      body: "Play the combined clip in the built-in preview to check timing, then download the MP4. Both files are processed on your device — nothing is sent to a server.",
    },
  ],
  useCases: [
    "Add a background music track to a silent clip or slideshow",
    "Lay a recorded voiceover over screen-capture footage",
    "Replace noisy on-camera audio with a clean studio recording",
    "Set a product or promo video to a licensed music bed",
    "Attach narration to a demo or tutorial",
    "Give a montage a soundtrack without opening a full editor",
  ],
  faqs: [
    {
      q: "Is Add Audio to Video free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my files to a server?",
      a: "No. The video and audio are combined entirely in your browser using WebAssembly FFmpeg, so neither file ever leaves your device.",
    },
    {
      q: "Does the new audio mix with the video's original sound?",
      a: "No. The added track replaces the video's original audio. If you need both, mix them together first, then add the combined track here.",
    },
    {
      q: "What if the audio and video are different lengths?",
      a: "The output is trimmed to whichever is shorter, so it ends cleanly. Trim your audio or video beforehand if you want an exact match.",
    },
    {
      q: "Which formats work?",
      a: "Video works best as MP4, MOV, or WebM, and audio as MP3 or WAV; the result is an MP4. If the video's codec can't be copied, convert it to MP4 first with the Video Converter tool.",
    },
  ],
};

export default content;

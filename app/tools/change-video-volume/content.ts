import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Change Video Volume lets you make a clip louder or quieter without re-rendering the picture. Drop in a video, drag the volume slider anywhere from mute to a 4× boost, and download the result. The video stream is copied untouched and only the audio is re-encoded, so processing is fast and the visuals stay pixel-for-pixel identical. Everything runs locally with in-browser FFmpeg (WebAssembly), so your footage is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. The in-browser video engine begins downloading in the background while you set the level.",
    },
    {
      title: "Set the volume level",
      body: "Drag the slider between 0% and 400%. 100% keeps the original level, 0% mutes the clip entirely, and anything above 100% amplifies the audio (loud sources may clip at high settings).",
    },
    {
      title: "Apply the change",
      body: "Click Apply volume. The tool copies the video stream as-is and re-encodes only the audio with your chosen gain, so it finishes quickly even on long clips.",
    },
    {
      title: "Preview and download",
      body: "Play the result in the built-in preview to check the new level, then download the MP4. All processing happens on your device — nothing is sent to a server.",
    },
  ],
  useCases: [
    "Boost quiet dialogue or a distant microphone so it is easier to hear",
    "Lower background music that overpowers a voiceover",
    "Mute a clip completely before adding a new soundtrack",
    "Even out a recording that came out too loud on export",
    "Raise the level of a phone recording made in a noisy room",
    "Quickly normalize a screen recording's system audio before sharing",
  ],
  faqs: [
    {
      q: "Is Change Video Volume free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my video to a server?",
      a: "No. The volume change runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Does changing the volume reduce the video quality?",
      a: "No. The video stream is copied without re-encoding, so the picture is untouched. Only the audio track is re-encoded to apply the new level.",
    },
    {
      q: "What happens if I push the volume above 100%?",
      a: "The audio is amplified. Going well above 100% on already-loud material can cause clipping (harsh distortion), so raise it gradually and check the preview.",
    },
    {
      q: "Which formats can I use?",
      a: "MP4, MOV, and WebM are best supported for input, and the tool outputs an MP4. If a clip's video codec can't be copied, convert it to MP4 first with the Video Converter tool.",
    },
  ],
};

export default content;

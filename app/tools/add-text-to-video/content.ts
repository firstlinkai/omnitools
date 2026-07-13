import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Add Text to Video burns a caption directly onto your footage, right in your browser. Type your text, choose where it sits, set the color and size, and a live preview shows the styling as you go. The caption is drawn onto a transparent canvas at your video's full resolution and overlaid on every frame, with a dark outline so it stays readable over any background. Everything runs locally with in-browser FFmpeg (WebAssembly), so your video is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. The tool reads the video's dimensions so the caption is rendered at full resolution on export.",
    },
    {
      title: "Type your caption",
      body: "Enter your text in the Caption field. It appears instantly on the styling preview so you can see how it will look before rendering.",
    },
    {
      title: "Style and position it",
      body: "Set the vertical position (top, middle, or bottom), pick a text color with the color picker, and use the font-size slider (3%–20% of the video height) to scale it. A dark outline is added automatically for contrast.",
    },
    {
      title: "Render and download",
      body: "Click Add text to video. The caption is drawn onto a canvas at the video's native resolution, overlaid on every frame, and the audio is copied untouched. Preview the result and download the MP4 — all on your device.",
    },
  ],
  useCases: [
    "Add a title or headline to the start of a clip",
    "Caption a social video so it reads with the sound off",
    "Label a tutorial step or call out an on-screen action",
    "Add a lower-third name or credit to an interview",
    "Put a watermark-style handle or tagline on footage",
    "Overlay a quote or key takeaway on a highlight clip",
  ],
  faqs: [
    {
      q: "Is Add Text to Video free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my video to a server?",
      a: "No. The caption is rendered and overlaid entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Is the on-screen preview exactly what I'll get?",
      a: "The preview shows the styling — text, color, position, and relative size. On export the caption is redrawn at your video's full resolution and overlaid on the actual frames, so it stays crisp.",
    },
    {
      q: "Will the text be readable over a bright background?",
      a: "Yes. A dark outline is added around the text automatically, which keeps it legible over light, busy, or high-contrast footage.",
    },
    {
      q: "Which formats work?",
      a: "MP4, MOV, and WebM inputs work best and the output is an MP4. If a clip's codec is unsupported, convert it to MP4 first with the Video Converter tool.",
    },
  ],
};

export default content;

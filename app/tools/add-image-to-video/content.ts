import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Add Image to Video overlays a logo, watermark, or any image onto your footage by combining two files — the video and the image. Pick a corner or center placement and scale the overlay to the size you want, and the tool burns it into every frame. A transparent PNG keeps its transparency so only your mark shows. Everything runs locally with in-browser FFmpeg (WebAssembly), so nothing is ever uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag the video onto the first drop zone or click to browse. MP4, MOV, and WebM work best. The in-browser video engine begins loading as soon as the video is added.",
    },
    {
      title: "Add the overlay image",
      body: "In the Overlay image panel, drop a PNG or JPG. A PNG with transparency is ideal for logos and watermarks because only the visible pixels are overlaid.",
    },
    {
      title: "Set position and size",
      body: "Choose a placement — top left, top right, bottom left, bottom right, or center — and use the size slider (5%–100%) to scale the image relative to its own width. The corners sit with a small margin from the edge.",
    },
    {
      title: "Overlay and download",
      body: "Click Add image to video. The image is composited onto every frame, the audio is copied untouched, and you can preview the result before downloading the MP4 — all on your device.",
    },
  ],
  useCases: [
    "Watermark a video with your brand logo before publishing",
    "Add a channel or handle badge in a corner of the frame",
    "Overlay a sponsor or partner logo for a promo clip",
    "Stamp a semi-transparent copyright mark across footage",
    "Place a small icon or emblem on a tutorial or demo",
    "Brand a batch of clips with a consistent corner logo",
  ],
  faqs: [
    {
      q: "Is Add Image to Video free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my files to a server?",
      a: "No. The overlay is composited entirely in your browser using WebAssembly FFmpeg, so your video and image never leave your device.",
    },
    {
      q: "Will a transparent PNG stay transparent?",
      a: "Yes. PNG transparency is preserved, so only the visible parts of your logo or watermark appear over the video. JPGs have no transparency and will show as a solid rectangle.",
    },
    {
      q: "How is the overlay size measured?",
      a: "The size slider scales the image relative to its own original width, from 5% up to 100%. Larger source images give sharper results when scaled up.",
    },
    {
      q: "Which formats work?",
      a: "Video works best as MP4, MOV, or WebM, and images as PNG or JPG; the output is an MP4. If the video's codec is unsupported, convert it to MP4 first with the Video Converter tool.",
    },
  ],
};

export default content;

import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Resize Video scales your footage to a new resolution, right in your browser. Pick a common preset like 1080p, 720p, or 480p, or type exact width and height values, then export an MP4 at the new size. The re-encode runs locally with in-browser FFmpeg (WebAssembly), so your video is never uploaded.",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4, MOV, and WebM work best. A preview appears and the in-browser engine starts loading automatically.",
    },
    {
      title: "Choose a preset or enter dimensions",
      body: "Pick 1080p, 720p, or 480p from the Preset dropdown to fill in standard sizes, or leave it on Custom and type your own Width and Height in pixels. The fields start at the video's native resolution.",
    },
    {
      title: "Resize and export",
      body: "Click Resize video to scale the picture and re-encode it to MP4 (H.264). Dimensions are rounded to even pixels, which H.264 requires.",
    },
    {
      title: "Preview and download",
      body: "Watch the resized result in the built-in player, then click Download to save it. Everything is processed on your device.",
    },
  ],
  useCases: [
    "Shrink a 4K clip down to 1080p to reduce file size",
    "Downscale footage to 720p or 480p for faster sharing or email",
    "Match several clips to the same resolution before merging them",
    "Fit a video within a platform's maximum resolution",
    "Produce a lightweight preview copy of a large recording",
    "Standardize screen recordings to a consistent output size",
  ],
  faqs: [
    {
      q: "Do you upload my video to a server?",
      a: "No. Resizing runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Is Resize Video free?",
      a: "Yes, it's free with no account, no sign-up, and no watermark on the output.",
    },
    {
      q: "Does it keep the aspect ratio?",
      a: "The aspect ratio isn't locked — you can set width and height freely. The presets use standard 16:9 dimensions, but with Custom values you're free to change the proportions, so match the source ratio if you want to avoid stretching.",
    },
    {
      q: "Can I upscale to a larger resolution?",
      a: "Yes, you can enter dimensions larger than the source, though upscaling can't add detail that wasn't captured — it mainly makes the frame bigger. Downscaling generally gives the cleanest results.",
    },
    {
      q: "What format is the resized file?",
      a: "The output is MP4 (H.264) with the original audio copied through. Width and height are rounded to even pixels as H.264 requires.",
    },
  ],
};

export default content;

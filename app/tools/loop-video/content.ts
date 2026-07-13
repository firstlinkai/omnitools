import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Loop Video repeats a clip a set number of times and joins the copies into one longer file, right in your browser. Choose how many total plays you want and download the extended video. It uses fast, lossless stream copy — nothing is re-encoded and nothing is uploaded, because the work runs locally with in-browser FFmpeg (WebAssembly).",
  steps: [
    {
      title: "Add your video",
      body: "Drag a file onto the drop zone or click to browse. MP4 (H.264) works best for lossless looping. A preview appears and the in-browser engine loads on its own.",
    },
    {
      title: "Set the number of plays",
      body: "In the Total plays field, enter how many times the clip should play back to back — from 2 up to 50. A value of 3, for example, produces the clip repeated three times in a row.",
    },
    {
      title: "Loop and build the file",
      body: "Click Loop video. The stream is copied and repeated without re-encoding, so it's fast and keeps the original quality.",
    },
    {
      title: "Preview and download",
      body: "Check the looped result in the built-in player, then click Download to save the longer file. All of it stays on your device.",
    },
  ],
  useCases: [
    "Extend a short background loop to fill a longer runtime",
    "Repeat an animated logo or bumper several times in a row",
    "Turn a brief clip into a longer ambient or waiting-room video",
    "Build a seamless-looking loop from a clip designed to repeat",
    "Repeat a GIF-style clip enough times to meet a minimum length",
    "Create a longer looping demo for a kiosk or display screen",
  ],
  faqs: [
    {
      q: "Do you upload my video to a server?",
      a: "No. Looping runs entirely in your browser using WebAssembly FFmpeg, so your file never leaves your device.",
    },
    {
      q: "Is Loop Video free?",
      a: "Yes, completely free — no account, no sign-up, and no watermark on the result.",
    },
    {
      q: "Does looping reduce quality?",
      a: "No. It copies the stream and repeats it without re-encoding, so every play is identical to the source with no quality loss.",
    },
    {
      q: "How many times can I repeat the clip?",
      a: "You can set anywhere from 2 to 50 total plays. The number you enter is how many times the clip appears in the finished file.",
    },
    {
      q: "Why is MP4 recommended for input?",
      a: "Because looping uses a fast stream copy rather than re-encoding, it works most reliably when the input is MP4 (H.264). Other formats may not concatenate cleanly with a straight copy.",
    },
  ],
};

export default content;

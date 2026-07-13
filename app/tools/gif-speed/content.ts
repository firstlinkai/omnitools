import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Change GIF Speed makes an animated GIF play faster or slower, anywhere from 0.25x to 4x, by decoding every frame and re-encoding a brand-new GIF. It composites frames correctly, honoring frame offsets and disposal, then rewrites the frame delays for your chosen speed. All of it happens in your browser, so your GIF is never uploaded, and you can see the new duration and file size before you download.",
  steps: [
    {
      title: "Add your GIF",
      body: "Drop an animated GIF onto the drop zone. The tool verifies the GIF signature, then decodes and composites each frame, showing decoding progress as it works.",
    },
    {
      title: "Review the original",
      body: "See the source GIF alongside its size, dimensions, frame count, and total duration, so you know exactly what you are working with.",
    },
    {
      title: "Set the playback speed",
      body: "Drag the speed slider or tap a preset chip (0.5x, 1x, 1.5x, 2x, 3x). Above 1x speeds it up and below 1x slows it down. The projected new duration updates live.",
    },
    {
      title: "Render the new GIF",
      body: "Click Render GIF to re-encode all frames with adjusted delays, with a progress bar as it quantizes and writes each frame.",
    },
    {
      title: "Download the result",
      body: "Preview the re-timed GIF, check its new file size, and download it — named after your original with the speed appended, like clip-2x.gif.",
    },
  ],
  useCases: [
    "Speed up a slow screen-recording GIF so it gets to the point faster",
    "Slow down a fast reaction GIF so the detail is easier to see",
    "Tune the pace of a looping animation for a README or docs page",
    "Make a tutorial GIF play at a comfortable, followable speed",
    "Shorten a long GIF's runtime by speeding it up",
    "Create a slow-motion version of a quick clip",
  ],
  faqs: [
    {
      q: "Is Change GIF Speed free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my GIF uploaded to a server?",
      a: "No. The GIF is decoded and re-encoded entirely in your browser, so it never leaves your device.",
    },
    {
      q: "How does changing the speed actually work?",
      a: "The tool decodes every frame and re-encodes a new GIF, dividing each frame's delay by your speed factor. Faster speed means shorter delays; slower means longer ones. The frames themselves are unchanged — only their timing is rewritten.",
    },
    {
      q: "Why can't my GIF go as fast as I set it?",
      a: "Browsers clamp GIF frame delays to a minimum of about 20 ms. If speeding up would push frames below that, they hit the floor, and the tool tells you how many frames were clamped so playback may be a little slower than the slider suggests.",
    },
    {
      q: "Will the re-encoded GIF look identical?",
      a: "Each frame is re-quantized to a 256-color palette during encoding, so there can be a very slight color shift, but for typical GIFs the result looks the same. Only the playback timing changes.",
    },
  ],
};

export default content;

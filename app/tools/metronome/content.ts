import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Metronome is a precise, click-and-play practice tool for your browser. Set any tempo from 30 to 300 BPM, choose a time signature, accent the downbeat, and follow along with the visual beat indicator. It uses the Web Audio clock to schedule each tick ahead of time, so the timing stays rock-solid even when your tab is busy — and it needs no files, downloads, or sign-up.",
  steps: [
    {
      title: "Set your tempo",
      body: "Drag the tempo slider, type an exact BPM, or use the plus and minus buttons for fine adjustments. Anything from 30 to 300 beats per minute is supported.",
    },
    {
      title: "Choose a time signature",
      body: "Pick how many beats are in each bar — 2, 3, 4, 5, 6, 7, or 8. The beat dots update to match, so you can practise in 3/4, 6/8, or odd meters.",
    },
    {
      title: "Accent the downbeat",
      body: "Leave 'Accent the first beat' on to hear a higher-pitched click on beat one, which makes it easy to feel the start of every bar. Turn it off for a steady, even pulse.",
    },
    {
      title: "Press Start",
      body: "Click Start to begin. The first click may need a tap because browsers only allow sound after a user action. The moving highlight shows exactly which beat is sounding.",
    },
    {
      title: "Tap the tempo",
      body: "Not sure of the BPM? Click Tap tempo in time with a song and the metronome averages your taps to match its speed. Adjust the volume to sit comfortably under your instrument.",
    },
  ],
  useCases: [
    "Practise an instrument at a steady, controlled tempo",
    "Gradually speed up a passage by nudging the BPM higher",
    "Rehearse in odd time signatures like 5/4 or 7/8",
    "Find a song's tempo with tap tempo",
    "Keep a band or vocal practice locked to the beat",
    "Work on timing and rhythm without installing an app",
  ],
  faqs: [
    {
      q: "Is the Metronome free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Does it send anything to a server?",
      a: "No. The metronome generates its clicks entirely in your browser with the Web Audio API. Nothing is recorded, and no data ever leaves your device.",
    },
    {
      q: "Why do I have to click Start before I hear anything?",
      a: "Browsers block audio until you interact with the page. The metronome creates its audio engine the moment you press Start, which is why the first click follows your action.",
    },
    {
      q: "How accurate is the timing?",
      a: "Ticks are scheduled ahead of time against the Web Audio clock rather than a plain timer, so the beat stays precise and doesn't drift even if the browser is briefly busy.",
    },
    {
      q: "Can I use unusual time signatures?",
      a: "Yes. You can set 2 to 8 beats per bar, so meters like 3/4, 5/4, 6/8, and 7/8 are all easy to practise with a clear accent on beat one.",
    },
  ],
};

export default content;

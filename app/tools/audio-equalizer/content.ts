import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Equalizer lets you reshape the tone of an audio file with a five-band graphic EQ, right in your browser. Boost or cut each band by up to 12 dB across sub-bass, bass, low mids, presence, and air, then download the result. The filtering runs on the Web Audio API on your device, so your file is never uploaded.",
  steps: [
    {
      title: "Add your audio",
      body: "Drag an MP3, WAV, M4A, or OGG file onto the drop zone. The tool decodes it and shows a playable preview with its duration.",
    },
    {
      title: "Adjust the five bands",
      body: "Each slider covers a frequency range — 60 Hz (Sub), 230 Hz (Bass), 910 Hz (Low mid), 3.6 kHz (Presence), and 14 kHz (Air). Move any slider between -12 and +12 dB to cut or boost that band.",
    },
    {
      title: "Dial in your curve",
      body: "The dB value beside each band updates as you drag. Use Reset to flat to return every band to 0 dB and start again.",
    },
    {
      title: "Apply and download",
      body: "Click Apply EQ & download to render the audio through the filter chain and save it. Everything happens locally, so nothing is uploaded.",
    },
  ],
  useCases: [
    "Add warmth by boosting the bass on a thin recording",
    "Tame harsh, sibilant highs by cutting the air band",
    "Bring a voice forward by lifting the presence band",
    "Reduce boominess by trimming the sub-bass",
    "Add clarity to a muddy mix by shaping the low mids",
    "Brighten a dull podcast or lecture recording",
  ],
  faqs: [
    {
      q: "Is Equalizer free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Do you upload my audio to a server?",
      a: "No. The EQ is applied entirely in your browser using the Web Audio API's peaking filters, so the file never leaves your device.",
    },
    {
      q: "How many bands does the equalizer have?",
      a: "Five fixed bands centered at 60 Hz, 230 Hz, 910 Hz, 3.6 kHz, and 14 kHz, spanning sub-bass through the high 'air' range.",
    },
    {
      q: "How much can I boost or cut each band?",
      a: "Each band ranges from -12 dB to +12 dB in 1 dB steps. Large boosts can raise the overall level, so cut elsewhere if the result clips.",
    },
    {
      q: "What format is the output?",
      a: "The processed audio is saved as a WAV file. WAV is uncompressed, so the download may be larger than a compressed source of the same length.",
    },
  ],
};

export default content;

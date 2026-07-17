import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Audio Mixer layers several audio files into one track, right in your browser. Add as many clips as you like, then set each track's volume, nudge its start offset, or mute it while you dial in the balance — the tool plays them together and renders a single WAV. Because it uses the Web Audio API locally, your files are mixed on your own device and never uploaded.",
  steps: [
    {
      title: "Add your tracks",
      body: "Drop two or more audio files onto the dropzone. Each is decoded in the browser and added as its own track with independent controls. MP3, WAV, M4A, OGG, and FLAC all work.",
    },
    {
      title: "Balance the volumes",
      body: "Use each track's Volume slider (0–150%) to blend them. Turn a backing track down and a vocal up until the mix sounds right.",
    },
    {
      title: "Line up the timing",
      body: "Set a Start offset in seconds to delay a track so it comes in later — handy for layering a sound effect, a second verse, or a drop over a bed.",
    },
    {
      title: "Mute while you work",
      body: "Toggle Mute on any track to solo the rest and hear how a layer changes the mix, without removing it. Unmute to bring it back instantly.",
    },
    {
      title: "Preview and export",
      body: "Click Preview mix to hear all tracks play together, then Download mix.wav to save the combined result as a high-quality WAV file.",
    },
  ],
  useCases: [
    "Lay a voiceover over a background music bed",
    "Layer a beat, bassline, and melody into one loop",
    "Add sound effects on top of a narration at set moments",
    "Blend two versions of a take to taste",
    "Combine ambience with a spoken track for a podcast intro",
    "Build a simple multitrack mixdown without installing software",
  ],
  faqs: [
    {
      q: "Is Audio Mixer free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are my audio files uploaded anywhere?",
      a: "No. All decoding, mixing, and rendering happen locally in your browser with the Web Audio API, so your files never leave your device.",
    },
    {
      q: "What if my files have different sample rates?",
      a: "That's fine. The mixer resamples every track to the highest sample rate among them, so files recorded at different rates line up and play back at the correct speed.",
    },
    {
      q: "How long can the mix be?",
      a: "The output length matches the track that finishes last, including its start offset. Very long or numerous tracks use more memory, so keep an eye on browser performance for large projects.",
    },
    {
      q: "What format is the download?",
      a: "The mix is exported as a 16-bit PCM WAV file — a lossless, universally supported format you can import into any editor or convert further with the Audio Converter tool.",
    },
  ],
};

export default content;

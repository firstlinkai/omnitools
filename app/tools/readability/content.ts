import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Readability Analyzer scores your writing with the Flesch Reading Ease scale and estimates its grade level, then shows you where to tighten it. It counts words, sentences, paragraphs, and reading time, and a skimmability preview flags dense paragraphs and bolds the key phrases it detects. Paste an article, email, or draft and watch the analysis update live. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Paste your text",
      body: "Drop an article, email, or blog draft into 'Your text', or click Load example to try a sample. The analysis updates live as you edit.",
    },
    {
      title: "Read the ease score",
      body: "See your Flesch Reading Ease number and its band, from Very difficult to Very easy, on a color-coded scale. A caption translates the grade level into an approximate reader age.",
    },
    {
      title: "Check the stats",
      body: "Tiles show words, sentences, paragraphs, and estimated read time, plus average words per sentence and average syllables per word — the two levers that move the score most.",
    },
    {
      title: "Scan the skimmability preview",
      body: "Your text is redisplayed with detected key phrases in bold and any paragraph over four sentences flagged as Dense with a red marker, so you can spot walls of text at a glance.",
    },
    {
      title: "Revise and re-check",
      body: "Shorten flagged paragraphs and trim long sentences, then watch the score climb in real time. Keep editing until the readability lands where you want it.",
    },
  ],
  useCases: [
    "Check whether a blog post reads at a general-audience level",
    "Simplify a dense email before you send it",
    "Spot paragraphs that pack in too many sentences",
    "Estimate how long an article takes to read",
    "See which key phrases your draft emphasizes",
    "Lower the grade level of documentation or help content",
  ],
  faqs: [
    {
      q: "Is Readability Analyzer free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my writing uploaded anywhere?",
      a: "No. Scoring, syllable counting, and highlighting all run locally in your browser, so your text never leaves your device.",
    },
    {
      q: "What score should I aim for?",
      a: "For a general audience, a Flesch Reading Ease of 60 to 70 (Standard) is a solid target. Higher is easier; technical writing often sits lower. The band and grade caption help you judge fit.",
    },
    {
      q: "How does it decide a paragraph is 'Dense'?",
      a: "Any paragraph with more than four sentences is flagged as Dense and marked with a red border, since long blocks are harder to skim and usually hide two smaller ideas.",
    },
    {
      q: "Are the syllable and sentence counts exact?",
      a: "They're close estimates. Syllables are counted with vowel-group heuristics and sentences are split on punctuation with common abbreviations protected, which is accurate enough for reliable Flesch-Kincaid scoring.",
    },
  ],
};

export default content;

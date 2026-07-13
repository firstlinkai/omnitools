import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Split a Text chops a long block of text into smaller chunks by character count, word count, line count, or a custom delimiter. Great for threading tweets, fitting SMS limits, or paginating content, it gives each chunk its own copy button and can avoid breaking words mid-chunk. Live stats show the chunk count plus total characters and words. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Paste your text",
      body: "Drop the text you want to split into the Input box, or click Load sample to try an example. Chunks and stats appear on the right as you go.",
    },
    {
      title: "Pick a split mode",
      body: "Choose By character count, By word count, By line count, or By custom delimiter. For the count modes, set how many characters, words, or lines go in each chunk.",
    },
    {
      title: "Tune the split",
      body: "In character mode, use the 280 and 160 presets for tweets and SMS, and keep 'Don't break words' on to backtrack to the nearest space. In delimiter mode, type any separator — \\n and \\t are understood as newline and tab.",
    },
    {
      title: "Review the chunks",
      body: "Each chunk shows its number and character length in its own panel with a copy button. The stats row reports the total chunk count, characters, and words.",
    },
    {
      title: "Copy or download everything",
      body: "Use Copy all to grab every chunk joined with separators, or Download to save them as chunks.txt. Individual chunks each have their own copy button.",
    },
  ],
  useCases: [
    "Break a long post into a tweet thread at 280 characters",
    "Fit a message into 160-character SMS segments",
    "Split a CSV line or list on a comma or custom delimiter",
    "Paginate an article into fixed word-count sections",
    "Chunk text by line count for batch processing",
    "Divide notes into copy-ready blocks without cutting words",
  ],
  faqs: [
    {
      q: "Is Split a Text free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Splitting happens entirely in your browser, so your text never leaves your device.",
    },
    {
      q: "Will it cut words in half?",
      a: "Not in character mode with 'Don't break words' enabled — it backtracks to the last whitespace so each chunk ends on a whole word. Turn the option off if you want exact fixed-size cuts.",
    },
    {
      q: "How do I split on a newline or tab?",
      a: "In custom delimiter mode, type \\n for a newline or \\t for a tab and the tool converts the escape into the real character before splitting. You can also use \\\\ for a literal backslash.",
    },
    {
      q: "What if I create a huge number of chunks?",
      a: "The page renders the first 200 chunks for speed and shows a note when there are more. Copy all or Download still gives you every chunk.",
    },
  ],
};

export default content;

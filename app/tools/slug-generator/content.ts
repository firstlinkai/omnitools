import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Slug Generator turns any title into a clean, URL-friendly slug. It lowercases the text, strips accents from letters like é and ñ, replaces spaces and punctuation with a separator, collapses repeats, and trims the ends. Choose a hyphen or underscore, an optional maximum length, and paste multiple lines to slugify a whole list at once. It all runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Enter a title",
      body: "Type or paste a headline into the input, or click Load file to import a .txt or .csv. The slug appears on the right instantly.",
    },
    {
      title: "Pick a separator",
      body: "Choose a hyphen ( - ) for classic URL slugs or an underscore ( _ ) for filenames and code. Runs of separators are automatically collapsed to one.",
    },
    {
      title: "Set an optional max length",
      body: "Leave it blank for no limit, or enter a number to cap the slug — it trims cleanly at the limit without leaving a trailing separator.",
    },
    {
      title: "Toggle lowercase",
      body: "Keep Lowercase on for standard slugs, or turn it off to preserve the original capitalization while still cleaning up spaces and symbols.",
    },
    {
      title: "Slugify lists and export",
      body: "Paste multiple lines to get one slug per line, then Copy the result or Download it as slugs.txt.",
    },
  ],
  useCases: [
    "Create SEO-friendly URLs for blog posts and pages",
    "Generate safe filenames from document titles",
    "Build anchor IDs and hash links from headings",
    "Turn product names into store URL handles",
    "Normalize accented titles into plain ASCII slugs",
    "Slugify a whole list of titles in one paste",
  ],
  faqs: [
    {
      q: "Is the Slug Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Slugs are generated locally in your browser, so your titles never leave your device.",
    },
    {
      q: "How does it handle accents and special characters?",
      a: "Accented letters are normalized and their marks removed, so \"Café\" becomes \"cafe\". Anything that is not a letter or number is turned into your chosen separator.",
    },
    {
      q: "Can I generate many slugs at once?",
      a: "Yes. Each line of input becomes its own slug on the matching output line, so you can convert an entire list in a single paste.",
    },
    {
      q: "What happens with the max length setting?",
      a: "If set, the slug is cut to that many characters and any separator left dangling at the end is removed, so it never ends with a stray hyphen or underscore.",
    },
  ],
};

export default content;

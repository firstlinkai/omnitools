import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Lorem Ipsum Generator produces classic placeholder text — the scrambled Latin filler designers have used for decades — in whatever quantity you need. Ask for a number of paragraphs, sentences, or individual words, start it with the traditional “Lorem ipsum dolor sit amet…” opening, and optionally wrap each paragraph in HTML <p> tags to paste straight into markup. Every draft is generated fresh in your browser, so nothing is uploaded and you can regenerate as many variations as you like.",
  steps: [
    {
      title: "Set the amount and unit",
      body: "Enter how much filler you want in the Amount box, then choose Paragraphs, Sentences, or Words. The output updates immediately as you change either value.",
    },
    {
      title: "Choose the classic opening",
      body: "Keep “Start with Lorem ipsum dolor sit amet…” on for the familiar opening, or turn it off to get fully randomized filler from the first word.",
    },
    {
      title: "Wrap in HTML if needed",
      body: "Enable Wrap in <p> tags to output each paragraph inside its own paragraph element — ready to drop into an HTML template or CMS.",
    },
    {
      title: "Regenerate for a new draft",
      body: "Click Regenerate to get a different random arrangement of the same length. Repeat until the shape and rhythm suit your mockup.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to place the text on your clipboard, or Download to save it as a .txt or .html file depending on whether HTML wrapping is on.",
    },
  ],
  useCases: [
    "Fill a website or app mockup with realistic-looking body text",
    "Test typography, line length, and spacing before real copy exists",
    "Populate a CMS or template with placeholder paragraphs",
    "Check how a layout handles long or short blocks of text",
    "Create dummy content for design portfolios and client demos",
    "Generate sample words or sentences for UI component previews",
  ],
  faqs: [
    {
      q: "Is the Lorem Ipsum Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is anything sent to a server?",
      a: "No. The placeholder text is generated locally in your browser, so nothing you create is uploaded or stored anywhere.",
    },
    {
      q: "What is lorem ipsum, exactly?",
      a: "It is scrambled, mostly meaningless Latin derived from a 1st-century BC text by Cicero. Because it reads like natural language without conveying meaning, it lets you judge a layout's look without being distracted by the actual words.",
    },
    {
      q: "Can I generate just a few words instead of paragraphs?",
      a: "Yes. Switch the Unit to Words or Sentences and set the amount you need. Words mode returns a single capitalized run of that many words ending in a period.",
    },
    {
      q: "How do I get HTML I can paste into a page?",
      a: "Turn on Wrap in <p> tags. Each paragraph is then wrapped in its own <p></p> element and the Download button saves the result as an .html file.",
    },
  ],
};

export default content;

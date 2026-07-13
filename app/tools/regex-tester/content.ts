import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "RegEx Tester lets you build and check regular expressions with live match highlighting, a full match list, and a plain-English breakdown of your pattern. Type an expression, toggle the flags you need, and see every match light up in your test text as you go — capture groups and named groups included. A built-in cheat sheet keeps the syntax within reach. It all runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Enter a pattern",
      body: "Type your regular expression in the Pattern field, or click Load sample to try an email-matching example. An invalid pattern shows a clear error message instead of failing silently.",
    },
    {
      title: "Toggle flags",
      body: "Switch g, i, m, s, u, and y on or off with the flag buttons — each has a tooltip explaining what it does, from global and ignore-case to multiline and unicode.",
    },
    {
      title: "Add test text",
      body: "Paste the text you want to search in the Test text box. Matches highlight instantly in the panel beside it, so you can see exactly what your pattern catches.",
    },
    {
      title: "Inspect the match list and breakdown",
      body: "The Match list shows each match with its index and every capture and named group. The Pattern breakdown explains each construct of your expression in plain English.",
    },
    {
      title: "Lean on the cheat sheet",
      body: "The cheat sheet at the bottom groups common tokens — anchors, classes, quantifiers, and more — so you can build patterns without leaving the page.",
    },
  ],
  useCases: [
    "Test a pattern before pasting it into your code",
    "Debug why a regex is matching too much or too little",
    "Extract and verify capture groups from sample data",
    "Learn regex syntax with live feedback and the cheat sheet",
    "Validate an email, URL, or ID format against real examples",
    "Understand an unfamiliar pattern via the plain-English breakdown",
  ],
  faqs: [
    {
      q: "Is RegEx Tester free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my test text uploaded anywhere?",
      a: "No. The pattern is compiled and matched entirely in your browser, so both your expression and your test text stay on your device.",
    },
    {
      q: "Which regex flavor does it use?",
      a: "It uses your browser's native JavaScript regular expression engine, so patterns behave exactly as they would in JavaScript, including named groups and the g, i, m, s, u, and y flags.",
    },
    {
      q: "Does it support capture and named groups?",
      a: "Yes. Each match in the list shows its numbered capture groups, and any named groups like (?<user>...) are listed by name with their captured value.",
    },
    {
      q: "What happens with a huge number of matches?",
      a: "Highlighting is capped at the first 5000 matches and the match list shows the first 500, with a note when there are more, so the page stays responsive on large inputs.",
    },
  ],
};

export default content;

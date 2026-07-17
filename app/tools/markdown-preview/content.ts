import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Markdown Preview renders your Markdown into formatted HTML live as you type, side by side. Write headings, lists, links, tables, blockquotes, and code blocks and watch the styled preview update instantly. Switch to the HTML view to copy the generated markup, or download a complete standalone HTML file. It all runs in your browser, so your writing is never uploaded.",
  steps: [
    {
      title: "Write your Markdown",
      body: "Type or paste Markdown into the left pane. A sample document is loaded so you can see headings, lists, code, and a table rendered right away.",
    },
    {
      title: "Watch the live preview",
      body: "The right pane renders your Markdown as styled HTML the moment you type, using GitHub-flavored Markdown with line breaks enabled.",
    },
    {
      title: "Switch to the HTML view",
      body: "Toggle from Preview to HTML to inspect the exact markup the tool generated, formatted and ready to reuse.",
    },
    {
      title: "Copy the HTML",
      body: "Click Copy HTML to put the rendered markup on your clipboard, ready to paste into a webpage, email template, or CMS.",
    },
    {
      title: "Download a page",
      body: "Click Download to save a complete, standalone .html file wrapping your content — open it in any browser as a finished page.",
    },
  ],
  useCases: [
    "Preview a README or documentation file before committing it",
    "Draft a blog post or notes in Markdown and see the formatting",
    "Convert Markdown into HTML to paste into a CMS or email",
    "Check how tables, code blocks, and lists will render",
    "Learn Markdown syntax with instant visual feedback",
    "Produce a shareable standalone HTML page from Markdown",
  ],
  faqs: [
    {
      q: "Is Markdown Preview free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text uploaded anywhere?",
      a: "No. Your Markdown is rendered locally in your browser and never sent to a server, so your writing stays entirely on your device.",
    },
    {
      q: "Which Markdown flavor is supported?",
      a: "It uses GitHub-flavored Markdown, so tables, fenced code blocks, strikethrough, and task lists all work, with single line breaks preserved.",
    },
    {
      q: "Can I get just the HTML?",
      a: "Yes. Switch to the HTML view and click Copy HTML for the raw markup, or Download to save a complete standalone HTML document.",
    },
    {
      q: "Is raw HTML in my Markdown rendered?",
      a: "Yes — Markdown allows inline HTML, and this is a local preview of your own content, so any HTML you write is rendered as-is. Since nothing is uploaded and you are the only author, there is no third-party input involved.",
    },
  ],
};

export default content;

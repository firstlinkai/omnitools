import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Diff Checker compares two blocks of text and highlights exactly what changed between them — additions in green, deletions in red. Paste an original version on the left and a revised version on the right, then choose line-by-line or word-by-word comparison to see the edits at the level of detail you need. A running summary counts how much was added and removed, and because the whole comparison runs in your browser, neither version is ever uploaded.",
  steps: [
    {
      title: "Paste both versions",
      body: "Put the original text in the left box and the changed text in the right box, or click Load sample to see how it works. The differences appear underneath as you type.",
    },
    {
      title: "Choose the comparison level",
      body: "Pick Line by line to compare whole lines — great for code, lists, and configs — or Word by word to spot small wording changes within a paragraph.",
    },
    {
      title: "Read the highlights",
      body: "Green marks text that was added in the changed version; red marks text that was removed from the original. Unchanged text stays in the normal color.",
    },
    {
      title: "Check the summary",
      body: "The Differences header shows a +added / -removed count so you can gauge the size of the change at a glance. Identical texts report no differences.",
    },
  ],
  useCases: [
    "Review edits between two drafts of an article or email",
    "Compare two versions of a code snippet or config file",
    "See what a collaborator changed in a shared document",
    "Spot accidental changes before pasting text somewhere important",
    "Check translations or rewrites against the original wording",
    "Audit terms, contracts, or policies for altered clauses",
  ],
  faqs: [
    {
      q: "Is Diff Checker free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Both blocks of text are compared locally in your browser, so nothing you paste ever leaves your device.",
    },
    {
      q: "What is the difference between line and word comparison?",
      a: "Line mode treats each line as a unit and shows whole lines that were added or removed — ideal for code and lists. Word mode looks inside lines and highlights the individual words that changed, which is better for prose.",
    },
    {
      q: "What do the colors mean?",
      a: "Green highlights content that exists in the changed version but not the original (additions). Red highlights content that was in the original but is gone from the changed version (deletions). Everything else is unchanged.",
    },
    {
      q: "Is there a size limit on the text I can compare?",
      a: "There is no fixed limit, but very large inputs take longer to diff since the work happens on your device. For most documents, code files, and articles the comparison is effectively instant.",
    },
  ],
};

export default content;

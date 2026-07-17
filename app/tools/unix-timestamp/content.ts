import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Unix Timestamp Converter translates Unix time to and from human-readable dates, both ways. Type a timestamp to see the local time, UTC, ISO 8601, and a relative description, or pick a date and time to get the epoch value in seconds and milliseconds. It auto-detects whether your number is in seconds or milliseconds and includes a Now button for the current time. Everything runs in your browser — nothing is uploaded.",
  steps: [
    {
      title: "Convert a timestamp",
      body: "Type or paste a Unix timestamp into the left field. If it has 13 or more digits it is read as milliseconds; otherwise it is treated as seconds.",
    },
    {
      title: "Read the date breakdown",
      body: "The tool shows the moment in your local time, UTC, ISO 8601 format, and as a relative phrase like \"in 3 days\" or \"2 hours ago\".",
    },
    {
      title: "Convert a date",
      body: "Use the date and time picker on the right to choose a moment in your local timezone and instantly see its Unix value in both seconds and milliseconds.",
    },
    {
      title: "Jump to now",
      body: "Click the Now button at any time to load the current moment into both sides, so you can read off the current timestamp.",
    },
    {
      title: "Copy any value",
      body: "Every output row has a copy button — grab the exact seconds, milliseconds, ISO string, or formatted date you need for your code or logs.",
    },
  ],
  useCases: [
    "Convert a Unix timestamp from a log or database into a readable date",
    "Get the current epoch time in seconds or milliseconds",
    "Turn a specific calendar date into a Unix timestamp for a query",
    "Check whether a stored value is in seconds or milliseconds",
    "See a timestamp in UTC and your local timezone side by side",
    "Produce an ISO 8601 string for an API request or config file",
  ],
  faqs: [
    {
      q: "Is the Unix Timestamp Converter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is anything sent to a server?",
      a: "No. All date math runs locally in your browser using the built-in Date API, so nothing you enter is uploaded.",
    },
    {
      q: "What is a Unix timestamp?",
      a: "It is the number of seconds that have elapsed since 1 January 1970 at 00:00 UTC, known as the Unix epoch. Many systems store it in milliseconds instead, which is 1000 times larger.",
    },
    {
      q: "How does it know seconds versus milliseconds?",
      a: "It counts the digits. A value with 13 or more digits is interpreted as milliseconds; anything shorter is treated as seconds. This matches typical present-day timestamps.",
    },
    {
      q: "Which timezone does the date picker use?",
      a: "The date and time you pick are interpreted in your device's local timezone, while the UTC and ISO outputs show the same moment in Coordinated Universal Time.",
    },
  ],
};

export default content;

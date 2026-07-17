import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "SQL Formatter beautifies messy, single-line, or inconsistently indented SQL into a clean, readable query with proper line breaks and alignment. Pick your database dialect and keyword casing, and the formatted query updates live as you type. It supports Standard SQL, PostgreSQL, MySQL, SQLite, SQL Server, and BigQuery. Everything runs in your browser, so your queries are never uploaded.",
  steps: [
    {
      title: "Paste your SQL",
      body: "Drop a query into the Input box, or click Load file to open a .sql file. A sample query is loaded so you can see the formatting immediately.",
    },
    {
      title: "Choose your dialect",
      body: "Select the database you write for — Standard SQL, PostgreSQL, MySQL, SQLite, SQL Server (T-SQL), or BigQuery — so dialect-specific syntax is formatted correctly.",
    },
    {
      title: "Set keyword casing",
      body: "Pick UPPERCASE, lowercase, or Preserve for keywords like SELECT and JOIN. The formatted output re-renders instantly whenever you change an option.",
    },
    {
      title: "Review the result",
      body: "The right pane shows your query with consistent indentation, clause-per-line layout, and aligned conditions. Malformed SQL shows a friendly red message instead of crashing.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the formatted query, or Download to save it as formatted.sql for your migration, script, or repository.",
    },
  ],
  useCases: [
    "Clean up a one-line query copied from application logs",
    "Standardize SQL formatting before committing to a repository",
    "Make a complex JOIN or subquery readable for code review",
    "Reformat a query to match your team's uppercase-keyword style",
    "Untangle generated SQL from an ORM or BI tool",
    "Prepare a tidy query to paste into documentation or a ticket",
  ],
  faqs: [
    {
      q: "Is SQL Formatter free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are my queries sent to a server?",
      a: "No. Formatting happens entirely in your browser using a local library, so your SQL never leaves your device.",
    },
    {
      q: "Which databases are supported?",
      a: "You can format Standard SQL, PostgreSQL, MySQL, SQLite, SQL Server (T-SQL), and BigQuery. Choosing the right dialect ensures dialect-specific syntax is handled correctly.",
    },
    {
      q: "Does it change what my query does?",
      a: "No. The formatter only adds whitespace, line breaks, and adjusts keyword casing. The query's logic and results stay exactly the same.",
    },
    {
      q: "Why does my SQL show an error?",
      a: "The formatter needs syntactically parseable SQL. If a keyword, quote, or parenthesis is malformed the tool shows a red message so you can fix that spot and try again.",
    },
  ],
};

export default content;

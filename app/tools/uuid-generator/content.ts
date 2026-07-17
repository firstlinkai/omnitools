import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "UUID Generator creates random version-4 UUIDs — the universally unique identifiers used as primary keys, request IDs, and reference tokens across databases and APIs. Generate a single UUID or up to a hundred at once, switch between upper and lower case, and toggle the hyphens on or off to match whatever format your system expects. Everything is produced in your browser with a cryptographically secure random source and can be copied or downloaded in one click.",
  steps: [
    {
      title: "Choose how many",
      body: "Drag the How many slider from 1 to 100. A fresh batch is generated the moment the page loads and whenever you regenerate.",
    },
    {
      title: "Pick a format",
      body: "Toggle Uppercase to get A-F hex in capitals, and Include hyphens to switch between the standard 8-4-4-4-12 layout and a compact 32-character form.",
    },
    {
      title: "Regenerate as needed",
      body: "Click Regenerate to replace the whole list with brand-new random UUIDs using your current settings. Formatting changes apply instantly without regenerating.",
    },
    {
      title: "Copy individual values",
      body: "Each UUID has its own copy button, so you can grab exactly the one you need without selecting text by hand.",
    },
    {
      title: "Copy all or download",
      body: "Use Copy all to place every UUID on the clipboard, one per line, or download them as a plain uuids.txt file for scripts and seed data.",
    },
  ],
  useCases: [
    "Create primary keys or foreign keys for database rows",
    "Generate request, trace, or correlation IDs for logging",
    "Produce idempotency keys for API calls",
    "Seed test data and fixtures with unique identifiers",
    "Name files, resources, or objects so they never collide",
    "Bulk-generate identifiers for a data migration or import",
  ],
  faqs: [
    {
      q: "Is the UUID Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are the UUIDs sent to a server?",
      a: "No. They are generated entirely in your browser and never leave your device. Nothing is uploaded or stored.",
    },
    {
      q: "What version of UUID does this create?",
      a: "Version 4 — random UUIDs. They are produced with crypto.randomUUID (with a secure crypto.getRandomValues fallback), so the version and variant bits follow RFC 4122 exactly.",
    },
    {
      q: "How likely are two UUIDs to collide?",
      a: "Practically impossible. A v4 UUID has 122 random bits, so you would need to generate billions of them before a collision became even remotely likely. They are safe to use as unique keys.",
    },
    {
      q: "Can I get them without hyphens or in uppercase?",
      a: "Yes. Turn off Include hyphens for a compact 32-character string, and turn on Uppercase to capitalise the hex digits. The changes apply to the whole list immediately.",
    },
  ],
};

export default content;

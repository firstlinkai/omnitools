import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "SHA-256 Hash turns any text into its 256-bit SHA-256 digest, shown as a 64-character hexadecimal string. It uses your browser's built-in Web Crypto engine — the same primitive that secures TLS, signatures, and blockchains — so results are standards-exact and update the instant you type. Because everything runs locally, the text you hash is never uploaded anywhere.",
  steps: [
    {
      title: "Enter your text",
      body: "Type or paste anything into the Text box, or click Load file to hash the contents of a .txt, .json, .csv, or other text file. The hash recomputes live as the input changes.",
    },
    {
      title: "Read the digest",
      body: "The SHA-256 hash appears on the right as 64 lowercase hexadecimal characters. Identical input always produces the identical hash, and the smallest change to the input changes the whole digest.",
    },
    {
      title: "Choose the case",
      body: "Toggle Uppercase hex if the system you are comparing against prints hashes in capitals. The value is the same digest, only the letter case of A-F differs.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the hash, or Download to save it as a text file. Paste it into a checksum field, a database, or a verification script.",
    },
  ],
  useCases: [
    "Verify a download or file matches a published SHA-256 checksum",
    "Fingerprint text or config so you can detect if it later changed",
    "Generate deterministic keys or cache identifiers from input strings",
    "Compare two pieces of text for exact equality via their hashes",
    "Produce SHA-256 test vectors while building or debugging software",
    "Create content-addressable IDs for documents or messages",
  ],
  faqs: [
    {
      q: "Is SHA-256 Hash free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Hashing runs entirely in your browser using the native Web Crypto API, so your text never leaves your device.",
    },
    {
      q: "Can a SHA-256 hash be reversed back into the original text?",
      a: "No. SHA-256 is a one-way function — you cannot recover the input from the digest. It is designed so that finding any input for a given hash is computationally infeasible.",
    },
    {
      q: "Will the same text always give the same hash?",
      a: "Yes. SHA-256 is deterministic: identical input produces an identical 64-character digest every time, on any device or platform. Even a one-character change produces a completely different hash.",
    },
    {
      q: "Is this the same SHA-256 used elsewhere?",
      a: "Yes. It calls the browser's standards-compliant SHA-256 implementation, so the output matches command-line tools like sha256sum, language libraries, and other correct implementations byte for byte.",
    },
  ],
};

export default content;

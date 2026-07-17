import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "MD5 Hash turns any text into its 128-bit MD5 digest, shown as a 32-character hexadecimal string. It is fast and widely supported, which makes it handy for checksums, cache keys, and comparing files or strings for changes. Note that MD5 is considered broken for security use — do not rely on it for passwords or signatures — but it remains fine for non-adversarial integrity checks. Everything runs in your browser, so your text is never uploaded.",
  steps: [
    {
      title: "Enter your text",
      body: "Type or paste anything into the Text box, or click Load file to hash a .txt, .json, .csv, or other text file. The MD5 hash recomputes live as you edit.",
    },
    {
      title: "Read the digest",
      body: "The MD5 hash appears on the right as 32 lowercase hexadecimal characters. The same input always produces the same hash, and any change to the input changes the whole digest.",
    },
    {
      title: "Choose the case",
      body: "Toggle Uppercase hex if the tool or database you are comparing against stores MD5 hashes in capitals. It is the same digest with only the A-F letters cased differently.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the hash, or Download to save it as a text file so you can paste it into a checksum manifest, ETag, or verification script.",
    },
  ],
  useCases: [
    "Verify a file matches a published MD5 checksum",
    "Generate cache keys or ETags from strings or file contents",
    "Detect whether text or config changed between two versions",
    "De-duplicate records by hashing their contents",
    "Reproduce MD5 test vectors while building or debugging software",
    "Create short, stable identifiers for legacy systems that expect MD5",
  ],
  faqs: [
    {
      q: "Is MD5 Hash free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text sent to a server?",
      a: "No. Hashing runs entirely in your browser, so your text never leaves your device. The MD5 code is loaded locally and executed on your machine.",
    },
    {
      q: "Is MD5 safe to use for passwords or security?",
      a: "No. MD5 is cryptographically broken — practical collision attacks exist — so it must not be used for password storage, digital signatures, or anything an attacker could exploit. Use SHA-256 or a dedicated password hash for security. MD5 is still fine for non-security checksums and de-duplication.",
    },
    {
      q: "Will the same text always give the same hash?",
      a: "Yes. MD5 is deterministic: identical input produces an identical 32-character digest every time and on every platform. Even a one-character change produces a completely different hash.",
    },
    {
      q: "Does this match other MD5 tools?",
      a: "Yes. It implements the standard MD5 algorithm, so the output matches command-line tools like md5sum and language libraries byte for byte for the same input.",
    },
  ],
};

export default content;

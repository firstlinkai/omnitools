import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Password Generator creates strong, random passwords that are hard to guess and easy to regenerate. Choose a length, decide which character types to include, optionally strip out look-alike characters, and produce one password or a whole batch at once. Every password is drawn with your browser's built-in cryptographic random number generator, so nothing is predictable and nothing is ever sent to a server.",
  steps: [
    {
      title: "Set the length",
      body: "Drag the Length slider anywhere from 4 to 64 characters. Longer passwords are exponentially harder to crack — 16 characters or more is a good baseline for important accounts.",
    },
    {
      title: "Choose character types",
      body: "Toggle uppercase, lowercase, numbers, and symbols on or off. Mixing all four maximises the character pool and the resulting strength. You need at least one type enabled.",
    },
    {
      title: "Avoid look-alikes if needed",
      body: "Turn on Exclude ambiguous to drop characters that are easy to confuse — 0, O, 1, l, and I — which is handy when a password has to be typed or read aloud.",
    },
    {
      title: "Generate one or many",
      body: "Use the How many slider to create up to 50 passwords in a single batch, perfect for setting up multiple accounts. The output refreshes automatically as you change options.",
    },
    {
      title: "Copy or regenerate",
      body: "Watch the strength meter and entropy estimate, then click Copy (or Copy all) to grab the results, or Regenerate for a fresh set that uses the same rules.",
    },
  ],
  useCases: [
    "Create a unique, strong password for a new online account",
    "Generate a batch of passwords when provisioning many users at once",
    "Produce a passphrase-strength secret for a database, API key, or Wi-Fi network",
    "Make readable passwords by excluding easily confused characters",
    "Replace a weak or reused password with a random one",
    "Quickly get a random string for tokens, salts, or test data",
  ],
  faqs: [
    {
      q: "Is the Password Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Are the passwords sent to a server?",
      a: "No. Passwords are generated entirely in your browser and never leave your device. Nothing is uploaded, logged, or stored anywhere.",
    },
    {
      q: "How random are the passwords?",
      a: "They use crypto.getRandomValues, your browser's cryptographically secure random number generator, with rejection sampling to remove modulo bias. This is far stronger than Math.random and suitable for real credentials.",
    },
    {
      q: "What does the strength meter mean?",
      a: "It estimates entropy in bits, calculated from the password length and the size of the character pool you selected. More bits means more possible combinations and a longer time to brute-force. Roughly, under 40 bits is weak, 64+ is strong, and 100+ is very strong.",
    },
    {
      q: "Should I turn on the exclude-ambiguous option?",
      a: "Only if a person will type or read the password. It removes 0, O, 1, l, and I to prevent mix-ups. It slightly shrinks the character pool, so leave it off for passwords you only ever copy and paste.",
    },
  ],
};

export default content;

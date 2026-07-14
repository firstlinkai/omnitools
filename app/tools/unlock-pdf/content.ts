import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Unlock PDF removes the password from a PDF you can already open, producing a version that no longer prompts for one. You supply the correct password, and the tool rebuilds the document from rendered page images so it opens freely. Everything happens in your browser with pdfjs and pdf-lib, so the file and password never leave your device. Because pages are rasterized, the selectable text layer is removed in the process.",
  steps: [
    {
      title: "Drop in the locked PDF",
      body: "Add the password-protected PDF you want to unlock. It's loaded straight into the browser and never uploaded.",
    },
    {
      title: "Enter the password",
      body: "Type the PDF's current password in the password field. You need the real password — this tool opens files you're authorized to open, it doesn't crack unknown ones.",
    },
    {
      title: "Unlock and download",
      body: "Click Unlock & download. Each page is decrypted, rendered, and rebuilt into a new password-free PDF that downloads automatically, with a progress counter as it works.",
    },
    {
      title: "Save the unlocked copy",
      body: "A confirmation appears when it's done, and you can use Download again to re-save the same unlocked file whenever you need it.",
    },
  ],
  useCases: [
    "Open a protected statement without re-typing the password each time",
    "Remove a password before printing a document",
    "Share an unlocked copy with someone who doesn't have the password",
    "Store a password-free version of a file you own",
    "Stop a viewer from prompting for a password on every open",
    "Prepare a decrypted PDF for another tool that can't handle passwords",
  ],
  faqs: [
    {
      q: "Is Unlock PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF or password sent to a server?",
      a: "No. The PDF is decrypted and rebuilt entirely in your browser with pdfjs and pdf-lib. Neither the file nor the password ever leaves your device.",
    },
    {
      q: "Do I need to know the password?",
      a: "Yes. You must enter the correct password. This tool unlocks PDFs you're allowed to open — it does not guess or crack passwords you don't have.",
    },
    {
      q: "Will the unlocked PDF still have selectable text?",
      a: "No. A lossless in-browser decrypt isn't available, so the unlocked file is rebuilt from rasterized page images. That reliably removes the password, but the selectable text layer is lost.",
    },
    {
      q: "What if it says the password is incorrect?",
      a: "Double-check the password and try again — the tool only proceeds when the password actually opens the file. If the file is corrupted or not a valid PDF, you'll see a separate error instead.",
    },
  ],
};

export default content;

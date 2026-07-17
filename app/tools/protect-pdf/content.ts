import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Protect PDF adds a real password to a PDF, so anyone who opens it — in Acrobat, Preview, Chrome, or any standard reader — has to type the password first. The file is encrypted with AES-256 using the PDF standard security handler, and all of it happens inside your browser tab: your document and your password are never uploaded, never logged, and never leave your device.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop a PDF in or click to browse. It's read straight into this browser tab — nothing is sent to a server.",
    },
    {
      title: "Choose a password",
      body: "Type the password you want readers to enter. It must be at least 8 characters, and a strength meter shows how solid your choice looks as you type.",
    },
    {
      title: "Confirm it",
      body: "Re-enter the same password in the confirm field. Since a forgotten password can't be recovered, this catches typos before the file is encrypted.",
    },
    {
      title: "Protect and download",
      body: "Click Protect & download. The PDF is encrypted in your browser and saved as <name>-protected.pdf, ready to send.",
    },
    {
      title: "Test before you share",
      body: "Open the downloaded file in your PDF reader and check it asks for the password. Store the password somewhere safe — a password manager is ideal.",
    },
  ],
  useCases: [
    "Email a contract, invoice, or payslip without leaving it readable to anyone who gets the file",
    "Protect scanned ID documents, bank statements, or medical records before sharing",
    "Lock a confidential report so only the intended recipients can open it",
    "Add a password to tax paperwork before sending it to an accountant",
    "Keep sensitive HR or legal documents private in shared cloud storage",
    "Secure a PDF on a USB stick or external drive in case it's lost",
  ],
  faqs: [
    {
      q: "Is Protect PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF or password uploaded to your servers?",
      a: "No. The encryption runs entirely in your browser using JavaScript, so the document and the password you type never leave your device. There's no server to upload to and nothing is stored or logged.",
    },
    {
      q: "What encryption is used?",
      a: "AES-256 via the PDF standard security handler — the same password-on-open protection Acrobat and other mainstream PDF tools produce. Your password is set as both the user password (needed to open the file) and the owner password, and the document's contents are genuinely encrypted, not just flagged as restricted.",
    },
    {
      q: "What happens if I forget the password?",
      a: "The file cannot be opened, and nobody can recover it — not you, not us. Because the password is never transmitted or stored anywhere, there is no reset link and no back door. Save it in a password manager before you share the file.",
    },
    {
      q: "Can I protect a PDF that already has a password?",
      a: "Not directly — an already-encrypted PDF has to be opened with its current password before a new one can be applied, so the tool will tell you to remove the existing password first. Use Unlock PDF if you know the current password, then protect the result.",
    },
  ],
};

export default content;

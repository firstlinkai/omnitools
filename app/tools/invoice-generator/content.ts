import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Invoice Generator turns line items into a clean, professional PDF invoice, right in your browser. Fill in your business and client details, add billable rows, and the subtotal, discount, and tax are calculated live as you type. When you are happy with the preview, download a print-ready PDF built locally with pdf-lib — nothing is uploaded and no account is needed.",
  steps: [
    {
      title: "Add your business and client",
      body: "Enter your business name, email, and address, then the client you are billing under Bill to. Your business details are saved in your browser and prefilled on your next invoice.",
    },
    {
      title: "Set the invoice details",
      body: "Give the invoice a number, pick a currency from USD, EUR, GBP, INR, AUD, CAD, or JPY, and choose issue and due dates. The issue date defaults to today.",
    },
    {
      title: "Enter line items",
      body: "Add a row for each service or product with a description, quantity, and rate. The amount for each line and the running subtotal update instantly, and Add item creates as many rows as you need.",
    },
    {
      title: "Apply tax, discount, and notes",
      body: "Enter a tax rate and discount percentage — the discount is applied first, then tax on the remainder — and add payment terms or a thank-you note. The live preview mirrors exactly what the PDF will look like.",
    },
    {
      title: "Download the PDF",
      body: "Click Download PDF to generate the invoice locally. The file is named after your invoice number, ready to send or print.",
    },
  ],
  useCases: [
    "Bill clients as a freelancer or contractor without paid invoicing software",
    "Send a quick one-off invoice for a single project or deliverable",
    "Produce consistent, numbered invoices for a small business or studio",
    "Charge international clients in their own currency",
    "Add a percentage discount for early payment or a returning customer",
    "Keep a clean PDF record of what was billed and when",
  ],
  faqs: [
    {
      q: "Is the Invoice Generator free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my invoice or client data uploaded anywhere?",
      a: "No. The invoice is built entirely in your browser with pdf-lib, and your data never leaves your device. Your business details are stored only in your own browser's local storage to prefill the next invoice.",
    },
    {
      q: "How are the totals calculated?",
      a: "The subtotal is the sum of quantity times rate for each line. The discount percentage is taken off the subtotal first, then the tax rate is applied to the discounted amount to reach the final total.",
    },
    {
      q: "Which currencies are supported?",
      a: "You can pick USD, EUR, GBP, INR, AUD, CAD, or JPY. Amounts are formatted with the correct symbol and decimal places — for example, JPY is shown without decimals.",
    },
    {
      q: "Will my business details still be there next time?",
      a: "Yes. Your business name, email, address, phone, currency, and tax rate are saved in your browser and prefilled automatically, so recurring invoices take seconds. Use Clear invoice to reset the line items while keeping your saved profile.",
    },
  ],
};

export default content;

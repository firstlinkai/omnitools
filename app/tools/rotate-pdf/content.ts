import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Rotate PDF fixes sideways or upside-down pages by turning them 90° at a time, either one page or the whole document. Every page shows as a live thumbnail that spins as you rotate, so you can see the result before saving. It runs in your browser with pdfjs and pdf-lib, and the saved file keeps its original text and quality because only the page rotation changes.",
  steps: [
    {
      title: "Add your PDF",
      body: "Drop in a PDF or click to browse. Each page renders as a thumbnail, with a badge tracking the rendering progress.",
    },
    {
      title: "Rotate the whole document",
      body: "Use the Rotate every page Left or Right buttons to turn all pages at once — handy when an entire scan came in sideways.",
    },
    {
      title: "Fine-tune individual pages",
      body: "Hover any thumbnail and use its left and right buttons to rotate just that page. The current angle is shown next to the page number, and the thumbnail rotates to match.",
    },
    {
      title: "Reset if needed",
      body: "Changed your mind? Reset rotations clears every adjustment so you can start again from the original orientation.",
    },
    {
      title: "Download the rotated PDF",
      body: "Once at least one page has been rotated, click Download rotated PDF. The new rotations are written into the file and it downloads instantly.",
    },
  ],
  useCases: [
    "Straighten a scan that came in sideways or upside down",
    "Fix a single landscape page in an otherwise portrait document",
    "Correct pages a scanner fed in the wrong way",
    "Rotate a photographed document to the right orientation",
    "Turn a landscape spreadsheet export so it reads upright",
    "Prepare a correctly oriented PDF before printing",
  ],
  faqs: [
    {
      q: "Is Rotate PDF free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my PDF uploaded to rotate it?",
      a: "No. Pages are rendered and rotated entirely in your browser with pdfjs and pdf-lib, so the file never leaves your device.",
    },
    {
      q: "Can I rotate just one page instead of all of them?",
      a: "Yes. Each page has its own left and right rotate buttons, and there are separate controls to rotate every page at once.",
    },
    {
      q: "Does rotating change the text or quality?",
      a: "No. Rotation only updates each page's orientation flag, so the text, fonts, and image quality in the saved PDF are exactly the same as the original.",
    },
    {
      q: "Why can't I download yet?",
      a: "The download button stays disabled until you've rotated at least one page — there's nothing to save while every page is still at 0°.",
    },
  ],
};

export default content;

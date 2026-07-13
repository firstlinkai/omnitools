import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "Social Media Preview shows how your link will look when it is shared, rendering Google, X, LinkedIn, and Facebook cards side by side from your title, description, URL, and image. Character counters flag titles and descriptions that run past the usual truncation points, and a ready-to-paste block of Open Graph and Twitter meta tags is generated as you type. It is a visual mockup that runs entirely in your browser, so nothing you enter is uploaded.",
  steps: [
    {
      title: "Enter your page details",
      body: "Type the page title and meta description. Live counters show 60 characters for the title and 160 for the description, turning red when you go over the recommended length.",
    },
    {
      title: "Set the URL",
      body: "Paste the page URL. The tool extracts the domain and displays it exactly as it will appear on the cards.",
    },
    {
      title: "Add a social image",
      body: "Drop in a 1200 x 630 image, or click Use placeholder to generate a gradient stand-in on a local canvas. The image is used only for the preview and is never uploaded.",
    },
    {
      title: "Review each platform card",
      body: "See how the link renders as a Google search result and as X, LinkedIn, and Facebook link cards, so you can catch awkward cropping or truncation before publishing.",
    },
    {
      title: "Copy the meta tags",
      body: "Copy the generated Open Graph and Twitter card meta tags and paste them into your page's <head> so real platforms render the card the way you intended.",
    },
  ],
  useCases: [
    "Check how a blog post or landing page will look when shared before you publish",
    "Tune a title and description to fit within each platform's visible length",
    "Generate correct og: and twitter: meta tags without writing them by hand",
    "Compare the same link across Google, X, LinkedIn, and Facebook at a glance",
    "Preview a share card for a client or teammate for quick sign-off",
    "Sanity-check a social image's aspect ratio and cropping",
  ],
  faqs: [
    {
      q: "Is Social Media Preview free?",
      a: "Yes. Every OmniTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my text or image uploaded anywhere?",
      a: "No. All previews are rendered locally in your browser and the image is loaded straight from your device. Nothing you enter is uploaded or sent to any server.",
    },
    {
      q: "Are these cards exactly what each platform will show?",
      a: "They are close, accurate mockups. Platforms may crop or restyle cards slightly and cache content, but the layouts and character limits mirror the real renderers so you can catch problems early.",
    },
    {
      q: "Why does my title or description get cut off?",
      a: "Each platform truncates long text. The counters flag when your title passes about 60 characters or your description passes about 160, which is where truncation typically begins.",
    },
    {
      q: "Do I have to upload the real image to preview it?",
      a: "No. You can drop in a local image just to see the layout, or use the built-in placeholder. The generated og:image tag points at a conventional path on your domain, which you can edit to your real image URL.",
    },
  ],
};

export default content;

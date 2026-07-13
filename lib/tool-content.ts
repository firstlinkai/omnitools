/**
 * Long-form, per-tool page content — the marketing/SEO copy rendered beneath
 * each tool (what it does, how to use it, common uses, FAQs). Each tool ships
 * its own `content.ts` exporting a `ToolContent`, kept out of the registry so
 * the registry stays a lean index and content can be authored per tool without
 * merge conflicts.
 */

export interface ToolStep {
  /** Short imperative title, e.g. "Add your video". */
  title: string;
  /** One or two sentences of detail. */
  body: string;
}

export interface ToolFaq {
  q: string;
  a: string;
}

export interface ToolContent {
  /** 1–2 sentence "what it does" lead paragraph. */
  intro: string;
  /** Ordered how-to steps. */
  steps: ToolStep[];
  /** Common uses / scenarios. */
  useCases: string[];
  /** Frequently asked questions. */
  faqs: ToolFaq[];
}

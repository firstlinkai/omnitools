import Link from "next/link";
import {
  Check,
  CircleDollarSign,
  HardDriveDownload,
  Infinity as InfinityIcon,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { ToolContent } from "@/lib/tool-content";
import { getToolsByCategory, isLive, type ToolDef } from "@/lib/tools-registry";
import { FaqAccordion } from "./faq-accordion";

/** Shared, honest value props — every tool is genuinely client-side. */
const WHY = [
  {
    icon: ShieldCheck,
    title: "100% private",
    body: "Your files are processed inside your browser and are never uploaded to a server.",
  },
  {
    icon: CircleDollarSign,
    title: "Free, no account",
    body: "No sign-up, no watermark, no paywalled “premium” tier. Just open a tool and use it.",
  },
  {
    icon: Zap,
    title: "Instant",
    body: "No upload, no queue, no server round-trip — work starts the moment you drop a file.",
  },
  {
    icon: MonitorSmartphone,
    title: "Runs in your browser",
    body: "Built on open web standards. Works on any modern desktop browser, nothing to install.",
  },
  {
    icon: InfinityIcon,
    title: "No upload size caps",
    body: "Nothing leaves your device, so there’s no server file-size limit — only your machine’s memory.",
  },
  {
    icon: HardDriveDownload,
    title: "Yours to keep",
    body: "Results download straight to your device in clean, standard file formats.",
  },
];

function RelatedTools({ tool }: { tool: ToolDef }) {
  const related = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug && isLive(t))
    .slice(0, 8);
  if (related.length === 0) return null;

  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight">Related tools</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {related.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:bg-muted"
            >
              <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
              {t.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Long-form content rendered beneath a tool: what it does, how to use it,
 * common uses, why OmniTools, FAQs, and related tools. 123apps-style structure,
 * OmniTools design system.
 */
export function ToolContentSections({
  tool,
  content,
}: {
  tool: ToolDef;
  content: ToolContent;
}) {
  return (
    <div className="mt-14 space-y-14 border-t border-border pt-10">
      {/* What it does */}
      <section className="max-w-3xl">
        <h2 className="text-lg font-semibold tracking-tight">
          What is {tool.name}?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {content.intro}
        </p>
      </section>

      {/* How to use */}
      <section>
        <h2 className="text-lg font-semibold tracking-tight">
          How to use {tool.name}
        </h2>
        <ol className="mt-5 grid gap-5 sm:grid-cols-2">
          {content.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{step.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Common uses */}
      {content.useCases.length > 0 && (
        <section className="max-w-3xl">
          <h2 className="text-lg font-semibold tracking-tight">Common uses</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {content.useCases.map((use, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Why OmniTools */}
      <section>
        <h2 className="text-lg font-semibold tracking-tight">Why choose OmniTools</h2>
        <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-1.5">
              <Icon className="h-5 w-5 text-accent" aria-hidden />
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {content.faqs.length > 0 && (
        <section className="max-w-3xl">
          <h2 className="text-lg font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-5">
            <FaqAccordion faqs={content.faqs} />
          </div>
        </section>
      )}

      <RelatedTools tool={tool} />
    </div>
  );
}

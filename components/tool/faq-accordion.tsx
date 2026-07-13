"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { ToolFaq } from "@/lib/tool-content";
import { cn } from "@/lib/utils";

/** Collapsible FAQ list. One item open at a time; all start collapsed. */
export function FaqAccordion({ faqs }: { faqs: ToolFaq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="flex flex-col gap-2.5">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
            >
              <span className="text-sm font-medium text-foreground">{faq.q}</span>
              <Plus
                className={cn(
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-45",
                )}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

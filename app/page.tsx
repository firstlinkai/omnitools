import Link from "next/link";
import {
  LIVE_TOOL_COUNT,
  TOOL_CATEGORIES,
  getToolsByCategory,
} from "@/lib/tools-registry";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Online tools for video, audio, PDF &amp; files
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {LIVE_TOOL_COUNT} free utilities that run entirely in your browser.
          No sign-up, no watermarks, and nothing you drop here ever leaves your
          device.
        </p>
      </div>

      {/* Category sections — dense icon + name link grid */}
      <div className="mt-14 space-y-12">
        {TOOL_CATEGORIES.map((category) => (
          <section key={category}>
            <h2 className="text-lg font-semibold tracking-tight">{category}</h2>
            <div className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {getToolsByCategory(category).map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="group flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                      aria-hidden
                    />
                    <span className="truncate text-sm text-foreground">
                      {tool.name}
                    </span>
                    {tool.status === "soon" && (
                      <span className="ml-auto shrink-0 rounded-full border border-border bg-muted px-1.5 py-px text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Soon
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        FreeTools is free and fully client-side. Press Ctrl K to jump to any tool.
      </p>
    </div>
  );
}

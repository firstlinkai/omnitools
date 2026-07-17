/**
 * Shared shell for legal documents (Privacy Policy, Terms). Provides the
 * heading, "last updated" line, and consistent typography so each document can
 * be written as plain semantic HTML.
 */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  /** Human-readable date, e.g. "14 July 2026". */
  lastUpdated: string;
  /** One-line summary shown under the title. */
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-border pb-6">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {intro && (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{intro}</p>
        )}
        <p className="mt-4 text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
      </header>

      <div
        className={[
          "pt-2 text-sm leading-relaxed text-muted-foreground",
          "[&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground",
          "[&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground",
          "[&_p]:mt-3",
          "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5",
          "[&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5",
          "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2",
          "[&_strong]:font-semibold [&_strong]:text-foreground",
          "[&_table]:mt-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-left",
          "[&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:p-2 [&_th]:text-xs [&_th]:font-semibold [&_th]:text-foreground",
          "[&_td]:border [&_td]:border-border [&_td]:p-2 [&_td]:align-top",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

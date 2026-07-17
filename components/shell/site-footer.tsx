import Link from "next/link";
import { Github, ShieldCheck } from "lucide-react";

const GITHUB_URL = "https://github.com/firstlinkai/omnitools";

/** Site-wide footer with the legal links. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="text-xs text-muted-foreground">
            &copy; {year} FreeTools by FirstLink AI
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
            Every tool runs in your browser. Your files never leave your device.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link
            href="/pricing"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Use
          </Link>
          <a
            href="mailto:privacy@freetools.click"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-3.5 w-3.5 shrink-0" aria-hidden />
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

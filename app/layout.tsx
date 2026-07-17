import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "@/components/providers";
import { AppShell } from "@/components/shell/app-shell";
import "./globals.css";

const TITLE = "FreeTools · Privacy-first web utilities";
const DESCRIPTION =
  "60 free developer, design, media, and productivity tools that run entirely in your browser. Your files never leave your device.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freetools.click"),
  title: {
    default: TITLE,
    template: "%s · FreeTools",
  },
  description: DESCRIPTION,
  applicationName: "FreeTools",
  // NOTE: deliberately no title/description/url here. Child pages (e.g. each
  // tool) set their own `title`/`description`, and Next falls back to those for
  // og:title / og:description only when they are absent at this level —
  // otherwise every page would share the generic site title. og:url is omitted
  // for the same reason: a root value would wrongly advertise the homepage as
  // the canonical URL of every tool page. Scrapers use the fetched URL instead.
  openGraph: {
    siteName: "FreeTools",
    locale: "en_US",
    type: "website",
    // og:image comes from app/opengraph-image.tsx (site) and
    // app/tools/<slug>/opengraph-image.tsx (per tool).
  },
  twitter: {
    card: "summary_large_image",
    // twitter:image comes from app/twitter-image.tsx.
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>

        {/* Cookieless, privacy-friendly traffic stats. Sets no cookies and does
            not track visitors across sites — keeps our "no cookies" promise true. */}
        <Analytics />
      </body>
    </html>
  );
}

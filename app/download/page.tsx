import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  Smartphone,
  WifiOff,
  ShieldCheck,
  FolderDown,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { LIVE_TOOL_COUNT } from "@/lib/tools-registry";
import { Panel } from "@/components/tool/panel";
import { cn } from "@/lib/utils";

// Bump these three lines when a new APK is released (drop the file in
// public/downloads/ and update the path/version/size here).
const APK_PATH = "/downloads/FreeTools-v1.0.1.apk";
const APK_VERSION = "1.0.1";
const APK_SIZE = "15 MB";
const MIN_ANDROID = "6.0";

export const metadata: Metadata = {
  title: "Download the Android App",
  description:
    "Get FreeTools for Android — all 100 tools running 100% on your device. No internet permission, no ads, no accounts. A signed APK you install directly.",
};

const highlights = [
  {
    icon: WifiOff,
    title: "Works fully offline",
    body: "The app ships with no INTERNET permission at all. Every tool — including the ~31 MB video engine — is bundled inside the app. It literally cannot phone home.",
  },
  {
    icon: Smartphone,
    title: `All ${LIVE_TOOL_COUNT} tools on-device`,
    body: "The same suite as the website — video, audio, PDF, image, developer, text, and generator tools — running natively on your phone or tablet.",
  },
  {
    icon: ShieldCheck,
    title: "No account, no ads, no tracking",
    body: "Nothing to sign up for and nothing watching you. Your files are opened, processed, and saved entirely on your own device.",
  },
  {
    icon: FolderDown,
    title: "Native save dialog",
    body: "Every result opens Android's own “Save to…” picker, streamed in chunks so even large videos save without any storage permission.",
  },
];

const steps = [
  {
    title: "Download the APK",
    body: "Tap the button above. The ~15 MB file saves to your Downloads folder.",
  },
  {
    title: "Open the file",
    body: "Tap the downloaded APK. The first time, Android asks you to allow “Install unknown apps” for your browser or Files app — enable it, then go back.",
  },
  {
    title: "Install",
    body: "Tap Install. It takes a few seconds. The app needs no special permissions to start.",
  },
  {
    title: "Open FreeTools",
    body: "Launch it from your app drawer and use any tool — with your Wi-Fi and data off, if you like.",
  },
];

const BIG_BUTTON = cn(
  "inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-semibold transition-colors",
  "bg-accent text-accent-foreground shadow-sm hover:opacity-90 active:translate-y-px",
  "h-12 px-6 text-base",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <header className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-sm">
          <Smartphone className="h-7 w-7" aria-hidden />
        </span>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          FreeTools for Android
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          All {LIVE_TOOL_COUNT} tools, running <strong className="text-foreground">100% on your device</strong>.
          No internet permission, no ads, no accounts — just install and go.
        </p>

        <a href={APK_PATH} download className={cn(BIG_BUTTON, "mt-7")}>
          <Download className="h-5 w-5" aria-hidden />
          Download APK
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          Version {APK_VERSION} · {APK_SIZE} · Android {MIN_ANDROID}+ · Signed by FirstLink AI
        </p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <PackageCheck className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
          Direct download — not on the Play Store, so you install it yourself (steps below).
        </p>
      </header>

      {/* Highlights */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, body }) => (
          <Panel key={title} bodyClassName="flex gap-3 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-muted/60 text-accent">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-foreground">{title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </Panel>
        ))}
      </div>

      {/* How to install */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold tracking-tight">How to install</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Because it&rsquo;s a direct download rather than a Play Store listing, you approve the
          install yourself. It only takes a moment.
        </p>
        <ol className="relative mt-5 flex flex-col gap-4 border-l border-dashed border-border pl-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-[11px] font-semibold text-muted-foreground"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="rounded-md border border-border bg-muted/40 px-3 py-2.5">
                <p className="text-sm font-medium text-foreground">{step.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Reassurance / alt */}
      <section className="mt-12 rounded-lg border border-border bg-card p-5">
        <h2 className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          Why it asks for &ldquo;unknown apps&rdquo;
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Android shows that prompt for any app installed outside the Play Store — it&rsquo;s a
          normal, expected step for a direct download, not a warning that anything is wrong. The
          APK is signed by FirstLink AI, and the app requests no internet access. You can turn the
          &ldquo;unknown apps&rdquo; permission back off after installing.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a href={APK_PATH} download className={cn(BIG_BUTTON, "h-10 px-5 text-sm")}>
            <Download className="h-4 w-4" aria-hidden />
            Download APK ({APK_SIZE})
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Prefer the web version? Use it in your browser
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}

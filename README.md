<div align="center">

# 🛠️ FreeTools

### The privacy-first, all-in-one web utility suite — **100 tools that run 100% in your browser.**

**Nothing you drop here ever leaves your device.** No uploads, no accounts, no ads, no tracking cookies. Just open a tool and go.

[**🌐 Live at freetools.click →**](https://www.freetools.click)

![Next.js](https://img.shields.io/badge/Next.js-15-000?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white) ![License: MIT](https://img.shields.io/badge/License-MIT-eab308) ![100% client-side](https://img.shields.io/badge/processing-100%25%20client--side-dc2626)

</div>

---

## Why FreeTools?

Most "free online tools" (converters, compressors, PDF editors) work by **uploading your files to their servers**. That means your documents, videos, and photos leave your device — and you have to trust them not to store, read, or leak them.

**FreeTools does the opposite.** Every tool runs entirely inside your web browser using modern web standards (WebAssembly, HTML5 Canvas, the Web Audio API, and the File API). Your files are opened, processed, and downloaded **on your own machine**. There is no upload endpoint. There is no server that ever sees your data.

| | Typical online tools | **FreeTools** |
| --- | --- | --- |
| Where your files go | Uploaded to their servers | **Stay on your device** |
| Cost | "Free" tier + paywalls | **Free, unlimited, forever** |
| Accounts | Sign-up required | **None** |
| Ads / trackers | Usually yes | **None. Zero cookies.** |
| Daily limits / file caps | Common | **None** (only your device's memory) |
| Offline after first load | Rarely | **Most tools work offline** |

This isn't a marketing claim you have to take on faith — it's how the code physically works, and you can verify it yourself in your browser's Network tab (you'll see your files never get sent anywhere).

---

## 🧰 The 100 tools

<details open>
<summary><b>🎬 Video</b> (15) — powered by FFmpeg (WebAssembly)</summary>

Trim Video · Merge Videos · Crop Video · Rotate Video · Flip Video · Resize Video · Loop Video · Change Video Volume · Change Video Speed · Add Audio to Video · Add Image to Video · Add Text to Video · Video Converter (MP4/WebM/MOV/MKV) · Change GIF Speed · **Video to GIF**
</details>

<details open>
<summary><b>🎧 Audio</b> (10) — Web Audio API + FFmpeg</summary>

Trim Audio · Change Volume · Change Speed · Change Pitch · 5-band Equalizer · Reverse Audio · Audio Joiner · Audio Converter (MP3/WAV/OGG/M4A) · **Audio Mixer** · **Metronome**
</details>

<details open>
<summary><b>🎥 Screen &amp; Recording</b> (3) — the browser's MediaRecorder API</summary>

Screen Recorder (with mic, system audio &amp; webcam overlay) · Video Recorder · Voice Recorder (with live waveform)
</details>

<details open>
<summary><b>📄 PDF &amp; Documents</b> (22) — pdf-lib + pdf.js</summary>

Split PDF · Merge PDF · Compress PDF · Unlock PDF · **Protect PDF (real AES-256 encryption)** · Rotate PDF · Add Page Numbers · PDF → Word · PDF → Excel · PDF → JPG · PDF → PNG · PDF → HTML · Word → PDF · Excel → PDF · PPT → PDF · PNG → PDF · JPG → PDF · **Delete PDF Pages** · **Reorder PDF Pages** · **Extract Text from PDF** · **Extract Images from PDF** · **Watermark PDF**
</details>

<details open>
<summary><b>🖼️ Image Tools</b> (14) — HTML5 Canvas</summary>

Image Converter (PNG/JPEG/WebP) · Privacy-First Blur/Redact Tool · Compress PNG · Compress Image Size · Image Format Converter · **Image Cropper** · **Resize Image** · **Color Picker** · **Color Converter** · **SVG → PNG** · **EXIF Remover** · **Invert Colors** · **Sharpen Image** · **Grayscale Converter**
</details>

<details open>
<summary><b>⚙️ Developer &amp; Data</b> (15)</summary>

Prettify JSON · Calculate Number Sum · Smart Format Converter (JSON/YAML/CSV/Markdown) · RegEx Tester · Document Converter (Markdown/HTML/Plain text) · **JSON Minifier** · **JSON ↔ CSV** · **Base64 Encode/Decode** · **URL Encoder/Decoder** · **HTML Entity Encoder** · **Markdown Preview** · **JWT Debugger** · **XML → JSON** · **SQL Formatter** · **Unix Timestamp Converter**
</details>

<details open>
<summary><b>📝 Text Tools</b> (11)</summary>

Sort a List · Split a Text · Readability Analyzer · **Case Converter** · **Word &amp; Character Counter** · **Diff Checker** · **Lorem Ipsum Generator** · **Slug Generator** · **Find &amp; Replace** · **SHA-256 Hash** · **MD5 Hash**
</details>

<details open>
<summary><b>🎲 Generators</b> (5)</summary>

**Password Generator** · **UUID Generator** · **QR Code Generator** · **Barcode Generator** · **QR Code Scanner**
</details>

<details open>
<summary><b>🎨 Design &amp; Productivity</b> (5)</summary>

Flashcard Studio · Invoice Generator (→ PDF) · SVG Shape &amp; Wave Generator · Social Media Preview · CSS Keyframe Builder
</details>

Every tool page also includes a plain-English **"What is / How to use / Common uses / FAQ"** write-up.

---

## 🏗️ How it works (the interesting part)

FreeTools proves you can build a genuinely useful, feature-rich utility suite with **no backend at all**. Each capability maps to a browser technology:

- **Video & audio editing** → [FFmpeg](https://ffmpeg.org/) compiled to **WebAssembly** (`@ffmpeg/ffmpeg`), lazy-loaded only when a media tool is opened.
- **PDF creation & editing** → [`pdf-lib`](https://pdf-lib.js.org/) and [`pdf.js`](https://mozilla.github.io/pdf.js/); AES-256 PDF encryption via [`@cantoo/pdf-lib`](https://www.npmjs.com/package/@cantoo/pdf-lib).
- **Office file parsing** (docx/xlsx/pptx) → [`JSZip`](https://stuk.github.io/jszip/) to read the OOXML, then `pdf-lib` to lay it out.
- **Audio DSP** → the native **Web Audio API** (`OfflineAudioContext`, `BiquadFilter` nodes) with a hand-written 16-bit PCM WAV encoder.
- **Recording** → `navigator.mediaDevices` + **`MediaRecorder`**.
- **Image editing** → **HTML5 Canvas** (`toBlob`, `getImageData`) — crop, resize, convolution filters, pixel picking, and metadata stripping by re-encode.
- **Hashing & randomness** → the native **Web Crypto API** (`crypto.subtle.digest` for SHA-256, `getRandomValues` / `randomUUID` for passwords and UUIDs).
- **Codes** → `qrcode` + `jsbarcode` to generate, `jsqr` to decode a QR from an uploaded image.
- **Social share images** → dynamic per-tool Open Graph banners via `next/og`.

Two shared shells keep the tool code small: a **text shell** (`components/tool/text-transform-tool.tsx`) that gives any string-to-string tool its input/output panes, live recompute, error surface, copy and download; and an **image shell** (`image-canvas-tool.tsx`) that handles the drop zone, canvas preview, live re-render and export. Most text and image tools are just a `transform()` or `process()` function plus a few controls.

The result: **the only network request in the whole app is the one-time FFmpeg engine download** (from a public CDN) the first time you use a video/audio tool. Everything else is local.

### Architecture highlights

- **Registry-driven.** [`lib/tools-registry.ts`](lib/tools-registry.ts) is the single source of truth — every tool's slug, name, description, category, and icon. The sidebar, dashboard, command palette (`Ctrl/⌘ + K`), sitemap, and headers all render from it. Add one entry and the tool appears everywhere.
- **Isolated tools.** Each tool is a self-contained `app/tools/<slug>/` directory (a server `page.tsx` + a `"use client"` implementation + long-form `content.ts`). Tools never import from each other, and a segment-level error boundary means one crashing tool can't take down the rest.
- **SEO built-in.** Auto-generated `robots.txt` + `sitemap.xml`, per-page Open Graph metadata, and per-tool share images.

---

## 🚀 Run it yourself

```bash
git clone https://github.com/firstlinkai/omnitools.git
cd omnitools
npm install
npm run dev        # → http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

**No environment variables are required** to run the full tool suite — it's entirely client-side. The optional `.env` values (see [`.env.example`](.env.example)) only relate to an *optional*, not-enabled premium/analytics layer:

- `NEXT_PUBLIC_*` / `STRIPE_*` / `SUPABASE_*` — scaffolding for a future paid tier. Leave them blank and everything works.

> 🔒 **Secrets never live in this repo.** Real keys go in `.env.local` (git-ignored). This repository has been audited to contain no credentials in any commit.

### Deploy

Push to GitHub and import the repo into **[Vercel](https://vercel.com)** (zero config — it auto-detects Next.js), or run `vercel --prod`. It runs happily on the free tier.

---

## ➕ Adding a new tool

1. Add an entry to `lib/tools-registry.ts` (slug, name, description, category, icon, keywords).
2. Create `app/tools/<slug>/page.tsx` (+ your `"use client"` implementation, and optionally `content.ts` for the write-up).

Navigation, search, the dashboard, the sitemap, and the share image are all wired automatically.

---

## 🧱 Tech stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · `next-themes` (dark/light) · Lucide icons · Geist font · Vercel Web Analytics (cookieless).

**Client-side engines:** `@ffmpeg/ffmpeg`, `pdf-lib`, `@cantoo/pdf-lib`, `pdfjs-dist`, `jszip`, `browser-image-compression`, `gifuct-js` + `gifenc`, `papaparse`, `js-yaml`, `qrcode`, `jsqr`, `jsbarcode`, `sql-formatter`, `marked`, `diff`, `spark-md5`.

Every heavy library is **dynamically imported inside the tool that needs it**, so opening the site doesn't download engines you never use.

---

## 🔐 Privacy

FreeTools processes your files on your device and never uploads them. It uses **no cookies**, and traffic stats come from **cookieless** Vercel Web Analytics. See the live [Privacy Policy](https://www.freetools.click/privacy) and [Terms of Use](https://www.freetools.click/terms).

## 📄 License

Released under the [MIT License](LICENSE) — clone it, fork it, learn from it, and build your own. Attribution appreciated but not required.

<div align="center">

Built by [FirstLink AI](https://firstlinkai.com) · [freetools.click](https://www.freetools.click)

</div>

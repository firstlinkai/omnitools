import {
  ArrowDownAZ,
  ArrowLeftRight,
  BookOpenCheck,
  Braces,
  Clapperboard,
  Combine,
  EyeOff,
  FileSignature,
  FileStack,
  FileX,
  Film,
  Gauge,
  ImageDown,
  Images,
  Layers,
  LayoutTemplate,
  Minimize2,
  Palette,
  Receipt,
  Regex,
  RotateCw,
  Scissors,
  Sigma,
  Smile,
  Video,
  VolumeX,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const TOOL_CATEGORIES = [
  "PDF Management Suite",
  "Image Editing & Design Studio",
  "Media, Scripts & Data Compilers",
  "Everyday Business & Productivity",
] as const;

export type ToolCategory = (typeof TOOL_CATEGORIES)[number];

/** "live" tools have a real engine; "soon" tools render the ComingSoonTool view. */
export type ToolStatus = "live" | "soon";

export interface ToolDef {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: LucideIcon;
  keywords: string[];
  /** Defaults to "live" when omitted. */
  status?: ToolStatus;
  /** Client-side engine powering the tool. Shown as a badge on Coming Soon pages. */
  engine?: string;
  /**
   * Wireframe schema: the ordered flow a planned tool will offer. Rendered as a
   * numbered blueprint by ComingSoonTool so visitors see exactly what is coming.
   */
  wireframe?: string[];
}

/**
 * Single source of truth for every tool in the suite.
 * The sidebar, dashboard, command search, tool headers, and the Coming Soon
 * template all read from here. Adding a tool = one entry here + one directory
 * under app/tools/<slug>/ (a real page for "live", nothing else for "soon"
 * beyond a page that renders <ComingSoonTool>).
 */
export const TOOLS: ToolDef[] = [
  // ── A · PDF Management Suite ─────────────────────────────────────────
  {
    slug: "prettify-json",
    name: "Prettify JSON",
    description: "Validate, format, and color-code raw or minified JSON.",
    category: "PDF Management Suite",
    icon: Braces,
    keywords: ["json", "format", "beautify", "validate", "minify"],
    engine: "Browser core APIs",
  },
  {
    slug: "sort-list",
    name: "Sort a List",
    description: "Sort multi-line text alphabetically, numerically, or reversed.",
    category: "PDF Management Suite",
    icon: ArrowDownAZ,
    keywords: ["sort", "list", "alphabetical", "numeric", "dedupe", "lines"],
    engine: "Browser core APIs",
  },
  {
    slug: "number-sum",
    name: "Calculate Number Sum",
    description: "Extract every number from messy text: sum, average, median, min, max.",
    category: "PDF Management Suite",
    icon: Sigma,
    keywords: ["sum", "average", "median", "numbers", "statistics", "count"],
    engine: "Browser core APIs",
  },
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    description: "Combine multiple PDFs into one, in any order, entirely in your browser.",
    category: "PDF Management Suite",
    icon: Combine,
    keywords: ["pdf", "merge", "combine", "join", "append", "pdf-lib"],
    engine: "pdf-lib",
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    description: "Pick pages from a thumbnail grid and extract them to a new PDF.",
    category: "PDF Management Suite",
    icon: FileStack,
    keywords: ["pdf", "split", "extract", "pages", "merge"],
    engine: "pdf-lib",
  },
  {
    slug: "pdf-page-deleter",
    name: "PDF Page Deleter",
    description: "Drop pages you don't need and download a slimmed-down PDF.",
    category: "PDF Management Suite",
    icon: FileX,
    keywords: ["pdf", "delete", "remove", "pages", "trim"],
    status: "soon",
    engine: "pdf-lib",
    wireframe: [
      "Drop a PDF; every page renders as a thumbnail grid",
      "Toggle the pages you want to remove",
      "pdf-lib rebuilds the document without the deleted pages",
      "Download the trimmed PDF — nothing leaves your device",
    ],
  },
  {
    slug: "rotate-pdf",
    name: "Rotate PDF",
    description: "Fix sideways scans by rotating pages 90°, 180°, or 270°.",
    category: "PDF Management Suite",
    icon: RotateCw,
    keywords: ["pdf", "rotate", "orientation", "landscape", "portrait", "scan"],
    status: "soon",
    engine: "pdf-lib",
    wireframe: [
      "Upload a PDF and preview each page",
      "Rotate individual pages or the whole document",
      "pdf-lib writes the corrected page angles in memory",
      "Export the re-oriented PDF instantly",
    ],
  },
  {
    slug: "esign-pdf",
    name: "eSign PDF",
    description: "Draw or type a signature and stamp it anywhere on a PDF.",
    category: "PDF Management Suite",
    icon: FileSignature,
    keywords: ["pdf", "sign", "signature", "esign", "contract", "annotate"],
    status: "soon",
    engine: "pdf-lib + Canvas",
    wireframe: [
      "Draw a signature on a canvas pad or type one in a signature font",
      "Drag the signature onto the exact page and position",
      "pdf-lib embeds the signature image into the document",
      "Download a signed PDF — your signature never touches a server",
    ],
  },

  // ── B · Image Editing & Design Studio ───────────────────────────────
  {
    slug: "svg-wave-generator",
    name: "SVG Shape & Wave Generator",
    description: "Generate organic waves and blobs with sliders, export raw SVG.",
    category: "Image Editing & Design Studio",
    icon: Waves,
    keywords: ["svg", "wave", "blob", "shape", "generator", "hero", "divider"],
    engine: "HTML5 Canvas & SVG",
  },
  {
    slug: "social-preview",
    name: "Social Media Preview Mockup",
    description: "Preview link cards for Google, X, LinkedIn, and Facebook.",
    category: "Image Editing & Design Studio",
    icon: LayoutTemplate,
    keywords: ["og", "open graph", "twitter", "card", "seo", "meta", "serp"],
    engine: "Browser core APIs",
  },
  {
    slug: "css-keyframe-builder",
    name: "CSS Animation Keyframe Builder",
    description: "Build animations on a visual timeline, export pure @keyframes CSS.",
    category: "Image Editing & Design Studio",
    icon: Clapperboard,
    keywords: ["css", "animation", "keyframes", "timeline", "transition"],
    engine: "Browser core APIs",
  },
  {
    slug: "blur-image",
    name: "Privacy-First Blur Tool",
    description: "Drag boxes over sensitive regions and export a redacted PNG.",
    category: "Image Editing & Design Studio",
    icon: EyeOff,
    keywords: ["blur", "redact", "censor", "privacy", "screenshot", "image"],
    engine: "HTML5 Canvas",
  },
  {
    slug: "compress-image-size",
    name: "Compress Image Size",
    description: "Shrink PNG/JPG/WebP with a live quality slider and side-by-side preview.",
    category: "Image Editing & Design Studio",
    icon: Minimize2,
    keywords: ["compress", "image", "optimize", "quality", "resize", "jpeg", "size"],
    engine: "HTML5 Canvas",
  },
  {
    slug: "meme-maker",
    name: "Meme Maker",
    description: "Add classic top-and-bottom text to any image and export a meme.",
    category: "Image Editing & Design Studio",
    icon: Smile,
    keywords: ["meme", "text", "caption", "image", "impact", "top text"],
    status: "soon",
    engine: "HTML5 Canvas",
    wireframe: [
      "Drop an image onto the canvas",
      "Type top and bottom captions with the classic outlined Impact styling",
      "Drag captions to reposition and scale the font live",
      "Canvas.toBlob() exports a ready-to-share PNG",
    ],
  },
  {
    slug: "image-format-converter",
    name: "Image Format Converter",
    description: "Convert between PNG, JPEG, and WebP with a single canvas re-encode.",
    category: "Image Editing & Design Studio",
    icon: Images,
    keywords: ["convert", "png", "jpg", "jpeg", "webp", "format", "image"],
    engine: "HTML5 Canvas",
  },
  {
    slug: "color-filter-studio",
    name: "Color Filter Studio",
    description: "Apply grayscale, invert, and pixelate filters right on the canvas.",
    category: "Image Editing & Design Studio",
    icon: Palette,
    keywords: ["filter", "grayscale", "invert", "pixelate", "effect", "image"],
    status: "soon",
    engine: "HTML5 Canvas",
    wireframe: [
      "Upload an image into the pixel workspace",
      "Toggle grayscale, invert, sepia, or pixelate — stack them freely",
      "Pixel data is transformed via getImageData / putImageData",
      "Download the filtered result as PNG or JPEG",
    ],
  },
  {
    slug: "compress-png",
    name: "Compress PNG",
    description: "Compress images and knock out backgrounds to transparency.",
    category: "Image Editing & Design Studio",
    icon: ImageDown,
    keywords: ["compress", "png", "optimize", "transparent", "background", "image"],
    engine: "HTML5 Canvas",
  },

  // ── C · Media, Scripts & Data Compilers ─────────────────────────────
  {
    slug: "trim-video",
    name: "Trim Video",
    description: "Cut video clips locally with in-browser FFmpeg. No uploads.",
    category: "Media, Scripts & Data Compilers",
    icon: Video,
    keywords: ["video", "trim", "cut", "clip", "ffmpeg", "mp4"],
    engine: "FFmpeg (WebAssembly)",
  },
  {
    slug: "mute-video",
    name: "Mute Video",
    description: "Strip the audio track from a video without re-encoding the picture.",
    category: "Media, Scripts & Data Compilers",
    icon: VolumeX,
    keywords: ["video", "mute", "audio", "silence", "remove sound", "ffmpeg"],
    status: "soon",
    engine: "FFmpeg (WebAssembly)",
    wireframe: [
      "Drop a video file into the browser sandbox",
      "FFmpeg.wasm loads once, then runs -an to drop the audio stream",
      "Video is copied without re-encoding, so it stays fast and lossless",
      "Download the silent clip — the file never leaves the tab",
    ],
  },
  {
    slug: "video-to-gif",
    name: "Video to GIF Converter",
    description: "Turn a short clip into a shareable animated GIF, frame by frame.",
    category: "Media, Scripts & Data Compilers",
    icon: Film,
    keywords: ["video", "gif", "convert", "animation", "clip", "ffmpeg"],
    status: "soon",
    engine: "FFmpeg (WebAssembly) + gifenc",
    wireframe: [
      "Upload a clip and pick the start/end and target FPS",
      "FFmpeg.wasm extracts frames at the chosen rate",
      "gifenc quantizes and stitches the frames into an optimized GIF",
      "Preview the loop and download the GIF locally",
    ],
  },
  {
    slug: "format-converter",
    name: "Smart Format Converter",
    description: "Convert between JSON, YAML, CSV, and Markdown tables.",
    category: "Media, Scripts & Data Compilers",
    icon: ArrowLeftRight,
    keywords: ["json", "yaml", "csv", "markdown", "convert", "transform"],
    engine: "Browser core APIs",
  },
  {
    slug: "regex-tester",
    name: "RegEx Tester",
    description: "Test expressions with live match highlighting and a syntax cheat sheet.",
    category: "Media, Scripts & Data Compilers",
    icon: Regex,
    keywords: ["regex", "regexp", "pattern", "match", "cheat sheet"],
    engine: "Browser core APIs",
  },
  {
    slug: "gif-speed",
    name: "Change GIF Speed",
    description: "Speed up or slow down animated GIFs, from 0.25x to 4x.",
    category: "Media, Scripts & Data Compilers",
    icon: Gauge,
    keywords: ["gif", "speed", "slow", "fast", "animation", "frames"],
    engine: "gifenc + gifuct-js",
  },

  // ── D · Everyday Business & Productivity ────────────────────────────
  {
    slug: "invoice-generator",
    name: "Invoicing Generator",
    description: "Line-item billing with tax math, exported straight to PDF.",
    category: "Everyday Business & Productivity",
    icon: Receipt,
    keywords: ["invoice", "receipt", "billing", "tax", "pdf", "freelance"],
    engine: "pdf-lib",
  },
  {
    slug: "readability",
    name: "Readability & Skimmability Analyzer",
    description: "Flesch-Kincaid scoring with dense-paragraph and key-phrase highlighting.",
    category: "Everyday Business & Productivity",
    icon: BookOpenCheck,
    keywords: ["readability", "flesch", "kincaid", "writing", "skim", "analyze"],
    engine: "Browser core APIs",
  },
  {
    slug: "flashcards",
    name: "Flashcard Generator",
    description: "Build decks and study with flip cards. Saved in your browser.",
    category: "Everyday Business & Productivity",
    icon: Layers,
    keywords: ["flashcards", "study", "learn", "deck", "memorize", "cards"],
    engine: "localStorage",
  },
  {
    slug: "split-text",
    name: "Split a Text",
    description: "Chop text into blocks by character count, word count, or delimiter.",
    category: "Everyday Business & Productivity",
    icon: Scissors,
    keywords: ["split", "text", "chunk", "delimiter", "characters", "words"],
    engine: "Browser core APIs",
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolDef[] {
  return TOOLS.filter((t) => t.category === category);
}

export function isLive(tool: ToolDef): boolean {
  return tool.status !== "soon";
}

/** Count of tools with a working engine — used for headline/search copy. */
export const LIVE_TOOL_COUNT = TOOLS.filter(isLive).length;

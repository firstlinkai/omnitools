// One-shot: reorganize the 60 existing tools into 9 categories and append the
// 40 new tools (as Coming Soon stubs). Run once: node scripts/expand-100.mjs
import { readFileSync, writeFileSync } from "node:fs";

const P = "lib/tools-registry.ts";
let s = readFileSync(P, "utf8").replace(/\r\n/g, "\n"); // normalize CRLF -> LF

// 1) New category list -------------------------------------------------------
const CATS = [
  "Video",
  "Audio",
  "Screen & Recording",
  "PDF & Documents",
  "Image Tools",
  "Developer & Data",
  "Text Tools",
  "Generators",
  "Design & Productivity",
];
s = s.replace(
  /export const TOOL_CATEGORIES = \[[\s\S]*?\] as const;/,
  `export const TOOL_CATEGORIES = [\n${CATS.map((c) => `  "${c}",`).join("\n")}\n] as const;`,
);

// 2) Reorg existing 60 via slug -> category ---------------------------------
const MOVE = {
  "trim-video": "Video", "merge-videos": "Video", "crop-video": "Video", "rotate-video": "Video", "flip-video": "Video", "resize-video": "Video", "loop-video": "Video", "change-video-volume": "Video", "change-video-speed": "Video", "add-audio-to-video": "Video", "add-image-to-video": "Video", "add-text-to-video": "Video", "video-converter": "Video", "gif-speed": "Video",
  "trim-audio": "Audio", "change-audio-volume": "Audio", "change-audio-speed": "Audio", "change-audio-pitch": "Audio", "audio-equalizer": "Audio", "reverse-audio": "Audio", "audio-joiner": "Audio", "audio-converter": "Audio",
  "screen-recorder": "Screen & Recording", "video-recorder": "Screen & Recording", "voice-recorder": "Screen & Recording",
  "split-pdf": "PDF & Documents", "merge-pdf": "PDF & Documents", "compress-pdf": "PDF & Documents", "unlock-pdf": "PDF & Documents", "protect-pdf": "PDF & Documents", "rotate-pdf": "PDF & Documents", "add-pdf-page-numbers": "PDF & Documents", "pdf-to-word": "PDF & Documents", "pdf-to-excel": "PDF & Documents", "pdf-to-jpg": "PDF & Documents", "pdf-to-png": "PDF & Documents", "pdf-to-html": "PDF & Documents", "word-to-pdf": "PDF & Documents", "excel-to-pdf": "PDF & Documents", "ppt-to-pdf": "PDF & Documents", "png-to-pdf": "PDF & Documents", "jpg-to-pdf": "PDF & Documents",
  "blur-image": "Image Tools", "compress-png": "Image Tools", "compress-image-size": "Image Tools", "image-format-converter": "Image Tools", "image-converter": "Image Tools",
  "prettify-json": "Developer & Data", "format-converter": "Developer & Data", "regex-tester": "Developer & Data", "number-sum": "Developer & Data", "document-converter": "Developer & Data",
  "sort-list": "Text Tools", "split-text": "Text Tools", "readability": "Text Tools",
  "svg-wave-generator": "Design & Productivity", "social-preview": "Design & Productivity", "css-keyframe-builder": "Design & Productivity", "invoice-generator": "Design & Productivity", "flashcards": "Design & Productivity",
};
for (const [slug, cat] of Object.entries(MOVE)) {
  const re = new RegExp(`(slug: "${slug}",[\\s\\S]*?category: )"[^"]*"`);
  if (!re.test(s)) { console.error("REORG: slug not found:", slug); process.exit(1); }
  s = s.replace(re, `$1"${cat}"`);
}

// 3) The 40 new tools --------------------------------------------------------
const NEW = [
  ["delete-pdf-pages","Delete PDF Pages","Remove unwanted pages from a PDF and download the slimmed-down file.","PDF & Documents","FileX",["pdf","delete","remove","pages","trim"],"pdf-lib & pdfjs-dist",["Upload a PDF and preview every page as a thumbnail","Select the pages to remove","pdf-lib rebuilds the document without them; download it"]],
  ["reorder-pdf-pages","Reorder PDF Pages","Drag PDF pages into a new order and export the rearranged file.","PDF & Documents","ListOrdered",["pdf","reorder","rearrange","pages","organize"],"pdf-lib & pdfjs-dist",["Upload a PDF; pages appear as draggable thumbnails","Drag them into the order you want","pdf-lib writes the reordered PDF for download"]],
  ["extract-pdf-text","Extract Text from PDF","Pull all the selectable text out of a PDF into plain text.","PDF & Documents","ScanText",["pdf","text","extract","copy","content"],"pdfjs-dist",["Upload a PDF","pdfjs reads the text layer from every page","Copy or download the extracted text"]],
  ["extract-pdf-images","Extract Images from PDF","Pull the embedded images out of a PDF and download them.","PDF & Documents","Images",["pdf","images","extract","save","pictures"],"pdfjs-dist",["Upload a PDF","pdfjs finds and decodes the embedded images","Download each image, or all at once"]],
  ["watermark-pdf","Watermark PDF","Stamp text or an image watermark across every page of a PDF.","PDF & Documents","Stamp",["pdf","watermark","stamp","brand","overlay"],"pdf-lib",["Upload a PDF and type your watermark text","Set position, opacity, size and angle","pdf-lib stamps every page; download the result"]],

  ["video-to-gif","Video to GIF","Turn a short video clip into a looping animated GIF.","Video","Film",["video","gif","animation","convert","loop"],"FFmpeg (WebAssembly)",["Upload a clip and choose start, end and frame rate","FFmpeg extracts frames; gifenc builds the GIF","Preview the loop and download the GIF"]],

  ["audio-mixer","Audio Mixer","Layer multiple audio tracks together into a single mix.","Audio","Blend",["audio","mixer","combine","layer","tracks"],"Web Audio API",["Add two or more audio files","Set each track's volume and start offset","Mix them into one track and download the WAV"]],
  ["metronome","Metronome","A precise browser metronome with adjustable tempo and time signature.","Audio","Timer",["metronome","tempo","bpm","beat","practice"],"Web Audio API",["Set the tempo (BPM) and time signature","Press start; the Web Audio clock keeps steady time","Adjust the tempo on the fly while it plays"]],

  ["image-cropper","Image Cropper","Crop an image to any region or aspect ratio, right in your browser.","Image Tools","Crop",["image","crop","cut","trim","aspect"],"HTML5 Canvas",["Drop an image and drag a crop box over it","Lock an aspect ratio or crop freely","Export just the cropped region as PNG or JPG"]],
  ["resize-image","Resize Image","Resize an image to exact pixels, a percentage, or a preset.","Image Tools","Scaling",["image","resize","scale","dimensions","pixels"],"HTML5 Canvas",["Drop an image","Enter a new width/height or pick a preset","Canvas re-renders it; download the resized image"]],
  ["color-picker","Color Picker","Pick any color from an image and get its HEX, RGB and HSL values.","Image Tools","Pipette",["color","picker","eyedropper","hex","rgb"],"HTML5 Canvas",["Drop an image onto the canvas","Click anywhere to sample that pixel's color","Copy the HEX, RGB or HSL value"]],
  ["color-converter","Color Converter","Convert a color between HEX, RGB, HSL and more.","Image Tools","Palette",["color","convert","hex","rgb","hsl"],"Browser core APIs",["Enter a color in any format","See it instantly converted to HEX, RGB and HSL","Copy the format you need"]],
  ["svg-to-png","SVG to PNG","Rasterize an SVG to a PNG at any resolution.","Image Tools","FileImage",["svg","png","convert","rasterize","export"],"HTML5 Canvas",["Drop or paste an SVG","Choose the output width or scale","Canvas rasterizes it; download the PNG"]],
  ["exif-remover","EXIF Remover","Strip EXIF metadata (location, camera, date) from a photo.","Image Tools","Eraser",["exif","metadata","privacy","strip","remove"],"HTML5 Canvas",["Drop a JPEG or PNG photo","The image is redrawn on a canvas, dropping all metadata","Download the clean, metadata-free image"]],
  ["image-invert","Invert Colors","Invert the colors of an image to a photo negative.","Image Tools","Contrast",["image","invert","negative","colors","filter"],"HTML5 Canvas",["Drop an image","Every pixel is inverted on the canvas","Download the inverted image"]],
  ["image-sharpen","Sharpen Image","Apply a sharpening filter to bring out image detail.","Image Tools","Focus",["image","sharpen","filter","detail","enhance"],"HTML5 Canvas",["Drop an image","Adjust the sharpen strength","A convolution filter runs on the canvas; download the result"]],
  ["image-grayscale","Grayscale Converter","Convert a color image to black and white.","Image Tools","Droplet",["image","grayscale","black","white","filter"],"HTML5 Canvas",["Drop an image","It's converted to grayscale on the canvas","Download the black-and-white image"]],

  ["json-minifier","JSON Minifier","Strip whitespace to compress JSON to the smallest valid form.","Developer & Data","Minimize2",["json","minify","compress","compact","whitespace"],"Browser core APIs",["Paste JSON","It's validated and minified instantly","Copy or download the compact JSON"]],
  ["json-csv","JSON to CSV","Convert JSON arrays to CSV and back, in both directions.","Developer & Data","Table",["json","csv","convert","table","data"],"papaparse",["Paste JSON (or CSV)","Pick the conversion direction","Copy or download the converted data"]],
  ["base64","Base64 Encode / Decode","Encode text to Base64 or decode it back.","Developer & Data","Binary",["base64","encode","decode","text"],"Browser core APIs",["Paste text or Base64","Toggle encode or decode","Copy the result"]],
  ["url-encode","URL Encoder / Decoder","Percent-encode text for URLs or decode it back.","Developer & Data","Link",["url","encode","decode","percent","uri"],"Browser core APIs",["Paste a string or an encoded URL","Toggle encode or decode","Copy the result"]],
  ["html-encode","HTML Entity Encoder","Encode text to HTML entities or decode them back.","Developer & Data","CodeXml",["html","entities","encode","decode","escape"],"Browser core APIs",["Paste text or HTML entities","Toggle encode or decode","Copy the safe output"]],
  ["markdown-preview","Markdown Preview","Write Markdown and see the rendered HTML live.","Developer & Data","FileText",["markdown","preview","render","html","md"],"Browser core APIs",["Type or paste Markdown on the left","See the rendered result live on the right","Copy the generated HTML"]],
  ["jwt-debugger","JWT Debugger","Decode a JSON Web Token and inspect its header and payload.","Developer & Data","KeyRound",["jwt","token","decode","debug","auth"],"Browser core APIs",["Paste a JWT","Its header and payload are decoded and shown","Inspect claims like exp and iat (decoded locally, never sent)"]],
  ["xml-to-json","XML to JSON","Convert XML into clean, readable JSON.","Developer & Data","FileCode2",["xml","json","convert","parse","data"],"Browser core APIs",["Paste XML","It's parsed with the browser's DOM parser","Copy the resulting JSON"]],
  ["sql-formatter","SQL Formatter","Beautify and indent messy SQL into a readable query.","Developer & Data","Database",["sql","format","beautify","pretty","query"],"sql-formatter",["Paste a SQL query","Pick a dialect and indentation","Copy the formatted SQL"]],
  ["unix-timestamp","Unix Timestamp Converter","Convert between Unix timestamps and human-readable dates.","Developer & Data","Clock",["unix","timestamp","epoch","date","time"],"Browser core APIs",["Enter a Unix timestamp or a date","See it converted both ways","Copy the value you need"]],

  ["case-converter","Case Converter","Convert text between UPPER, lower, Title, camelCase, snake_case and more.","Text Tools","CaseSensitive",["case","uppercase","lowercase","title","camel"],"Browser core APIs",["Paste your text","Choose a case style","Copy the converted text"]],
  ["word-counter","Word & Character Counter","Count words, characters, sentences and reading time as you type.","Text Tools","WholeWord",["word","count","character","text","length"],"Browser core APIs",["Paste or type your text","See live word, character and sentence counts","Includes an estimated reading time"]],
  ["diff-checker","Diff Checker","Compare two blocks of text and highlight what changed.","Text Tools","GitCompare",["diff","compare","text","changes","difference"],"diff",["Paste the original text and the changed text","Additions and deletions are highlighted line by line","Review the differences side by side"]],
  ["lorem-ipsum","Lorem Ipsum Generator","Generate placeholder paragraphs, sentences or words.","Text Tools","Pilcrow",["lorem","ipsum","placeholder","dummy","text"],"Browser core APIs",["Choose paragraphs, sentences or words","Set how many you need","Copy the generated placeholder text"]],
  ["slug-generator","Slug Generator","Turn any title into a clean, URL-friendly slug.","Text Tools","Link2",["slug","url","seo","permalink","friendly"],"Browser core APIs",["Paste a title or phrase","It's lowercased and hyphenated into a slug","Copy the URL-safe slug"]],
  ["find-replace","Find & Replace","Find and replace text, with optional regex and case sensitivity.","Text Tools","Replace",["find","replace","text","regex","substitute"],"Browser core APIs",["Paste your text","Enter what to find and what to replace it with","Toggle regex/case options; copy the result"]],
  ["sha256-hash","SHA-256 Hash","Generate a SHA-256 hash of any text.","Text Tools","Hash",["sha256","hash","checksum","crypto","digest"],"Web Crypto API",["Paste your text","The browser's Web Crypto computes the SHA-256 digest","Copy the hex hash"]],
  ["md5-hash","MD5 Hash","Generate an MD5 hash of any text.","Text Tools","Fingerprint",["md5","hash","checksum","digest"],"spark-md5",["Paste your text","An MD5 digest is computed in your browser","Copy the hex hash"]],

  ["password-generator","Password Generator","Generate strong, random passwords with custom rules.","Generators","Key",["password","generate","random","secure","strong"],"Web Crypto API",["Choose length and character sets","A cryptographically-random password is generated","Copy it (generated locally, never sent anywhere)"]],
  ["uuid-generator","UUID Generator","Generate random UUIDs (v4) individually or in bulk.","Generators","Dices",["uuid","guid","generate","random","id"],"Web Crypto API",["Pick how many UUIDs you need","crypto.randomUUID generates them","Copy the list"]],
  ["qr-code","QR Code Generator","Turn any text or URL into a downloadable QR code.","Generators","QrCode",["qr","code","generate","url","scan"],"qrcode",["Enter a URL or text","A QR code is generated on a canvas","Download it as PNG or SVG"]],
  ["barcode-generator","Barcode Generator","Generate 1D barcodes (Code128, EAN, UPC and more).","Generators","Barcode",["barcode","generate","code128","ean","upc"],"jsbarcode",["Enter the value and pick a barcode type","The barcode renders instantly","Download it as PNG or SVG"]],
  ["qr-scanner","QR Code Scanner","Read a QR code from an uploaded image.","Generators","ScanLine",["qr","scan","read","decode","image"],"jsQR",["Drop an image containing a QR code","jsQR decodes it in your browser","See and copy the decoded text"]],
];

const entryStr = NEW.map(([slug, name, desc, cat, icon, kw, engine, wf]) => `  {
    slug: "${slug}",
    name: "${name}",
    description: "${desc}",
    category: "${cat}",
    icon: ${icon},
    keywords: [${kw.map((k) => `"${k}"`).join(", ")}],
    status: "soon",
    engine: "${engine}",
    wireframe: [
${wf.map((w) => `      "${w}",`).join("\n")}
    ],
  },`).join("\n");

if (!/\n\];\n\nexport function getTool/.test(s)) { console.error("Could not find TOOLS array close"); process.exit(1); }
s = s.replace(/\n\];\n\nexport function getTool/, `\n${entryStr}\n];\n\nexport function getTool`);

// 4) Add any missing lucide icon imports ------------------------------------
const iconsUsed = [...new Set(NEW.map((t) => t[4]))];
const importBlock = s.match(/import \{([\s\S]*?)\} from "lucide-react";/)[1];
const already = new Set(importBlock.match(/[A-Za-z0-9]+/g));
const toAdd = iconsUsed.filter((i) => !already.has(i)).sort();
if (toAdd.length) {
  s = s.replace(/(import \{\n)/, `$1${toAdd.map((i) => `  ${i},`).join("\n")}\n`);
}

writeFileSync(P, s);
console.log(`Reorganized 60 into ${CATS.length} categories, added ${NEW.length} new tools.`);
console.log(`New icon imports added: ${toAdd.length ? toAdd.join(", ") : "none"}`);

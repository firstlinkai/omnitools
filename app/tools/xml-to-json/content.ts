import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "XML to JSON converts any XML document — configs, RSS feeds, SOAP responses, SVG, or exported data — into clean, indented JSON you can actually read and work with. Attributes are preserved as @-prefixed keys, repeated tags collapse into arrays, and numbers and booleans are coerced to real JSON types. Paste your XML on the left and the JSON updates live on the right. Everything runs in your browser, so your data is never uploaded.",
  steps: [
    {
      title: "Paste your XML",
      body: "Drop your XML into the Input box, or click Load file to open an .xml, .svg, or .rss document from your device. A sample is loaded to start with.",
    },
    {
      title: "Read the JSON",
      body: "The converted JSON appears instantly on the right, pretty-printed with two-space indentation so nested structures are easy to scan.",
    },
    {
      title: "Understand the mapping",
      body: "Element attributes become keys prefixed with @ (like @id), text that sits beside child elements is stored under #text, and tags that repeat within a parent become a JSON array.",
    },
    {
      title: "Fix any errors",
      body: "If the XML is malformed, a red message explains what went wrong. Check that every tag is closed and correctly nested, then the JSON regenerates automatically.",
    },
    {
      title: "Copy or download",
      body: "Use Copy to grab the JSON, or Download to save it as converted.json ready to drop into your project or API test.",
    },
  ],
  useCases: [
    "Turn an RSS or Atom feed into JSON for a script or app",
    "Convert a legacy XML config into a JSON equivalent",
    "Inspect a SOAP or XML API response in a friendlier format",
    "Extract structured data from an XML export or sitemap",
    "Migrate content from XML-based systems to JSON APIs",
    "Learn how a given XML structure maps onto JSON keys and arrays",
  ],
  faqs: [
    {
      q: "Is XML to JSON free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my XML uploaded anywhere?",
      a: "No. The conversion uses your browser's built-in XML parser and runs entirely on your device, so your data never leaves the browser.",
    },
    {
      q: "How are attributes represented?",
      a: "Each attribute becomes a key prefixed with @ — for example an id attribute appears as \"@id\". This keeps attributes distinct from child elements that happen to share a name.",
    },
    {
      q: "What happens to repeated tags?",
      a: "When a parent contains several children with the same tag name, they are collected into a JSON array in document order. A single occurrence stays as a plain object or value.",
    },
    {
      q: "Why did my XML fail to convert?",
      a: "The most common causes are an unclosed tag, mismatched nesting, or more than one root element. The red error message shows the parser's detail so you can find and fix the spot.",
    },
  ],
};

export default content;

"use client";

import { TextTransformTool } from "@/components/tool/text-transform-tool";

const SAMPLE = `<library>
  <book id="b1" lang="en">
    <title>The Pragmatic Programmer</title>
    <author>Andrew Hunt</author>
    <author>David Thomas</author>
    <year>1999</year>
  </book>
  <book id="b2" lang="en">
    <title>Clean Code</title>
    <author>Robert C. Martin</author>
    <year>2008</year>
  </book>
</library>`;

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

/**
 * Recursively converts a DOM element into a plain JS object.
 * - Attributes become `@name` keys.
 * - Repeated child tags collapse into arrays.
 * - Text-only elements become their (number/boolean-coerced) string value.
 * - `#text` holds text that sits alongside child elements or attributes.
 */
function elementToObject(el: Element): JsonValue {
  const obj: { [key: string]: JsonValue } = {};

  for (const attr of Array.from(el.attributes)) {
    obj[`@${attr.name}`] = coerce(attr.value);
  }

  const childElements = Array.from(el.children);
  const text = directText(el);

  if (childElements.length === 0) {
    // Leaf node: return its text directly if there are no attributes.
    if (Object.keys(obj).length === 0) return coerce(text);
    if (text) obj["#text"] = coerce(text);
    return obj;
  }

  for (const child of childElements) {
    const key = child.tagName;
    const value = elementToObject(child);
    const existing = obj[key];
    if (existing === undefined) {
      obj[key] = value;
    } else if (Array.isArray(existing)) {
      existing.push(value);
    } else {
      obj[key] = [existing, value];
    }
  }

  if (text) obj["#text"] = coerce(text);
  return obj;
}

/** Concatenated text of an element's *direct* (non-element) child nodes, trimmed. */
function directText(el: Element): string {
  let out = "";
  for (const node of Array.from(el.childNodes)) {
    if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.CDATA_SECTION_NODE) {
      out += node.nodeValue ?? "";
    }
  }
  return out.trim();
}

/** Coerce numeric / boolean-looking strings so the JSON is idiomatic. */
function coerce(value: string): JsonValue {
  if (value === "") return "";
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;
  // Only coerce clean integers/decimals, never things like "007" or "1e".
  if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(value)) {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return value;
}

function xmlToJson(xml: string): string {
  const trimmed = xml.trim();
  if (!trimmed) return "";

  const doc = new DOMParser().parseFromString(trimmed, "application/xml");

  // Browsers report syntax errors as a <parsererror> element in the tree.
  const parserError = doc.querySelector("parsererror");
  if (parserError) {
    const detail = parserError.textContent?.replace(/\s+/g, " ").trim();
    throw new Error(
      detail ? `Invalid XML: ${detail}` : "Invalid XML. Check that every tag is properly closed and nested.",
    );
  }

  const root = doc.documentElement;
  if (!root) throw new Error("No XML root element found.");

  return JSON.stringify({ [root.tagName]: elementToObject(root) }, null, 2);
}

export function XmlToJsonClient() {
  return (
    <TextTransformTool
      transform={xmlToJson}
      inputLabel="XML"
      outputLabel="JSON"
      inputPlaceholder="Paste XML here…"
      emptyOutput="Your JSON will appear here."
      initialInput={SAMPLE}
      download={{ filename: "converted.json", mime: "application/json" }}
      acceptFile=".xml,.txt,.svg,.rss"
    />
  );
}

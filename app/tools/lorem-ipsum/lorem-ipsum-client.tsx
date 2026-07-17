"use client";

import { useMemo, useState } from "react";
import { Download, RefreshCw } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { downloadText } from "@/lib/download";

type Unit = "paragraphs" | "sentences" | "words";

const WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "eu", "fugiat", "nulla", "pariatur", "excepteur",
  "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui",
  "officia", "deserunt", "mollit", "anim", "id", "est", "laborum", "at", "vero",
  "eos", "accusamus", "accusantium", "doloremque", "laudantium", "totam", "rem",
  "aperiam", "eaque", "ipsa", "quae", "ab", "illo", "inventore", "veritatis",
  "quasi", "architecto", "beatae", "vitae", "dicta", "explicabo", "aspernatur",
  "aut", "odit", "fugit", "consequuntur", "magni", "dolores", "ratione",
  "sequi", "nesciunt", "neque", "porro", "quisquam", "dolorem", "adipisci",
  "numquam", "eius", "modi", "tempora", "incidunt", "magnam", "quaerat",
];

const CLASSIC_OPENING = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickWord(): string {
  return WORDS[randInt(0, WORDS.length - 1)];
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Build a sentence of 6-14 words, optionally with a comma clause. */
function makeSentence(): string {
  const count = randInt(6, 14);
  const words: string[] = [];
  for (let i = 0; i < count; i++) words.push(pickWord());
  // Insert a comma somewhere in the middle for natural rhythm.
  if (count > 7 && Math.random() < 0.6) {
    const at = randInt(2, count - 3);
    words[at] = words[at] + ",";
  }
  return capitalize(words.join(" ")) + ".";
}

function makeParagraph(): string {
  const count = randInt(3, 6);
  const sentences: string[] = [];
  for (let i = 0; i < count; i++) sentences.push(makeSentence());
  return sentences.join(" ");
}

/** Trim/replace the first sentence so it starts with the classic opening. */
function withClassicStart(firstSentence: string): string {
  return CLASSIC_OPENING + ", " + firstSentence.charAt(0).toLowerCase() + firstSentence.slice(1);
}

export function LoremIpsumClient() {
  const [amount, setAmount] = useState(3);
  const [unit, setUnit] = useState<Unit>("paragraphs");
  const [classicStart, setClassicStart] = useState(true);
  const [htmlWrap, setHtmlWrap] = useState(false);
  const [nonce, setNonce] = useState(0);

  const count = Math.max(1, Math.min(200, Math.floor(amount) || 1));

  const output = useMemo(() => {
    // nonce retriggers a fresh generation when Regenerate is pressed.
    void nonce;

    if (unit === "words") {
      let words: string[] = [];
      if (classicStart) {
        const opener = CLASSIC_OPENING.toLowerCase().split(" ");
        words = opener.slice(0, count);
        while (words.length < count) words.push(pickWord());
      } else {
        for (let i = 0; i < count; i++) words.push(pickWord());
      }
      const text = capitalize(words.join(" ")) + ".";
      return htmlWrap ? `<p>${text}</p>` : text;
    }

    if (unit === "sentences") {
      const sentences: string[] = [];
      for (let i = 0; i < count; i++) sentences.push(makeSentence());
      if (classicStart) sentences[0] = withClassicStart(sentences[0]);
      const text = sentences.join(" ");
      return htmlWrap ? `<p>${text}</p>` : text;
    }

    // paragraphs
    const paragraphs: string[] = [];
    for (let i = 0; i < count; i++) paragraphs.push(makeParagraph());
    if (classicStart) paragraphs[0] = withClassicStart(paragraphs[0]);
    if (htmlWrap) return paragraphs.map((p) => `<p>${p}</p>`).join("\n");
    return paragraphs.join("\n\n");
  }, [count, unit, classicStart, htmlWrap, nonce]);

  const checkbox = (label: string, checked: boolean, onChange: (v: boolean) => void) => (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
      <input
        type="checkbox"
        className="h-4 w-4 accent-accent"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        <div className="flex flex-col gap-1">
          <Label htmlFor="li-amount">Amount</Label>
          <Input
            id="li-amount"
            type="number"
            min={1}
            max={200}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-24"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="li-unit">Unit</Label>
          <Select
            id="li-unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
            className="w-40"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </Select>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-1.5">
          {checkbox("Start with “Lorem ipsum dolor sit amet…”", classicStart, setClassicStart)}
          {checkbox("Wrap in <p> tags", htmlWrap, setHtmlWrap)}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto"
          onClick={() => setNonce((n) => n + 1)}
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Regenerate
        </Button>
      </div>

      <Panel
        title="Generated text"
        actions={
          <>
            <CopyButton text={output} disabled={!output} />
            <Button
              variant="secondary"
              size="sm"
              disabled={!output}
              onClick={() => downloadText(output, htmlWrap ? "lorem-ipsum.html" : "lorem-ipsum.txt")}
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
          </>
        }
        bodyClassName="p-0"
      >
        <textarea
          value={output}
          readOnly
          spellCheck={false}
          aria-label="Generated lorem ipsum text"
          className="min-h-[22rem] w-full resize-y bg-transparent p-3 text-sm leading-relaxed text-foreground outline-none"
        />
      </Panel>

      <p className="text-xs text-muted-foreground">
        {count} {unit} · {output.length.toLocaleString()} characters. Generated entirely in your browser.
      </p>
    </div>
  );
}

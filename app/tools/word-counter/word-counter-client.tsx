"use client";

import { useMemo, useState } from "react";
import { FileText } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const SAMPLE = `Writing well is rewriting. The first draft is only you telling yourself the story; every pass after that is for the reader. Cut the words that do no work, keep the ones that carry weight, and read it aloud to hear where it stumbles.

Good tools get out of your way. This counter updates as you type — words, characters, sentences, and how long the piece takes to read or say — so you can shape a paragraph to fit a tweet, an abstract, or a two-minute talk.`;

const READ_WPM = 200;
const SPEAK_WPM = 130;

function formatTime(minutes: number): string {
  if (minutes <= 0) return "0s";
  const totalSeconds = Math.round(minutes * 60);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  if (m === 0) return `${s}s`;
  if (s === 0) return `${m}m`;
  return `${m}m ${s}s`;
}

interface Stats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  lines: number;
  readingTime: number;
  speakingTime: number;
  topWords: { word: string; count: number }[];
}

function analyze(text: string): Stats {
  const wordList = text.trim() ? text.trim().split(/\s+/) : [];
  const words = wordList.length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = (text.match(/[^.!?…]+[.!?…]+(\s|$)/g) || []).length
    || (text.trim() ? 1 : 0);
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
  const lines = text ? text.split(/\r?\n/).length : 0;

  const freq = new Map<string, number>();
  for (const raw of wordList) {
    const w = raw.toLowerCase().replace(/[^\p{L}\p{N}'-]/gu, "");
    if (!w) continue;
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }
  const topWords = [...freq.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8)
    .map(([word, count]) => ({ word, count }));

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    lines,
    readingTime: words / READ_WPM,
    speakingTime: words / SPEAK_WPM,
    topWords,
  };
}

export function WordCounterClient() {
  const [input, setInput] = useState("");
  const stats = useMemo(() => analyze(input), [input]);

  const primary: { label: string; value: string }[] = [
    { label: "Words", value: stats.words.toLocaleString() },
    { label: "Characters", value: stats.characters.toLocaleString() },
    { label: "Characters (no spaces)", value: stats.charactersNoSpaces.toLocaleString() },
    { label: "Sentences", value: stats.sentences.toLocaleString() },
    { label: "Paragraphs", value: stats.paragraphs.toLocaleString() },
    { label: "Lines", value: stats.lines.toLocaleString() },
    { label: "Reading time", value: formatTime(stats.readingTime) },
    { label: "Speaking time", value: formatTime(stats.speakingTime) },
  ];

  const maxCount = stats.topWords[0]?.count ?? 0;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={() => setInput(SAMPLE)}>
          <FileText className="h-3.5 w-3.5" />
          Load sample
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Your text" bodyClassName="p-0">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            placeholder="Start typing or paste your text — the stats update live as you go."
            className="min-h-[24rem] resize-y border-0 bg-transparent text-sm leading-relaxed focus-visible:ring-0"
            aria-label="Text to count"
          />
        </Panel>

        <div className="space-y-4">
          <Panel title="Statistics" bodyClassName="p-3">
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {primary.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-muted/40 px-3 py-2.5"
                >
                  <dt className="text-[11px] font-medium text-muted-foreground">{s.label}</dt>
                  <dd className="mt-0.5 text-xl font-semibold tabular-nums text-foreground">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[11px] text-muted-foreground">
              Reading time assumes ~{READ_WPM} words per minute; speaking time ~{SPEAK_WPM} wpm.
            </p>
          </Panel>

          <Panel title="Top words">
            {stats.topWords.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                The most frequent words appear here once you add some text.
              </p>
            ) : (
              <ul className="space-y-1.5">
                {stats.topWords.map(({ word, count }) => (
                  <li key={word} className="flex items-center gap-2 text-sm">
                    <span className="w-28 shrink-0 truncate font-mono text-xs text-foreground">
                      {word}
                    </span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <span
                        className="block h-full rounded-full bg-accent"
                        style={{ width: `${maxCount ? (count / maxCount) * 100 : 0}%` }}
                      />
                    </span>
                    <span className="w-8 shrink-0 text-right tabular-nums text-muted-foreground">
                      {count}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Counts update instantly and entirely in your browser — nothing is uploaded.
      </p>
    </div>
  );
}

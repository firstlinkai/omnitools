"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { FileText } from "lucide-react";
import type { Change } from "diff";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Mode = "line" | "word";

const SAMPLE_ORIGINAL = `The quick brown fox jumps over the lazy dog.
Diffing helps you review changes.
This line stays the same.
Remove this line entirely.`;

const SAMPLE_CHANGED = `The quick brown fox leaps over the lazy dog.
Diffing helps you review edits quickly.
This line stays the same.`;

function countLines(value: string): number {
  const lines = value.split("\n");
  if (lines[lines.length - 1] === "") lines.pop();
  return lines.length;
}

function countWords(value: string): number {
  const trimmed = value.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

export function DiffCheckerClient() {
  const [original, setOriginal] = useState("");
  const [changed, setChanged] = useState("");
  const [mode, setMode] = useState<Mode>("line");
  const [changes, setChanges] = useState<Change[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!original && !changed) {
      setChanges(null);
      return;
    }
    import("diff").then(({ diffLines, diffWords }) => {
      if (cancelled) return;
      const result =
        mode === "line"
          ? diffLines(original, changed)
          : diffWords(original, changed);
      setChanges(result);
    });
    return () => {
      cancelled = true;
    };
  }, [original, changed, mode]);

  const summary = useMemo(() => {
    if (!changes) return { added: 0, removed: 0 };
    let added = 0;
    let removed = 0;
    for (const c of changes) {
      const n = mode === "line" ? countLines(c.value) : countWords(c.value);
      if (c.added) added += n;
      else if (c.removed) removed += n;
    }
    return { added, removed };
  }, [changes, mode]);

  const rendered = useMemo(() => {
    if (!changes) return null;

    if (mode === "word") {
      return (
        <p className="whitespace-pre-wrap break-words p-3 font-mono text-sm leading-relaxed">
          {changes.map((c, i) => {
            if (c.added)
              return (
                <span key={i} className="rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  {c.value}
                </span>
              );
            if (c.removed)
              return (
                <span
                  key={i}
                  className="rounded bg-red-500/20 text-red-700 line-through dark:text-red-300"
                >
                  {c.value}
                </span>
              );
            return <Fragment key={i}>{c.value}</Fragment>;
          })}
        </p>
      );
    }

    // line mode — one row per line with a +/-/space gutter
    const rows: React.ReactNode[] = [];
    changes.forEach((c, ci) => {
      const lines = c.value.split("\n");
      if (lines[lines.length - 1] === "") lines.pop();
      lines.forEach((line, li) => {
        const sign = c.added ? "+" : c.removed ? "-" : " ";
        const rowClass = c.added
          ? "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300"
          : c.removed
            ? "bg-red-500/15 text-red-800 dark:text-red-300"
            : "text-foreground";
        rows.push(
          <div key={`${ci}-${li}`} className={`flex ${rowClass}`}>
            <span className="w-6 shrink-0 select-none px-1 text-center opacity-60">{sign}</span>
            <span className="whitespace-pre-wrap break-words">{line || " "}</span>
          </div>,
        );
      });
    });
    return <div className="p-3 font-mono text-sm leading-relaxed">{rows}</div>;
  }, [changes, mode]);

  const unchanged = changes !== null && summary.added === 0 && summary.removed === 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
        <div className="flex flex-col gap-1">
          <Label htmlFor="diff-mode">Compare by</Label>
          <Select
            id="diff-mode"
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
            className="w-44"
          >
            <option value="line">Line by line</option>
            <option value="word">Word by word</option>
          </Select>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto"
          onClick={() => {
            setOriginal(SAMPLE_ORIGINAL);
            setChanged(SAMPLE_CHANGED);
          }}
        >
          <FileText className="h-3.5 w-3.5" />
          Load sample
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Original">
          <Textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            spellCheck={false}
            placeholder="Paste the original text here…"
            className="min-h-[16rem] resize-y font-mono text-xs leading-relaxed"
            aria-label="Original text"
          />
        </Panel>
        <Panel title="Changed">
          <Textarea
            value={changed}
            onChange={(e) => setChanged(e.target.value)}
            spellCheck={false}
            placeholder="Paste the changed text here…"
            className="min-h-[16rem] resize-y font-mono text-xs leading-relaxed"
            aria-label="Changed text"
          />
        </Panel>
      </div>

      <Panel
        title="Differences"
        actions={
          changes && (
            <div className="flex items-center gap-3 text-xs font-medium">
              <span className="text-emerald-600 dark:text-emerald-400">
                +{summary.added} {mode === "line" ? "lines" : "words"}
              </span>
              <span className="text-red-600 dark:text-red-400">
                -{summary.removed} {mode === "line" ? "lines" : "words"}
              </span>
            </div>
          )
        }
        bodyClassName="p-0"
      >
        {!changes ? (
          <p className="p-3 text-sm text-muted-foreground">
            Paste text into both boxes above. Additions appear in green and deletions in red.
            Switch between line-by-line and word-by-word comparison with the selector.
          </p>
        ) : unchanged ? (
          <p className="p-3 text-sm text-muted-foreground">
            The two texts are identical — no differences found.
          </p>
        ) : (
          <div className="max-h-[28rem] overflow-auto">{rendered}</div>
        )}
      </Panel>

      <p className="text-xs text-muted-foreground">
        Compared entirely in your browser — your text never leaves your device.
      </p>
    </div>
  );
}

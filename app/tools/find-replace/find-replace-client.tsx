"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { CopyButton } from "@/components/tool/copy-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { downloadText } from "@/lib/download";

interface Options {
  matchCase: boolean;
  wholeWord: boolean;
  regex: boolean;
  replaceAll: boolean;
}

interface ReplaceResult {
  output: string;
  count: number;
  error: string | null;
}

/** Escapes a literal string for safe use inside a RegExp. */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildRegex(find: string, opts: Options): RegExp {
  let source = opts.regex ? find : escapeRegExp(find);
  if (opts.wholeWord) source = `\\b(?:${source})\\b`;
  let flags = "";
  if (opts.replaceAll) flags += "g";
  if (!opts.matchCase) flags += "i";
  return new RegExp(source, flags);
}

function runReplace(
  input: string,
  find: string,
  replace: string,
  opts: Options,
): ReplaceResult {
  if (!input || !find) return { output: input, count: 0, error: null };

  let re: RegExp;
  try {
    re = buildRegex(find, opts);
  } catch (e) {
    return {
      output: "",
      count: 0,
      error:
        e instanceof Error
          ? `Invalid regular expression: ${e.message}`
          : "Invalid regular expression.",
    };
  }

  // Count matches using a globally-flagged copy so the tally is independent of
  // whether we actually replace all or just the first.
  const globalFlags = re.flags.includes("g") ? re.flags : re.flags + "g";
  let count = 0;
  try {
    const matches = input.match(new RegExp(re.source, globalFlags));
    count = matches ? matches.length : 0;
    if (!opts.replaceAll) count = count > 0 ? 1 : 0;
  } catch {
    count = 0;
  }

  // In regex mode the replacement string may reference groups ($1, $&, …).
  // In literal mode we escape "$" so it is inserted verbatim.
  const replacement = opts.regex ? replace : replace.replace(/\$/g, "$$$$");
  const output = input.replace(re, replacement);

  return { output, count, error: null };
}

export function FindReplaceClient() {
  const [input, setInput] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [matchCase, setMatchCase] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [regex, setRegex] = useState(false);
  const [replaceAll, setReplaceAll] = useState(true);

  const result = useMemo(
    () => runReplace(input, find, replace, { matchCase, wholeWord, regex, replaceAll }),
    [input, find, replace, matchCase, wholeWord, regex, replaceAll],
  );

  const checkbox = (
    label: string,
    checked: boolean,
    onChange: (v: boolean) => void,
  ) => (
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
      <Panel title="Options" bodyClassName="p-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="fr-find">Find</Label>
            <Input
              id="fr-find"
              value={find}
              onChange={(e) => setFind(e.target.value)}
              spellCheck={false}
              placeholder={regex ? "regular expression, e.g. \\d+" : "text to find"}
              className="font-mono"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="fr-replace">Replace with</Label>
            <Input
              id="fr-replace"
              value={replace}
              onChange={(e) => setReplace(e.target.value)}
              spellCheck={false}
              placeholder={regex ? "replacement (use $1 for groups)" : "replacement text"}
              className="font-mono"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {checkbox("Match case", matchCase, setMatchCase)}
          {checkbox("Whole word", wholeWord, setWholeWord)}
          {checkbox("Regex mode", regex, setRegex)}
          {checkbox("Replace all", replaceAll, setReplaceAll)}
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Input" bodyClassName="p-0">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            placeholder="Paste the text you want to search and replace in…"
            className="min-h-[20rem] resize-y border-0 bg-transparent font-mono text-sm focus-visible:ring-0"
            aria-label="Input text"
          />
        </Panel>

        <Panel
          title="Result"
          bodyClassName="p-0"
          actions={
            <>
              <CopyButton text={() => result.output} disabled={!result.output || !!result.error} />
              <Button
                variant="secondary"
                size="sm"
                disabled={!result.output || !!result.error}
                onClick={() => downloadText(result.output, "replaced.txt")}
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </Button>
            </>
          }
        >
          {result.error ? (
            <div className="m-3 rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
              {result.error}
            </div>
          ) : (
            <textarea
              value={result.output}
              readOnly
              spellCheck={false}
              placeholder="The replaced text appears here."
              className="min-h-[20rem] w-full resize-y bg-transparent p-3 font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
              aria-label="Result text"
            />
          )}
        </Panel>
      </div>

      <p className="text-xs text-muted-foreground">
        {result.error
          ? "Fix the expression above to see the result."
          : find
            ? `${result.count.toLocaleString()} ${result.count === 1 ? "replacement" : "replacements"} made.`
            : "Enter something to find to start replacing."}{" "}
        Processed entirely in your browser.
      </p>
    </div>
  );
}

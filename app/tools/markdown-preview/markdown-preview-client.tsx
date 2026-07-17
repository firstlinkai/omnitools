"use client";

import { useEffect, useState } from "react";
import { Code2, Download, Eye } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/tool/copy-button";
import { downloadText } from "@/lib/download";

const SAMPLE = `# Markdown Preview

Write **Markdown** on the left and see the rendered result on the right.

## Features

- Live rendering as you type
- GitHub-flavored **bold**, *italic*, and \`inline code\`
- Lists, links, and tables

> Everything runs locally in your browser.

\`\`\`js
function hello(name) {
  return "Hi, " + name;
}
\`\`\`

| Tool | Runs |
| ---- | ---- |
| Markdown Preview | In your browser |

[Learn more about Markdown](https://commonmark.org)
`;

type View = "preview" | "html";

export function MarkdownPreviewClient() {
  const [markdown, setMarkdown] = useState(SAMPLE);
  const [html, setHtml] = useState("");
  const [view, setView] = useState<View>("preview");

  useEffect(() => {
    let cancelled = false;
    if (!markdown.trim()) {
      setHtml("");
      return;
    }
    import("marked")
      .then(({ marked }) =>
        marked.parse(markdown, { gfm: true, breaks: true }),
      )
      .then((result) => {
        if (!cancelled) setHtml(typeof result === "string" ? result : "");
      })
      .catch(() => {
        if (!cancelled) setHtml("");
      });
    return () => {
      cancelled = true;
    };
  }, [markdown]);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Markdown" bodyClassName="p-0">
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            spellCheck={false}
            placeholder="Type or paste Markdown here…"
            className="min-h-[28rem] resize-y rounded-none border-0 font-mono text-sm leading-relaxed focus-visible:ring-0"
            aria-label="Markdown input"
          />
        </Panel>

        <Panel
          title={view === "preview" ? "Preview" : "HTML"}
          actions={
            <>
              <Button
                variant={view === "preview" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("preview")}
              >
                <Eye className="h-3.5 w-3.5" />
                Preview
              </Button>
              <Button
                variant={view === "html" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("html")}
              >
                <Code2 className="h-3.5 w-3.5" />
                HTML
              </Button>
              <CopyButton text={() => html} label="Copy HTML" disabled={!html} />
              <Button
                variant="secondary"
                size="sm"
                disabled={!html}
                onClick={() => downloadText(wrapHtmlDocument(html), "markdown.html", "text/html")}
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </Button>
            </>
          }
          bodyClassName="p-0"
        >
          {view === "preview" ? (
            html ? (
              <div
                className="markdown-preview min-h-[28rem] overflow-auto p-4 text-sm leading-relaxed"
                // Local-only preview: the Markdown is authored by you in this
                // browser tab, so there is no untrusted third-party input.
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <p className="p-4 text-sm text-muted-foreground">
                Start typing Markdown on the left to see the rendered preview here.
              </p>
            )
          ) : (
            <pre className="min-h-[28rem] overflow-auto whitespace-pre-wrap break-words p-4 font-mono text-xs leading-relaxed">
              {html || "The generated HTML will appear here."}
            </pre>
          )}
        </Panel>
      </div>

      <style>{`
        .markdown-preview h1,
        .markdown-preview h2,
        .markdown-preview h3 {
          font-weight: 600;
          line-height: 1.25;
          margin: 1.2em 0 0.5em;
        }
        .markdown-preview h1 {
          font-size: 1.6em;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.3em;
        }
        .markdown-preview h2 {
          font-size: 1.3em;
        }
        .markdown-preview h3 {
          font-size: 1.1em;
        }
        .markdown-preview p {
          margin: 0.6em 0;
        }
        .markdown-preview ul,
        .markdown-preview ol {
          margin: 0.6em 0;
          padding-left: 1.5em;
          list-style: revert;
        }
        .markdown-preview li {
          margin: 0.25em 0;
        }
        .markdown-preview a {
          color: var(--color-accent);
          text-decoration: underline;
        }
        .markdown-preview code {
          font-family: var(--font-mono, monospace);
          font-size: 0.9em;
          background: var(--color-muted);
          padding: 0.15em 0.35em;
          border-radius: 4px;
        }
        .markdown-preview pre {
          background: var(--color-muted);
          padding: 0.9em;
          border-radius: 8px;
          overflow-x: auto;
          margin: 0.8em 0;
        }
        .markdown-preview pre code {
          background: transparent;
          padding: 0;
        }
        .markdown-preview blockquote {
          border-left: 3px solid var(--color-border);
          padding-left: 1em;
          margin: 0.8em 0;
          color: var(--color-muted-foreground);
        }
        .markdown-preview table {
          border-collapse: collapse;
          margin: 0.8em 0;
          width: 100%;
        }
        .markdown-preview th,
        .markdown-preview td {
          border: 1px solid var(--color-border);
          padding: 0.4em 0.7em;
          text-align: left;
        }
        .markdown-preview img {
          max-width: 100%;
          height: auto;
        }
        .markdown-preview hr {
          border: none;
          border-top: 1px solid var(--color-border);
          margin: 1.2em 0;
        }
      `}</style>

      <p className="text-xs text-muted-foreground">
        {markdown.length.toLocaleString()} characters in. Rendered entirely in your browser — nothing
        is uploaded.
      </p>
    </div>
  );
}

/** Wrap rendered fragment HTML in a minimal standalone document for download. */
function wrapHtmlDocument(body: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Markdown Export</title>
</head>
<body>
${body}
</body>
</html>
`;
}

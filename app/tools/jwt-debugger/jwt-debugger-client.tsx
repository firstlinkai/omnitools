"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, KeyRound, ShieldQuestion } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/tool/copy-button";

// A real, harmless example token (HS256, signed with the classic "your-256-bit-secret").
const SAMPLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoxOTAwMDAwMDAwfQ.sVh7Vghpv9aG3Tq9m0m8kZ2m2m4Qd0oQ4iZ3aXn7d1Y";

interface DecodedPart {
  json: string;
  raw: Record<string, unknown>;
}

interface Decoded {
  header: DecodedPart;
  payload: DecodedPart;
  signature: string;
}

/** Decode a base64url string (RFC 4648 §5) into UTF-8 text. */
function base64UrlDecode(input: string): string {
  let b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = b64.length % 4;
  if (pad === 2) b64 += "==";
  else if (pad === 3) b64 += "=";
  else if (pad === 1) throw new Error("Malformed base64url segment.");

  const binary = atob(b64);
  // Interpret the byte string as UTF-8 so non-ASCII claims decode correctly.
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder("utf-8").decode(bytes);
}

function decodeToken(token: string): Decoded {
  const trimmed = token.trim();
  const parts = trimmed.split(".");
  if (parts.length < 2 || parts.length > 3) {
    throw new Error(
      "A JWT has three dot-separated parts (header.payload.signature). This does not look like a valid token.",
    );
  }

  const parsePart = (segment: string, name: string): DecodedPart => {
    let text: string;
    try {
      text = base64UrlDecode(segment);
    } catch {
      throw new Error(`Could not base64url-decode the ${name}.`);
    }
    let raw: Record<string, unknown>;
    try {
      raw = JSON.parse(text) as Record<string, unknown>;
    } catch {
      throw new Error(`The ${name} is not valid JSON after decoding.`);
    }
    return { json: JSON.stringify(raw, null, 2), raw };
  };

  return {
    header: parsePart(parts[0], "header"),
    payload: parsePart(parts[1], "payload"),
    signature: parts[2] ?? "",
  };
}

const TIME_CLAIMS: { key: string; label: string }[] = [
  { key: "iat", label: "Issued at" },
  { key: "nbf", label: "Not before" },
  { key: "exp", label: "Expires" },
];

function formatEpoch(value: unknown): string | null {
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  const date = new Date(value * 1000);
  if (Number.isNaN(date.getTime())) return null;
  return date.toUTCString();
}

export function JwtDebuggerClient() {
  const [token, setToken] = useState(SAMPLE);

  const result = useMemo(() => {
    if (!token.trim()) return null;
    try {
      return { decoded: decodeToken(token), error: null as string | null };
    } catch (e) {
      return { decoded: null, error: e instanceof Error ? e.message : "Could not decode this token." };
    }
  }, [token]);

  const decoded = result?.decoded ?? null;
  const payloadRaw = decoded?.payload.raw;

  const times = useMemo(() => {
    if (!payloadRaw) return [];
    return TIME_CLAIMS.map(({ key, label }) => ({
      key,
      label,
      value: payloadRaw[key],
      human: formatEpoch(payloadRaw[key]),
    })).filter((t) => t.value !== undefined);
  }, [payloadRaw]);

  const expired = useMemo(() => {
    const exp = payloadRaw?.["exp"];
    if (typeof exp !== "number") return null;
    return exp * 1000 < Date.now();
  }, [payloadRaw]);

  return (
    <div className="space-y-4">
      <Panel
        title="Encoded token"
        actions={
          <Button variant="outline" size="sm" onClick={() => setToken(SAMPLE)}>
            <KeyRound className="h-3.5 w-3.5" />
            Load sample
          </Button>
        }
        bodyClassName="p-0"
      >
        <Textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          spellCheck={false}
          placeholder="Paste a JSON Web Token (eyJ…) here…"
          className="min-h-[8rem] resize-y rounded-none border-0 break-all font-mono text-xs leading-relaxed focus-visible:ring-0"
          aria-label="JWT input"
        />
      </Panel>

      {result?.error && (
        <div className="flex items-start gap-2 rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{result.error}</span>
        </div>
      )}

      {decoded && (
        <>
          <div className="grid gap-4 lg:grid-cols-2">
            <Panel
              title="Header"
              actions={<CopyButton text={() => decoded.header.json} />}
            >
              <pre className="max-h-[18rem] overflow-auto whitespace-pre-wrap break-words rounded-md bg-muted p-3 font-mono text-xs leading-relaxed">
                {decoded.header.json}
              </pre>
            </Panel>

            <Panel
              title="Payload"
              actions={<CopyButton text={() => decoded.payload.json} />}
            >
              <pre className="max-h-[18rem] overflow-auto whitespace-pre-wrap break-words rounded-md bg-muted p-3 font-mono text-xs leading-relaxed">
                {decoded.payload.json}
              </pre>
            </Panel>
          </div>

          {times.length > 0 && (
            <Panel title="Timestamps">
              <ul className="space-y-1.5 text-sm">
                {times.map((t) => (
                  <li key={t.key} className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-mono text-xs text-muted-foreground">{t.key}</span>
                    <span className="text-foreground">{t.label}:</span>
                    <span className="font-medium text-foreground">
                      {t.human ?? String(t.value)}
                    </span>
                    {t.key === "exp" && expired !== null && (
                      <span
                        className={
                          expired
                            ? "rounded bg-danger/15 px-1.5 py-0.5 text-xs font-medium text-danger"
                            : "rounded bg-accent/15 px-1.5 py-0.5 text-xs font-medium text-accent"
                        }
                      >
                        {expired ? "Expired" : "Valid"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Panel>
          )}

          <Panel title="Signature">
            <pre className="overflow-auto whitespace-pre-wrap break-all rounded-md bg-muted p-3 font-mono text-xs leading-relaxed">
              {decoded.signature || "(none — token has no signature segment)"}
            </pre>
            <div className="mt-3 flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
              <ShieldQuestion className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>
                The signature is shown as-is but <strong className="text-foreground">not verified</strong>.
                Verifying it requires the issuer&apos;s secret or public key, which is never entered here —
                so this tool only decodes the token, it does not confirm the signature is authentic.
                Never trust a decoded payload without server-side verification.
              </span>
            </div>
          </Panel>
        </>
      )}

      <p className="text-xs text-muted-foreground">
        Decoded entirely in your browser. Your token is never uploaded or logged.
      </p>
    </div>
  );
}

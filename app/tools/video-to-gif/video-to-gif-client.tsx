"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Film, ImageIcon, Loader2, RotateCcw, Wand2 } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { downloadBlob, formatBytes } from "@/lib/download";
import { useFfmpeg } from "../_shared/use-ffmpeg";
import { EngineStatus } from "../_shared/engine-status";

function ext(file: File): string {
  return /\.([a-z0-9]+)$/i.exec(file.name)?.[1]?.toLowerCase() ?? "mp4";
}

function clamp(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export function VideoToGifClient() {
  const { state, loadPercent, runPercent, setRunPercent, ensureLoaded } = useFfmpeg();
  const [file, setFile] = useState<File | null>(null);
  const [start, setStart] = useState(0);
  const [duration, setDuration] = useState(3);
  const [fps, setFps] = useState(12);
  const [width, setWidth] = useState(480);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<{ url: string; size: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultUrlRef = useRef<string | null>(null);

  useEffect(
    () => () => {
      if (resultUrlRef.current) URL.revokeObjectURL(resultUrlRef.current);
    },
    [],
  );

  const pickFile = useCallback(
    (files: File[]) => {
      const vid = files.find(
        (f) => f.type.startsWith("video/") || /\.(mp4|webm|mov|mkv|m4v|avi)$/i.test(f.name),
      );
      if (!vid) {
        setError("That file isn't a video.");
        return;
      }
      setError(null);
      setResult(null);
      setFile(vid);
      void ensureLoaded().catch(() => {});
    },
    [ensureLoaded],
  );

  const reset = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    if (resultUrlRef.current) {
      URL.revokeObjectURL(resultUrlRef.current);
      resultUrlRef.current = null;
    }
  }, []);

  const run = useCallback(async () => {
    if (!file || running) return;
    setRunning(true);
    setRunPercent(0);
    setError(null);
    if (resultUrlRef.current) {
      URL.revokeObjectURL(resultUrlRef.current);
      resultUrlRef.current = null;
    }
    setResult(null);

    const inName = `in.${ext(file)}`;
    const w = Math.round(clamp(width, 64, 1280));
    const f = Math.round(clamp(fps, 5, 24));
    const ss = clamp(start, 0, 100000).toString();
    const t = clamp(duration, 0.1, 60).toString();
    const vf = `fps=${f},scale=${w}:-1:flags=lanczos`;

    let ff: Awaited<ReturnType<typeof ensureLoaded>> | null = null;
    try {
      ff = await ensureLoaded();
      const { fetchFile } = await import("@ffmpeg/util");
      await ff.writeFile(inName, await fetchFile(file));

      // Pass 1 — build an optimal 256-colour palette from the trimmed segment.
      const p1 = await ff.exec([
        "-ss", ss,
        "-t", t,
        "-i", inName,
        "-vf", `${vf},palettegen`,
        "palette.png",
      ]);
      if (p1 !== 0) throw new Error("palettegen failed");

      // Pass 2 — render the GIF using that palette for clean, banding-free colour.
      const p2 = await ff.exec([
        "-ss", ss,
        "-t", t,
        "-i", inName,
        "-i", "palette.png",
        "-filter_complex", `${vf}[x];[x][1:v]paletteuse`,
        "-loop", "0",
        "out.gif",
      ]);
      if (p2 !== 0) throw new Error("paletteuse failed");

      const data = await ff.readFile("out.gif");
      const blob = new Blob([data as BlobPart], { type: "image/gif" });
      if (blob.size === 0) throw new Error("empty");
      const url = URL.createObjectURL(blob);
      resultUrlRef.current = url;
      setResult({ url, size: blob.size });
      setRunPercent(100);
    } catch {
      setError(
        "Could not make the GIF. Check that the start time falls inside the clip and try a shorter duration.",
      );
    } finally {
      if (ff) {
        try { await ff.deleteFile(inName); } catch {}
        try { await ff.deleteFile("palette.png"); } catch {}
        try { await ff.deleteFile("out.gif"); } catch {}
      }
      setRunning(false);
    }
  }, [file, running, ensureLoaded, setRunPercent, width, fps, start, duration]);

  if (!file) {
    return (
      <div className="space-y-3">
        <FileDropzone
          accept="video/*"
          onFiles={pickFile}
          hint="Drop a short video clip (MP4, WebM, MOV). Keep it a few seconds for a small GIF."
        />
        {error && (
          <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Panel
        title={`${file.name} · ${formatBytes(file.size)}`}
        actions={
          <Button variant="ghost" size="sm" onClick={reset}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Clear
          </Button>
        }
        bodyClassName="grid gap-4 p-3 sm:grid-cols-2"
      >
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 sm:col-span-2">
          <Film className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          <span className="truncate text-sm text-foreground">{file.name}</span>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="v2g-start">Start time (seconds)</Label>
          <Input
            id="v2g-start"
            type="number"
            min={0}
            step={0.1}
            value={start}
            onChange={(e) => setStart(clamp(parseFloat(e.target.value), 0, 100000))}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="v2g-dur">Duration (seconds)</Label>
          <Input
            id="v2g-dur"
            type="number"
            min={0.1}
            max={60}
            step={0.1}
            value={duration}
            onChange={(e) => setDuration(clamp(parseFloat(e.target.value), 0.1, 60))}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="v2g-fps">Frame rate</Label>
            <span className="text-xs font-medium text-foreground">{fps} fps</span>
          </div>
          <Slider
            id="v2g-fps"
            min={5}
            max={24}
            step={1}
            value={fps}
            onChange={(e) => setFps(Number(e.target.value))}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="v2g-width">Width</Label>
            <span className="text-xs font-medium text-foreground">{width}px</span>
          </div>
          <Slider
            id="v2g-width"
            min={120}
            max={800}
            step={20}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </div>
      </Panel>

      <EngineStatus state={state} loadPercent={loadPercent} onRetry={() => void ensureLoaded().catch(() => {})} />

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => void run()} disabled={running || state === "error"}>
          {running ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <Wand2 className="h-4 w-4" aria-hidden />
          )}
          Make GIF
        </Button>
        {running && (
          <span className="text-xs text-muted-foreground">
            {state === "ready" ? `Rendering ${runPercent}%` : `Waiting for engine (${loadPercent}%)`}
          </span>
        )}
      </div>

      {error && (
        <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      {result && (
        <Panel title="Result" bodyClassName="flex flex-col gap-3 p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={result.url}
            alt="Generated GIF preview"
            className="mx-auto h-auto max-h-[420px] max-w-full rounded-md border border-border bg-muted"
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => { if (resultUrlRef.current) void fetch(resultUrlRef.current).then((r) => r.blob()).then((b) => downloadBlob(b, "clip.gif")); }}>
              <Download className="h-4 w-4" aria-hidden />
              Download GIF
            </Button>
            <span className="text-xs text-muted-foreground">
              <ImageIcon className="mr-1 inline h-3.5 w-3.5" aria-hidden />
              clip.gif · {formatBytes(result.size)}
            </span>
          </div>
        </Panel>
      )}

      <p className="text-xs text-muted-foreground">
        GIF files grow fast — every extra second, higher frame rate, and larger
        width multiplies the size. Keep clips to a few seconds and trim tightly
        for a shareable file. Everything is processed on your device; the video
        never leaves your browser.
      </p>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Download,
  Layers,
  Loader2,
  Music,
  Pause,
  Play,
  RotateCcw,
  VolumeX,
  X,
} from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { FileDropzone } from "@/components/tool/file-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { downloadBlob } from "@/lib/download";
import {
  audioBufferToWav,
  decodeAudioFile,
  formatDuration,
  getAudioContext,
} from "@/lib/audio";

interface Track {
  id: string;
  name: string;
  buffer: AudioBuffer;
  volume: number; // 0–1.5
  offset: number; // seconds
  muted: boolean;
}

let counter = 0;
const nextId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `t-${++counter}`;

function clamp(n: number, min: number, max: number): number {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, n));
}

export function AudioMixerClient() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [decoding, setDecoding] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);

  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  const stopPreview = useCallback(() => {
    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch {}
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    setPlaying(false);
  }, []);

  useEffect(() => () => stopPreview(), [stopPreview]);

  const addFiles = useCallback(async (files: File[]) => {
    const audio = files.filter(
      (f) => f.type.startsWith("audio/") || /\.(mp3|wav|m4a|aac|ogg|oga|flac|webm)$/i.test(f.name),
    );
    if (audio.length === 0) {
      setError("Those files aren't audio.");
      return;
    }
    setError(null);
    setDecoding(true);
    try {
      const decoded = await Promise.all(
        audio.map(async (file) => {
          const buffer = await decodeAudioFile(file);
          return { id: nextId(), name: file.name, buffer, volume: 1, offset: 0, muted: false } satisfies Track;
        }),
      );
      setTracks((prev) => [...prev, ...decoded]);
    } catch {
      setError("Could not decode one of those files. It may be an unsupported audio format.");
    } finally {
      setDecoding(false);
    }
  }, []);

  const update = useCallback((id: string, patch: Partial<Track>) => {
    setTracks((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }, []);

  const remove = useCallback((id: string) => {
    setTracks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const reset = useCallback(() => {
    stopPreview();
    setTracks([]);
    setError(null);
  }, [stopPreview]);

  // Build a single mixed AudioBuffer from all tracks via an offline graph.
  const renderMix = useCallback(async (): Promise<AudioBuffer> => {
    const sampleRate = tracks.reduce((m, t) => Math.max(m, t.buffer.sampleRate), 8000);
    const channels = Math.min(2, tracks.reduce((m, t) => Math.max(m, t.buffer.numberOfChannels), 1));
    const totalSeconds = tracks.reduce(
      (m, t) => Math.max(m, t.offset + t.buffer.duration),
      0,
    );
    const length = Math.max(1, Math.ceil(totalSeconds * sampleRate));

    const offline = new OfflineAudioContext(channels, length, sampleRate);
    for (const t of tracks) {
      const src = offline.createBufferSource();
      src.buffer = t.buffer;
      const gain = offline.createGain();
      gain.gain.value = t.muted ? 0 : t.volume;
      src.connect(gain).connect(offline.destination);
      src.start(Math.max(0, t.offset));
    }
    return offline.startRendering();
  }, [tracks]);

  const preview = useCallback(async () => {
    if (playing) {
      stopPreview();
      return;
    }
    if (tracks.length === 0) return;
    setRendering(true);
    setError(null);
    try {
      const mix = await renderMix();
      const ctx = getAudioContext();
      if (ctx.state === "suspended") await ctx.resume();
      const src = ctx.createBufferSource();
      src.buffer = mix;
      src.connect(ctx.destination);
      src.onended = () => {
        if (sourceRef.current === src) {
          sourceRef.current = null;
          setPlaying(false);
        }
      };
      sourceRef.current = src;
      src.start();
      setPlaying(true);
    } catch {
      setError("Could not build the mix preview.");
    } finally {
      setRendering(false);
    }
  }, [playing, tracks.length, renderMix, stopPreview]);

  const exportMix = useCallback(async () => {
    if (tracks.length === 0 || rendering) return;
    setRendering(true);
    setError(null);
    try {
      const mix = await renderMix();
      downloadBlob(audioBufferToWav(mix), "mix.wav");
    } catch {
      setError("Could not render the mix. Try removing a track and mixing again.");
    } finally {
      setRendering(false);
    }
  }, [tracks.length, rendering, renderMix]);

  const totalDuration = useMemo(
    () => tracks.reduce((m, t) => Math.max(m, t.offset + t.buffer.duration), 0),
    [tracks],
  );

  if (tracks.length === 0) {
    return (
      <div className="space-y-3">
        <FileDropzone
          accept="audio/*"
          multiple
          onFiles={(f) => void addFiles(f)}
          hint="Drop two or more audio files to layer them into one mix."
        />
        {decoding && (
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Decoding audio…
          </p>
        )}
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
        title={`${tracks.length} track${tracks.length === 1 ? "" : "s"} · ${formatDuration(totalDuration)}`}
        actions={
          <Button variant="ghost" size="sm" onClick={reset}>
            <RotateCcw className="h-3.5 w-3.5" aria-hidden />
            Clear
          </Button>
        }
        bodyClassName="flex flex-col gap-2 p-3"
      >
        <ul className="flex flex-col gap-2">
          {tracks.map((t) => (
            <li
              key={t.id}
              className={cn(
                "rounded-lg border bg-card px-3 py-2.5",
                t.muted ? "border-border opacity-60" : "border-border",
              )}
            >
              <div className="flex items-center gap-2.5">
                <Music className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDuration(t.buffer.duration)} · {t.buffer.numberOfChannels === 1 ? "mono" : "stereo"} · {Math.round(t.buffer.sampleRate / 1000)} kHz
                  </p>
                </div>
                <Button
                  variant={t.muted ? "secondary" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  aria-label={t.muted ? "Unmute track" : "Mute track"}
                  aria-pressed={t.muted}
                  onClick={() => update(t.id, { muted: !t.muted })}
                >
                  <VolumeX className="h-4 w-4" aria-hidden />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-danger"
                  aria-label="Remove track"
                  onClick={() => remove(t.id)}
                >
                  <X className="h-4 w-4" aria-hidden />
                </Button>
              </div>

              <div className="mt-2.5 grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`vol-${t.id}`}>Volume</Label>
                    <span className="text-xs font-medium text-foreground">{Math.round(t.volume * 100)}%</span>
                  </div>
                  <Slider
                    id={`vol-${t.id}`}
                    min={0}
                    max={1.5}
                    step={0.01}
                    value={t.volume}
                    onChange={(e) => update(t.id, { volume: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`off-${t.id}`}>Start offset (seconds)</Label>
                  <Input
                    id={`off-${t.id}`}
                    type="number"
                    min={0}
                    step={0.1}
                    value={t.offset}
                    onChange={(e) => update(t.id, { offset: clamp(parseFloat(e.target.value), 0, 100000) })}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <FileDropzone
          accept="audio/*"
          multiple
          onFiles={(f) => void addFiles(f)}
          className="border-border/70 px-4 py-6"
          hint="Add another track"
        />
        {decoding && (
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
            Decoding audio…
          </p>
        )}
      </Panel>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => void preview()} variant="outline" disabled={rendering}>
          {playing ? (
            <Pause className="h-4 w-4" aria-hidden />
          ) : (
            <Play className="h-4 w-4" aria-hidden />
          )}
          {playing ? "Stop" : "Preview mix"}
        </Button>
        <Button onClick={() => void exportMix()} disabled={rendering}>
          {rendering ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : (
            <Download className="h-4 w-4" aria-hidden />
          )}
          Download mix.wav
        </Button>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Layers className="h-3.5 w-3.5" aria-hidden />
          Mixed length {formatDuration(totalDuration)}
        </span>
      </div>

      {error && (
        <p className="rounded-md border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {error}
        </p>
      )}

      <p className="text-xs text-muted-foreground">
        Tracks play together starting at their offset, with each track&apos;s
        volume applied. Files at different sample rates are resampled to the
        highest rate automatically. Everything mixes on your device — no audio
        is ever uploaded.
      </p>
    </div>
  );
}

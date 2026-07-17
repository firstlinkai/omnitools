"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Minus, Play, Plus, Square, Volume2 } from "lucide-react";
import { Panel } from "@/components/tool/panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const MIN_BPM = 30;
const MAX_BPM = 300;
const LOOKAHEAD_MS = 25; // how often the scheduler wakes up
const SCHEDULE_AHEAD = 0.1; // how far ahead (s) to schedule audio

const BEAT_OPTIONS = [2, 3, 4, 5, 6, 7, 8];

function clampBpm(n: number): number {
  if (!Number.isFinite(n)) return 120;
  return Math.min(MAX_BPM, Math.max(MIN_BPM, Math.round(n)));
}

type WebkitWindow = typeof window & { webkitAudioContext: typeof AudioContext };

export function MetronomeClient() {
  const [bpm, setBpm] = useState(120);
  const [beatsPerBar, setBeatsPerBar] = useState(4);
  const [accent, setAccent] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [playing, setPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(-1);

  // Mutable scheduler state, kept in refs so the timer callback always reads
  // the latest values without re-creating the interval.
  const ctxRef = useRef<AudioContext | null>(null);
  const nextNoteTimeRef = useRef(0);
  const beatInBarRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const queueRef = useRef<{ beat: number; time: number }[]>([]);

  const paramsRef = useRef({ bpm, beatsPerBar, accent, volume });
  useEffect(() => {
    paramsRef.current = { bpm, beatsPerBar, accent, volume };
  }, [bpm, beatsPerBar, accent, volume]);

  const scheduleClick = useCallback((beat: number, time: number) => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const { accent: doAccent, volume: vol } = paramsRef.current;
    const isDownbeat = beat === 0 && doAccent;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = isDownbeat ? 1500 : 1000;
    const peak = Math.max(0.0001, vol) * (isDownbeat ? 1 : 0.7);
    // Short percussive envelope so each tick is crisp, not a sustained tone.
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.001);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
    osc.connect(gain).connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.06);

    queueRef.current.push({ beat, time });
  }, []);

  const scheduler = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    while (nextNoteTimeRef.current < ctx.currentTime + SCHEDULE_AHEAD) {
      scheduleClick(beatInBarRef.current, nextNoteTimeRef.current);
      const { bpm: curBpm, beatsPerBar: curBeats } = paramsRef.current;
      nextNoteTimeRef.current += 60 / curBpm;
      beatInBarRef.current = (beatInBarRef.current + 1) % curBeats;
    }
  }, [scheduleClick]);

  // Drive the visual beat indicator off the audio clock, not setInterval, so
  // the highlight lands exactly when each tick is heard.
  const drawLoop = useCallback(() => {
    const ctx = ctxRef.current;
    if (ctx) {
      const now = ctx.currentTime;
      const q = queueRef.current;
      while (q.length && q[0].time <= now) {
        setCurrentBeat(q[0].beat);
        q.shift();
      }
    }
    rafRef.current = requestAnimationFrame(drawLoop);
  }, []);

  const stop = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    queueRef.current = [];
    setPlaying(false);
    setCurrentBeat(-1);
  }, []);

  const start = useCallback(() => {
    // AudioContext must be created/resumed from a user gesture.
    if (!ctxRef.current) {
      const Ctor = window.AudioContext || (window as WebkitWindow).webkitAudioContext;
      ctxRef.current = new Ctor();
    }
    const ctx = ctxRef.current;
    void ctx.resume();
    beatInBarRef.current = 0;
    queueRef.current = [];
    nextNoteTimeRef.current = ctx.currentTime + 0.05;
    timerRef.current = setInterval(scheduler, LOOKAHEAD_MS);
    rafRef.current = requestAnimationFrame(drawLoop);
    setPlaying(true);
  }, [scheduler, drawLoop]);

  const toggle = useCallback(() => {
    if (playing) stop();
    else start();
  }, [playing, start, stop]);

  useEffect(() => () => stop(), [stop]);

  // ── Tap tempo ────────────────────────────────────────────────────────
  const tapsRef = useRef<number[]>([]);
  const tap = useCallback(() => {
    const now = performance.now();
    const taps = tapsRef.current.filter((t) => now - t < 2000);
    taps.push(now);
    tapsRef.current = taps;
    if (taps.length >= 2) {
      let sum = 0;
      for (let i = 1; i < taps.length; i++) sum += taps[i] - taps[i - 1];
      const avgMs = sum / (taps.length - 1);
      setBpm(clampBpm(60000 / avgMs));
    }
  }, []);

  const nudge = useCallback((delta: number) => setBpm((b) => clampBpm(b + delta)), []);

  return (
    <div className="space-y-4">
      <Panel bodyClassName="flex flex-col items-center gap-5 p-6">
        {/* Beat indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: beatsPerBar }, (_, i) => (
            <span
              key={i}
              aria-hidden
              className={cn(
                "h-4 w-4 rounded-full border transition-colors",
                currentBeat === i
                  ? i === 0 && accent
                    ? "border-accent bg-accent"
                    : "border-foreground bg-foreground"
                  : "border-border bg-muted",
              )}
            />
          ))}
        </div>

        {/* Big BPM readout */}
        <div className="text-center">
          <div className="text-6xl font-bold tabular-nums text-foreground">{bpm}</div>
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">BPM</div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" aria-label="Decrease tempo" onClick={() => nudge(-1)}>
            <Minus className="h-4 w-4" aria-hidden />
          </Button>
          <Button onClick={toggle} size="lg" className="w-32">
            {playing ? <Square className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
            {playing ? "Stop" : "Start"}
          </Button>
          <Button variant="outline" size="icon" aria-label="Increase tempo" onClick={() => nudge(1)}>
            <Plus className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <Button variant="ghost" size="sm" onClick={tap} aria-label="Tap tempo">
          Tap tempo
        </Button>
      </Panel>

      <Panel title="Settings" bodyClassName="grid gap-4 p-4 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="metro-bpm">Tempo</Label>
            <span className="text-xs font-medium text-foreground">{bpm} BPM</span>
          </div>
          <Slider
            id="metro-bpm"
            min={MIN_BPM}
            max={MAX_BPM}
            step={1}
            value={bpm}
            onChange={(e) => setBpm(clampBpm(Number(e.target.value)))}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="metro-exact">Exact BPM</Label>
          <Input
            id="metro-exact"
            type="number"
            min={MIN_BPM}
            max={MAX_BPM}
            value={bpm}
            onChange={(e) => setBpm(clampBpm(Number(e.target.value)))}
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="metro-beats">Beats per bar</Label>
          <Select
            id="metro-beats"
            value={beatsPerBar}
            onChange={(e) => setBeatsPerBar(Number(e.target.value))}
          >
            {BEAT_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n} / 4
              </option>
            ))}
          </Select>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="metro-vol" className="flex items-center gap-1.5">
              <Volume2 className="h-3.5 w-3.5" aria-hidden />
              Volume
            </Label>
            <span className="text-xs font-medium text-foreground">{Math.round(volume * 100)}%</span>
          </div>
          <Slider
            id="metro-vol"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>

        <label className="flex cursor-pointer items-center gap-2.5 self-end rounded-md border border-border bg-card px-3 py-2">
          <input
            type="checkbox"
            checked={accent}
            onChange={(e) => setAccent(e.target.checked)}
            className="h-4 w-4 accent-[var(--accent)]"
          />
          <span className="text-sm text-foreground">Accent the first beat</span>
        </label>
      </Panel>

      <p className="text-xs text-muted-foreground">
        Ticks are scheduled ahead on the Web Audio clock for rock-steady timing
        that stays accurate even when the browser tab is busy. Nothing is
        recorded or uploaded — the metronome runs entirely on your device.
      </p>
    </div>
  );
}

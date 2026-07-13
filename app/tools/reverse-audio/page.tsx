import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ReverseAudioClient } from "./reverse-audio-client";
export const metadata: Metadata = { title: "Reverse Audio", description: "Play any audio file backwards and download the reversed WAV. Runs 100% in your browser — no uploads." };
export default function Page() { return (<ToolPage slug="reverse-audio"><ReverseAudioClient /></ToolPage>); }

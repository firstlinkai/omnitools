import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { TrimAudioClient } from "./trim-audio-client";
import content from "./content";
export const metadata: Metadata = { title: "Trim Audio", description: "Cut an audio clip to a start and end point and download the trimmed WAV. Runs 100% in your browser — no uploads." };
export default function Page() { return (<ToolPage slug="trim-audio" content={content}><TrimAudioClient /></ToolPage>); }

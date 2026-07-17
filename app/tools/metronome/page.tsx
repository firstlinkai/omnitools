import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { MetronomeClient } from "./metronome-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Metronome",
  description: "A precise browser metronome with adjustable tempo and time signature.",
};

export default function Page() {
  return (
    <ToolPage slug="metronome" content={content}>
      <MetronomeClient />
    </ToolPage>
  );
}

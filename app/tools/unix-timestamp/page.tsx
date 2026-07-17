import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { UnixTimestampClient } from "./unix-timestamp-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter",
  description: "Convert between Unix timestamps and human-readable dates.",
};

export default function Page() {
  return (
    <ToolPage slug="unix-timestamp" content={content}>
      <UnixTimestampClient />
    </ToolPage>
  );
}

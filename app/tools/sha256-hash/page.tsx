import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { Sha256HashClient } from "./sha256-hash-client";
import content from "./content";

export const metadata: Metadata = {
  title: "SHA-256 Hash",
  description: "Generate a SHA-256 hash of any text.",
};

export default function Page() {
  return (
    <ToolPage slug="sha256-hash" content={content}>
      <Sha256HashClient />
    </ToolPage>
  );
}

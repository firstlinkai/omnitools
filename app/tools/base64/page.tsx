import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { Base64Client } from "./base64-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Base64 Encode / Decode",
  description: "Encode text to Base64 or decode it back.",
};

export default function Page() {
  return (
    <ToolPage slug="base64" content={content}>
      <Base64Client />
    </ToolPage>
  );
}

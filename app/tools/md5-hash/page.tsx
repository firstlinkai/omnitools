import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { Md5HashClient } from "./md5-hash-client";
import content from "./content";

export const metadata: Metadata = {
  title: "MD5 Hash",
  description: "Generate an MD5 hash of any text.",
};

export default function Page() {
  return (
    <ToolPage slug="md5-hash" content={content}>
      <Md5HashClient />
    </ToolPage>
  );
}

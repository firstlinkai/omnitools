import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { RegexTesterClient } from "./regex-tester-client";
import content from "./content";

export const metadata: Metadata = {
  title: "RegEx Tester",
  description: "Test expressions with live match highlighting and a syntax cheat sheet.",
};

export default function Page() {
  return (
    <ToolPage slug="regex-tester" content={content}>
      <RegexTesterClient />
    </ToolPage>
  );
}

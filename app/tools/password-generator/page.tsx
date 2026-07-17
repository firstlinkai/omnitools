import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { PasswordGeneratorClient } from "./password-generator-client";
import content from "./content";

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generate strong, random passwords with custom rules.",
};

export default function Page() {
  return (
    <ToolPage slug="password-generator" content={content}>
      <PasswordGeneratorClient />
    </ToolPage>
  );
}

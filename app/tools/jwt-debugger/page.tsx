import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { JwtDebuggerClient } from "./jwt-debugger-client";
import content from "./content";

export const metadata: Metadata = {
  title: "JWT Debugger",
  description: "Decode a JSON Web Token and inspect its header and payload.",
};

export default function Page() {
  return (
    <ToolPage slug="jwt-debugger" content={content}>
      <JwtDebuggerClient />
    </ToolPage>
  );
}

import type { Metadata } from "next";
import { ToolPage } from "@/components/tool/tool-page";
import { ExifRemoverClient } from "./exif-remover-client";
import content from "./content";

export const metadata: Metadata = {
  title: "EXIF Remover",
  description:
    "Strip EXIF metadata (location, camera, date) from a photo, right in your browser. No uploads, no sign-up.",
};

export default function Page() {
  return (
    <ToolPage slug="exif-remover" content={content}>
      <ExifRemoverClient />
    </ToolPage>
  );
}

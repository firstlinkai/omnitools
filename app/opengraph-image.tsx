import { ImageResponse } from "next/og";

// Branded social share image, generated at build time. 1200x630 is the
// standard Open Graph / Twitter "summary_large_image" size.
export const alt = "FreeTools — 60 free, private, in-browser tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WRENCH =
  "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          backgroundImage:
            "radial-gradient(1000px 500px at 50% -10%, rgba(234,179,8,0.18), transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 148,
            height: 148,
            borderRadius: 34,
            background: "#eab308",
            marginBottom: 44,
          }}
        >
          <svg
            width="86"
            height="86"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#050505"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={WRENCH} />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 104,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          FreeTools
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 38, color: "#9ca3af", marginTop: 26 }}>
          60 free, private, in-browser tools
        </div>

        {/* Value line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 40,
            padding: "12px 28px",
            borderRadius: 999,
            border: "1px solid rgba(234,179,8,0.4)",
            color: "#eab308",
            fontSize: 27,
            fontWeight: 600,
          }}
        >
          Video · Audio · PDF · Files — nothing ever leaves your device
        </div>
      </div>
    ),
    { ...size },
  );
}

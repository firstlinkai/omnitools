import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "JWT Debugger decodes a JSON Web Token and lays out its header, payload, and signature so you can see exactly what a token contains. It pretty-prints the JSON of each section and translates the iat, nbf, and exp timestamps into human-readable dates, flagging whether the token has expired. Decoding happens entirely in your browser — your token is never uploaded — and the signature is shown but not verified, because that requires a secret or key you should never paste into a website.",
  steps: [
    {
      title: "Paste your token",
      body: "Drop a JWT (it usually starts with eyJ) into the Encoded token box, or click Load sample to try a harmless example token.",
    },
    {
      title: "Read the header",
      body: "The Header panel shows the decoded JSON, including the signing algorithm (alg) and token type (typ), pretty-printed for easy scanning.",
    },
    {
      title: "Inspect the payload",
      body: "The Payload panel shows every claim in the token — subject, custom fields, roles, and standard registered claims.",
    },
    {
      title: "Check the timestamps",
      body: "Any iat, nbf, or exp claims are converted from Unix epoch seconds into readable UTC dates, with a badge showing whether the token is still valid or has expired.",
    },
    {
      title: "Review the signature",
      body: "The raw signature segment is displayed for reference. It is not verified — the tool clearly notes that authenticity checks require the issuer's key and must happen server-side.",
    },
  ],
  useCases: [
    "Inspect the claims inside a token returned by an auth API",
    "Check whether a token has expired and when it was issued",
    "Confirm which algorithm a token was signed with",
    "Debug why a request is rejected by reading the payload roles or scopes",
    "Learn how JWTs are structured into header, payload, and signature",
    "Copy a decoded payload into a bug report or ticket",
  ],
  faqs: [
    {
      q: "Is JWT Debugger free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is my token sent to a server?",
      a: "No. The token is decoded locally in your browser using standard base64url decoding, so it is never uploaded, stored, or logged anywhere.",
    },
    {
      q: "Does it verify the signature?",
      a: "No. Verification requires the issuer's secret (for HMAC) or public key (for RSA/ECDSA), which you should never paste into a website. This tool decodes the token so you can read it, but confirming authenticity must be done server-side.",
    },
    {
      q: "Is it safe to paste a real token here?",
      a: "Decoding is local and nothing is transmitted, but a JWT is a credential. As with any secret, avoid pasting live production tokens into tools you do not control, and remember a decoded payload is not proof the token is genuine.",
    },
    {
      q: "Why does my token fail to decode?",
      a: "A valid JWT has three dot-separated, base64url-encoded parts. If a segment is truncated, re-encoded, or not valid JSON after decoding, the tool shows a message pointing to the part that failed.",
    },
  ],
};

export default content;

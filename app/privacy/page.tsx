import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FreeTools handles your data: your files are processed entirely in your browser and are never uploaded.",
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="14 July 2026"
      intro="FreeTools is built so that your files never leave your device. This policy explains the very little data we do handle, and why."
    >
      <h2>1. Who we are</h2>
      <p>
        FreeTools is operated by <strong>FirstLink AI</strong> (&ldquo;FreeTools&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;), based in the Republic of the Philippines. This policy
        covers the website at{" "}
        <a href="https://www.freetools.click">https://www.freetools.click</a> and all of the tools
        on it.
      </p>
      <p>
        We are the personal information controller for the limited data described below. Our
        processing is governed by the Philippine <strong>Data Privacy Act of 2012 (Republic Act No.
        10173)</strong> and its Implementing Rules and Regulations, overseen by the{" "}
        <strong>National Privacy Commission (NPC)</strong>. Because the site is reachable worldwide,
        section 12 summarises equivalent rights for visitors in the EU/UK and California.
      </p>
      <p>
        Privacy questions or requests: <a href="mailto:privacy@freetools.click">privacy@freetools.click</a>.
      </p>

      <h2>2. Your files never leave your device</h2>
      <p>This is the most important thing on this page, so it goes first.</p>
      <p>
        All 60 tools on FreeTools run <strong>100% inside your own browser</strong>, using
        WebAssembly, HTML5 Canvas, and the Web Audio API. Your videos, audio, PDFs, images,
        documents, and text are opened, processed, and downloaded entirely on your own device.
      </p>
      <ul>
        <li>
          Your files are <strong>never uploaded, transmitted, received, seen, stored, or accessible
          to us</strong>.
        </li>
        <li>
          We do not operate a server that receives files. <strong>There is no upload endpoint.</strong>
        </li>
        <li>
          It follows that we <strong>cannot</strong> access, recover, or delete your files &mdash;
          because we never had them. You keep full control of them at all times.
        </li>
      </ul>
      <p>
        A practical way to check this yourself: open your browser&rsquo;s developer tools, switch to
        the Network tab, and run any tool. You will not see your file being sent anywhere.
      </p>

      <h2>3. Analytics (cookieless)</h2>
      <p>
        We use <strong>Vercel Web Analytics</strong> to understand roughly how many people use the
        site and which tools are useful. It is <strong>cookieless</strong>, does not track you across
        other websites, and does not build advertising profiles.
      </p>
      <p>It records aggregate, non-identifying information such as:</p>
      <ul>
        <li>the page paths visited;</li>
        <li>the referring site, if any;</li>
        <li>an approximate country;</li>
        <li>device and browser type.</li>
      </ul>
      <p>
        It does not store raw IP addresses and does not set cookies. We do{" "}
        <strong>not</strong> use Google Analytics, advertising cookies, ad networks, or cross-site
        trackers.
      </p>

      <h2>4. Cookies and local storage</h2>
      <p>
        <strong>We set no cookies at all.</strong> There is no cookie banner because there is nothing
        to consent to.
      </p>
      <p>
        Some tools do save preferences in your browser&rsquo;s <strong>localStorage</strong>, which
        is not a cookie and never leaves your device &mdash; it is not sent to us with requests:
      </p>
      <ul>
        <li>your light/dark theme preference;</li>
        <li>flashcard decks you create in Flashcard Studio;</li>
        <li>your saved business and invoice details in the Invoice Generator;</li>
        <li>
          an email address, if you type one into a &ldquo;notify me&rdquo; box on a Coming Soon tool
          &mdash; this is stored <strong>only in your own browser</strong> and is not transmitted to
          us or to anyone else.
        </li>
      </ul>
      <p>
        You can erase all of it at any time using your browser&rsquo;s &ldquo;clear site data&rdquo;
        or privacy settings. We have no way to read it and no copy of it.
      </p>

      <h2>5. Hosting and server logs</h2>
      <p>
        The site is hosted on <strong>Vercel</strong> (Vercel Inc., USA), which acts as our
        processor. Like any web host, Vercel automatically records standard technical request logs:
        IP address, user-agent, timestamp, and the URL requested. These exist for security,
        abuse-prevention, and reliability. They are ordinary web-server logs and we do not use them
        to identify individuals or link visits together.
      </p>

      <h2>6. Third-party CDN for video and audio tools</h2>
      <p>
        We want to be precise about this rather than claim a perfect record. When you use a{" "}
        <strong>video or audio tool</strong>, your browser downloads the FFmpeg WebAssembly engine
        (roughly 31 MB) from the public CDN <strong>unpkg.com</strong>.
      </p>
      <p>
        As with any resource a browser loads from another host, that request necessarily reveals your{" "}
        <strong>IP address and user-agent</strong> to unpkg and its CDN provider, and is subject to
        their own practices. To be clear about the direction of travel:{" "}
        <strong>your media file is never sent anywhere</strong> &mdash; only the engine is downloaded
        to you, and the processing then happens locally.
      </p>

      <h2>7. What we do not do</h2>
      <ul>
        <li>No accounts, no sign-up, no passwords.</li>
        <li>No payment processing &mdash; the site is free.</li>
        <li>No advertising and no ad networks.</li>
        <li>No selling, renting, or sharing of personal information.</li>
        <li>No profiling and no automated decision-making.</li>
        <li>No marketing emails &mdash; we have no mailing list.</li>
      </ul>

      <h2>8. International transfers</h2>
      <p>
        Our hosting and CDN providers are located outside the Philippines, primarily in the United
        States. This means the limited technical data described above &mdash; essentially request
        logs and aggregate analytics &mdash; is processed abroad by those providers under their own
        contractual and technical safeguards. No files and no accounts are involved, because neither
        exists.
      </p>

      <h2>9. Why we may process this data</h2>
      <p>
        Under RA 10173, the minimal technical data above is processed because it is necessary for the
        legitimate interests we pursue in operating a secure, reliable website and understanding
        aggregate usage &mdash; interests that do not override your fundamental rights and freedoms,
        given how little data is involved. For readers in the EU/UK, the equivalent legal basis is{" "}
        <strong>legitimate interests</strong> (Article 6(1)(f) GDPR).
      </p>

      <h2>10. Retention</h2>
      <ul>
        <li>
          <strong>Your files:</strong> we hold none, so there is nothing to retain or delete.
        </li>
        <li>
          <strong>Aggregate analytics:</strong> retained by Vercel in line with their retention
          policy for the product.
        </li>
        <li>
          <strong>Server logs:</strong> short-lived, kept only as long as useful for security and
          reliability.
        </li>
        <li>
          <strong>localStorage:</strong> stays on your device until you clear it. Only you can remove
          it.
        </li>
      </ul>

      <h2>11. Children</h2>
      <p>
        FreeTools is a general-audience service and is not directed at children. We do not knowingly
        collect data from children &mdash; in practice we collect no identifying data from anyone.
      </p>

      <h2>12. Your rights</h2>
      <h3>Under the Data Privacy Act of 2012 (Philippines)</h3>
      <p>You have the right to:</p>
      <ul>
        <li>be informed about how your personal data is processed;</li>
        <li>object to processing;</li>
        <li>access your personal data;</li>
        <li>have inaccurate data rectified;</li>
        <li>have data erased or blocked;</li>
        <li>claim damages for unlawful processing;</li>
        <li>data portability;</li>
        <li>
          lodge a complaint with the <strong>National Privacy Commission</strong>.
        </li>
      </ul>

      <h3>If you are in the EU or UK</h3>
      <p>
        Under the GDPR and UK GDPR you have equivalent rights of access, rectification, erasure,
        restriction of processing, objection, and data portability, and you may lodge a complaint
        with your local supervisory authority (in the UK, the Information Commissioner&rsquo;s
        Office).
      </p>

      <h3>If you are in California</h3>
      <p>
        Under the CCPA/CPRA you have the right to know what personal information is collected and the
        right to request its deletion. <strong>We do not sell or share personal information</strong>{" "}
        as those terms are defined by California law, and we never have.
      </p>

      <h3>How to exercise them</h3>
      <p>
        Email <a href="mailto:privacy@freetools.click">privacy@freetools.click</a>. Please note the
        honest reality: because we hold almost no personal data and no user files, most requests will
        be answered by confirming that we hold nothing about you. Where the data you are asking about
        lives in your own browser&rsquo;s localStorage, you can delete it yourself immediately by
        clearing site data &mdash; we have no copy to delete.
      </p>

      <h2>13. Security</h2>
      <p>
        Processing everything locally is itself our primary safeguard: data that is never transmitted
        cannot be intercepted, leaked from a server, or exposed in a breach of ours. The site is
        served over HTTPS, so the pages and tool code you download are delivered over an encrypted
        connection.
      </p>

      <h2>14. Changes to this policy</h2>
      <p>
        If we change how the site handles data, we will update this page and revise the{" "}
        <strong>Last updated</strong> date at the top. Material changes will be reflected in the text
        itself rather than buried &mdash; if we ever start collecting something new, it will be
        written here plainly.
      </p>

      <h2>15. Contact</h2>
      <p>
        FreeTools is operated by <strong>FirstLink AI</strong>. For any privacy question, request, or
        concern, email <a href="mailto:privacy@freetools.click">privacy@freetools.click</a> and we
        will respond.
      </p>
      <p>
        This policy describes our actual practices in plain English. It is not legal advice.
      </p>
    </LegalPage>
  );
}

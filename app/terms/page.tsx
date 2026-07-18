import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { LIVE_TOOL_COUNT } from "@/lib/tools-registry";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply when you use FreeTools — free, in-browser tools provided as-is.",
};

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      lastUpdated="14 July 2026"
      intro="FreeTools is a set of free utilities that run entirely inside your browser. These terms explain what you can expect from us, what we expect from you, and the limits of what free software can promise."
    >
      <p>
        FreeTools (the &ldquo;Service&rdquo;) is operated by FirstLink AI (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, &ldquo;our&rdquo;) at{" "}
        <a href="https://www.freetools.click">https://www.freetools.click</a>. These Terms of
        Use are a legal agreement between you and us.
      </p>

      <h2>1. Acceptance of these terms</h2>
      <p>
        By visiting the site or using any tool on it, you agree to these terms. If you do not
        agree with any part of them, please do not use the Service. That is the whole of the
        arrangement &mdash; there is nothing to sign and nothing to cancel.
      </p>

      <h2>2. The Service</h2>
      <p>
        FreeTools provides {LIVE_TOOL_COUNT} utilities for working with video, audio, PDF and other
        documents, images, and text. Every tool runs on your own device, in your own browser,
        using technologies such as WebAssembly, HTML5 Canvas and the Web Audio API. Your files
        are not uploaded to us.
      </p>
      <ul>
        <li>
          <strong>The Service is entirely free.</strong> There is no account, no sign-up, and
          no payment.
        </li>
        <li>
          We may add, change, or remove tools, features, and pages at any time, without notice.
        </li>
        <li>
          <strong>Availability is not guaranteed.</strong> The site may be unavailable,
          interrupted, or discontinued at any time.
        </li>
      </ul>

      <h2>3. Your files and your content</h2>
      <p>
        <strong>You keep all rights to the files you process.</strong> Because processing happens
        locally on your device, we never receive, store, or transmit your content, and we claim
        no licence or ownership over it whatsoever. Nothing in these terms grants us any right
        to your files, because we never have them in the first place.
      </p>
      <p>
        In return, you are solely responsible for the files you choose to process, for having
        the right to process them, and for keeping your own backups of anything that matters to
        you.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to use FreeTools to:</p>
      <ul>
        <li>break any law that applies to you;</li>
        <li>infringe copyright, trade marks, or any other intellectual property rights;</li>
        <li>process material you have no right to process;</li>
        <li>
          create unlawful, harmful, or deceptive content &mdash; for example forged documents,
          falsified records, or material intended to defraud or impersonate;
        </li>
        <li>
          disrupt, overload, probe, or attack the site or its infrastructure, or reverse-engineer
          it for the purpose of abuse;
        </li>
        <li>
          scrape, mirror, or redistribute the site or its code as your own service or product.
        </li>
      </ul>

      <h2>5. No professional advice, no reliance</h2>
      <p>
        The tools and their outputs are provided for general use only. They are not a substitute
        for professional judgement, nor for dedicated legal, financial, or archival software.
      </p>
      <ul>
        <li>
          The <strong>Invoice Generator does not constitute legal, tax, or accounting advice</strong>.
          It produces a document; whether that document meets the invoicing, tax, or record-keeping
          requirements that apply to you is for you (and your accountant) to determine.
        </li>
        <li>
          Document conversions are <strong>text-fidelity only</strong> and should not be relied on
          where exact reproduction matters.
        </li>
      </ul>
      <p>
        Do not rely on any output of the Service for a purpose where an error would cause you
        loss, without checking it yourself first.
      </p>

      <h2>6. Accuracy and real limitations</h2>
      <p>
        We would rather be specific than vague. These are genuine limits of how the tools work:
      </p>
      <ul>
        <li>
          <strong>Results depend on your device.</strong> Processing runs in your browser, so
          performance and success depend on your browser, hardware, and available memory. Large
          files may be slow, or may fail outright.
        </li>
        <li>
          <strong>Some operations are lossy or approximate by design.</strong> Compression
          reduces quality. <strong>Compress PDF and Unlock PDF rasterise pages</strong>, which
          removes the selectable text layer &mdash; the output looks the same but the text is no
          longer selectable or searchable.
        </li>
        <li>
          <strong>PDF&nbsp;&harr;&nbsp;Office conversions are text-fidelity only.</strong> Fonts,
          images, and exact layout are not reproduced. PDF-to-Excel table detection is heuristic
          and will not be correct for every document.
        </li>
        <li>
          <strong>Merge Videos requires clips with the same codec, resolution, and frame rate.</strong>{" "}
          Mismatched clips will not merge cleanly.
        </li>
        <li>
          Recordings save as <strong>WebM</strong> on most browsers, which is what the browser
          itself supports.
        </li>
      </ul>
      <p>
        <strong>Always keep an original copy of any file before you process it.</strong> We cannot
        recover or restore your files under any circumstances, because we never hold them.
      </p>

      <h2>7. Third-party components and hosting</h2>
      <p>
        FreeTools is built on open-source software, including FFmpeg (via WebAssembly), pdf-lib,
        pdf.js, JSZip, and others. Those components are governed by their own licences, and we
        make no warranty on their behalf. The FFmpeg engine is downloaded to your browser from
        the public CDN <strong>unpkg.com</strong> when you use a tool that needs it. Hosting for
        the site is provided by Vercel. See our <a href="/privacy">Privacy Policy</a> for what
        that means for your data.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The FreeTools name, branding, site design, and code are owned by us or our respective
        licensors. We grant you a personal, non-exclusive, revocable licence to use the site for
        its intended purpose: processing your own files. That licence does not give you the right
        to copy, rebrand, resell, or redistribute the site itself.
      </p>

      <h2>9. Disclaimer of warranties</h2>
      <p>
        <strong>
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITHOUT
          WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
        </strong>{" "}
        To the fullest extent permitted by law, we disclaim all warranties, including implied
        warranties of merchantability, fitness for a particular purpose, and non-infringement,
        and we do not warrant that the Service will be uninterrupted, secure, or error-free, or
        that any output will be accurate, complete, or fit for your purpose. You use FreeTools
        at your own risk.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by the laws of the Republic of the Philippines, we will
        not be liable for any indirect, incidental, special, consequential, or exemplary damages,
        or for any loss of data, files, profits, revenue, goodwill, or business, arising out of
        or connected with your use of (or inability to use) the Service.
      </p>
      <p>
        Because the Service is provided free of charge, our aggregate liability to you for any
        claim relating to the Service is limited to the maximum extent permitted by law.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion of certain warranties or the limitation of
        certain damages, so some of the above may not apply to you. In that case, our liability
        is limited to the smallest amount permitted by the law that applies.
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You agree to indemnify and hold us harmless from any claim, demand, loss, or expense
        (including reasonable legal fees) arising out of your misuse of the Service, your breach
        of these terms, or your violation of any law or third-party right.
      </p>

      <h2>12. Privacy</h2>
      <p>
        How we handle the limited information we do collect is set out in our{" "}
        <a href="/privacy">Privacy Policy</a>, which forms part of these terms.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. When we do, we will change the &ldquo;Last
        updated&rdquo; date at the top of this page. Continuing to use the Service after a change
        means you accept the revised terms.
      </p>

      <h2>14. Termination and suspension</h2>
      <p>
        There is no account to terminate, but we may restrict or block access to the Service
        &mdash; for anyone, at any time, without notice &mdash; where we reasonably believe it is
        being abused, attacked, or used in breach of these terms.
      </p>

      <h2>15. Severability and entire agreement</h2>
      <p>
        If any provision of these terms is found to be unenforceable, that provision will be
        limited or removed to the minimum extent necessary, and the remaining provisions will
        stay in full force. Our failure to enforce a provision is not a waiver of it. These
        terms, together with the Privacy Policy, are the entire agreement between you and us
        regarding the Service, and replace any earlier understanding.
      </p>

      <h2>16. Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of the <strong>Republic of the Philippines</strong>,
        without regard to its conflict-of-law rules. Any dispute arising out of or relating to
        these terms or the Service is subject to the exclusive jurisdiction of the competent
        courts of the Philippines.
      </p>

      <h2>17. Contact</h2>
      <p>
        FreeTools is operated by <strong>FirstLink AI</strong>. Questions about these terms can be
        sent to <a href="mailto:privacy@freetools.click">privacy@freetools.click</a>.
      </p>
    </LegalPage>
  );
}

import { LegalPage } from '@/components/LegalPage';

/**
 * REVIEW BEFORE LAUNCH — placeholders in square brackets must be filled in, and this
 * document should be reviewed by a qualified lawyer before the site goes live.
 *
 * This policy is written to match what the site ACTUALLY does. As of the last-updated
 * date the site collects no personal data at all: no cookies, no analytics, no
 * tracking, and no form — "Email Us" and "Book a Call" are plain mailto: and
 * third-party links, so nothing you send through them passes through this Site.
 * If a form, analytics, advertising, or any cookie is ever added, this document
 * MUST be updated first — an inaccurate policy is a bigger liability than none.
 */
const PrivacyPolicy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How 11startups.tech handles personal data. The Site collects no personal data: no cookies, no analytics, no tracking, and no data-collecting forms."
      canonical="/privacy-policy"
      lastUpdated="August 7, 2026"
    >
      <section>
        <h2>1. Introduction</h2>
        <p>
          This policy explains how personal data is handled on <strong>11startups.tech</strong> (the "Site"). The
          Site is operated as a sole proprietorship based in India. For the purposes of the Digital Personal Data
          Protection Act, 2023 ("DPDP Act"), we are the <strong>Data Fiduciary</strong> and you are the{' '}
          <strong>Data Principal</strong>.
        </p>
      </section>

      <section>
        <h2>2. Summary</h2>
        <p>In plain terms:</p>
        <ul>
          <li>This Site does not collect any personal data from you.</li>
          <li>We do not use cookies.</li>
          <li>We do not run analytics or any tracking or advertising technology.</li>
          <li>We do not build profiles, and we do not use automated decision-making on your data.</li>
          <li>We never sell your personal data — we have none to sell.</li>
          <li>
            "Email Us" and "Book a Call" on this Site are a plain <code>mailto:</code> link and a link to a
            third-party scheduling service. If you use them, your data goes directly to us by email or to our
            scheduling provider — it never passes through this Site or any database we operate.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. What we collect</h2>
        <h3>The Site itself collects nothing</h3>
        <p>
          There is no contact form, no account creation, and no way to submit personal data to this Site. If you
          want to reach us, "Email Us" opens your own email application via a <code>mailto:</code> link — the
          message goes directly from you to our inbox and is never handled, stored, or processed by this Site or by
          us as a website operator.
        </p>
        <p>
          If you book a call through our third-party scheduling provider ("Book a Call"), that booking takes place
          entirely on the provider's own platform and is governed by their privacy policy, not this one. We only
          see the booking details the provider chooses to share with us as the person you're booking with.
        </p>

        <h3>Technical information collected automatically by our infrastructure</h3>
        <p>
          Our hosting provider keeps standard server logs for security, abuse prevention, and operational
          reliability, purely as a byproduct of serving the Site's pages. These logs may include your IP address,
          browser user-agent, the page requested, and a timestamp. We do not use this log data for marketing,
          profiling, or analytics, and we do not link it to any email or booking you may separately send us.
        </p>

        <h3>Browser storage</h3>
        <p>
          If you switch between light and dark mode, your choice is saved in your browser's{' '}
          <code>localStorage</code> so the Site remembers it on your next visit. This is stored on your own device,
          is not a cookie, is never transmitted to us, and contains no personal data. You can clear it at any time
          through your browser settings.
        </p>
      </section>

      <section>
        <h2>4. What we do not collect or use</h2>
        <p>
          For the avoidance of doubt, as at the last-updated date above, the Site does <strong>not</strong> use
          cookies of any kind, analytics tools, advertising or retargeting pixels, session recording, heatmaps,
          social media tracking widgets, or embedded third-party content that tracks you. The Site has no
          mechanism to collect sensitive personal data, financial or payment details, or government identifiers,
          because it has no form or database of any kind.
        </p>
      </section>

      <section>
        <h2>5. Why we use your data and on what basis</h2>
        <p>
          Because the Site collects no personal data, we have no processing to describe here. If you separately
          email us or book a call, any data you share there is used only to respond to you and, where relevant, to
          discuss and provide the services you have asked about — governed by ordinary email and business
          correspondence practice, not by any processing this Site performs.
        </p>
        <p>We do not send marketing or newsletters unless you separately and explicitly ask us to.</p>
      </section>

      <section>
        <h2>6. Who we share it with</h2>
        <p>
          We do not sell, rent, or trade personal data. Since the Site itself collects none, there is nothing for
          us to share on the Site's behalf. Two things worth knowing:
        </p>
        <ul>
          <li>
            <strong>Our hosting provider</strong> serves the website and maintains the server logs described in
            section 3 — it does not receive anything you email us or book with us.
          </li>
          <li>
            If you choose to email or book a call with us, that data reaches our{' '}
            <strong>ordinary email provider</strong> and our <strong>scheduling provider</strong> respectively,
            exactly as it would if you contacted any person or business directly — not as a function of this Site.
          </li>
        </ul>
        <p>
          These providers may store or process data on servers located outside India. We may also disclose data
          where required to do so by law, court order, or a lawful request from a public authority.
        </p>
      </section>

      <section>
        <h2>7. How long we keep it</h2>
        <p>
          The Site itself retains nothing, so there is no Site-level retention period. If you email or book a call
          with us directly, we keep that correspondence only for as long as needed to deal with your enquiry and to
          maintain a reasonable record of it, and no longer than{' '}
          <strong>[RETENTION PERIOD, e.g. 24 months]</strong> from your last contact with us, unless a longer period
          is required by law or to establish or defend a legal claim. You may ask us to erase such data sooner (see
          section 9). Server logs are retained per our hosting provider's standard log-retention period.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          The Site is served over HTTPS. Because it collects and stores no personal data, there is no Site
          database to secure. Any email or booking you send us directly is protected by the ordinary security
          measures of our email and scheduling providers. No method of transmission over the internet or
          electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>9. Your rights</h2>
        <p>Under the DPDP Act, you have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> — obtain confirmation of, and a summary of, the personal data we hold about you
            and how it is processed;
          </li>
          <li>
            <strong>Correction and erasure</strong> — have inaccurate or incomplete data corrected, completed,
            updated, or erased;
          </li>
          <li>
            <strong>Withdraw consent</strong> — withdraw your consent at any time, as easily as it was given.
            Withdrawal does not affect processing carried out before withdrawal;
          </li>
          <li>
            <strong>Grievance redressal</strong> — raise a grievance with us and receive a response (see section
            10);
          </li>
          <li>
            <strong>Nominate</strong> — nominate another individual to exercise your rights in the event of your
            death or incapacity.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email <a href="mailto:privacy@11startups.tech">privacy@11startups.tech</a>
          . We will respond within a reasonable period. We may need to verify your identity before acting on a
          request.
        </p>
        <p>
          If you are not satisfied with our response, you may complain to the Data Protection Board of India.
        </p>
      </section>

      <section>
        <h2>10. Grievance Officer</h2>
        <p>
          In accordance with the DPDP Act, the contact point for privacy grievances is{' '}
          <a href="mailto:privacy@11startups.tech">privacy@11startups.tech</a>.
        </p>
      </section>

      <section>
        <h2>11. Children</h2>
        <p>
          The Site is intended for business users and is not directed at children. We do not knowingly collect
          personal data of anyone under 18. If you believe a child has provided us with personal data, please
          contact us and we will delete it.
        </p>
      </section>

      <section>
        <h2>12. Visitors outside India</h2>
        <p>
          This policy is written to comply with Indian law. If you access the Site from outside India, your data
          will be processed as described here. If you are located in a jurisdiction with additional data protection
          rights, contact us at <a href="mailto:privacy@11startups.tech">privacy@11startups.tech</a> and we will
          deal with your request in good faith.
        </p>
      </section>

      <section>
        <h2>13. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Any change will be reflected in the "Last updated" date
          above. If we ever begin using cookies, analytics, or any tracking technology, we will update this policy
          and implement any consent mechanism required by law before doing so.
        </p>
      </section>

      <section>
        <h2>14. Contact</h2>
        <p>
          For any privacy question, email{' '}
          <a href="mailto:privacy@11startups.tech">privacy@11startups.tech</a>. For general enquiries, email{' '}
          <a href="mailto:hello@11startups.tech">hello@11startups.tech</a>.
        </p>
      </section>
    </LegalPage>
  );
};

export default PrivacyPolicy;

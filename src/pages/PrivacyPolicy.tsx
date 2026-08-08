import { LegalPage } from '@/components/LegalPage';

/**
 * REVIEW BEFORE LAUNCH — placeholders in square brackets must be filled in, and this
 * document should be reviewed by a qualified lawyer before the site goes live.
 *
 * This policy is written to match what the site ACTUALLY does. As of the last-updated
 * date the site sets no cookies, runs no analytics, and embeds no tracking pixels.
 * If analytics, advertising, embeds, or any cookie is ever added, sections 3 and 4
 * MUST be updated first — an inaccurate policy is a bigger liability than none.
 */
const PrivacyPolicy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How 11startups.tech collects, uses, and protects your personal data. We use no cookies, no analytics, and no tracking — only the contact form collects information."
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
          <li>We do not use cookies.</li>
          <li>We do not run analytics or any tracking or advertising technology.</li>
          <li>We do not build profiles, and we do not use automated decision-making on your data.</li>
          <li>We never sell your personal data.</li>
          <li>
            The only personal data we actively collect is what you choose to type into a contact or support form.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. What we collect</h2>
        <h3>Information you give us</h3>
        <p>
          When you submit the contact form or the support form, we collect the fields you complete: your{' '}
          <strong>name</strong>, <strong>email address</strong>, <strong>company name</strong> (optional), and your{' '}
          <strong>message</strong>. Providing this data is voluntary; if you do not provide it, we cannot respond to
          your enquiry.
        </p>
        <p>
          If you book a call through our third-party scheduling provider, that booking takes place on the
          provider's own platform and is governed by their privacy policy, not this one.
        </p>

        <h3>Technical information collected automatically by our infrastructure</h3>
        <p>
          Our hosting and database providers keep standard server logs for security, abuse prevention, and
          operational reliability. These logs may include your IP address, browser user-agent, the page requested,
          and a timestamp. We do not use this log data for marketing, profiling, or analytics, and we do not
          combine it with form submissions to identify you.
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
          social media tracking widgets, or embedded third-party content that tracks you. We do not knowingly
          collect any sensitive personal data, financial or payment details, or government identifiers through this
          Site. Please do not submit such information through our forms.
        </p>
      </section>

      <section>
        <h2>5. Why we use your data and on what basis</h2>
        <p>
          We process the data you submit for one purpose only: <strong>to read and respond to your enquiry</strong>{' '}
          and, where relevant, to discuss and provide the services you have asked about. Under the DPDP Act, our
          basis for processing is your <strong>consent</strong>, given when you voluntarily submit a form for that
          stated purpose.
        </p>
        <p>
          We do not use your data to send marketing or newsletters unless you separately and explicitly ask us to.
        </p>
      </section>

      <section>
        <h2>6. Who we share it with</h2>
        <p>
          We do not sell, rent, or trade personal data. We share it only with service providers who process data on
          our behalf and only to the extent needed to operate the Site:
        </p>
        <ul>
          <li>
            <strong>Our hosting provider</strong> — serves the website and maintains server logs.
          </li>
          <li>
            <strong>Our database provider</strong> — stores contact form submissions.
          </li>
          <li>
            <strong>Our email provider</strong> — used to correspond with you after you get in touch.
          </li>
          <li>
            <strong>Our scheduling provider</strong> — if you choose to book a call.
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
          We retain contact form submissions only for as long as needed to deal with your enquiry and to maintain a
          reasonable record of our correspondence, and no longer than{' '}
          <strong>[RETENTION PERIOD, e.g. 24 months]</strong> from your last contact with us, unless a longer period
          is required by law or to establish or defend a legal claim. You may ask us to erase your data sooner (see
          section 9). Server logs are retained per our providers' standard log-retention periods.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          The Site is served over HTTPS, and our contact form table is protected by row-level security so that
          submissions cannot be read by other visitors. We take reasonable technical and organisational measures to
          protect personal data. However, no method of transmission over the internet or electronic storage is
          completely secure, and we cannot guarantee absolute security.
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

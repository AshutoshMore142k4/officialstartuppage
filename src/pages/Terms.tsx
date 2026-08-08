import { LegalPage } from '@/components/LegalPage';

/**
 * REVIEW BEFORE LAUNCH — placeholders in square brackets must be filled in, and this
 * document should be reviewed by a qualified lawyer before the site goes live.
 * Drafted for a sole proprietorship operating from India. It deliberately does NOT
 * describe a company, because none exists.
 */
const Terms = () => {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms governing your use of the 11startups.tech website, including acceptable use, intellectual property, disclaimers, and limitation of liability."
      canonical="/terms"
      lastUpdated="August 7, 2026"
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          This website, <strong>11startups.tech</strong> (the "Site"), is operated as a sole proprietorship based
          in India. In these Terms, "we", "us" and "our" refer to that sole proprietor.
        </p>
        <p>
          11startups.tech is a trading name, not a registered company. Nothing on this Site should be read as
          implying that a body corporate, partnership, or limited liability entity exists.
        </p>
      </section>

      <section>
        <h2>2. Acceptance of these Terms</h2>
        <p>
          By accessing or using the Site you agree to be bound by these Terms. If you do not agree, please do not
          use the Site. We may update these Terms from time to time; the "Last updated" date above will change and
          continued use of the Site after that date constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>3. These Terms do not govern our consulting work</h2>
        <p>
          These Terms apply to your use of this website only. Any consulting, development, advisory or other
          professional services we provide are governed exclusively by a separate written agreement (such as a
          statement of work, proposal, or master services agreement) signed by both parties. If there is any
          conflict between these Terms and such a signed agreement, the signed agreement prevails in respect of
          those services.
        </p>
        <p>
          No content on this Site — including service descriptions, pricing, or timelines — constitutes a binding
          offer to provide services, and no contract for services is formed until a separate written agreement is
          executed.
        </p>
      </section>

      <section>
        <h2>4. Eligibility</h2>
        <p>
          You must be at least 18 years old and legally capable of entering into a contract to use this Site. The
          Site is intended for business use and is not directed at children.
        </p>
      </section>

      <section>
        <h2>5. Pricing and information on the Site</h2>
        <p>
          Prices, plan inclusions, timelines, and other commercial information shown on the Site are indicative
          only, are subject to change without notice, and constitute an invitation to discuss rather than a binding
          offer. Amounts shown in Indian Rupees are stated inclusive of applicable GST where indicated; amounts
          shown in other currencies are exclusive of any taxes, duties, or transfer charges that may apply in your
          jurisdiction. Final pricing for any engagement is fixed only in a signed written agreement.
        </p>
        <p>
          Costs of third-party artificial intelligence services — including model API tokens, inference, and
          compute — are billed directly to your own provider accounts and are not resold or marked up by us.
        </p>
      </section>

      <section>
        <h2>6. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site for any unlawful purpose or in breach of any applicable law or regulation;</li>
          <li>Attempt to gain unauthorised access to the Site, its servers, or any connected systems;</li>
          <li>
            Introduce malware, or interfere with or disrupt the integrity, security, or performance of the Site;
          </li>
          <li>
            Use automated systems to scrape, harvest, or extract data from the Site in a manner that imposes an
            unreasonable load on our infrastructure;
          </li>
          <li>Submit false, misleading, defamatory, or unlawful content through any form on the Site;</li>
          <li>Impersonate any person or misrepresent your affiliation with any person or organisation.</li>
        </ul>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          All content on the Site — including text, design, layout, graphics, logos, the "11startups.tech" name and
          mark, and source code — is owned by us or licensed to us and is protected by applicable intellectual
          property laws. You may view and print pages for your own internal, non-commercial reference.
        </p>
        <p>
          You may not reproduce, republish, distribute, sell, or create derivative works from any part of the Site
          without our prior written permission. Third-party names, logos, and trademarks referenced on the Site
          remain the property of their respective owners.
        </p>
      </section>

      <section>
        <h2>8. Content you send us</h2>
        <p>
          The Site has no form — "Email Us" and "Book a Call" simply open your email application or our third-party
          scheduling provider. If you email us or book a call, you confirm that you have the right to share
          whatever information you send and that it is accurate to the best of your knowledge, and you grant us
          permission to use it solely to respond to your enquiry and to provide the services you request. Please
          do not send confidential, proprietary, or sensitive personal information this way — use a signed
          non-disclosure agreement for that.
        </p>
        <p>
          How we handle personal data is set out in our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>9. Third-party links and services</h2>
        <p>
          The Site links to third-party services (for example, our scheduling provider). We do not control those
          services and are not responsible for their content, availability, terms, or privacy practices. Your use
          of a third-party service is governed by that provider's own terms.
        </p>
      </section>

      <section>
        <h2>10. Disclaimers</h2>
        <p>
          The Site and all content on it are provided on an "as is" and "as available" basis, without warranties of
          any kind, whether express or implied, to the fullest extent permitted by applicable law. We do not
          warrant that the Site will be uninterrupted, error-free, or free of harmful components, or that any
          information on it is complete, current, or accurate.
        </p>
        <p>
          Additional limitations specific to artificial intelligence services are set out in our{' '}
          <a href="/disclaimer">Disclaimer</a>.
        </p>
      </section>

      <section>
        <h2>11. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental,
          special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data,
          business, goodwill, or anticipated savings, arising out of or in connection with your use of the Site,
          whether based in contract, tort (including negligence), statute, or otherwise, and whether or not we were
          advised of the possibility of such loss.
        </p>
        <p>
          To the fullest extent permitted by applicable law, our total aggregate liability arising out of or in
          connection with your use of the Site shall not exceed <strong>INR [AMOUNT, e.g. 10,000]</strong>.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited,
          including liability for fraud, fraudulent misrepresentation, or death or personal injury caused by
          negligence.
        </p>
      </section>

      <section>
        <h2>12. Indemnity</h2>
        <p>
          You agree to indemnify and hold us harmless against any claims, losses, liabilities, and reasonable legal
          costs arising from your breach of these Terms, your misuse of the Site, or your violation of any law or
          third-party right.
        </p>
      </section>

      <section>
        <h2>13. Suspension and termination</h2>
        <p>
          We may suspend, restrict, or withdraw access to the Site (in whole or in part) at any time, without
          notice, including where we reasonably believe these Terms have been breached. Sections which by their
          nature should survive termination — including intellectual property, disclaimers, limitation of
          liability, indemnity, and governing law — will survive.
        </p>
      </section>

      <section>
        <h2>14. Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India. Subject to any
          non-excludable rights you may have under consumer protection law, the courts at{' '}
          <strong>[CITY], [STATE]</strong>, India shall have exclusive jurisdiction over any dispute arising out of
          or in connection with these Terms or the Site.
        </p>
      </section>

      <section>
        <h2>15. Severability and waiver</h2>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full
          force. Our failure to enforce any provision is not a waiver of our right to do so later.
        </p>
      </section>

      <section>
        <h2>16. Contact</h2>
        <p>
          Questions about these Terms can be sent to{' '}
          <a href="mailto:hello@11startups.tech">hello@11startups.tech</a>.
        </p>
      </section>
    </LegalPage>
  );
};

export default Terms;

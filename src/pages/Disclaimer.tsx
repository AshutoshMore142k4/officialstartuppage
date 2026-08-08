import { LegalPage } from '@/components/LegalPage';

/**
 * REVIEW BEFORE LAUNCH — placeholders in square brackets must be filled in, and this
 * document should be reviewed by a qualified lawyer before the site goes live.
 */
const Disclaimer = () => {
  return (
    <LegalPage
      title="Disclaimer"
      description="Important limitations regarding AI outcomes, third-party model behaviour, timelines, and the informational nature of content on 11startups.tech."
      canonical="/disclaimer"
      lastUpdated="August 7, 2026"
    >
      <section>
        <h2>1. General information only</h2>
        <p>
          The content on 11startups.tech (the "Site") is provided for general informational purposes only. It does
          not constitute professional advice and should not be relied upon as the sole basis for any business,
          technical, financial, or legal decision. You should obtain independent professional advice appropriate to
          your circumstances before acting on anything you read here.
        </p>
        <p>
          This Site is operated as a sole proprietorship trading as "11startups.tech". This Disclaimer should be
          read together with our <a href="/terms">Terms of Service</a>.
        </p>
      </section>

      <section>
        <h2>2. No guaranteed AI outcomes</h2>
        <p>
          Artificial intelligence and machine learning systems are probabilistic, not deterministic. Their output
          depends heavily on the quality, volume, and representativeness of the data available, on the specific
          models selected, and on factors outside our control.
        </p>
        <p>
          Accordingly, we do not warrant or guarantee any particular outcome, accuracy level, performance
          benchmark, cost saving, revenue increase, return on investment, or business result from any AI system we
          design, build, advise on, or deploy. Any figures, ranges, or timelines discussed are estimates based on
          experience and stated assumptions — they are not commitments or predictions of your results.
        </p>
      </section>

      <section>
        <h2>3. Third-party AI models and services</h2>
        <p>
          Our work commonly integrates third-party AI models, APIs, and infrastructure operated by others. We do not
          control those services and are not responsible for:
        </p>
        <ul>
          <li>
            <strong>Model output.</strong> Large language models and similar systems can produce output that is
            inaccurate, incomplete, biased, outdated, or fabricated (commonly called "hallucination"), even when
            correctly configured. Output intended for consequential use should always be subject to human review.
          </li>
          <li>
            <strong>Availability and changes.</strong> Third-party providers may change, deprecate, rate-limit, or
            discontinue models and endpoints, alter their pricing, or amend their terms of use at any time, which
            may affect a deployed system.
          </li>
          <li>
            <strong>Their terms.</strong> Your use of any third-party AI service is governed by that provider's own
            terms, acceptable use policy, and privacy policy. You are responsible for reviewing and complying with
            them, including any restrictions on how your data may be used.
          </li>
          <li>
            <strong>Usage costs.</strong> Token, inference, and compute costs are billed directly to your own
            provider accounts. Those costs vary with usage and with provider pricing changes, and we do not control
            or guarantee them.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Your responsibilities</h2>
        <p>
          You remain responsible for how AI systems are used within your organisation, including for:
        </p>
        <ul>
          <li>Validating output before relying on it for any decision affecting people, safety, or finances;</li>
          <li>
            Ensuring you have the necessary rights and lawful basis for any data you provide to us or process
            through an AI system;
          </li>
          <li>
            Compliance with laws and regulations applicable to your sector and jurisdiction, including data
            protection, consumer protection, and any sector-specific rules;
          </li>
          <li>Maintaining appropriate human oversight of automated decision-making.</li>
        </ul>
        <p>
          Where we provide guidance on compliance or AI governance, that guidance is informational and does not
          constitute legal advice or a certification of compliance.
        </p>
      </section>

      <section>
        <h2>5. Not legal, financial, medical, or regulated advice</h2>
        <p>
          Nothing on this Site or provided in the course of our work constitutes legal, financial, investment,
          accounting, tax, or medical advice. We are not licensed to provide advice in any regulated profession. If
          your project touches a regulated domain, you must engage appropriately qualified professionals.
        </p>
      </section>

      <section>
        <h2>6. Timelines and estimates</h2>
        <p>
          Delivery timelines referenced on this Site — including any statement about prototype turnaround — describe
          what we aim for under typical conditions with timely client input and reasonable scope. They are targets,
          not guarantees, and actual timelines depend on scope, data readiness, third-party dependencies, and your
          responsiveness. Binding timelines, if any, are set only in a signed written agreement.
        </p>
      </section>

      <section>
        <h2>7. External links</h2>
        <p>
          The Site may link to external websites and services. Those links are provided for convenience only. We do
          not endorse, monitor, or accept responsibility for the content, accuracy, or practices of any external
          site.
        </p>
      </section>

      <section>
        <h2>8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by applicable law, we accept no liability for any loss or damage arising
          from reliance on the content of this Site or on any AI system output. The limitation of liability set out
          in section 11 of our <a href="/terms">Terms of Service</a> applies to this Disclaimer.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          Questions about this Disclaimer can be sent to{' '}
          <a href="mailto:hello@11startups.tech">hello@11startups.tech</a>.
        </p>
      </section>
    </LegalPage>
  );
};

export default Disclaimer;

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy"
        description="Learn how 11startups.tech collects, uses, and protects your personal information. Read our full privacy policy."
        canonical="/privacy-policy"
      />
      <Navbar />
      <main className="pt-28 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: February 21, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Welcome to 11startups.tech . We are committed to protecting your
              personal information and your right to privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website and
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="font-medium text-foreground">Personal Information:</span> Name,
                email address, phone number, and company details you provide when contacting us or
                signing up for our services.
              </li>
              <li>
                <span className="font-medium text-foreground">Usage Data:</span> Information about
                how you interact with our website, including pages visited, time spent, and
                navigation paths.
              </li>
              <li>
                <span className="font-medium text-foreground">Device Information:</span> Browser
                type, operating system, IP address, and device identifiers.
              </li>
              <li>
                <span className="font-medium text-foreground">Cookies & Tracking:</span> We use
                cookies and similar technologies to enhance your experience and gather analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide, operate, and maintain our services</li>
              <li>To communicate with you, including responding to inquiries and sending updates</li>
              <li>To improve and personalize your experience on our website</li>
              <li>To analyze usage trends and optimize our platform</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share your data with trusted
              third-party service providers who assist us in operating our website and delivering
              our services, subject to confidentiality agreements. We may also disclose information
              when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this policy, unless a longer retention period is required or
              permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the
              privacy practices or content of those sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated revision date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3 text-foreground font-medium">
              Email:{' '}
              <a
                href="mailto:privacy@11startups.tech"
                className="text-primary hover:underline"
              >
                privacy@11startups.tech
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

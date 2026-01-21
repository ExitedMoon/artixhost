import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl pt-32">
        <h1 className="text-4xl font-bold text-foreground mb-4">Artix Host Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: January 21, 2026</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Artix Host ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our game server hosting services (Minecraft, Terraria, Project Zomboid).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using our services, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We collect information that allows us to provide services to you and comply with legal requirements.</p>
              <p>
                <strong className="text-foreground">Personal Identification Information:</strong> Name, email address, physical address, and phone number (collected during registration/checkout).
              </p>
              <p>
                <strong className="text-foreground">Payment Information:</strong> We do not store full credit card numbers. Payment transactions are processed via third-party gateways, which provide us with a transaction ID to confirm payment.
              </p>
              <p>
                <strong className="text-foreground">Technical Data:</strong> IP address, browser type, login timestamps, and operating system.
              </p>
              <p>
                <strong className="text-foreground">Service Data:</strong> Game server console logs, file names, and configuration files stored on our infrastructure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We use the collected data for the following purposes:</p>
              <p>
                <strong className="text-foreground">Service Provisioning:</strong> To deploy your game server, create your control panel account, and send login credentials.
              </p>
              <p>
                <strong className="text-foreground">Billing:</strong> To generate invoices and process recurring payments.
              </p>
              <p>
                <strong className="text-foreground">Customer Support:</strong> To verify your identity when you contact support@artix.host and to troubleshoot technical issues with your server.
              </p>
              <p>
                <strong className="text-foreground">Security & Fraud Prevention:</strong> To detect potential fraud, screen orders, and prevent network abuse (such as DDoS attacks or phishing).
              </p>
              <p>
                <strong className="text-foreground">Communication:</strong> To send service-related emails (e.g., downtime alerts, maintenance notifications, invoices).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We do not sell, trade, or rent your personal information to third parties. We only share information with trusted third parties necessary to operate our services:</p>
              <p>
                <strong className="text-foreground">Infrastructure Providers:</strong> Our servers are rented from and housed in datacenters managed by Hetzner GmbH (located in Germany and Finland). Your data resides physically on their hardware.
              </p>
              <p>
                <strong className="text-foreground">Payment Processors:</strong> Information is shared with payment gateways to process transactions.
              </p>
              <p>
                <strong className="text-foreground">Legal Obligations:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or police investigation).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Active Accounts:</strong> We retain your personal information as long as your account is active.
              </p>
              <p>
                <strong className="text-foreground">Terminated Services:</strong> Upon cancellation, server files (game worlds, configs) are retained for 14 days before permanent deletion.
              </p>
              <p>
                <strong className="text-foreground">Legal Records:</strong> We retain billing and transaction records for a period required by tax laws (typically 5-7 years), even after you close your account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Security of Your Data</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We use administrative, technical, and physical security measures to help protect your personal information.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>All sensitive traffic (login, billing) is encrypted via SSL/TLS.</li>
                <li>Passwords are hashed and salted; we cannot see your raw password.</li>
                <li>Access to the server infrastructure is restricted to authorized Artix Host personnel only.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to maintain your session on our Billing Area and Game Control Panel. These are "strictly necessary" cookies required for the website to function (e.g., keeping you logged in as you navigate between pages). You can choose to disable cookies in your browser, but our control panels will not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights (GDPR & Data Privacy)</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Since our infrastructure is located in the European Union (Germany/Finland), we adhere to GDPR standards. You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong className="text-foreground">Correction:</strong> Request that we correct any inaccurate information.</li>
                <li><strong className="text-foreground">Deletion:</strong> Request that we delete your personal data ("Right to be Forgotten"), subject to our legal obligation to retain tax records.</li>
                <li><strong className="text-foreground">Data Portability:</strong> Request a copy of your data in a machine-readable format.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:support@artix.host" className="text-primary hover:underline">support@artix.host</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under age 13 without verification of parental consent, we will take steps to remove that information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website or game configurations may contain links to third-party websites (e.g., Mod/Plugin repositories). We are not responsible for the privacy practices or content of these third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>If you have questions or comments about this policy, you may contact us at:</p>
              <p><strong className="text-foreground">Data Protection Inquiries:</strong> <a href="mailto:support@artix.host" className="text-primary hover:underline">support@artix.host</a></p>
              <p><strong className="text-foreground">Abuse Reports:</strong> <a href="mailto:abuse@artix.host" className="text-primary hover:underline">abuse@artix.host</a></p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

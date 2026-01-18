import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ToS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl pt-32">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last Updated: January 18, 2026</p>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services provided by Artix Host ("we," "us," or "our"), you ("Client," "User," or "Customer") agree to be bound by these Terms of Service ("Terms"). These Terms apply to all users of our game hosting platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Artix Host specializes in shared game server hosting. Our services are specifically optimized for titles including, but not limited to, Minecraft (Java), Terraria, and Project Zomboid.
              </p>
              <p>
                <strong className="text-foreground">No VPS/VDS Services:</strong> We do not offer Virtual Private Servers or Virtual Dedicated Servers. Attempts to bypass our game panel restrictions to use the container as a general-purpose Linux shell are strictly prohibited.
              </p>
              <p>
                <strong className="text-foreground">Location of Infrastructure:</strong> Our game nodes are hosted in Germany and Finland, maintained by Hetzner GmbH.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Eligibility & Security</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>You must be at least 13 years of age to use our services.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate information. Use of fake identities or temporary/disposable emails may result in immediate account termination.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payments and Billing</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Billing Cycle:</strong> Services are billed on a recurring basis (Monthly, Quarterly, etc.).
              </p>
              <p>
                <strong className="text-foreground">Overdue Accounts:</strong> Invoices are generated 7-14 days before the due date. Services overdue by more than 7 days will be suspended.
              </p>
              <p>
                <strong className="text-foreground">Data Retention:</strong> If a service remains unpaid for 14 days, the server files (including game worlds and configs) will be permanently deleted to free up space for other clients.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Refund Policy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Money-Back Guarantee:</strong> We offer a refund within 24 hours of the initial purchase if there is a technical issue with the service that our team cannot resolve.
              </p>
              <p>
                <strong className="text-foreground">Exceptions:</strong> Refunds are not granted for "change of mind," inability to configure plugins/mods, or if the service was used to violate our Acceptable Use Policy.
              </p>
              <p>
                <strong className="text-foreground">Chargebacks:</strong> Initiating a chargeback or dispute with your payment provider will result in an immediate, permanent ban from Artix Host.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cancellation</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Cancellations must be requested via the Client Area (Billing Portal).</p>
              <p>
                <strong className="text-foreground">Automatic Payments:</strong> It is the client's sole responsibility to cancel any active recurring subscriptions (e.g., PayPal automatic payments) within their payment processor's dashboard. Artix Host is not liable for overcharges caused by failure to cancel these subscriptions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Acceptable Use Policy (AUP) & Fair Use</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>You agree not to use Artix Host services for any unlawful purpose.</p>
              <p>
                <strong className="text-foreground">Fair Usage (CPU/RAM):</strong> Our servers operate on shared infrastructure. While we provide dedicated RAM, CPU usage is shared. You may not use excessive CPU resources for extended periods (e.g., Minecraft "Lag Machines," crypto mining within the game container, or unoptimized scripts that degrade node performance).
              </p>
              <p>
                <strong className="text-foreground">Prohibited Content:</strong> You may not use your game server to host illegal content, hate speech, or malicious files.
              </p>
              <p>
                <strong className="text-foreground">Network Abuse:</strong> Launching DDoS attacks, port scanning, or using the server as a proxy/VPN is strictly prohibited.
              </p>
              <p>Violation of the AUP will result in immediate termination without refund.</p>
              <p>
                Reports of abuse should be sent to: <a href="mailto:abuse@artix.host" className="text-primary hover:underline">abuse@artix.host</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Support Scope</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Support Email:</strong> <a href="mailto:support@artix.host" className="text-primary hover:underline">support@artix.host</a>
              </p>
              <p>
                <strong className="text-foreground">What We Support:</strong> Server availability, hardware issues, network connectivity (latency/packet loss), and access to the Game Control Panel.
              </p>
              <div>
                <strong className="text-foreground">What We Do NOT Support:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Game mechanics or "how to play."</li>
                  <li>Debugging third-party mods (e.g., TModLoader errors, Minecraft Forge crashes caused by mod conflicts).</li>
                  <li>Custom coding (Java, Lua, Skript).</li>
                  <li>Client-side issues (problems with your personal PC connecting to the server).</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Uptime & SLA</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We aim for 99.9% Network Uptime.</p>
              <p>
                <strong className="text-foreground">Maintenance:</strong> Regularly scheduled maintenance (for node updates or security patches) is excluded from downtime calculations.
              </p>
              <p>
                <strong className="text-foreground">DDoS Mitigation:</strong> While we provide DDoS protection, massive attacks may result in temporary "null-routing" (IP blocking) to protect the integrity of the hardware for other customers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Data & Backups</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Client Responsibility:</strong> While Artix Host may perform courtesy system backups, you are solely responsible for backing up your game worlds and data. We recommend downloading local copies of your world files regularly.
              </p>
              <p>
                <strong className="text-foreground">Liability:</strong> Artix Host accepts no liability for data loss caused by hardware failure, user error, or software corruption (e.g., world corruption due to game bugs).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Artix Host reserves the right to modify these Terms at any time. Significant changes will be communicated via email or dashboard notification. Continued use of the service constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">General Support:</strong> <a href="mailto:support@artix.host" className="text-primary hover:underline">support@artix.host</a></p>
              <p><strong className="text-foreground">Abuse/Legal:</strong> <a href="mailto:abuse@artix.host" className="text-primary hover:underline">abuse@artix.host</a></p>
              <p><strong className="text-foreground">Infrastructure:</strong> Hetzner GmbH (Germany/Finland)</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ToS;

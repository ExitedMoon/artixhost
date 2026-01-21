import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="glass-card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include your name, email address, 
                payment information, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and respond 
                to your comments and questions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as necessary to provide our services or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and 
                hold certain information. You can instruct your browser to refuse all cookies or to 
                indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also 
                have the right to restrict or object to certain processing of your data. To exercise 
                these rights, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@artix.host" className="text-primary hover:underline">
                  privacy@artix.host
                </a>
              </p>
            </section>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "🌍 Where are your servers located?",
    answer: "Our servers are strategically located in Germany 🇩🇪 and Finland 🇫🇮 to provide excellent latency for European players. We use enterprise-grade hardware in Tier-3 data centers with 99.9% uptime guarantee.",
  },
  {
    question: "🎮 Which games do you support?",
    answer: "We currently support Minecraft ⛏️, Terraria 🌳, and Project Zomboid 🧟. Each game has optimized server configurations for the best performance. More games coming soon! 🚀",
  },
  {
    question: "🖥️ What control panel do you use?",
    answer: "We use Pterodactyl Panel 🦖 – an industry-leading open-source game server management platform. It provides a beautiful, intuitive interface for managing your servers, files, databases, and more! ✨",
  },
  {
    question: "⚡ How fast is server deployment?",
    answer: "Your server is ready in under 60 seconds! 🎉 After payment, your game server is automatically provisioned and configured. Just click play! 🎮",
  },
  {
    question: "💳 What payment methods do you accept?",
    answer: "We accept all major credit cards 💳, PayPal, and various cryptocurrency options 🪙. All payments are secure and processed through trusted payment providers.",
  },
  {
    question: "🔒 Is my data secure?",
    answer: "Absolutely! 🛡️ We implement DDoS protection, automated backups, and encrypted connections. Your game data is safe with enterprise-grade security measures.",
  },
  {
    question: "💬 How can I get support?",
    answer: "Join our Discord community for 24/7 support! 🌙 Our team and community members are always ready to help. Average response time is under 15 minutes! ⏱️ Just head to our Discord server and open a ticket!",
  },
  {
    question: "🔄 Can I upgrade my plan later?",
    answer: "Yes! 👍 You can upgrade or downgrade your plan anytime from your dashboard. Changes take effect immediately, and we'll prorate your billing accordingly. 📊",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Got questions? We've got answers! 💡
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card !p-0 overflow-hidden border-none animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

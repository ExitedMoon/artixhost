import { Zap, Shield, Smile } from "lucide-react";

const benefits = [
  {
    icon: Smile,
    title: "Convenience",
    description: "Intuitive control panel with one-click deployments and automated backups.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "NVMe SSDs and high-performance CPUs for lag-free gaming experience.",
  },
  {
    icon: Shield,
    title: "Simplicity",
    description: "No technical knowledge needed. Start playing in under 60 seconds.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">artix.host</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built for gamers, by gamers. Experience hosting that just works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

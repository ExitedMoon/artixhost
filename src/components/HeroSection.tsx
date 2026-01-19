import { Button } from "@/components/ui/button";
import { Gamepad2, Users, Server } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Users", value: "10+" },
  { icon: Server, label: "Servers Created", value: "15+" },
  { icon: Server, label: "Active Nodes", value: "2" },
];

const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-left max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Simple{" "}
            <span className="text-gradient">game hosting</span>
            <br />
            for yourself
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Launch your game server in seconds with our fast and reliable hosting.
            Perfect for Minecraft, Terraria, and Project Zomboid.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="https://dsc.gg/artixhost/" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="lg" className="rounded-xl text-lg px-8">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Your Server
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl text-lg px-8 border-primary/30 hover:bg-primary/10"
              onClick={scrollToPricing}
            >
              View Pricing
            </Button>
          </div>

          {/* Stats in line */}
          <div className="flex flex-wrap justify-center gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-foreground block">{stat.value}</span>
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

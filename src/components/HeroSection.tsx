import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Users, Server } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, label: "Active Users", value: "12,500+" },
  { icon: Server, label: "Servers Created", value: "45,000+" },
  { icon: Server, label: "Active Nodes", value: "2" },
];

const games = [
  { name: "Minecraft", icon: "⛏️" },
  { name: "Terraria", icon: "🌳" },
  { name: "Project Zomboid", icon: "🧟" },
];

const HeroSection = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStatIndex((prev) => (prev + 1) % stats.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentStat = stats[currentStatIndex];
  const StatIcon = currentStat.icon;

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
        <div className="text-center max-w-4xl mx-auto">
          {/* Games badges */}
          <div className="flex justify-center gap-3 mb-8 animate-fade-up">
            {games.map((game) => (
              <div 
                key={game.name}
                className="glass-card !p-3 !rounded-xl flex items-center gap-2"
              >
                <span className="text-xl">{game.icon}</span>
                <span className="font-medium text-foreground">{game.name}</span>
              </div>
            ))}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Simple{" "}
            <span className="text-gradient">game hosting</span>
            <br />
            for yourself
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Launch your game server in seconds with our fast and reliable hosting.
            Perfect for Minecraft, Terraria, and Project Zomboid.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/dashboard">
              <Button variant="glass" size="lg" className="rounded-xl text-lg px-8">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Your Server
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl text-lg px-8 border-primary/30 hover:bg-primary/10"
              onClick={scrollToPricing}
            >
              View Pricing
            </Button>
          </div>
          {/* Animated Stats */}
          <div className="glass-card !p-8 max-w-md mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div 
              className={`flex flex-col items-center transition-all duration-300 ${
                isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <StatIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-4xl font-bold text-foreground mb-1">{currentStat.value}</span>
              <span className="text-muted-foreground font-medium">{currentStat.label}</span>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {stats.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStatIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

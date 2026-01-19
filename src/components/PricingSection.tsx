import { useState } from "react";
import { Cpu, HardDrive, Database, Network, Archive, Users, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const gamingPlans = [
  {
    name: "Free",
    price: "€0",
    cpu: "0.5 vCore",
    ram: "1 GB",
    ssd: "5 GB",
    ports: "2",
    database: "0",
    backup: "0",
    popular: false
  },
  {
    name: "Basic",
    price: "€2.99",
    cpu: "1 vCore",
    ram: "3 GB",
    ssd: "15 GB",
    ports: "3",
    database: "1",
    backup: "1",
    popular: false
  },
  {
    name: "Standard",
    price: "€3.99",
    cpu: "2 vCores",
    ram: "4 GB",
    ssd: "35 GB",
    ports: "4",
    database: "2",
    backup: "3",
    popular: true
  },
  {
    name: "Advanced",
    price: "€7.99",
    cpu: "2.5 vCores",
    ram: "8 GB",
    ssd: "60 GB",
    ports: "5",
    database: "3",
    backup: "5",
    popular: false
  },
  {
    name: "Pro",
    price: "€9.99",
    cpu: "3 vCores",
    ram: "10 GB",
    ssd: "70 GB",
    ports: "6",
    database: "4",
    backup: "7",
    popular: false
  },
  {
    name: "Business",
    price: "€11.99",
    cpu: "4 vCores",
    ram: "12 GB",
    ssd: "90 GB",
    ports: "7",
    database: "5",
    backup: "10",
    popular: false
  },
  {
    name: "Enterprise",
    price: "€15.99",
    cpu: "6 vCores",
    ram: "16 GB",
    ssd: "100 GB",
    ports: "9",
    database: "6",
    backup: "15",
    popular: false
  },
  {
    name: "Ultimate",
    price: "€19.99",
    cpu: "8 vCores",
    ram: "24 GB",
    ssd: "120 GB",
    ports: "12",
    database: "8",
    backup: "20",
    popular: false
  }
];

// Voice servers are custom only - no predefined plans

type ServerType = "gaming" | "voice";

const PricingSection = () => {
  const [serverType, setServerType] = useState<ServerType>("gaming");

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-muted/30" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple & Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Choose the perfect plan for your needs. All plans include 24/7 support.
          </p>

          {/* Server Type Toggle */}
          <div className="inline-flex items-center gap-2 p-1 rounded-xl bg-muted/50 backdrop-blur-sm border border-border">
            <button
              onClick={() => setServerType("gaming")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                serverType === "gaming"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Cpu className="h-4 w-4" />
              Gaming
            </button>
            <button
              onClick={() => setServerType("voice")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all ${
                serverType === "voice"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Mic className="h-4 w-4" />
              Voice
            </button>
          </div>
        </div>

        <div
          key={serverType}
          className="animate-fade-in"
        >
          {serverType === "gaming" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {gamingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`glass-card relative animate-fade-up ${plan.popular ? "ring-2 ring-primary" : ""}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Cpu className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">CPU:</span>
                      <span className="font-medium text-foreground ml-auto">{plan.cpu}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <HardDrive className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">RAM:</span>
                      <span className="font-medium text-foreground ml-auto">{plan.ram}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <HardDrive className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">SSD:</span>
                      <span className="font-medium text-foreground ml-auto">{plan.ssd}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Network className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Ports:</span>
                      <span className="font-medium text-foreground ml-auto">{plan.ports}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Database className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Database:</span>
                      <span className="font-medium text-foreground ml-auto">{plan.database}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Archive className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Backups:</span>
                      <span className="font-medium text-foreground ml-auto">{plan.backup}</span>
                    </div>
                  </div>

                  <a href="https://dsc.gg/artixhost/" target="_blank" rel="noopener noreferrer">
                    <Button variant={plan.popular ? "glass" : "outline"} className="w-full rounded-xl">
                      {plan.price === "€0" ? "Start Free" : "Get Started"}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Mic className="h-4 w-4" />
                  Supports TeamSpeak 3 & TeamSpeak 6
                </span>
              </div>
              <div className="glass-card relative animate-fade-up ring-2 ring-primary">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    CUSTOM
                  </span>
                </div>

                <div className="text-center mb-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">Custom</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-extrabold text-foreground">Contact Us</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Slots:</span>
                    <span className="font-medium text-foreground ml-auto">Custom</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mic className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Quality:</span>
                    <span className="font-medium text-foreground ml-auto">Up to 320 kbps</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Network className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Channels:</span>
                    <span className="font-medium text-foreground ml-auto">Unlimited</span>
                  </div>
                </div>

                <p className="text-center text-muted-foreground text-sm mb-6">
                  Need a voice server? Contact us via Discord and we'll create a custom plan tailored to your needs.
                </p>

                <a href="https://dsc.gg/artixhost/" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" className="w-full rounded-xl">
                    Contact via Discord
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
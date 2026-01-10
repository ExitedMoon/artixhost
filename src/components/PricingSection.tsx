import { Cpu, HardDrive, Database, Network, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const plans = [{
  name: "Free",
  price: "$0",
  cpu: "1 Core",
  ram: "1 GB",
  ssd: "5 GB",
  ports: "1",
  database: "0",
  backup: "0",
  popular: false
}, {
  name: "Basic",
  price: "$6.99",
  cpu: "2 Cores",
  ram: "4 GB",
  ssd: "25 GB",
  ports: "2",
  database: "2",
  backup: "3",
  popular: false
}, {
  name: "Standard",
  price: "$12.99",
  cpu: "3 Cores",
  ram: "6 GB",
  ssd: "40 GB",
  ports: "3",
  database: "3",
  backup: "5",
  popular: true
}, {
  name: "Advanced",
  price: "$19.99",
  cpu: "4 Cores",
  ram: "8 GB",
  ssd: "60 GB",
  ports: "4",
  database: "4",
  backup: "7",
  popular: false
}, {
  name: "Pro",
  price: "$29.99",
  cpu: "5 Cores",
  ram: "12 GB",
  ssd: "80 GB",
  ports: "5",
  database: "5",
  backup: "10",
  popular: false
}, {
  name: "Business",
  price: "$44.99",
  cpu: "6 Cores",
  ram: "16 GB",
  ssd: "120 GB",
  ports: "8",
  database: "8",
  backup: "15",
  popular: false
}, {
  name: "Enterprise",
  price: "$69.99",
  cpu: "8 Cores",
  ram: "24 GB",
  ssd: "200 GB",
  ports: "12",
  database: "10",
  backup: "20",
  popular: false
}, {
  name: "Ultimate",
  price: "$99.99",
  cpu: "12 Cores",
  ram: "32 GB",
  ssd: "300 GB",
  ports: "Unlimited",
  database: "Unlimited",
  backup: "Unlimited",
  popular: false
}];
const PricingSection = () => {
  return <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple & Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-3">
            Choose the perfect plan for your needs. All plans include 24/7 support.
          </p>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {plans.map((plan, index) => <div key={plan.name} className={`glass-card relative animate-fade-up ${plan.popular ? "ring-2 ring-primary" : ""}`} style={{
          animationDelay: `${index * 0.05}s`
        }}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>}
              
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
                  {plan.price === "$0" ? "Start Free" : "Get Started"}
                </Button>
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PricingSection;
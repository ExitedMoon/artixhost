import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustpilotBanner = () => {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="glass-card py-4 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground font-medium text-center md:text-left">
              Leave a review on <span className="text-gradient font-bold">Trustpilot</span> and get{" "}
              <span className="text-gradient font-bold">10% off</span> your next order!
            </p>
          </div>
          <Button
            variant="glass"
            size="sm"
            className="shrink-0"
            onClick={() => window.open("https://www.trustpilot.com/review/artix.host", "_blank")}
          >
            Leave a Review
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotBanner;

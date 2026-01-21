import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TrustpilotBanner from "@/components/TrustpilotBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <TrustpilotBanner />
      <Footer />
    </div>
  );
};

export default Index;

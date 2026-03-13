import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsBanner from "@/components/sections/BenefitsBanner";
import DashboardSection from "@/components/sections/DashboardSection";
import PricingSection from "@/components/sections/PricingSection";
import CatalogSection from "@/components/sections/CatalogSection";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsBanner />
      <DashboardSection />
      <PricingSection />
      <CatalogSection />
      <CTABanner />
      <Footer />
    </main>
  );
}

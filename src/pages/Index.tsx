import { FuturisticHeader } from "@/components/FuturisticHeader";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechSection } from "@/components/TechSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <FuturisticHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

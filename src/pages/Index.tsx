import { FuturisticHeader } from "@/components/FuturisticHeader";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TechSection } from "@/components/TechSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PWAInstaller } from "@/components/PWAInstaller";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useEffect } from "react";

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered'))
        .catch(() => console.log('Service Worker registration failed'));
    }
  }, []);

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
      <PWAInstaller />
    </div>
  );
};

export default Index;

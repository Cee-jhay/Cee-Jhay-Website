import { AboutSection } from "@/components/AboutSection";
import { SiteBackground } from "@/components/SiteBackground";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

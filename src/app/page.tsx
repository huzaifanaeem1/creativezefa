import Navbar from "@/components/sections/Navbar";
import ClientLogos from "@/components/ClientLogos";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";;
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EtsyShop from "@/components/sections/EtsyShop";
import VideoSection from "@/components/sections/VideoSection";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogos />
        <AboutSection />
        <VideoSection/>
        <ServicesSection />
        <PortfolioSection />
        {/* <PricingSection /> */}
        <TestimonialsSection />
        <EtsyShop/>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

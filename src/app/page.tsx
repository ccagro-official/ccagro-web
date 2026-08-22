import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StoryScrollSection from "@/components/sections/StoryScrollSection";
import OfferingsSection from "@/components/sections/OfferingsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import GallerySection from "@/components/sections/GallerySection";
import GuidanceSection from "@/components/sections/GuidanceSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light flex flex-col relative">
      <Navbar />
      <HeroSection />
      <StoryScrollSection />
      <OfferingsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <GuidanceSection />
      <CTASection />
      <Footer />
    </main>
  );
}

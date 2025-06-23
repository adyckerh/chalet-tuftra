import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AirbnbReviews } from "@/components/AirbnbReviews";
import { CtaSection } from "@/components/CtaSection";
import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

// Static data
const heroImages = ["/lovable-uploads/47275c04-31d6-4425-b897-fac02724f9b3.png", "/lovable-uploads/3c42e4b1-1032-4d5a-bacb-801c3ed34f86.png", "/lovable-uploads/0540039b-0208-4d99-a683-e9eccc46a31c.png", "/lovable-uploads/0803ce83-71ca-4192-95f0-a084a80c4d0e.png"];
const heroFeatures = [{
  iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
  title: "Iconic Views",
  description: "Immerse yourself into nature as every room allows you to experience the iconic Matterhorn peak or the rushing Findelbach stream"
}, {
  iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
  title: "Light-Flooded Spaces",
  description: "Our chalet celebrates natural light with generous windows and open spaces, creating a bright and welcoming atmosphere throughout"
}, {
  iconSrc: "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
  title: "Family Hub Concept",
  description: "Designed as a gathering place where families and friends return again and again to create lasting memories together"
}];
const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToPhilosophy = () => {
    const element = document.getElementById('philosophy');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <button onClick={scrollToTop} className="flex items-center space-x-3">
                <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-16 w-auto" />
                <h1 className="text-lg md:text-xl font-bold text-white drop-shadow-md">Chalet Tuftra Findelbach</h1>
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-6 ml-8">
              <a href="/family" className="text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-md">Family</a>
              <a href="/amenities" className="text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-md font-bold ">Amenities</a>
              <a href="/corporate-retreats" className="text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-md">Corporate Retreats</a>
              <a href="/contact" className="text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-md">Contact</a>
              <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900/80 hover:bg-emerald-800/80 text-white whitespace-nowrap backdrop-blur-sm border border-white/10" size="sm">
                Make an Inquiry
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-width Hero Section */}
      <HeroSection id="home" heading="Savor Luxury: Space, Light, Views" images={heroImages} setIsInquiryOpen={setIsInquiryOpen} onDiscoverMore={scrollToPhilosophy} />
      
      {/* Other sections with proper spacing */}
      <div className="relative z-10">
        <FeaturesSection id="philosophy" features={heroFeatures} />
        <AirbnbReviews setIsInquiryOpen={setIsInquiryOpen} />
        <CtaSection setIsInquiryOpen={setIsInquiryOpen} />
        <FooterSection />
      </div>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>;
};
export default Index;
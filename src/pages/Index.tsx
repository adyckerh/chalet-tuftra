import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AirbnbReviews } from "@/components/AirbnbReviews";
import { CtaSection } from "@/components/CtaSection";
import { FooterSection } from "@/components/FooterSection";
import { SEOHead } from "@/components/SEOHead";
import { Section, Container } from "@/components/ui/Layout";
import { H2, BodyLarge } from "@/components/ui/Typography";

// Static data
const heroImages = ["/lovable-uploads/47275c04-31d6-4425-b897-fac02724f9b3.png", "/lovable-uploads/3c42e4b1-1032-4d5a-bacb-801c3ed34f86.png", "/lovable-uploads/0540039b-0208-4d99-a683-e9eccc46a31c.png", "/lovable-uploads/0803ce83-71ca-4192-95f0-a084a80c4d0e.png"];
const heroFeatures = [{
  iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
  title: "Iconic Views",
  description: "Immerse yourself into nature as every room allows you to experience the iconic Matterhorn peak or the rushing Findelbach stream"
}, {
  iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
  title: "Light-Flooded Spaces",
  description: "Our luxury chalet celebrates natural light with generous windows and open spaces, creating a bright and welcoming atmosphere throughout"
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

  return (
    <>
      <SEOHead
        title="Luxury Chalet Zermatt with Matterhorn Views"
        description="Experience premium Alpine luxury at Chalet Tuftra in Zermatt. Breathtaking Matterhorn views, spacious family accommodation, private spa & wellness facilities. Book your exclusive Swiss mountain retreat today."
        canonical="https://chalettuftra.com/"
        keywords="luxury chalet Zermatt, Matterhorn views, premium alpine accommodation, Switzerland luxury rental, exclusive mountain chalet, Zermatt ski chalet, Swiss luxury vacation"
      />
      
      <div className="min-h-screen bg-stone-50">
        {/* Navigation */}
        <Navigation setIsInquiryOpen={setIsInquiryOpen} isHomePage={true} />

        {/* Full-width Hero Section */}
        <HeroSection 
          id="home" 
          heading="Savor Luxury: Space, Light, Views" 
          images={heroImages} 
          setIsInquiryOpen={setIsInquiryOpen} 
          onDiscoverMore={scrollToPhilosophy} 
        />
        
        {/* Enhanced content for SEO */}
        <Section background="primary">
          <Container>
            <div className="text-center">
              <H2 className="mb-6">
                Exclusive Luxury Chalet Rental in Zermatt, Switzerland
              </H2>
              <BodyLarge className="max-w-4xl mx-auto">
                Discover unparalleled luxury at Chalet Tuftra, an exclusive Alpine sanctuary nestled in the heart of Zermatt. 
                Our premium mountain chalet offers breathtaking Matterhorn views, sophisticated accommodations for up to 20 guests, 
                and world-class amenities including private spa facilities, wellness center, and direct ski access. 
                Experience the pinnacle of Swiss hospitality in our light-filled spaces designed for unforgettable family gatherings 
                and exclusive mountain retreats.
              </BodyLarge>
            </div>
          </Container>
        </Section>
        
        {/* Other sections with proper spacing */}
        <div className="relative z-10">
          <FeaturesSection id="philosophy" features={heroFeatures} />
          <AirbnbReviews setIsInquiryOpen={setIsInquiryOpen} />
          <CtaSection setIsInquiryOpen={setIsInquiryOpen} />
          <FooterSection />
        </div>

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default Index;

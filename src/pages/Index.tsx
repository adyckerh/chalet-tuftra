
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { AboutSection } from "@/components/AboutSection";
import { StoryVision } from "@/components/StoryVision";
import { LocationSection } from "@/components/LocationSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FooterSection } from "@/components/FooterSection";
import { InquiryModal } from "@/components/InquiryModal";
import { CtaSection } from "@/components/CtaSection";

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header setIsInquiryOpen={setIsInquiryOpen} />
      
      {/* Add top padding to account for fixed header */}
      <div className="pt-16">
        <HeroSection setIsInquiryOpen={setIsInquiryOpen} />
        <FeaturesSection />
        <GallerySection />
        <AboutSection />
        <StoryVision />
        <LocationSection />
        <ReviewsSection />
        <CtaSection setIsInquiryOpen={setIsInquiryOpen} />
        <FooterSection />
      </div>

      <InquiryModal 
        isOpen={isInquiryOpen} 
        setIsOpen={setIsInquiryOpen} 
      />
    </div>
  );
};

export default Index;

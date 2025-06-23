
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { FooterSection } from "@/components/FooterSection";
import { SEOHead } from "@/components/SEOHead";

// Corporate retreat-focused hero images
const corporateHeroImages = [
  "/lovable-uploads/132cb960-93a5-42e9-9798-c75565ab4b13.png",
  "/lovable-uploads/13dd9e8f-748b-4b92-ab82-10267f6cac76.png",
  "/lovable-uploads/21fff439-a418-44a3-ac6a-54ee7236d35d.png",
  "/lovable-uploads/225a0397-7cce-4537-8071-ee957909d9fb.png"
];

// Corporate retreat-focused features
const corporateFeatures = [
  {
    iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
    title: "Executive Meeting Spaces",
    description: "Sophisticated meeting areas with inspiring Alpine views, high-speed connectivity, and flexible layouts perfect for strategy sessions and team building"
  },
  {
    iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
    title: "Team Building Environment",
    description: "Spacious common areas and outdoor terraces that foster collaboration, creativity, and meaningful connections among team members"
  },
  {
    iconSrc: "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
    title: "Privacy & Productivity",
    description: "Secluded location offering the perfect balance of inspiring mountain setting and professional atmosphere for focused corporate work"
  }
];

// Corporate retreat-focused gallery categories
const corporateGalleryCategories = [
  {
    title: "Executive Retreat Spaces",
    description: "Professional environments designed to inspire productivity and team collaboration",
    images: [
      "/lovable-uploads/132cb960-93a5-42e9-9798-c75565ab4b13.png",
      "/lovable-uploads/13dd9e8f-748b-4b92-ab82-10267f6cac76.png",
      "/lovable-uploads/21fff439-a418-44a3-ac6a-54ee7236d35d.png",
      "/lovable-uploads/225a0397-7cce-4537-8071-ee957909d9fb.png",
      "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
      "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png"
    ]
  }
];

const CorporateRetreats = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const scrollToFeatures = () => {
    const element = document.getElementById('corporate-features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Corporate Retreats Zermatt - Executive Chalet Rental"
        description="Elevate your corporate retreat at Chalet Tuftra in Zermatt. Executive meeting spaces, team building environment, inspiring Alpine setting. Perfect for leadership retreats and company events."
        canonical="https://chalettuftra.com/corporate-retreats"
        keywords="corporate retreat Zermatt, executive chalet rental, business meeting space Alps, company retreat Switzerland, team building luxury accommodation"
      />
      
      <div className="min-h-screen bg-stone-50">
        <Navigation setIsInquiryOpen={setIsInquiryOpen} />

        <HeroSection 
          id="corporate-hero"
          heading="Inspire Excellence in Alpine Luxury" 
          images={corporateHeroImages} 
          setIsInquiryOpen={setIsInquiryOpen} 
          onDiscoverMore={scrollToFeatures}
        />
        
        <div className="relative z-10">
          <FeaturesSection id="corporate-features" features={corporateFeatures} />
          <GallerySection categories={corporateGalleryCategories} />
          <FooterSection />
        </div>

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default CorporateRetreats;

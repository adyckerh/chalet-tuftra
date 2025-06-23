
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { FooterSection } from "@/components/FooterSection";
import { SEOHead } from "@/components/SEOHead";

// Amenities-focused hero images
const amenitiesHeroImages = [
  "/lovable-uploads/0e3fa725-c79c-4dfc-8dad-a9c374647053.png",
  "/lovable-uploads/1a6a7f76-373c-4d9f-98fc-c7b187b134cd.png",
  "/lovable-uploads/2589f8ef-d129-4e6f-ac97-6658575eba2b.png",
  "/lovable-uploads/27ab3278-20aa-4a5e-9e4f-bdcd3865b305.png"
];

// Amenities-focused features
const amenitiesFeatures = [
  {
    iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
    title: "Private Spa & Wellness",
    description: "Indulge in your personal sanctuary featuring a Finnish sauna, relaxation areas, and wellness facilities designed for ultimate rejuvenation after Alpine adventures"
  },
  {
    iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
    title: "Gourmet Kitchen & Dining",
    description: "Professional-grade kitchen equipped with premium appliances, spacious dining areas, and everything needed to create memorable culinary experiences"
  },
  {
    iconSrc: "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
    title: "Entertainment & Comfort",
    description: "Multiple living areas, state-of-the-art entertainment systems, cozy fireplaces, and luxurious furnishings throughout every space"
  }
];

// Amenities-focused gallery categories
const amenitiesGalleryCategories = [
  {
    title: "Luxury Amenities",
    description: "Discover the exceptional amenities that make Chalet Tuftra your perfect Alpine retreat",
    images: [
      "/lovable-uploads/0e3fa725-c79c-4dfc-8dad-a9c374647053.png",
      "/lovable-uploads/1a6a7f76-373c-4d9f-98fc-c7b187b134cd.png",
      "/lovable-uploads/2589f8ef-d129-4e6f-ac97-6658575eba2b.png",
      "/lovable-uploads/27ab3278-20aa-4a5e-9e4f-bdcd3865b305.png",
      "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
      "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png"
    ]
  }
];

const Amenities = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const scrollToFeatures = () => {
    const element = document.getElementById('amenities-features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Luxury Chalet Amenities Zermatt - Premium Alpine Comfort"
        description="Discover world-class amenities at Chalet Tuftra: private spa, gourmet kitchen, entertainment areas, wellness facilities. Premium luxury meets Swiss Alpine comfort in Zermatt."
        canonical="https://chalettuftra.com/amenities"
        keywords="luxury chalet amenities, private spa Zermatt, wellness facilities, gourmet kitchen, premium alpine accommodation features"
      />
      
      <div className="min-h-screen bg-stone-50">
        <Navigation setIsInquiryOpen={setIsInquiryOpen} />

        <HeroSection 
          id="amenities-hero"
          heading="Luxury Amenities for Ultimate Comfort" 
          images={amenitiesHeroImages} 
          setIsInquiryOpen={setIsInquiryOpen} 
          onDiscoverMore={scrollToFeatures}
        />
        
        <div className="relative z-10">
          <FeaturesSection id="amenities-features" features={amenitiesFeatures} />
          <GallerySection categories={amenitiesGalleryCategories} />
          <FooterSection />
        </div>

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default Amenities;

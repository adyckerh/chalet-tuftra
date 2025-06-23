
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GallerySection } from "@/components/GallerySection";
import { FooterSection } from "@/components/FooterSection";
import { SEOHead } from "@/components/SEOHead";

// Family-focused hero images
const familyHeroImages = [
  "/lovable-uploads/48c4eb2b-451a-4ce9-8e8a-504b22fcd8e6.png",
  "/lovable-uploads/4d3ccb14-31e7-4789-93ff-5780dacf71d7.png",
  "/lovable-uploads/65fc1e7e-089d-47d3-8967-52fc7e13c53f.png",
  "/lovable-uploads/5b2630cc-3a20-43ba-a20d-e17bc6d0a5d7.png"
];

// Family-focused features
const familyFeatures = [
  {
    iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
    title: "Spacious Family Bedrooms",
    description: "Six thoughtfully designed bedrooms that provide comfortable spaces for every family member, from cozy nooks for children to elegant master suites for parents"
  },
  {
    iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
    title: "Indoor & Outdoor Play Areas",
    description: "Dedicated spaces where children can play safely while parents relax, including indoor entertainment areas and secure outdoor spaces with mountain views"
  },
  {
    iconSrc: "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
    title: "Multi-Generational Design",
    description: "Thoughtfully planned common areas and private spaces that bring families together while respecting everyone's need for personal space and comfort"
  }
];

// Family-focused gallery categories
const familyGalleryCategories = [
  {
    title: "Family Spaces",
    description: "Explore the family-friendly spaces designed for creating lasting memories together",
    images: [
      "/lovable-uploads/48c4eb2b-451a-4ce9-8e8a-504b22fcd8e6.png",
      "/lovable-uploads/4d3ccb14-31e7-4789-93ff-5780dacf71d7.png",
      "/lovable-uploads/65fc1e7e-089d-47d3-8967-52fc7e13c53f.png",
      "/lovable-uploads/5b2630cc-3a20-43ba-a20d-e17bc6d0a5d7.png",
      "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
      "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png"
    ]
  }
];

const Family = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const scrollToFeatures = () => {
    const element = document.getElementById('family-features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHead
        title="Family-Friendly Luxury Chalet Zermatt - Multi-Generational Getaways"
        description="Perfect for multi-generational family holidays in Zermatt. Spacious bedrooms, kid-friendly amenities, and stunning Matterhorn views. Create lasting family memories in the Swiss Alps."
        canonical="https://chalettuftra.com/family"
        keywords="family chalet Zermatt, multi-generational vacation, kids-friendly luxury accommodation, family ski holiday Switzerland, large group family rental"
      />
      
      <div className="min-h-screen bg-stone-50">
        <Navigation setIsInquiryOpen={setIsInquiryOpen} />

        <HeroSection 
          id="family-hero"
          heading="Where Families Create Timeless Memories" 
          images={familyHeroImages} 
          setIsInquiryOpen={setIsInquiryOpen} 
          onDiscoverMore={scrollToFeatures}
        />
        
        <div className="relative z-10">
          <FeaturesSection id="family-features" features={familyFeatures} />
          <GallerySection categories={familyGalleryCategories} />
          <FooterSection />
        </div>

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default Family;

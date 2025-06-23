
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

  // Sample data for components
  const heroImages = [
    "/lovable-uploads/0540039b-0208-4d99-a683-e9eccc46a31c.png",
    "/lovable-uploads/0803ce83-71ca-4192-95f0-a084a80c4d0e.png",
    "/lovable-uploads/08fe6bc4-8b52-4c79-a6d2-7e3dcd26a0fb.png"
  ];

  const features = [
    {
      iconSrc: "/lovable-uploads/225a0397-7cce-4537-8071-ee957909d9fb.png",
      title: "Space",
      description: "Generous living areas designed for comfort and relaxation."
    },
    {
      iconSrc: "/lovable-uploads/23961fc0-efaa-4dc7-9d60-bd4f7dc73fe5.png", 
      title: "Light",
      description: "Floor-to-ceiling windows flooding every room with natural light."
    },
    {
      iconSrc: "/lovable-uploads/2ca3668b-8983-41aa-83bb-bf7d96db0330.png",
      title: "Views",
      description: "Breathtaking panoramic views of the Matterhorn and Findelbach."
    }
  ];

  const galleryCategories = [
    {
      title: "Interior Spaces",
      description: "Luxurious and comfortable living spaces",
      images: [
        "/lovable-uploads/132cb960-93a5-42e9-9798-c75565ab4b13.png",
        "/lovable-uploads/13862709-f54d-4d48-ad40-ad33e106790d.png",
        "/lovable-uploads/13dd9e8f-748b-4b92-ab82-10267f6cac76.png"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header setIsInquiryOpen={setIsInquiryOpen} />
      
      {/* Add top padding to account for fixed header */}
      <div className="pt-16">
        <HeroSection 
          images={heroImages}
          setIsInquiryOpen={setIsInquiryOpen}
          onDiscoverMore={() => scrollToSection('features')}
        />
        <FeaturesSection 
          id="features"
          features={features}
        />
        <GallerySection 
          id="gallery"
          categories={galleryCategories}
        />
        <AboutSection 
          id="about"
          setIsInquiryOpen={setIsInquiryOpen}
        />
        <StoryVision setIsInquiryOpen={setIsInquiryOpen} />
        <LocationSection />
        <ReviewsSection />
        <CtaSection setIsInquiryOpen={setIsInquiryOpen} />
        <FooterSection />
      </div>

      <InquiryModal 
        open={isInquiryOpen} 
        onOpenChange={setIsInquiryOpen} 
      />
    </div>
  );
};

export default Index;

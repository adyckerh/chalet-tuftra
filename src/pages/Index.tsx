
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { CtaSection } from "@/components/CtaSection";
import { LocationSection } from "@/components/LocationSection";
import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

// Static data
const heroImages = [
  "/lovable-uploads/47275c04-31d6-4425-b897-fac02724f9b3.png",
  "/lovable-uploads/3c42e4b1-1032-4d5a-bacb-801c3ed34f86.png",
  "/lovable-uploads/0540039b-0208-4d99-a683-e9eccc46a31c.png",
  "/lovable-uploads/0803ce83-71ca-4192-95f0-a084a80c4d0e.png"
];

const heroFeatures = [
  {
    iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
    title: "Iconic Views",
    description: "Immerse yourself into nature as every room allows you to experience the iconic Matterhorn peak or the rushing Findelbach stream"
  },
  {
    iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
    title: "Light-Flooded Spaces",
    description: "Our chalet celebrates natural light with generous windows and open spaces, creating a bright and welcoming atmosphere throughout"
  },
  {
    iconSrc: "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
    title: "Family Hub Concept",
    description: "Designed as a gathering place where families and friends return again and again to create lasting memories together"
  }
];

const galleryCategories = [
  {
    title: "Living & Dining Areas",
    description: "Generous open spaces flooded with natural light, perfect for shared meals and conversations while enjoying panoramic views of the Matterhorn and Findelbach.",
    images: [
      "/lovable-uploads/849116f8-0d57-4a06-bfc9-39b46ad4b2bd.png",
      "/lovable-uploads/b60214bc-d718-4076-a212-65921d7f6efe.png",
      "/lovable-uploads/a2527a19-e5f1-4940-9bae-7708f25e18a2.png",
      "/lovable-uploads/09a410bd-0495-4d07-a9d8-dfb07f3db001.png",
      "/lovable-uploads/dde40bf0-9b7c-4736-a995-8debd26ae8bb.png",
      "/lovable-uploads/70c8f368-d818-44ac-8b4a-2f98a77be6da.png"
    ]
  },
  {
    title: "Wellness & Recreation",
    description: "Dedicated wellness and spa areas featuring luxurious bathrooms with mountain views, sauna, and fitness facilities, perfect for relaxation after days on the slopes or hiking trails.",
    images: [
      "/lovable-uploads/593bbcd2-d56c-497f-a011-25d0306cf99b.png",
      "/lovable-uploads/fbcd800c-d1ce-4e11-9e0b-5a9e99fbf8ad.png",
      "/lovable-uploads/9741a072-840c-4489-892e-15487e39cf62.png",
      "/lovable-uploads/ca99ceb3-8416-46fb-9052-24d079ac3a5d.png",
      "/lovable-uploads/c3151d33-4da4-4e2e-ab09-2b7a4ad90373.png"
    ]
  },
  {
    title: "Bedrooms",
    description: "Each beautifully appointed room offers a peaceful sanctuary where guests can retreat and recharge, all while maintaining connection to the stunning natural surroundings.",
    images: [
      "/lovable-uploads/891b3067-fb78-4adb-8270-05607e570eb8.png",
      "/lovable-uploads/93296546-af66-4a2f-8830-fbef8d319d4c.png",
      "/lovable-uploads/3c156848-370b-49f8-824a-d3a2c98f3740.png",
      "/lovable-uploads/ce888522-22ed-49db-902b-1e5c398eabfc.png",
      "/lovable-uploads/08fe6bc4-8b52-4c79-a6d2-7e3dcd26a0fb.png",
      "/lovable-uploads/6294aed9-51e4-401e-a8d4-eb751c668a3d.png"
    ]
  }
];

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 flex-1">
              <img 
                src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" 
                alt="Chalet Tuftra Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h1 className="text-lg md:text-xl font-bold text-emerald-700 whitespace-nowrap">Chalet Tuftra Findelbach</h1>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6 ml-8">
              {/* Updated navigation links: */}
              <a href="#home" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">Home</a>
              <a href="#philosophy" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">Our chalet philosophy</a>
              <a href="#about" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">Our Story</a>
              <a href="#amenities" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">Amneties</a>
              <a href="#contact" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">Contact</a>
              <LanguageSelector />
              <Button 
                onClick={() => setIsInquiryOpen(true)}
                className="bg-emerald-900 hover:bg-emerald-800 text-white whitespace-nowrap"
                size="sm"
              >
                {t('make_inquiry')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections with anchor ids */}
      <HeroSection 
        id="home"
        heading="Savor Luxury: Space, Light, Views"
        images={heroImages} 
        setIsInquiryOpen={setIsInquiryOpen} 
      />
      <FeaturesSection 
        id="philosophy"
        features={heroFeatures} 
      />
      <AboutSection id="about" setIsInquiryOpen={setIsInquiryOpen} />
      <GallerySection id="amenities" categories={galleryCategories} />
      <LocationSection id="contact" />
      <CtaSection setIsInquiryOpen={setIsInquiryOpen} />
      <FooterSection />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};
export default Index;


import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { StoryVision } from "@/components/StoryVision";
import { FooterSection } from "@/components/FooterSection";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Section, Container, ContentGrid } from "@/components/ui/Layout";
import { H1, H2, BodyLarge } from "@/components/ui/Typography";
import { SEOHead } from "@/components/SEOHead";

const familyImages = [
  "/lovable-uploads/861b4521-a0b0-4626-9807-f70c124fba59.png", 
  "/lovable-uploads/5cee333c-729f-4b83-942e-55b0ea89c65b.png", 
  "/lovable-uploads/27ab3278-20aa-4a5e-9e4f-bdcd3865b305.png", 
  "/lovable-uploads/597aa27c-c20d-4cd0-89bb-849c2d9f41fc.png"
];

const familyFeatures = [
  "Multiple family bedrooms with stunning views",
  "Large common areas for family gatherings",
  "Child friendly bedroom and amenities such as cinema room",
  "Elevator and step free access for less able guests"
];

const Family = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  
  return (
    <>
      <SEOHead
        title="Perfect Family Getaway - Luxury Chalet Zermatt"
        description="Family-friendly luxury chalet in Zermatt with spacious accommodations, multiple bedrooms, child-friendly amenities, and elevator access. Perfect for multi-generational family holidays."
        canonical="https://chalettuftra.com/family"
        keywords="family chalet Zermatt, child-friendly luxury accommodation, multi-generational holidays Switzerland, accessible mountain chalet, family vacation Matterhorn"
      />
      
      <div className="min-h-screen bg-stone-50">
        <Navigation setIsInquiryOpen={setIsInquiryOpen} />

        <Section background="secondary">
          <Container>
            <div className="text-center mb-12">
              <H1 className="mb-6">The perfect getaway for families</H1>
            </div>
            <ContentGrid>
              <div>
                <div className="space-y-6">
                  <BodyLarge>
                    Our chalet is designed with families in mind, offering spacious living areas, multiple bedrooms, and amenities that cater to guests of all ages. From the youngest guests to grandparents, everyone will find comfort and joy in our chalet.
                  </BodyLarge>
                  <ul className="space-y-3 text-stone-700">
                    {familyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Carousel opts={{
                  align: "start",
                  loop: true
                }} className="w-full">
                  <CarouselContent>
                    {familyImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img src={image} alt={`Family accommodation ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
                </Carousel>
              </div>
            </ContentGrid>
          </Container>
        </Section>

        <StoryVision setIsInquiryOpen={setIsInquiryOpen} />

        <FooterSection />

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default Family;

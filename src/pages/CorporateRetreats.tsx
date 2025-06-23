
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SEOHead } from "@/components/SEOHead";
import { Section, Container, ContentGrid } from "@/components/ui/Layout";
import { H1, H2, BodyLarge } from "@/components/ui/Typography";

const CorporateRetreats = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const corporateImages = [
    "/lovable-uploads/07a6cf29-a6a7-4257-8e65-2ba8a0278088.png",
    "/lovable-uploads/2589f8ef-d129-4e6f-ac97-6658575eba2b.png",
    "/lovable-uploads/12a92a73-6fa3-4be4-be10-2fe2fb3e7e91.png",
    "/lovable-uploads/4bb6b12c-9cbf-4217-b4c6-ce9922453780.png"
  ];

  const breadcrumbs = [
    {
      name: "Home",
      item: "https://chalettuftra.com/"
    },
    {
      name: "Corporate Retreats",
      item: "https://chalettuftra.com/corporate-retreats"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Corporate Retreats & Executive Meetings" 
        description="Host exceptional corporate retreats at Chalet Tuftra in Zermatt. Premium meeting spaces with Matterhorn views, executive accommodations, and team building activities in an inspiring Alpine setting." 
        canonical="https://chalettuftra.com/corporate-retreats" 
        keywords="corporate retreats Zermatt, executive meetings Switzerland, luxury business accommodation, alpine corporate events, team building Zermatt" 
        breadcrumbs={breadcrumbs} 
      />
      
      <div className="min-h-screen bg-stone-50">
        {/* Navigation */}
        <Navigation setIsInquiryOpen={setIsInquiryOpen} />

        {/* Corporate Content - Enhanced Green Section */}
        <Section background="accent">
          <Container>
            <div className="text-center mb-12">
              <H1 className="mb-6">Corporate retreats & executive meetings</H1>
            </div>
            
            {/* Image and Content Grid */}
            <ContentGrid className="mb-12">
              <div className="relative">
                <Carousel opts={{
                  align: "start",
                  loop: true
                }} className="w-full">
                  <CarouselContent>
                    {corporateImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img 
                            src={image} 
                            alt={`Corporate meeting space ${index + 1} - Luxury business facilities at Chalet Tuftra`} 
                            className="rounded-lg shadow-lg w-full h-auto object-cover" 
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
                </Carousel>
              </div>
              <div>
                <H2 className="mb-6">Executive Mountain Retreats</H2>
                <BodyLarge className="mb-8">
                  Elevate your corporate events and team building activities in our exclusive mountain chalet. 
                  Our sophisticated spaces and inspiring alpine setting provide the perfect environment for 
                  strategic planning sessions, executive meetings, and team bonding experiences that drive results.
                </BodyLarge>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                    Dedicated meeting and conference spaces with mountain views
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                    High speed-internet and a meeting table to accommodate 16 people comfortably
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                    Premium catering services and executive dining areas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                    Dedicated workspaces in every room and communal workspaces in the upstairs living area
                  </li>
                </ul>
              </div>
            </ContentGrid>

            {/* Button at Bottom */}
            <div className="flex justify-center">
              <Button 
                onClick={() => setIsInquiryOpen(true)} 
                className="bg-emerald-900 hover:bg-emerald-800 text-white text-lg px-8 py-3"
              >
                Plan your corporate retreat
              </Button>
            </div>
          </Container>
        </Section>

        <FooterSection />

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default CorporateRetreats;

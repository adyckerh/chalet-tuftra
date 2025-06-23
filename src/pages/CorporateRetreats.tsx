
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CorporateRetreats = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const corporateImages = [
    "/lovable-uploads/07a6cf29-a6a7-4257-8e65-2ba8a0278088.png",
    "/lovable-uploads/2589f8ef-d129-4e6f-ac97-6658575eba2b.png", 
    "/lovable-uploads/12a92a73-6fa3-4be4-be10-2fe2fb3e7e91.png",
    "/lovable-uploads/4bb6b12c-9cbf-4217-b4c6-ce9922453780.png"
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation setIsInquiryOpen={setIsInquiryOpen} />

      {/* Corporate Content - Enhanced Green Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Corporate Retreats</h2>
            <p className="text-emerald-700">Inspire your team in our sophisticated mountain setting with premium meeting spaces and luxury accommodations.</p>
          </div>
          
          {/* Image and Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true
                }}
                className="w-full"
              >
                <CarouselContent>
                  {corporateImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img 
                          src={image} 
                          alt={`Corporate meeting space ${index + 1}`} 
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
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Elevate your corporate events and team building activities in our exclusive mountain chalet. 
                Our sophisticated spaces and inspiring alpine setting provide the perfect environment for 
                strategic planning sessions, executive meetings, and team bonding experiences.
              </p>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Dedicated meeting and conference spaces
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  High speed-internet and a meeting table to accomodate 16 people comfortably
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Catering services and executive dining areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Team building activities and outdoor experiences
                </li>
              </ul>
            </div>
          </div>

          {/* Button at Bottom */}
          <div className="flex justify-center">
            <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
              Plan Corporate Retreat
            </Button>
          </div>
        </div>
      </div>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default CorporateRetreats;

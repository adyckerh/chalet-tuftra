

import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { StoryVision } from "@/components/StoryVision";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Family = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const familyImages = ["/lovable-uploads/861b4521-a0b0-4626-9807-f70c124fba59.png", "/lovable-uploads/5cee333c-729f-4b83-942e-55b0ea89c65b.png", "/lovable-uploads/27ab3278-20aa-4a5e-9e4f-bdcd3865b305.png", "/lovable-uploads/597aa27c-c20d-4cd0-89bb-849c2d9f41fc.png"];
  
  return <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-16 w-auto" />
                <h1 className="text-lg md:text-xl font-bold text-emerald-900">Chalet Tuftra Findelbach</h1>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/amenities" className="text-emerald-900 hover:text-emerald-800 transition-colors text-lg">Amenities</a>
              <a href="/family" className="text-emerald-900 hover:text-emerald-800 transition-colors font-bold text-lg">Family</a>
              <a href="/corporate-retreats" className="text-emerald-900 hover:text-emerald-800 transition-colors text-lg">Corporate Retreats</a>
              <a href="/contact" className="text-emerald-900 hover:text-emerald-800 transition-colors text-lg">Contact</a>
              <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white text-lg" size="sm">
                Make an Inquiry
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Family Content */}
      <div className="max-w-6xl mx-auto py-0 px-0">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-bold text-emerald-900 mb-6 whitespace-nowrap py-2 text-4xl my-[20px]">The perfect getaway for families</h1>
            <div className="space-y-6">
              <p className="text-stone-700 px-[20px] text-base">Our chalet is designed with families in mind, offering spacious living areas, multiple bedrooms, and amenities that cater to guests of all ages. From the youngest guests to grandparents, everyone will find comfort and joy in our chalet.</p>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Multiple family bedrooms with stunning views
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Large common areas for family gatherings
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Child friendly bedroom and amenities such as cinema room
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                  Elevator and step free access for less able guests
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent>
                {familyImages.map((image, index) => <CarouselItem key={index}>
                    <div className="p-1">
                      <img src={image} alt={`Family accommodation ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover" />
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Story & Vision Section */}
      <StoryVision setIsInquiryOpen={setIsInquiryOpen} />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>;
};
export default Family;


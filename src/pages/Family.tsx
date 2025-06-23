
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { StoryVision } from "@/components/StoryVision";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Family = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const familyImages = ["/lovable-uploads/861b4521-a0b0-4626-9807-f70c124fba59.png", "/lovable-uploads/5cee333c-729f-4b83-942e-55b0ea89c65b.png", "/lovable-uploads/27ab3278-20aa-4a5e-9e4f-bdcd3865b305.png", "/lovable-uploads/597aa27c-c20d-4cd0-89bb-849c2d9f41fc.png"];
  
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation setIsInquiryOpen={setIsInquiryOpen} />

      {/* Family Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-6">The perfect getaway for families</h1>
            <div className="space-y-6">
              <p className="text-lg text-stone-700 leading-relaxed">Our chalet is designed with families in mind, offering spacious living areas, multiple bedrooms, and amenities that cater to guests of all ages. From the youngest guests to grandparents, everyone will find comfort and joy in our chalet.</p>
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
        </div>
      </div>

      {/* Story & Vision Section */}
      <StoryVision setIsInquiryOpen={setIsInquiryOpen} />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Family;

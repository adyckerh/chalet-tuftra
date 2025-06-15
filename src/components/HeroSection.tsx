
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface HeroSectionProps {
  images: string[];
  setIsInquiryOpen: (open: boolean) => void;
}

export const HeroSection = ({
  images,
  setIsInquiryOpen,
}: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-screen flex items-end pb-8 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Savor Luxury: Space, Light, Views
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsInquiryOpen(true)}
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 text-lg"
            >
              Reserve your alpine escape
            </Button>
            <Button 
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 text-lg"
              onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')}
            >
              3D virtual walkthrough
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

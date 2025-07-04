
import React, { useEffect, useRef, useState } from "react";

export const HeroSection = ({
  id,
  heading,
  images,
  setIsInquiryOpen,
  onDiscoverMore
}: {
  id?: string;
  heading?: string;
  images: string[];
  setIsInquiryOpen: (open: boolean) => void;
  onDiscoverMore?: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, images.length]);

  return (
    <section id={id} className="relative h-screen w-full overflow-hidden">
      {/* Full-viewport slideshow - Edge to edge */}
      <div className="relative w-full h-full">
        {/* Slideshow Images - Full Edge-to-Edge */}
        {images.map((image, idx) => (
          <img 
            key={idx} 
            src={image} 
            alt={`Chalet Tuftra View ${idx + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`} 
            draggable={false} 
            style={{
              pointerEvents: idx === activeIndex ? "auto" : "none"
            }} 
          />
        ))}

        {/* Content Overlay - Positioned at Bottom, Full Width, Half Height */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 z-20 h-1/2 flex items-end justify-center">
          <div className="w-full h-full flex items-end justify-center pb-2 sm:pb-3 md:pb-4">
            <div className="backdrop-blur-sm absolute inset-x-0 bottom-1 h-35 flex flex-col justify-end items-center rounded-tl-lg bg-[#064e18]/35 px-0 rounded-lg mx-0 py-[10px] my-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg text-center lg:text-6xl">
                {heading || "Savor Luxury: Views, Space, Light"}
              </h1>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onDiscoverMore}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white text-base sm:text-lg font-semibold transition-colors shadow-lg backdrop-blur-sm border border-white/10 bg-emerald-900/90 hover:bg-emerald-800"
                >
                  Discover More
                </button>
                <button 
                  onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-emerald-900/90 text-white text-base sm:text-lg font-semibold hover:bg-emerald-800/90 transition-colors shadow-lg backdrop-blur-sm border border-white/10"
                >
                  Explore 3D Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Right arrow hidden */}
        <button 
          onClick={() => setActiveIndex(prev => (prev + 1) % images.length)} 
          className="hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors" 
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots - Hidden */}
        <div className="hidden absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setActiveIndex(idx)} 
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
              }`} 
              aria-label={`Go to slide ${idx + 1}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

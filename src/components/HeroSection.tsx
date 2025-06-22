
import React, { useEffect, useRef, useState } from "react";
export const HeroSection = ({
  id,
  heading,
  images,
  setIsInquiryOpen
}: {
  id?: string;
  heading?: string;
  images: string[];
  setIsInquiryOpen: (open: boolean) => void;
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
  return <section id={id} className="relative h-screen w-full overflow-hidden">
      {/* Full-viewport slideshow - Edge to edge */}
      <div className="relative w-full h-full">
        {/* Slideshow Images - Full Edge-to-Edge */}
        {images.map((image, idx) => <img key={idx} src={image} alt={`Chalet Tuftra View ${idx + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`} draggable={false} style={{
        pointerEvents: idx === activeIndex ? "auto" : "none"
      }} />)}

        {/* Content Overlay - Positioned at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-center pb-20">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm px-6 py-8 rounded-lg sm:px-[20px] sm:py-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                {heading || "Welcome to Chalet Tuftra"}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 drop-shadow-md leading-relaxed">
                Luxury Alpine Retreat in Zermatt
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 drop-shadow-md">
                Space, view, and light - a family hub with stunning Matterhorn views
              </p>
              
              {/* 3D Tour Link */}
              <a href="https://my.matterport.com/show/?m=VnYcNjgkFQ2" rel="noopener noreferrer" target="_blank" className="inline-block text-white/90 text-base font-semibold underline underline-offset-4 mb-6 hover:text-white transition-all drop-shadow-md">
                Explore 3D Virtual Tour
              </a>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-amber-600/90 text-white text-base sm:text-lg font-semibold hover:bg-amber-500/90 transition-colors shadow-lg backdrop-blur-sm border border-white/10">
                  Discover More
                </button>
                <button onClick={() => setIsInquiryOpen(true)} className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-emerald-900/90 text-white text-base sm:text-lg font-semibold hover:bg-emerald-800/90 transition-colors shadow-lg backdrop-blur-sm border border-white/10">
                  Make an Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Positioned on Edges */}
        
        
        <button onClick={() => setActiveIndex(prev => (prev + 1) % images.length)} className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors" aria-label="Next slide">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots - Positioned at Bottom */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
          {images.map((_, idx) => <button key={idx} onClick={() => setActiveIndex(idx)} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"}`} aria-label={`Go to slide ${idx + 1}`} />)}
        </div>
      </div>
    </section>;
};

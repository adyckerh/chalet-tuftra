
import React, { useEffect, useRef, useState } from "react";

export const HeroSection = ({
  id,
  heading,
  images,
  setIsInquiryOpen,
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
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, images.length]);

  return (
    <section
      id={id}
      className="relative h-screen w-full bg-white overflow-hidden"
      style={{ marginTop: '80px' }}
    >
      {/* Full-viewport slideshow taking remaining screen space */}
      <div className="relative w-full h-full">
        {/* Slideshow Images Full Viewport */}
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
              pointerEvents: idx === activeIndex ? "auto" : "none",
            }}
          />
        ))}

        {/* Overlay content centered on the image */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-8 py-12 max-w-4xl mx-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {heading || "Welcome to Chalet Tuftra"}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md leading-relaxed">
              Luxury Alpine Retreat in Zermatt
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Space, view, and light - a family hub with stunning Matterhorn views
            </p>
            {/* 3D Tour Link */}
            <a
              href="https://my.matterport.com/show/?m=VnYcNjgkFQ2"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block text-white/90 text-base font-semibold underline underline-offset-4 mb-6 hover:text-white transition-all drop-shadow-md"
            >
              Explore 3D Virtual Tour
            </a>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-amber-600/90 text-white text-lg font-semibold hover:bg-amber-500/90 transition-colors shadow-lg backdrop-blur-sm border border-white/10">
                Discover More
              </button>
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="px-8 py-4 rounded-xl bg-emerald-900/90 text-white text-lg font-semibold hover:bg-emerald-800/90 transition-colors shadow-lg backdrop-blur-sm border border-white/10"
              >
                Make an Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Navigation dots - positioned at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? "bg-white scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

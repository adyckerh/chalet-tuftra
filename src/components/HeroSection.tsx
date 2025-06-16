
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

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <section
      id={id}
      className="relative h-screen w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Full-viewport slideshow */}
      <div className="relative w-full h-full select-none flex items-end justify-center overflow-hidden">
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

        {/* Fixed transparent caption box at bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
          <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-6 md:px-8 md:py-8 text-center pointer-events-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
              {heading || "Savor Luxury: Space, Light, Views"}
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 drop-shadow-md">
              Experience the perfect harmony of space, view, and light at Chalet Tuftra – your exclusive gateway to Matterhorn magic
            </p>
            {/* 3D Tour Link */}
            <a
              href="https://my.matterport.com/show/?m=VnYcNjgkFQ2"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block text-white/90 text-sm md:text-base font-semibold underline underline-offset-4 mb-4 hover:text-white transition-all drop-shadow-md"
            >
              Explore 3D Virtual Tour
            </a>
            {/* CTA Button */}
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="px-6 py-3 rounded-xl bg-emerald-900/90 text-white text-sm md:text-base font-semibold hover:bg-emerald-800/90 transition-colors shadow-lg backdrop-blur-sm border border-white/10"
            >
              Reserve Your Alpine Escape
            </button>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-20 md:bottom-24 left-0 right-0 flex justify-center space-x-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                idx === activeIndex
                  ? "bg-white scale-110 shadow-lg"
                  : "bg-white/50 border border-white/70 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${idx + 1}`}
              style={{ outline: "none" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

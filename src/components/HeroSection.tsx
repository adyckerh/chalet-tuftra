
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
      className="relative min-h-[80vh] bg-white flex items-center justify-center pt-28 mb-6"
    >
      <div className="relative w-full max-w-4xl mx-auto h-96 md:h-[48rem] select-none flex items-center justify-center">
        {/* Slideshow Images */}
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Chalet Tuftra View ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
              idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            draggable={false}
            style={{ pointerEvents: idx === activeIndex ? "auto" : "none" }}
          />
        ))}

        {/* Overlay Box at the bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[96%] max-w-2xl">
          <div className="flex flex-col items-center justify-center bg-white/75 bg-blur-md border border-emerald-900 rounded-2xl shadow-xl px-4 py-4 md:px-6 md:py-6 text-center animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.10)]">
              {heading || "Where Luxury Meets Alpine Authenticity"}
            </h1>
            <p className="text-base md:text-lg text-stone-700 max-w-lg mx-auto mb-4 md:mb-5">
              Experience the perfect harmony of space, view, and light at Chalet Tuftra – your exclusive gateway to Matterhorn magic
            </p>
            {/* 3D Tour Link */}
            <a
              href="https://my.matterport.com/show/?m=VnYcNjgkFQ2"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block text-emerald-900 text-sm md:text-base font-semibold underline underline-offset-4 mb-3 hover:text-emerald-800 hover-scale transition-all"
            >
              Explore 3D Virtual Tour
            </a>
            {/* CTA Button */}
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="px-5 py-2 rounded-xl bg-emerald-900 text-white text-base font-semibold hover:bg-emerald-800 transition-colors shadow-lg"
            >
              Reserve Your Alpine Escape
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                idx === activeIndex
                  ? "bg-emerald-900 scale-110"
                  : "bg-white/70 border border-emerald-900"
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

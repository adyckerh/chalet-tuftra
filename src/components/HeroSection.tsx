import React from "react";

// Add `id` and `heading` props for anchor and heading control
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
}) => (
  <section id={id} className="relative min-h-[80vh] bg-white flex flex-col items-center justify-center pt-28 mb-6">
    <div className="w-full max-w-4xl text-center mx-auto mb-12 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 mb-6 leading-tight">
        {heading || "Where Luxury Meets Alpine Authenticity"}
      </h1>
      <p className="text-xl text-stone-700 max-w-xl mx-auto mb-8">
        Experience the perfect harmony of space, view, and light at Chalet Tuftra - your exclusive gateway to Matterhorn magic
      </p>
      <button
        onClick={() => setIsInquiryOpen(true)}
        className="px-8 py-4 rounded-xl bg-emerald-900 text-white text-lg font-semibold hover:bg-emerald-800 transition-colors shadow-lg"
      >
        Reserve Your Alpine Escape
      </button>
    </div>
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex overflow-x-auto snap-x snap-mandatory">
        {images.map((image, index) => (
          <div key={index} className="snap-start shrink-0 w-full h-96 md:h-[48rem] relative">
            <img
              src={image}
              alt={`Chalet Tuftra View ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

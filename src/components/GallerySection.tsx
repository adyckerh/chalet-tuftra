
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryCategory {
  title: string;
  description: string;
  images: string[];
}

export const GallerySection = ({
  id,
  categories,
  heading,
  subheading,
}: {
  id?: string;
  categories: GalleryCategory[];
  heading?: string;
  subheading?: string;
}) => (
  <section id={id} className="py-20 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-emerald-900 mb-6">
          {heading || "A chalet that accommodates to every desire"}
        </h2>
        <p className="text-xl text-stone-600 max-w-4xl mx-auto">
          {subheading ||
            "From intimate retreats to grand gatherings, our chalet offers thoughtfully designed spaces that cater to every moment of your Alpine adventure."}
        </p>
      </div>
      <div className="space-y-16">
        {categories.map((category, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <h3 className="text-3xl font-bold text-emerald-900">{category.title}</h3>
              <p className="text-stone-600 leading-relaxed text-lg">
                {category.description}
              </p>
            </div>
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {category.images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                        <img 
                          src={image}
                          alt={`${category.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;


import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface GalleryCategory {
  title: string;
  description: string;
  images: string[];
}

interface GallerySectionProps {
  id?: string;
  categories: GalleryCategory[];
}

export const GallerySection = ({ id, categories }: GallerySectionProps): JSX.Element => {
  return (
    <section id={id} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{category.title}</h3>
                <p className="text-lg text-stone-600 max-w-4xl mx-auto">{category.description}</p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {category.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <img
                            src={image}
                            alt={`${category.title} ${imageIndex + 1}`}
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

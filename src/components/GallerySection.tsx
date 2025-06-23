
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface GalleryCategory {
  title: string;
  description: string;
  images: string[];
}

export const GallerySection = ({
  id,
  categories
}: {
  id?: string;
  categories: GalleryCategory[];
}): JSX.Element => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-900 mb-4">{category.title}</h3>
              <p className="text-lg text-emerald-700 max-w-3xl mx-auto">{category.description}</p>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-12">
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {category.images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${category.title} ${imageIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

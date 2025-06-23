
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Section, Container, ContentBlock } from "@/components/ui/Layout";
import { H3, BodyLarge } from "@/components/ui/Typography";

interface GalleryCategory {
  title: string;
  description: string;
  images: string[];
}

export const GallerySection = ({
  id,
  categories = []
}: {
  id?: string;
  categories: GalleryCategory[];
}): JSX.Element => {
  // Add safety check to prevent undefined error
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <Section id={id} background="primary">
      <Container>
        {categories.map((category, categoryIndex) => (
          <ContentBlock key={categoryIndex}>
            <div className="text-center mb-8">
              <H3 className="mb-4 py-0">{category.title}</H3>
              <BodyLarge className="text-emerald-700 max-w-3xl mx-auto">{category.description}</BodyLarge>
            </div>
            
            <div className="relative">
              <Carousel opts={{
                align: "start",
                loop: true
              }} className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {category.images.map((image, imageIndex) => (
                    <CarouselItem key={imageIndex} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                          <img src={image} alt={`${category.title} ${imageIndex + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 border-emerald-200" />
              </Carousel>
            </div>
          </ContentBlock>
        ))}
      </Container>
    </Section>
  );
};

export default GallerySection;

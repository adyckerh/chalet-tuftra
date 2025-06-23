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
}) => {};
export default GallerySection;

// Common interface definitions for the application

export interface BaseComponent {
  id?: string;
  className?: string;
}

export interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

export interface GalleryCategory {
  title: string;
  description: string;
  images: string[];
}

export interface Review {
  text: string;
  author: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
}

export interface Breadcrumb {
  name: string;
  item: string;
}

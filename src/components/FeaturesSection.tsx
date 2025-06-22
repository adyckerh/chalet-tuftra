import React from "react";
interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

// Add id prop for scroll anchor
export const FeaturesSection = ({
  id,
  features
}: {
  id?: string;
  features: Feature[];
}) => <section id={id} className="bg-white py-[15px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Our Chalet Philosophy
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-12">
          Space, Light, and Views - the fundamental elements that make Chalet Tuftra a place where every guest 
          can retreat to beautiful rooms while enjoying generous shared spaces for unforgettable experiences.
        </p>
        
        {/* Features wrapper with flex utilities positioned close beneath the text */}
        <div className="flex flex-col md:flex-row gap-8 -mt-6">
          {features.map((feature, index) => <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 transition-transform">
                <img src={feature.iconSrc} alt={feature.title} className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </div>
  </section>;
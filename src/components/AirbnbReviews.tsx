
import React from "react";

export const AirbnbReviews = () => (
  <section className="py-20 bg-stone-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          What Our Guests Say
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          Read authentic reviews from families and guests who have experienced the magic of Chalet Tuftra.
        </p>
      </div>
      
      {/* Elfsight Airbnb Reviews Widget */}
      <div className="w-full">
        <iframe 
          src="https://b8eeec20598b434b9d04dca2f924885c.elf.site" 
          width="100%" 
          height="600" 
          frameBorder="0"
          title="Airbnb Reviews"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);

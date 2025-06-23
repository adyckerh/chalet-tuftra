
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface AirbnbReviewsProps {
  setIsInquiryOpen?: (open: boolean) => void;
}

// Reviews data from the actual Airbnb listing
const reviews = [
  {
    id: 1,
    reviewer_name: "Vera",
    reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/82df9389-aeb6-4de6-95b2-d67a9d64b3fd.jpg",
    rating: 5,
    text: "We had a fantastic stay in Chalet Tuftra. It was spotlessly clean and had everything you could possibly need. The host",
    fullText: "We had a fantastic stay in Chalet Tuftra. It was spotlessly clean and had everything you could possibly need. The host and the ground team is nice and responsive during our stay. They came to the chalet to make sure everything is fine when we first arrived and when we checked out. Would definitely recommend this place for everyone who comes to Zermatt.",
    published_at: "July 1, 2022"
  },
  {
    id: 2,
    reviewer_name: "Faisal",
    reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/eb00eba5-3514-4f25-8d8d-d34e045c233e.jpg",
    rating: 5,
    text: "Beautiful chalet, with nice gadgets all around. Great concierge and cleaning. Truly exceeded our",
    fullText: "Beautiful chalet, with nice gadgets all around. Great concierge and cleaning. Truly exceeded our expectations",
    published_at: "August 2, 2021"
  },
  {
    id: 3,
    reviewer_name: "Antonius",
    reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/01d3897e-fd36-4094-bbbc-19379ed08c6b.jpg",
    rating: 5,
    text: "Amazing Place! Amazing staff! Excellent Food 🍘 Loved it 🙌",
    fullText: "Amazing Place! Amazing staff! Excellent Food 🍘 Loved it 🙌",
    published_at: "March 29, 2021"
  }
];

export const AirbnbReviews = ({ setIsInquiryOpen }: AirbnbReviewsProps) => {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const toggleReadMore = (reviewId: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId);
    } else {
      newExpanded.add(reviewId);
    }
    setExpandedReviews(newExpanded);
  };

  const handleAirbnbClick = () => {
    window.open("https://www.airbnb.com/rooms/43483173", "_blank");
  };

  return (
    <section className="bg-stone-50 py-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            What Our Guests Say
          </h2>
        </div>
        
        {/* Airbnb Widget Style Container */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-16 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF5A5F] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                  <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm0 2.8c6.7 0 12.2 5.5 12.2 12.2S22.7 28.2 16 28.2 3.8 22.7 3.8 16 9.3 3.8 16 3.8z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">airbnb</span>
              <span className="text-lg text-gray-600">Reviews</span>
            </div>
            <Button 
              onClick={handleAirbnbClick}
              className="bg-[#1976D2] hover:bg-[#1565C0] text-white px-6 py-2 rounded-lg"
            >
              Review us on Airbnb
            </Button>
          </div>

          {/* Rating Summary */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-4xl font-bold text-gray-900">5.0</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 ml-2">(4)</span>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => {
              const isExpanded = expandedReviews.has(review.id);
              const showReadMore = review.text !== review.fullText;
              
              return (
                <div key={review.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  {/* Reviewer Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <img 
                      src={review.reviewer_picture_url} 
                      alt={review.reviewer_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{review.reviewer_name}</h4>
                      <p className="text-sm text-gray-500">{review.published_at}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <div className="text-gray-700 leading-relaxed">
                    <p>{isExpanded ? review.fullText : review.text}</p>
                    {showReadMore && (
                      <button
                        onClick={() => toggleReadMore(review.id)}
                        className="text-gray-500 hover:text-gray-700 mt-2 text-sm font-medium"
                      >
                        {isExpanded ? "" : "Read more"}
                      </button>
                    )}
                  </div>

                  {/* Airbnb Logo */}
                  <div className="flex justify-end mt-4">
                    <div className="flex items-center gap-1 text-[#FF5A5F]">
                      <div className="w-4 h-4 bg-[#FF5A5F] rounded flex items-center justify-center">
                        <svg viewBox="0 0 32 32" className="w-3 h-3 fill-white">
                          <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm0 2.8c6.7 0 12.2 5.5 12.2 12.2S22.7 28.2 16 28.2 3.8 22.7 3.8 16 9.3 3.8 16 3.8z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">airbnb</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-4 border-emerald-700 bg-emerald-50 rounded-2xl px-6 py-12 shadow-lg">
            <p className="text-xl mb-10 leading-relaxed text-stone-700">
              Join our family of satisfied guests and experience the magic of Chalet Tuftra yourself.
            </p>
            {setIsInquiryOpen && (
              <Button 
                size="lg" 
                onClick={() => setIsInquiryOpen(true)} 
                className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 text-lg"
              >
                Book Your Stay
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

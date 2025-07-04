
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Section, Container } from "@/components/ui/Layout";

interface AirbnbReviewsProps {
  setIsInquiryOpen?: (open: boolean) => void;
}

// Reviews data from the actual Airbnb listing
const reviews = [{
  id: 1,
  reviewer_name: "Vera",
  reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/82df9389-aeb6-4de6-95b2-d67a9d64b3fd.jpg",
  rating: 5,
  text: "We had a fantastic stay in Chalet Tuftra. It was spotlessly clean and had everything you could possibly need. The host",
  fullText: "We had a fantastic stay in Chalet Tuftra. It was spotlessly clean and had everything you could possibly need. The host and the ground team is nice and responsive during our stay. They came to the chalet to make sure everything is fine when we first arrived and when we checked out. Would definitely recommend this place for everyone who comes to Zermatt.",
  published_at: "July 1, 2022"
}, {
  id: 2,
  reviewer_name: "Faisal",
  reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/eb00eba5-3514-4f25-8d8d-d34e045c233e.jpg",
  rating: 5,
  text: "Beautiful chalet, with nice gadgets all around. Great concierge and cleaning. Truly exceeded our",
  fullText: "Beautiful chalet, with nice gadgets all around. Great concierge and cleaning. Truly exceeded our expectations",
  published_at: "August 2, 2021"
}, {
  id: 3,
  reviewer_name: "Antonius",
  reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/01d3897e-fd36-4094-bbbc-19379ed08c6b.jpg",
  rating: 5,
  text: "Amazing Place! Amazing staff! Excellent Food 🍘 Loved it 🙌",
  fullText: "Amazing Place! Amazing staff! Excellent Food 🍘 Loved it 🙌",
  published_at: "March 29, 2021"
}];

export const AirbnbReviews = ({
  setIsInquiryOpen
}: AirbnbReviewsProps) => {
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
    <Section background="secondary">
      <Container>
        {/* Green CTA Container */}
        <div className="border-4 border-emerald-700 bg-emerald-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 mb-2">
              What our guests say
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-stone-700 mb-4">Join our family of satisfied guests and experience the charm of Chalet Tuftra yourself.</p>
          </div>
          
          {/* Airbnb Widget Style Container */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-4 max-w-6xl mx-auto">
            {/* Header with Logo, Rating and Button - Made Responsive */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                {/* Airbnb Logo */}
                <img src="/lovable-uploads/2ca3668b-8983-41aa-83bb-bf7d96db0330.png" alt="Airbnb" className="h-6 sm:h-8 w-auto" />
                
                {/* Rating Summary */}
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">5.0</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              
              <Button onClick={handleAirbnbClick} className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 rounded-lg text-base sm:text-lg lg:text-xl bg-[#ff5a5f] hover:bg-[#e04e52] whitespace-nowrap">
                <span className="hidden sm:inline">Review us on Airbnb</span>
                <span className="sm:hidden">Review on Airbnb</span>
              </Button>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {reviews.map(review => {
                const isExpanded = expandedReviews.has(review.id);
                const showReadMore = review.text !== review.fullText;
                return (
                  <div key={review.id} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                    {/* Reviewer Info */}
                    <div className="flex items-start gap-3 mb-3">
                      <img src={review.reviewer_picture_url} alt={review.reviewer_name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.reviewer_name}</h4>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    
                    {/* Review Text */}
                    <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      <p>{isExpanded ? review.fullText : review.text}</p>
                      {showReadMore && (
                        <button 
                          onClick={() => toggleReadMore(review.id)} 
                          className="text-gray-500 hover:text-gray-700 mt-2 text-xs sm:text-sm font-medium"
                        >
                          {isExpanded ? "Hide" : "Read more"}
                        </button>
                      )}
                    </div>

                    {/* Airbnb Logo */}
                    <div className="flex justify-end mt-3">
                      <div className="flex items-center gap-1 text-[#FF5A5F]">
                        
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Book Your Stay Button */}
          <div className="text-center">
            {setIsInquiryOpen && (
              <Button 
                size="lg" 
                onClick={() => setIsInquiryOpen(true)} 
                className="w-full sm:w-auto bg-emerald-900 hover:bg-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Book your stay today
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

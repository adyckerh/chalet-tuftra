
import React from "react";
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
    text: "We had a fantastic stay in Chalet Tuftra. It was spotlessly clean and had everything you could possibly need. The host and the ground team is nice and responsive during our stay. They came to the chalet to make sure everything is fine when we first arrived and when we checked out. Would definitely recommend this place for everyone who comes to Zermatt.",
    published_at: "July 2022"
  },
  {
    id: 2,
    reviewer_name: "Faisal",
    reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/eb00eba5-3514-4f25-8d8d-d34e045c233e.jpg",
    rating: 5,
    text: "Beautiful chalet, with nice gadgets all around. Great concierge and cleaning. Truly exceeded our expectations",
    published_at: "August 2021"
  },
  {
    id: 3,
    reviewer_name: "Antonius",
    reviewer_picture_url: "https://a0.muscache.com/im/pictures/user/01d3897e-fd36-4094-bbbc-19379ed08c6b.jpg",
    rating: 5,
    text: "Amazing Place! Amazing staff! Excellent Food 🥘 Loved it 🙌",
    published_at: "March 2021"
  }
];

const propertyStats = {
  rating: 5.0,
  reviewsCount: 4,
  location: "Zermatt, Switzerland",
  propertyType: "Entire chalet • 7 bedrooms • 9 beds • 8 baths"
};

export const AirbnbReviews = ({ setIsInquiryOpen }: AirbnbReviewsProps) => {
  return (
    <section className="bg-stone-50 py-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            What Our Guests Say
          </h2>
        </div>
        
        {/* Property Overview */}
        <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-stone-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Chalet Tuftra</h3>
              <p className="text-stone-600">{propertyStats.propertyType}</p>
              <p className="text-stone-500">{propertyStats.location}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-stone-900">{propertyStats.rating}</span>
              </div>
              <p className="text-stone-600">{propertyStats.reviewsCount} reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              {/* Reviewer Info */}
              <div className="flex items-start gap-3 mb-4">
                <img 
                  src={review.reviewer_picture_url} 
                  alt={review.reviewer_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-stone-900">{review.reviewer_name}</h4>
                  <p className="text-sm text-stone-500">{review.published_at}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-stone-300'}`} 
                  />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-stone-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
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

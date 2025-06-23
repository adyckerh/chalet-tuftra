import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
interface AirbnbReviewsProps {
  setIsInquiryOpen?: (open: boolean) => void;
}
export const AirbnbReviews = ({
  setIsInquiryOpen
}: AirbnbReviewsProps) => {
  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return <section className="bg-stone-50 py-[15px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            What Our Guests Say
          </h2>
          
        </div>
        
        {/* Elfsight Airbnb Reviews Widget */}
        <div className="w-full mb-16">
          <div className="elfsight-app-b8eeec20-598b-434b-9d04-dca2f924885c" data-elfsight-app-lazy></div>
        </div>

        {/* CTA Section moved below the widget */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-4 border-emerald-700 bg-emerald-50 rounded-2xl px-6 py-12 shadow-lg">
            <p className="text-xl mb-10 leading-relaxed text-stone-700">
              Join our family of satisfied guests and experience the magic of Chalet Tuftra yourself.
            </p>
            {setIsInquiryOpen && <Button size="lg" onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 text-lg">
                Book Your Stay
              </Button>}
          </div>
        </div>
      </div>
    </section>;
};

import { Button } from "@/components/ui/button";
import { ReviewsSection } from "./ReviewsSection";

export const CtaSection = ({ setIsInquiryOpen }: { setIsInquiryOpen: (open: boolean) => void }) => (
  <>
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-emerald-700 bg-emerald-50 rounded-2xl px-6 py-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-emerald-900">Ready to Experience Chalet Tuftra?</h2>
          <p className="text-xl mb-10 leading-relaxed text-stone-700">
            Join our family of guests who have discovered the perfect blend of luxury, nature, and togetherness. 
            Create your own unforgettable memories in our light-filled Alpine sanctuary.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsInquiryOpen(true)}
            className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-4 text-lg"
          >
            Make Your Inquiry Today
          </Button>
        </div>
      </div>
    </section>
    <ReviewsSection />
  </>
);

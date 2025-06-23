
import { Button } from "@/components/ui/button";

export const CtaSection = ({
  setIsInquiryOpen
}: {
  setIsInquiryOpen: (open: boolean) => void;
}): JSX.Element => {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-emerald-900 mb-6">Ready to Experience Chalet Tuftra?</h2>
        <p className="text-xl text-emerald-700 mb-8">
          Book your unforgettable Alpine retreat and create memories that will last a lifetime.
        </p>
        <Button 
          onClick={() => setIsInquiryOpen(true)} 
          className="bg-emerald-900 hover:bg-emerald-800 text-white text-lg px-8 py-3"
        >
          Make an Inquiry
        </Button>
      </div>
    </section>
  );
};

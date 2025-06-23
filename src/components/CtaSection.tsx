
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  setIsInquiryOpen: (open: boolean) => void;
}

export const CtaSection = ({ setIsInquiryOpen }: CtaSectionProps): JSX.Element => {
  return (
    <section className="bg-emerald-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Experience Chalet Tuftra?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
          Book your unforgettable stay in the heart of the Swiss Alps and create memories that will last a lifetime.
        </p>
        <Button 
          onClick={() => setIsInquiryOpen(true)}
          size="lg"
          className="bg-white text-emerald-900 hover:bg-stone-100 px-8 py-4 text-lg font-semibold"
        >
          Make an Inquiry
        </Button>
      </div>
    </section>
  );
};


import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { LocationSection } from "@/components/LocationSection";

const Contact = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation setIsInquiryOpen={setIsInquiryOpen} />

      {/* Inquiry Form at top */}
      <div className="bg-emerald-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Get in Touch</h2>
            <p className="text-emerald-700">Ready to plan your mountain getaway? Contact us directly or submit an inquiry below.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
              Submit Inquiry
            </Button>
            <Button 
              onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')}
              variant="outline" 
              className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
            >
              Explore 3D Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <LocationSection id="contact" />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Contact;

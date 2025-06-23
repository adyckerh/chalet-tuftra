
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { LocationSection } from "@/components/LocationSection";
import { FooterSection } from "@/components/FooterSection";
import { SEOHead } from "@/components/SEOHead";

const Contact = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Contact Us - Luxury Chalet Rental Zermatt"
        description="Contact Chalet Tuftra for your luxury Alpine getaway in Zermatt. Premium mountain accommodation with Matterhorn views. Submit inquiry or explore our 3D virtual tour."
        canonical="https://chalettuftra.com/contact"
        keywords="contact chalet Zermatt, luxury chalet booking, Matterhorn views accommodation, Swiss Alps rental inquiry"
      />
      
      <div className="min-h-screen bg-stone-50">
        <Navigation setIsInquiryOpen={setIsInquiryOpen} />

        <LocationSection id="contact" />

        <FooterSection />

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default Contact;

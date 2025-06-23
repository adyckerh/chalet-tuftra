
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { LocationSection } from "@/components/LocationSection";
import { Section, Container } from "@/components/ui/Layout";
import { H2, BodyBase } from "@/components/ui/Typography";
import { SEOHead } from "@/components/SEOHead";
import { EXTERNAL_URLS } from "@/utils/constants";

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

        <Section background="accent">
          <Container>
            <div className="text-center mb-12">
              <H2 className="mb-6">Get in Touch</H2>
              <BodyBase className="text-emerald-700 mb-8">Ready to plan your mountain getaway? Contact us directly or submit an inquiry below.</BodyBase>
            </div>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
                Submit Inquiry
              </Button>
              <Button 
                onClick={() => window.open(EXTERNAL_URLS.VIRTUAL_TOUR, '_blank')}
                variant="outline" 
                className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
              >
                Explore 3D Virtual Tour
              </Button>
            </div>
          </Container>
        </Section>

        <LocationSection id="contact" />

        <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
      </div>
    </>
  );
};

export default Contact;

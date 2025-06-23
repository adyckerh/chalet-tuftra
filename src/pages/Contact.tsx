
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { LocationSection } from "@/components/LocationSection";
import { Section, Container } from "@/components/ui/Layout";
import { H2, BodyBase } from "@/components/ui/Typography";

const Contact = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation setIsInquiryOpen={setIsInquiryOpen} />

      {/* Inquiry Form at top */}
      <Section background="accent">
        <Container>
          <div className="text-center mb-6">
            <H2 className="text-emerald-900 mb-2">Get in Touch</H2>
            <BodyBase className="text-emerald-700">Ready to plan your mountain getaway? Contact us directly or submit an inquiry below.</BodyBase>
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
        </Container>
      </Section>

      {/* Contact Content */}
      <LocationSection id="contact" />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Contact;

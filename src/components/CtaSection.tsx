
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/Layout";
import { H2, BodyLarge } from "@/components/ui/Typography";

interface CtaSectionProps {
  setIsInquiryOpen: (open: boolean) => void;
}

export const CtaSection = ({ setIsInquiryOpen }: CtaSectionProps) => {
  return (
    <Section background="accent">
      <Container>
        <div className="text-center">
          <H2 className="mb-6">Ready to Experience Chalet Tuftra?</H2>
          <BodyLarge className="max-w-2xl mx-auto mb-8 text-emerald-700">
            Begin your journey to the Swiss Alps and create unforgettable memories 
            at our luxury chalet with breathtaking Matterhorn views.
          </BodyLarge>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setIsInquiryOpen(true)}
              className="bg-emerald-900 hover:bg-emerald-800 text-white"
            >
              Make an Inquiry
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')}
              className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
            >
              Virtual Tour
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

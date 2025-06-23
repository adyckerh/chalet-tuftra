
import { Mountain, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container, ContentGrid } from "@/components/ui/Layout";
import { H2, BodyLarge, BodyBase, H4 } from "@/components/ui/Typography";

interface LocationSectionProps {
  id?: string;
}

export const LocationSection = ({ id }: LocationSectionProps) => {
  const handleMapClick = () => {
    window.open(
      'https://www.google.com/maps/place/Chalet+Tuftra+Findelbach/@46.0117737,7.7433436,17z/data=!3m1!4b1!4m6!3m5!1s0x478f35b314ba925f:0xa18bb3cca3c5d433!8m2!3d46.0117737!4d7.7459185!16s%2Fg%2F11shjq8_7j?entry=ttu&g_ep=EgoyMDI1MDYxMS.wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    );
  };

  return (
    <Section id={id} background="secondary">
      <Container>
        <div className="text-center mb-16">
          <H2 className="mb-6">Find Us in Zermatt</H2>
          <BodyLarge className="max-w-3xl mx-auto text-stone-600">
            Nestled in the heart of Zermatt with breathtaking views of the Matterhorn and the sound of the Findelbach stream.
          </BodyLarge>
        </div>
        
        <ContentGrid>
          <div>
            <div 
              className="rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow group"
              onClick={handleMapClick}
            >
              <img 
                src="/lovable-uploads/85d6e6c5-dee7-470d-8942-1a2db8e7b9f3.png"
                alt="Chalet Tuftra Findelbach Location Map - Click to open in Google Maps"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
              <div>
                <H4 className="mb-2">Prime Zermatt Location</H4>
                <BodyBase className="text-stone-600 mb-0">
                  Located in one of Zermatt's most coveted areas, our chalet offers easy access to ski lifts, 
                  hiking trails, and the charming village center while maintaining a peaceful, private atmosphere.
                </BodyBase>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mountain className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
              <div>
                <H4 className="mb-2">Unobstructed Mountain Views</H4>
                <BodyBase className="text-stone-600 mb-0">
                  Wake up to the magnificent Matterhorn right outside your window, with the soothing sounds 
                  of the Findelbach stream creating a natural symphony throughout your stay.
                </BodyBase>
              </div>
            </div>
            
            <Button 
              size="lg"
              onClick={handleMapClick}
              className="bg-emerald-700 hover:bg-emerald-600 text-white"
            >
              View on Google Maps
            </Button>
          </div>
        </ContentGrid>
      </Container>
    </Section>
  );
};

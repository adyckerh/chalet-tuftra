
import React from "react";
import { Section, Container } from "@/components/ui/Layout";
import { H2, H3, BodyLarge, BodyBase, ServiceDescription } from "@/components/ui/Typography";

interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}

export const FeaturesSection = ({
  id,
  features
}: {
  id?: string;
  features: Feature[];
}) => (
  <Section id={id} background="primary">
    <Container>
      <div className="text-center mb-12">
        <H2 className="mb-4">
          Our Chalet Philosophy
        </H2>
        <BodyLarge className="max-w-3xl mx-auto mb-6">
          Space, Light, and Views - the fundamental elements that make Chalet Tuftra a place where every guest 
          can retreat to beautiful rooms while enjoying generous shared spaces for unforgettable experiences.
        </BodyLarge>
        
        <ServiceDescription className="max-w-3xl mx-auto mb-12">
          {/* Empty children since the text is hardcoded in the component */}
        </ServiceDescription>
        
        {/* Features wrapper with flex utilities positioned close beneath the text */}
        <div className="flex flex-col md:flex-row gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 transition-transform">
                <img src={feature.iconSrc} alt={feature.title} className="w-24 h-24" />
              </div>
              <H3 className="mb-4">{feature.title}</H3>
              <BodyBase className="leading-relaxed">{feature.description}</BodyBase>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

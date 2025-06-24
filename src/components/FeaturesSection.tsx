
import React from "react";
import { Section, Container } from "@/components/ui/Layout";
import { H2, H3, BodyLarge, BodyBase } from "@/components/ui/Typography";

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
      <div className="text-center mb-6">
        <H2 className="mb-6">
          Our Chalet Philosophy
        </H2>
        <BodyLarge className="mb-3">
          Space, Light, and Views - the fundamental elements that make Chalet Tuftra a place where every guest 
          can retreat to beautiful rooms while enjoying generous shared spaces for unforgettable experiences.
        </BodyLarge>
        
        <BodyLarge className="mb-6">
          Choose the level of service that suits you - from a fully catered, ultra-luxury dining experience to a hands-on cook-together stay. Housekeeping and cleaning services mean you can enjoy a completely "no-worries" package.
        </BodyLarge>
        
        {/* Features wrapper with tighter spacing */}
        <div className="flex flex-col md:flex-row gap-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-3 group-hover:scale-110 transition-transform">
                <img src={feature.iconSrc} alt={feature.title} className="w-18 h-18" />
              </div>
              <H3 className="mb-2">{feature.title}</H3>
              <BodyBase className="leading-relaxed">{feature.description}</BodyBase>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

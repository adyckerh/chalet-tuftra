
import React from "react";
import { Button } from "@/components/ui/button";
import { Section, Container, ContentGrid } from "@/components/ui/Layout";
import { H2, BodyBase } from "@/components/ui/Typography";

interface StoryVisionProps {
  setIsInquiryOpen: (open: boolean) => void;
}

export const StoryVision = ({ setIsInquiryOpen }: StoryVisionProps) => (
  <Section background="primary">
    <Container>
      <ContentGrid>
        <div>
          <H2 className="mb-6">
            Our Story
          </H2>
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <BodyBase>
              We are pleased that you have found your way here and wish you wonderful holidays. 
              After 17 years living in Shanghai and Hong Kong, we returned to Switzerland and now live 
              next to Lake Lucerne with our family of 5 children.
            </BodyBase>
            <BodyBase>
              Our goal at Chalet Tuftra was to combine the fascinating view of the Matterhorn with 
              the view of the rushing Findelbach. We believe that a chalet should not be dark but 
              flooded with light, creating spaces where every guest can retreat to a beautiful room 
              while also enjoying generous shared experiences.
            </BodyBase>
            <BodyBase>
              We designed Chalet Tuftra to be our "Family Hub" - a place where we want our children 
              and their families to return again and again, and where they and we will always enjoy 
              spending time together and with friends. We hope that you will find it equally fulfilling.
            </BodyBase>
          </div>
          <Button size="lg" onClick={() => setIsInquiryOpen(true)} className="mt-8 bg-emerald-900 hover:bg-emerald-800 text-white">
            Begin Your Journey
          </Button>
        </div>
        <div className="relative self-stretch">
          <img src="/lovable-uploads/f5836598-b10f-4074-acad-8d6d7569ff16.png" alt="Our family at a beautiful temple location" className="rounded-lg shadow-2xl h-full object-cover" />
        </div>
      </ContentGrid>
    </Container>
  </Section>
);


import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/Layout";
import { H2, BodyLarge, BodyBase } from "@/components/ui/Typography";

interface Review {
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    text: '"A beautiful chalet with first-class amenities. Outstanding service and attentive care. The location suited us perfectly too—slightly outside the village center, yet wonderfully quiet."',
    author: "Verified Airbnb Guest"
  },
  {
    text: '"Lovely chalet, equipped with quality appliances all around. Fantastic concierge and housekeeping. Truly exceeded our expectations."',
    author: "Verified Airbnb Guest"
  },
  {
    text: '"Amazing accommodation! Incredible staff! Excellent food—loved it! 🙌"',
    author: "Verified Airbnb Guest"
  }
];

interface ReviewsSectionProps {
  setIsInquiryOpen?: (open: boolean) => void;
}

export const ReviewsSection = ({ setIsInquiryOpen }: ReviewsSectionProps) => (
  <Section background="secondary">
    <Container>
      <div className="text-center">
        <H2 className="mb-4">What Our Guests Say</H2>
        <BodyLarge className="max-w-2xl mx-auto mb-12 text-stone-600">
          Discover why guests return again and again to create lasting memories at Chalet Tuftra.
        </BodyLarge>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="flex justify-center mb-4 text-2xl text-yellow-400">
                {"★★★★★"}
              </div>
              <blockquote className="italic text-stone-800 mb-4">
                <BodyBase className="mb-0">{review.text}</BodyBase>
              </blockquote>
              <div className="text-stone-500 text-sm font-medium">{review.author}</div>
            </div>
          ))}
        </div>
        
        <BodyBase className="text-stone-700 mb-6">
          Join our family of satisfied guests and experience the magic of Chalet Tuftra yourself.
        </BodyBase>
        
        {setIsInquiryOpen && (
          <Button 
            size="lg" 
            onClick={() => setIsInquiryOpen(true)}
            className="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-8 py-4"
          >
            Book Your Stay
          </Button>
        )}
      </div>
    </Container>
  </Section>
);

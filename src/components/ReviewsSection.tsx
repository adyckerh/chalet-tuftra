
import { Button } from "@/components/ui/button";

const reviews = [
  {
    text: '“A beautiful chalet with first-class amenities. Outstanding service and attentive care. The location suited us perfectly too—slightly outside the village center, yet wonderfully quiet.”',
    author: "Verified Airbnb Guest"
  },
  {
    text: '“Lovely chalet, equipped with quality appliances all around. Fantastic concierge and housekeeping. Truly exceeded our expectations.”',
    author: "Verified Airbnb Guest"
  },
  {
    text: '“Amazing accommodation! Incredible staff! Excellent food—loved it! 🙌”',
    author: "Verified Airbnb Guest"
  }
];

export const ReviewsSection = () => (
  <div className="bg-stone-50 py-16 px-2">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-3 text-center">What Our Guests Say</h2>
      <p className="text-lg text-stone-600 mb-10 text-center max-w-2xl">
        Discover why guests return again and again to create lasting memories at Chalet Tuftra.
      </p>
      <div className="w-full flex flex-col md:flex-row gap-8 justify-center mb-10">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md flex-1 p-6 min-w-[270px] text-center">
            <div className="flex justify-center mb-2 text-2xl text-[#FFD700]">
              {"★★★★★"}
            </div>
            <blockquote className="italic text-stone-800 text-base mb-4">{review.text}</blockquote>
            <div className="text-stone-500 text-sm font-medium">{review.author}</div>
          </div>
        ))}
      </div>
      <p className="text-stone-700 mb-6 text-center">
        Join our family of satisfied guests and experience the magic of Chalet Tuftra yourself.
      </p>
      <Button size="lg" className="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-8 py-4 text-base">
        Book Your Stay
      </Button>
    </div>
  </div>
);


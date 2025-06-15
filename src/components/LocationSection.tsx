
import { Mountain, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LocationSection = ({
  id,
  heading,
  subheading,
  primeTitle,
  primeDesc,
  mountainTitle,
  mountainDesc,
  mapsButton,
}: {
  id?: string;
  heading?: string;
  subheading?: string;
  primeTitle?: string;
  primeDesc?: string;
  mountainTitle?: string;
  mountainDesc?: string;
  mapsButton?: string;
}) => (
  <section id={id} className="py-20 bg-stone-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-emerald-900 mb-6">
          {heading || "Find Us in Zermatt"}
        </h2>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          {subheading ||
            "Nestled in the heart of Zermatt with breathtaking views of the Matterhorn and the sound of the Findelbach stream."}
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div 
            className="rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
            onClick={() => window.open('https://www.google.com/maps/place/Chalet+Tuftra+Findelbach/@46.0117737,7.7433436,17z/data=!3m1!4b1!4m6!3m5!1s0x478f35b314ba925f:0xa18bb3cca3c5d433!8m2!3d46.0117737!4d7.7459185!16s%2Fg%2F11shjq8_7j?entry=ttu&g_ep=EgoyMDI1MDYxMS.wIKXMDSoASAFQAw%3D%3D', '_blank')}
          >
            <img 
              src="/lovable-uploads/85d6e6c5-dee7-470d-8942-1a2db8e7b9f3.png"
              alt="Chalet Tuftra Findelbach Location Map - Click to open in Google Maps"
              className="w-full h-80 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-stone-900 mb-2">
                {primeTitle || "Prime Zermatt Location"}
              </h4>
              <p className="text-stone-600">
                {primeDesc ||
                  "Located in one of Zermatt's most coveted areas, our chalet offers easy access to ski lifts, hiking trails, and the charming village center while maintaining a peaceful, private atmosphere."}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mountain className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-stone-900 mb-2">
                {mountainTitle || "Unobstructed Mountain Views"}
              </h4>
              <p className="text-stone-600">
                {mountainDesc ||
                  "Wake up to the magnificent Matterhorn right outside your window, with the soothing sounds of the Findelbach stream creating a natural symphony throughout your stay."}
              </p>
            </div>
          </div>
          <Button 
            size="lg"
            onClick={() => window.open('https://www.google.com/maps/place/Chalet+Tuftra+Findelbach/@46.0117737,7.7433436,17z/data=!3m1!4b1!4m6!3m5!1s0x478f35b314ba925f:0xa18bb3cca3c5d433!8m2!3d46.0117737!4d7.7459185!16s%2Fg%2F11shjq8_7j?entry=ttu&g_ep=EgoyMDI1MDYxMS.wIKXMDSoASAFQAw%3D%3D', '_blank')}
            className="bg-emerald-700 hover:bg-emerald-600 text-white"
          >
            {mapsButton || "View on Google Maps"}
          </Button>
        </div>
      </div>
    </div>
  </section>
);

import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { GallerySection } from "@/components/GallerySection";
import { Check } from "lucide-react";

const galleryCategories = [{
  title: "Living & Dining Areas",
  description: "Generous open spaces flooded with natural light, perfect for shared meals and conversations while enjoying panoramic views of the Matterhorn and Findelbach.",
  images: ["/lovable-uploads/849116f8-0d57-4a06-bfc9-39b46ad4b2bd.png", "/lovable-uploads/b60214bc-d718-4076-a212-65921d7f6efe.png", "/lovable-uploads/a2527a19-e5f1-4940-9bae-7708f25e18a2.png", "/lovable-uploads/09a410bd-0495-4d07-a9d8-dfb07f3db001.png", "/lovable-uploads/dde40bf0-9b7c-4736-a995-8debd26ae8bb.png", "/lovable-uploads/70c8f368-d818-44ac-8b4a-2f98a77be6da.png"]
}, {
  title: "Wellness & Recreation",
  description: "Dedicated wellness and spa areas featuring luxurious bathrooms with mountain views, sauna, steam bath, onsen, whirlpool and fitness facilities, perfect for relaxation after days on the slopes or hiking trails.",
  images: ["/lovable-uploads/593bbcd2-d56c-497f-a011-25d0306cf99b.png", "/lovable-uploads/fbcd800c-d1ce-4e11-9e0b-5a9e99fbf8ad.png", "/lovable-uploads/9741a072-840c-4489-892e-15487e39cf62.png", "/lovable-uploads/ca99ceb3-8416-46fb-9052-24d079ac3a5d.png", "/lovable-uploads/c3151d33-4da4-4e2e-ab09-2b7a4ad90373.png"]
}, {
  title: "Bedrooms",
  description: "Each beautifully appointed room offers a peaceful sanctuary where guests can retreat and recharge, all while maintaining connection to the stunning natural surroundings.",
  images: ["/lovable-uploads/891b3067-fb78-4adb-8270-05607e570eb8.png", "/lovable-uploads/93296546-af66-4a2f-8830-fbef8d319d4c.png", "/lovable-uploads/3c156848-370b-49f8-824a-d3a2c98f3740.png", "/lovable-uploads/ce888522-22ed-49db-902b-1e5c398eabfc.png", "/lovable-uploads/08fe6bc4-8b52-4c79-a6d2-7e3dcd26a0fb.png", "/lovable-uploads/6294aed9-51e4-401e-a8d4-eb751c668a3d.png"]
}];

const chaletFeatures = [
  "Matterhorn Views",
  "Open Fireplace", 
  "Outdoor Hot Tub",
  "Sleeps 12 people",
  "Private Spa & Wellness",
  "Relaxation Area",
  "Sauna & Gym", 
  "Ski In"
];

const Amenities = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  return <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-16 w-auto" />
                <h1 className="text-lg md:text-xl font-bold text-emerald-900">Chalet Tuftra Findelbach</h1>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/amenities" className="text-emerald-900 hover:text-emerald-800 transition-colors font-bold text-lg">Amenities</a>
              <a href="/family" className="text-emerald-900 hover:text-emerald-800 transition-colors text-lg">Family</a>
              <a href="/corporate-retreats" className="text-emerald-900 hover:text-emerald-800 transition-colors text-lg">Corporate Retreats</a>
              <a href="/contact" className="text-emerald-900 hover:text-emerald-800 transition-colors text-lg">Contact</a>
              <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white text-lg" size="sm">
                Make an Inquiry
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      

      {/* Gallery Section */}
      <GallerySection categories={galleryCategories} />

      {/* Features Section - moved to bottom */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-900 mb-8">Premium features &amp; amenities</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {chaletFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-900 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>;
};
export default Amenities;

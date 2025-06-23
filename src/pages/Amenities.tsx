import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Button } from "@/components/ui/button";
import { GallerySection } from "@/components/GallerySection";
import { Bath, Mountain, Flame, Dumbbell, Bed, Building } from "lucide-react";
const galleryCategories = [{
  title: "Living & Dining Areas",
  description: "Generous open spaces flooded with natural light, perfect for shared meals and conversations while enjoying panoramic views of the Matterhorn and Findelbach.",
  images: ["/lovable-uploads/849116f8-0d57-4a06-bfc9-39b46ad4b2bd.png", "/lovable-uploads/b60214bc-d718-4076-a212-65921d7f6efe.png", "/lovable-uploads/a2527a19-e5f1-4940-9bae-7708f25e18a2.png", "/lovable-uploads/09a410bd-0495-4d07-a9d8-dfb07f3db001.png", "/lovable-uploads/dde40bf0-9b7c-4736-a995-8debd26ae8bb.png", "/lovable-uploads/70c8f368-d818-44ac-8b4a-2f98a77be6da.png"]
}, {
  title: "Wellness & Recreation",
  description: "Dedicated wellness and spa areas featuring luxurious bathrooms with mountain views, sauna, and fitness facilities, perfect for relaxation after days on the slopes or hiking trails.",
  images: ["/lovable-uploads/593bbcd2-d56c-497f-a011-25d0306cf99b.png", "/lovable-uploads/fbcd800c-d1ce-4e11-9e0b-5a9e99fbf8ad.png", "/lovable-uploads/9741a072-840c-4489-892e-15487e39cf62.png", "/lovable-uploads/ca99ceb3-8416-46fb-9052-24d079ac3a5d.png", "/lovable-uploads/c3151d33-4da4-4e2e-ab09-2b7a4ad90373.png"]
}, {
  title: "Bedrooms",
  description: "Each beautifully appointed room offers a peaceful sanctuary where guests can retreat and recharge, all while maintaining connection to the stunning natural surroundings.",
  images: ["/lovable-uploads/891b3067-fb78-4adb-8270-05607e570eb8.png", "/lovable-uploads/93296546-af66-4a2f-8830-fbef8d319d4c.png", "/lovable-uploads/3c156848-370b-49f8-824a-d3a2c98f3740.png", "/lovable-uploads/ce888522-22ed-49db-902b-1e5c398eabfc.png", "/lovable-uploads/08fe6bc4-8b52-4c79-a6d2-7e3dcd26a0fb.png", "/lovable-uploads/6294aed9-51e4-401e-a8d4-eb751c668a3d.png"]
}];
const chaletFeatures = [{
  icon: Bath,
  name: "Outdoor Hot Tub",
  description: "Relax under the stars"
}, {
  icon: Mountain,
  name: "Ski In",
  description: "Direct access to slopes"
}, {
  icon: Mountain,
  name: "Matterhorn Views",
  description: "Iconic mountain vistas"
}, {
  icon: Dumbbell,
  name: "Private Spa & Wellness",
  description: "Complete relaxation facilities"
}, {
  icon: Flame,
  name: "Open Fireplace",
  description: "Cozy alpine atmosphere"
}, {
  icon: Bed,
  name: "Relaxation Area",
  description: "Peaceful retreat spaces"
}, {
  icon: Dumbbell,
  name: "Sauna & Gym",
  description: "Health and fitness facilities"
}, {
  icon: Building,
  name: "Private Balconies",
  description: "Mountain view terraces"
}];
const Amenities = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  return <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-16 w-auto" />
              <h1 className="text-lg md:text-xl font-bold text-emerald-900">Chalet Tuftra Findelbach</h1>
            </div>
            <div className="flex items-center space-x-6">
              
              <a href="/family" className="text-emerald-900 hover:text-emerald-800 transition-colors">Family</a>
              <a href="/amenities" className="text-emerald-900 hover:text-emerald-800 transition-colors font-semibold">Amenities</a>
              <a href="/corporate-retreats" className="text-emerald-900 hover:text-emerald-800 transition-colors">Corporate Retreats</a>
              <a href="/contact" className="text-emerald-900 hover:text-emerald-800 transition-colors">Contact</a>
              <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white" size="sm">
                Make an Inquiry
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-6">Chalet Amenities</h1>
          <div className="inline-flex items-center bg-emerald-900 text-white px-6 py-2 rounded-full mb-6">
            <Bed className="w-5 h-5 mr-2" />
            <span className="font-semibold">Sleeps 12 people</span>
          </div>
          <p className="text-xl text-emerald-700 mb-8">
            A chalet that accommodates to every desire, featuring luxurious spaces designed for comfort, 
            relaxation, and unforgettable experiences in the heart of the Swiss Alps.
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
              Plan Your Stay
            </Button>
            <Button onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')} variant="outline" className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white">
              Explore 3D Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">Premium Features & Amenities</h2>
            <p className="text-lg text-emerald-700 max-w-3xl mx-auto">
              Experience the finest alpine luxury with our carefully curated selection of premium amenities and facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chaletFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <div key={index} className="bg-emerald-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-900 mb-2">{feature.name}</h3>
                  <p className="text-sm text-emerald-700">{feature.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection categories={galleryCategories} />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>;
};
export default Amenities;
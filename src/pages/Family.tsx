
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Family = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-16 w-auto" />
              <h1 className="text-lg md:text-xl font-bold text-emerald-900">Chalet Tuftra Findelbach</h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-emerald-900 hover:text-emerald-800 transition-colors">Home</a>
              <a href="/family" className="text-emerald-900 hover:text-emerald-800 transition-colors font-semibold">Family</a>
              <a href="/corporate-retreats" className="text-emerald-900 hover:text-emerald-800 transition-colors">Corporate Retreats</a>
              <a href="/contact" className="text-emerald-900 hover:text-emerald-800 transition-colors">Contact</a>
              <LanguageSelector />
              <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white" size="sm">
                {t('make_inquiry')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Inquiry Form at top */}
      <div className="bg-emerald-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Perfect for Families</h2>
            <p className="text-emerald-700">Create lasting memories in our family-friendly chalet with spacious accommodations and stunning mountain views.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
              Make Family Inquiry
            </Button>
            <Button 
              onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')}
              variant="outline" 
              className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white"
            >
              Explore 3D Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Family Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-6">Family Getaways</h1>
            <p className="text-lg text-stone-700 mb-6">
              Our chalet is designed with families in mind, offering spacious living areas, multiple bedrooms, 
              and amenities that cater to guests of all ages. From the youngest adventurers to grandparents, 
              everyone will find comfort and joy in our mountain retreat.
            </p>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Multiple family bedrooms with stunning views
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Large common areas for family gatherings
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Child-friendly amenities and safety features
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Easy access to family hiking trails and activities
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/849116f8-0d57-4a06-bfc9-39b46ad4b2bd.png" 
              alt="Family living area" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Family;

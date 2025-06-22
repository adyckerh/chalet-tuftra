
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { LocationSection } from "@/components/LocationSection";

const Contact = () => {
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
              <a href="/family" className="text-emerald-900 hover:text-emerald-800 transition-colors">Family</a>
              <a href="/corporate-retreats" className="text-emerald-900 hover:text-emerald-800 transition-colors">Corporate Retreats</a>
              <a href="/contact" className="text-emerald-900 hover:text-emerald-800 transition-colors font-semibold">Contact</a>
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
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Get in Touch</h2>
            <p className="text-emerald-700">Ready to plan your mountain getaway? Contact us directly or submit an inquiry below.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
              Submit Inquiry
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

      {/* Contact Content */}
      <LocationSection id="contact" />

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Contact;

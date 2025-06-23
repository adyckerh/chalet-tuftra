
import { useState } from "react";
import { InquiryModal } from "@/components/InquiryModal";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const CorporateRetreats = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navigation setIsInquiryOpen={setIsInquiryOpen} />

      {/* Inquiry Form at top */}
      <div className="bg-emerald-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-emerald-900 mb-2">Executive Corporate Retreats</h2>
            <p className="text-emerald-700">Inspire your team in our sophisticated mountain setting with premium meeting spaces and luxury accommodations.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => setIsInquiryOpen(true)} className="bg-emerald-900 hover:bg-emerald-800 text-white">
              Plan Corporate Retreat
            </Button>
            <Button onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')} variant="outline" className="border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white">
              Explore 3D Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Corporate Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/lovable-uploads/b60214bc-d718-4076-a212-65921d7f6efe.png" alt="Corporate meeting space" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-emerald-900 mb-6">Corporate Retreats</h1>
            <p className="text-lg text-stone-700 mb-6">
              Elevate your corporate events and team building activities in our exclusive mountain chalet. 
              Our sophisticated spaces and inspiring alpine setting provide the perfect environment for 
              strategic planning sessions, executive meetings, and team bonding experiences.
            </p>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Dedicated meeting and conference spaces
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                High-speed internet and presentation facilities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Catering services and executive dining areas
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mr-3"></span>
                Team building activities and outdoor experiences
              </li>
            </ul>
          </div>
        </div>
      </div>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default CorporateRetreats;

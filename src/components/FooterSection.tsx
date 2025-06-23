
import { MapPin, Mail, Phone } from "lucide-react";
import { designTokens } from "@/styles/designSystem";

export const FooterSection = () => (
  <footer id="contact" className={`${designTokens.backgrounds.dark} text-white py-12`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/lovable-uploads/f9c4054d-f36e-4e59-bdba-d00862247950.png" 
            alt="Chalet Tuftra Logo" 
            className="w-32 h-32 mb-4" 
          />
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 text-2xl">Contact</h4>
          <div className="space-y-3 text-stone-300">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">Zermatt, Switzerland</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">info@chalettuftra.ch</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">+41 774052797</span>
            </div>
          </div>
        </div>
        
        {/* Partnership Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 text-2xl">Partnership</h4>
          <p className="text-stone-300 mb-2 text-lg">Managed by</p>
          <a 
            href="https://zermattskichalets.com/accommodation/chalet-tuftra-findelbach/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-colors"
          >
            Zermatt Ski Chalets
          </a>
        </div>
      </div>
      
      <div className="border-t border-stone-700 mt-8 pt-6 text-center text-stone-400">
        <p>&copy; 2025 Chalet Tuftra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

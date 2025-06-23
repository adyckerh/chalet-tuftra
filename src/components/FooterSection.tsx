
import { MapPin, Mail, Phone } from "lucide-react";

export const FooterSection = () => (
  <footer id="contact" className="bg-stone-900 text-white py-[30px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/lovable-uploads/f9c4054d-f36e-4e59-bdba-d00862247950.png" 
            alt="Chalet Tuftra Logo" 
            className="w-32 h-32 mb-4"
          />
          <p className="text-stone-300 text-center md:text-left">Your light-filled family hub in the heart of Zermatt</p>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-stone-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Zermatt, Switzerland</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@chalettuftra.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+41 774052797</span>
            </div>
          </div>
        </div>
        
        {/* Partnership Section */}
        <div>
          <h4 className="font-semibold mb-4">Partnership</h4>
          <p className="text-stone-300 mb-2">Managed by</p>
          <a href="https://zermattskichalets.com/accommodation/chalet-tuftra-findelbach/" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 font-semibold">
            Zermatt Ski Chalets
          </a>
        </div>
      </div>
      <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
        <p>© 2025 Chalet Tuftra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

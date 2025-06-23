
import { MapPin, Mail, Phone } from "lucide-react";

export const FooterSection = () => (
  <footer id="contact" className="bg-stone-900 text-white py-[30px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start gap-8 py-6 px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <img src="/lovable-uploads/f9c4054d-f36e-4e59-bdba-d00862247950.png" alt="Chalet Tuftra Logo" className="w-28 h-28 mb-2" />
        </div>

        {/* Contact Section */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-stone-300">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Zermatt, Switzerland</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@chalettuftra.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone className="w-4 h-4" />
              <span>+41 774052797</span>
            </div>
          </div>
        </div>
        
        {/* Partnership Section */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-semibold mb-4">Partnership</h4>
          <p className="text-stone-300 mb-2">Managed by</p>
          <a href="https://zermattskichalets.com/accommodation/chalet-tuftra-findelbach/" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 font-semibold">
            Zermatt Ski Chalets
          </a>
        </div>
      </div>
      <div className="border-t border-stone-700 mt-6 pt-6 text-center text-stone-400">
        <p>© 2025 Chalet Tuftra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

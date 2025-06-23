
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { getTypographyClasses } from "@/styles/designSystem";

interface MobileNavigationProps {
  setIsInquiryOpen: (open: boolean) => void;
  isHomePage?: boolean;
}

export const MobileNavigation = ({ setIsInquiryOpen, isHomePage = false }: MobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const logoTextClass = isHomePage 
    ? "text-lg font-bold font-playfair text-white drop-shadow-md" 
    : "text-lg font-bold font-playfair text-emerald-900";

  const baseLinkClass = isHomePage
    ? `block px-4 py-3 ${getTypographyClasses('navText')} text-white/90 hover:text-white transition-colors border-b border-white/10`
    : `block px-4 py-3 ${getTypographyClasses('navText')} text-emerald-900 hover:text-emerald-800 transition-colors border-b border-gray-200`;

  const buttonClass = isHomePage
    ? "w-full bg-emerald-900/80 hover:bg-emerald-800/80 text-white backdrop-blur-sm border border-white/10"
    : "w-full bg-emerald-900 hover:bg-emerald-800 text-white";

  const overlayClass = isHomePage
    ? "bg-emerald-900/95 backdrop-blur-md"
    : "bg-white";

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `${baseLinkClass} ${isActive ? 'font-bold' : ''}`;
  };

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-12 w-auto" />
            <h1 className={`${logoTextClass} text-sm leading-tight`}>
              Chalet Tuftra<br />
              <span className="text-xs opacity-80">Findelbach</span>
            </h1>
          </a>
        </div>
        
        <button 
          onClick={toggleMenu}
          className={`p-2 rounded-md ${isHomePage ? 'text-white hover:bg-white/10' : 'text-emerald-900 hover:bg-gray-100'} transition-colors`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`fixed inset-0 top-20 z-50 ${overlayClass} safe-top safe-bottom`}>
          <nav className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <a 
                href="/amenities" 
                className={getLinkClass('/amenities')}
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="/family" 
                className={getLinkClass('/family')}
                onClick={() => setIsMenuOpen(false)}
              >
                For families
              </a>
              <a 
                href="/corporate-retreats" 
                className={getLinkClass('/corporate-retreats')}
                onClick={() => setIsMenuOpen(false)}
              >
                Corporate retreats
              </a>
              <a 
                href="/contact" 
                className={getLinkClass('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Finding us
              </a>
            </div>
            
            <div className="p-4 border-t border-opacity-10">
              <Button 
                onClick={() => {
                  setIsInquiryOpen(true);
                  setIsMenuOpen(false);
                }} 
                className={buttonClass}
                size="lg"
              >
                Make an Inquiry
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};


import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { MobileNavigation } from "@/components/MobileNavigation";
import { getTypographyClasses } from "@/styles/designSystem";

interface NavigationProps {
  setIsInquiryOpen: (open: boolean) => void;
  isHomePage?: boolean;
}

export const Navigation = ({ setIsInquiryOpen, isHomePage = false }: NavigationProps) => {
  const location = useLocation();
  
  const navClass = isHomePage ? "absolute top-0 w-full z-50" : "w-full bg-white shadow-sm";
  const logoTextClass = isHomePage 
    ? "text-fluid-lg font-bold font-playfair text-white drop-shadow-md" 
    : "text-fluid-lg font-bold font-playfair text-emerald-900";
  const baseLinkClass = isHomePage
    ? `${getTypographyClasses('navText')} text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-md`
    : `${getTypographyClasses('navText')} text-emerald-900 hover:text-emerald-800 transition-colors`;
  const buttonClass = isHomePage
    ? "bg-emerald-900/80 hover:bg-emerald-800/80 text-white whitespace-nowrap backdrop-blur-sm border border-white/10"
    : "bg-emerald-900 hover:bg-emerald-800 text-white";

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `${baseLinkClass} ${isActive ? 'font-bold' : ''}`;
  };

  return (
    <nav className={navClass}>
      {/* Mobile Navigation */}
      <MobileNavigation setIsInquiryOpen={setIsInquiryOpen} isHomePage={isHomePage} />
      
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 min-w-0">
              <a href="/" className="flex items-center space-x-3 min-w-0">
                <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-12 lg:h-16 w-auto flex-shrink-0" />
                <h1 className={`${logoTextClass} truncate`}>Chalet Tuftra Findelbach</h1>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 lg:space-x-8 min-w-0">
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <a href="/amenities" className={getLinkClass('/amenities')}>Amenities</a>
                <a href="/family" className={getLinkClass('/family')}>For families</a>
                <a href="/corporate-retreats" className={getLinkClass('/corporate-retreats')}>Corporate retreats</a>
                <a href="/contact" className={getLinkClass('/contact')}>Finding us</a>
              </div>
              
              {/* Compact navigation for medium screens */}
              <div className="flex lg:hidden items-center space-x-3 text-sm">
                <a href="/amenities" className={getLinkClass('/amenities')}>Amenities</a>
                <a href="/family" className={getLinkClass('/family')}>Family</a>
                <a href="/contact" className={getLinkClass('/contact')}>Contact</a>
              </div>
              
              <Button onClick={() => setIsInquiryOpen(true)} className={buttonClass} size="sm">
                <span className="hidden sm:inline">Make an Inquiry</span>
                <span className="sm:hidden">Inquiry</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

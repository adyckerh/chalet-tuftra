
import { Button } from "@/components/ui/button";

interface NavigationProps {
  setIsInquiryOpen: (open: boolean) => void;
  isHomePage?: boolean;
}

export const Navigation = ({ setIsInquiryOpen, isHomePage = false }: NavigationProps) => {
  const navClass = isHomePage ? "absolute top-0 w-full z-50" : "w-full bg-white shadow-sm";
  const logoTextClass = isHomePage 
    ? "text-lg md:text-xl font-bold text-white drop-shadow-md" 
    : "text-lg md:text-xl font-bold text-emerald-900";
  const linkClass = isHomePage
    ? "text-white/90 hover:text-white transition-colors whitespace-nowrap drop-shadow-md text-lg"
    : "text-emerald-900 hover:text-emerald-800 transition-colors text-lg";
  const buttonClass = isHomePage
    ? "bg-emerald-900/80 hover:bg-emerald-800/80 text-white whitespace-nowrap backdrop-blur-sm border border-white/10 text-lg"
    : "bg-emerald-900 hover:bg-emerald-800 text-white text-lg";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" alt="Chalet Tuftra Logo" className="h-16 w-auto" />
              <h1 className={logoTextClass}>Chalet Tuftra Findelbach</h1>
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="/amenities" className={linkClass}>Amenities</a>
            <a href="/family" className={linkClass}>For families</a>
            <a href="/corporate-retreats" className={linkClass}>Corporate retreats</a>
            <a href="/contact" className={linkClass}>Finding us</a>
            <Button onClick={() => setIsInquiryOpen(true)} className={buttonClass} size="sm">
              Make an Inquiry
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

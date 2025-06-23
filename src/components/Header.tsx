
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  setIsInquiryOpen: (open: boolean) => void;
}

export const Header = ({ setIsInquiryOpen }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleInquiryClick = () => {
    setIsInquiryOpen(true);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/167afb10-cfb1-442f-8d2a-fcc43a8b9984.png" 
              alt="Chalet Tuftra - Luxury Alpine Sanctuary in Zermatt" 
              className="h-10 w-auto max-h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleInquiryClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2"
            >
              Make an Inquiry
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-stone-700 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-50 font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-50 font-medium transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="block w-full text-left px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-50 font-medium transition-colors"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-50 font-medium transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-stone-700 hover:text-stone-900 hover:bg-stone-50 font-medium transition-colors"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={handleInquiryClick}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Make an Inquiry
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

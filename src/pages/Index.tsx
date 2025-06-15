import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mountain, Eye, Sun, Users, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();

  const heroFeatures = [
    {
      icon: Mountain,
      title: t('matterhorn_views'),
      description: t('matterhorn_views_desc')
    },
    {
      icon: Eye,
      title: t('space_light'),
      description: t('space_light_desc')
    },
    {
      icon: Users,
      title: t('family_hub'),
      description: t('family_hub_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/1e9ea58d-fe69-4e26-ad51-89d81f1f8ba8.png" 
                alt="Chalet Tuftra Logo" 
                className="h-12 w-12"
                style={{ filter: 'hue-rotate(120deg) saturate(1.2) brightness(0.8)' }}
              />
              <div>
                <h1 className="text-2xl font-bold text-emerald-700">Chalet Tuftra Findelbach</h1>
                <p className="text-sm text-stone-600 italic">Zermatt</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-stone-700 hover:text-amber-900 transition-colors">{t('home')}</a>
              <a href="#about" className="text-stone-700 hover:text-amber-900 transition-colors">{t('about')}</a>
              <a href="#experiences" className="text-stone-700 hover:text-amber-900 transition-colors">{t('experiences')}</a>
              <a href="#contact" className="text-stone-700 hover:text-amber-900 transition-colors">{t('contact')}</a>
              <LanguageSelector />
              <Button 
                onClick={() => setIsInquiryOpen(true)}
                className="bg-amber-900 hover:bg-amber-800 text-white"
              >
                {t('make_inquiry')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsInquiryOpen(true)}
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 text-lg"
            >
              {t('reserve_escape')}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg"
            >
              {t('explore_chalet')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 group-hover:bg-amber-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-amber-900" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                {t('alpine_sanctuary')}
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                {t('alpine_sanctuary_desc')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-2">{t('winter_wonderland')}</h4>
                    <p className="text-stone-600">{t('winter_wonderland_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-2">{t('summer_serenity')}</h4>
                    <p className="text-stone-600">{t('summer_serenity_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-2">{t('corporate_excellence')}</h4>
                    <p className="text-stone-600">{t('corporate_excellence_desc')}</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg"
                onClick={() => setIsInquiryOpen(true)}
                className="mt-8 bg-amber-900 hover:bg-amber-800 text-white"
              >
                {t('begin_journey')}
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxurious Alpine chalet interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">{t('ready_experience')}</h2>
          <p className="text-xl mb-10 leading-relaxed">
            {t('ready_experience_desc')}
          </p>
          <Button 
            size="lg"
            onClick={() => setIsInquiryOpen(true)}
            className="bg-white text-amber-900 hover:bg-stone-100 px-8 py-4 text-lg"
          >
            {t('make_inquiry_today')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chalet Tuftra Findelbach</h3>
              <p className="text-stone-300">{t('luxury_sanctuary')}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('contact')}</h4>
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
                  <span>+41 27 XXX XXXX</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('partnership')}</h4>
              <p className="text-stone-300 mb-2">{t('managed_partnership')}</p>
              <a 
                href="https://zermattskichalets.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-300 hover:text-amber-200 font-semibold"
              >
                Zermatt Ski Chalets
              </a>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
            <p>&copy; 2024 Chalet Tuftra. {t('rights_reserved')}</p>
          </div>
        </div>
      </footer>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Index;

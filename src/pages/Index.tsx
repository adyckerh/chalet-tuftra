
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
      title: "Matterhorn & Findelbach Views",
      description: "Experience the mesmerizing combination of the iconic Matterhorn peak and the rushing Findelbach stream from every room"
    },
    {
      icon: Eye,
      title: "Light-Flooded Spaces",
      description: "Our chalet celebrates natural light with generous windows and open spaces, creating a bright and welcoming atmosphere throughout"
    },
    {
      icon: Users,
      title: "Family Hub Concept",
      description: "Designed as a gathering place where families and friends return again and again to create lasting memories together"
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
            Where Views, Light & Family Unite
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover our family hub in Zermatt, where the fascinating view of the Matterhorn meets the rushing Findelbach. 
            A light-flooded sanctuary designed for shared experiences and lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => setIsInquiryOpen(true)}
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 text-lg"
            >
              Reserve Your Alpine Escape
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 text-lg"
            >
              Explore Our Chalet
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Chalet Philosophy</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Space, view, and light - the fundamental elements that make Chalet Tuftra a place where every guest 
              can retreat to beautiful rooms while enjoying generous shared spaces for unforgettable experiences.
            </p>
          </div>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Our Story & Vision
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  We are pleased that you have found your way here and wish you wonderful holidays. 
                  After 17 years living in Shanghai and Hong Kong, we returned to Switzerland and now live 
                  next to Lake Lucerne with our family of 5 children.
                </p>
                <p>
                  Our goal at Chalet Tuftra was to combine the fascinating view of the Matterhorn with 
                  the view of the rushing Findelbach. We believe that a chalet should not be dark but 
                  flooded with light, creating spaces where every guest can retreat to a beautiful room 
                  while also enjoying generous shared experiences.
                </p>
                <p>
                  We designed Chalet Tuftra to be our "Family Hub" - a place where we want our children 
                  and their families to return again and again, and where they and we will always enjoy 
                  spending time together and with friends. We hope that you will find it equally fulfilling.
                </p>
              </div>
              
              <Button 
                size="lg"
                onClick={() => setIsInquiryOpen(true)}
                className="mt-8 bg-amber-900 hover:bg-amber-800 text-white"
              >
                Begin Your Journey
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

      {/* Experience Section */}
      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Spaces Designed for Every Experience
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto">
              From intimate retreats to grand gatherings, our chalet offers thoughtfully designed spaces 
              that cater to every moment of your Alpine adventure.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Living & Dining Areas</h4>
                  <p className="text-stone-600">
                    Generous open spaces flooded with natural light, perfect for shared meals and conversations 
                    while enjoying panoramic views of the Matterhorn and Findelbach.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Wellness & Recreation</h4>
                  <p className="text-stone-600">
                    Dedicated wellness and gym areas, plus entertainment spaces including a cozy TV room 
                    for relaxation after days on the slopes or hiking trails.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Garden & Outdoor Spaces</h4>
                  <p className="text-stone-600">
                    Beautiful garden areas and outdoor spaces where you can enjoy the crisp mountain air 
                    and spectacular alpine scenery in every season.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Private Retreats</h4>
                  <p className="text-stone-600">
                    Each beautifully appointed room offers a peaceful sanctuary where guests can retreat 
                    and recharge, all while maintaining connection to the stunning natural surroundings.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Alpine chalet with mountain views"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Chalet Tuftra?</h2>
          <p className="text-xl mb-10 leading-relaxed">
            Join our family of guests who have discovered the perfect blend of luxury, nature, and togetherness. 
            Create your own unforgettable memories in our light-filled Alpine sanctuary.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsInquiryOpen(true)}
            className="bg-white text-amber-900 hover:bg-stone-100 px-8 py-4 text-lg"
          >
            Make Your Inquiry Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chalet Tuftra Findelbach</h3>
              <p className="text-stone-300">Your light-filled family hub in the heart of Zermatt</p>
            </div>
            
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
                  <span>+41 27 XXX XXXX</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Guest Experience</h4>
              <p className="text-stone-300 mb-2">
                We encourage you to share your experience in our guest book and let us know 
                what we can improve for future guests.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Partnership</h4>
              <p className="text-stone-300 mb-2">Managed in partnership with</p>
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
            <p>&copy; 2024 Chalet Tuftra. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <InquiryModal open={isInquiryOpen} onOpenChange={setIsInquiryOpen} />
    </div>
  );
};

export default Index;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mountain, Eye, Sun, Users, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();
  const { toast } = useToast();

  const heroImages = [
    "/lovable-uploads/47275c04-31d6-4425-b897-fac02724f9b3.png",
    "/lovable-uploads/3c42e4b1-1032-4d5a-bacb-801c3ed34f86.png",
    "/lovable-uploads/0540039b-0208-4d99-a683-e9eccc46a31c.png",
    "/lovable-uploads/0803ce83-71ca-4192-95f0-a084a80c4d0e.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
            <div className="flex items-center space-x-4 flex-1">
              <img 
                src="/lovable-uploads/1e9ea58d-fe69-4e26-ad51-89d81f1f8ba8.png" 
                alt="Chalet Tuftra Logo" 
                className="h-20 w-20"
                style={{ filter: 'hue-rotate(120deg) saturate(1.2) brightness(0.8)' }}
              />
              <div>
                <h1 className="text-lg md:text-xl font-bold text-emerald-700 whitespace-nowrap">Chalet Tuftra Findelbach</h1>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6 ml-8">
              <a href="#home" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">{t('home')}</a>
              <a href="#about" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">{t('about')}</a>
              <a href="#experiences" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">{t('experiences')}</a>
              <a href="#contact" className="text-stone-700 hover:text-emerald-900 transition-colors whitespace-nowrap">{t('contact')}</a>
              <LanguageSelector />
              <Button 
                onClick={() => setIsInquiryOpen(true)}
                className="bg-emerald-900 hover:bg-emerald-800 text-white whitespace-nowrap"
                size="sm"
              >
                {t('make_inquiry')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-end pb-16 overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${image}")`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 mx-auto max-w-5xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Savor Luxury: Space, Light, Views
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsInquiryOpen(true)}
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 text-lg"
              >
                Reserve your alpine escape
              </Button>
              <Button 
                size="lg"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://my.matterport.com/show/?m=Fe6veqTfV1f', '_blank')}
              >
                3D virtual walkthrough
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Our Chalet Philosophy</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Space, Light, and Views - the fundamental elements that make Chalet Tuftra a place where every guest 
              can retreat to beautiful rooms while enjoying generous shared spaces for unforgettable experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {heroFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 group-hover:bg-emerald-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-emerald-900" />
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
              <h2 className="text-4xl font-bold text-emerald-900 mb-6">
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
                className="mt-8 bg-emerald-900 hover:bg-emerald-800 text-white"
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
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">
              A chalet that accommodates to every desire
            </h2>
            <p className="text-xl text-stone-600 max-w-4xl mx-auto">
              From intimate retreats to grand gatherings, our chalet offers thoughtfully designed spaces 
              that cater to every moment of your Alpine adventure.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Living & Dining Areas</h4>
                  <p className="text-stone-600">
                    Generous open spaces flooded with natural light, perfect for shared meals and conversations 
                    while enjoying panoramic views of the Matterhorn and Findelbach.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Wellness & Recreation</h4>
                  <p className="text-stone-600">
                    Dedicated wellness and gym areas, plus entertainment spaces including a cozy TV room 
                    for relaxation after days on the slopes or hiking trails.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-900 rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Garden & Outdoor Spaces</h4>
                  <p className="text-stone-600">
                    Beautiful garden areas and outdoor spaces where you can enjoy the crisp mountain air 
                    and spectacular alpine scenery in every season.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-900 rounded-full flex-shrink-0 mt-1" />
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

      {/* Location Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">
              Find Us in Zermatt
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Nestled in the heart of Zermatt with breathtaking views of the Matterhorn and the sound of the Findelbach stream.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className="rounded-lg overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow"
                onClick={() => window.open('https://www.google.com/maps/place/Chalet+Tuftra+Findelbach/@46.0117737,7.7433436,17z/data=!3m1!4b1!4m6!3m5!1s0x478f35b314ba925f:0xa18bb3cca3c5d433!8m2!3d46.0117737!4d7.7459185!16s%2Fg%2F11shjq8_7j?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=46.0117737,7.7459185&zoom=15&size=600x400&maptype=terrain&markers=color:red%7Clabel:C%7C46.0117737,7.7459185&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOMD0Ni5Tj4Usk"
                  alt="Chalet Tuftra Findelbach Location Map - Click to open in Google Maps"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Prime Zermatt Location</h4>
                  <p className="text-stone-600">
                    Located in one of Zermatt's most coveted areas, our chalet offers easy access to ski lifts, 
                    hiking trails, and the charming village center while maintaining a peaceful, private atmosphere.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mountain className="w-6 h-6 text-emerald-900 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Unobstructed Mountain Views</h4>
                  <p className="text-stone-600">
                    Wake up to the magnificent Matterhorn right outside your window, with the soothing sounds 
                    of the Findelbach stream creating a natural symphony throughout your stay.
                  </p>
                </div>
              </div>
              
              <Button 
                size="lg"
                onClick={() => window.open('https://www.google.com/maps/place/Chalet+Tuftra+Findelbach/@46.0117737,7.7433436,17z/data=!3m1!4b1!4m6!3m5!1s0x478f35b314ba925f:0xa18bb3cca3c5d433!8m2!3d46.0117737!4d7.7459185!16s%2Fg%2F11shjq8_7j?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                className="bg-emerald-700 hover:bg-emerald-600 text-white"
              >
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Chalet Tuftra?</h2>
          <p className="text-xl mb-10 leading-relaxed">
            Join our family of guests who have discovered the perfect blend of luxury, nature, and togetherness. 
            Create your own unforgettable memories in our light-filled Alpine sanctuary.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsInquiryOpen(true)}
            className="bg-white text-emerald-900 hover:bg-stone-100 px-8 py-4 text-lg"
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
              <p className="text-stone-300 mb-2">Managed by</p>
              <a 
                href="https://zermattskichalets.com/accommodation/chalet-tuftra-findelbach/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200 font-semibold"
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

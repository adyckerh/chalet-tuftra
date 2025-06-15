import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mountain, Eye, Sun, Users, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const galleryCategories = [
    {
      title: "Living & Dining Areas",
      description: "Generous open spaces flooded with natural light, perfect for shared meals and conversations while enjoying panoramic views of the Matterhorn and Findelbach.",
      images: [
        "/lovable-uploads/1d396e61-b084-4551-a93d-d33b95eee865.png",
        "/lovable-uploads/9c4576ca-ccda-408a-822b-3304455fc0cc.png",
        "/lovable-uploads/d1f3b039-5a52-4ecd-bba8-7e57ef3d251d.png",
        "/lovable-uploads/0ecea736-22a3-4dec-b343-51115f5c7af1.png",
        "/lovable-uploads/4942d381-e5bb-4390-9cbd-f9042e15a2d5.png",
        "/lovable-uploads/ed3fc4a1-8745-4593-8672-17ee1bc9e3fc.png",
        "/lovable-uploads/705d357b-adb7-418b-b485-c3c843f64956.png"
      ]
    },
    {
      title: "Bedrooms",
      description: "Each beautifully appointed room offers a peaceful sanctuary where guests can retreat and recharge, all while maintaining connection to the stunning natural surroundings.",
      images: [
        "/lovable-uploads/ce50b2f3-5ce5-43a2-8933-aabcf20c1739.png",
        "/lovable-uploads/cfa74102-a2d2-474c-ac9c-8d37fc8373f5.png",
        "/lovable-uploads/6a4be8ef-2ba5-43f8-aa59-9f4fd5677d50.png",
        "/lovable-uploads/ea84128a-a75b-4dff-a5e8-a7f920e6a3d5.png",
        "/lovable-uploads/b60b771b-de97-412e-8272-b6dcca64efc5.png",
        "/lovable-uploads/5c063f50-934e-4cd9-85ec-a073ec892bee.png",
        "/lovable-uploads/75ab0420-29cb-4ca7-93cb-9cceb2aea845.png",
        "/lovable-uploads/65fc1e7e-089d-47d3-8967-52fc7e13c53f.png"
      ]
    },
    {
      title: "Wellness & Recreation",
      description: "Dedicated wellness and spa areas featuring luxurious bathrooms with mountain views, sauna, and fitness facilities, perfect for relaxation after days on the slopes or hiking trails.",
      images: [
        "/lovable-uploads/e16e993e-962f-4efd-9aa2-6d138c142c69.png",
        "/lovable-uploads/1a6a7f76-373c-4d9f-98fc-c7b187b134cd.png",
        "/lovable-uploads/225a0397-7cce-4537-8071-ee957909d9fb.png",
        "/lovable-uploads/a6745a2a-fc69-4c82-aa97-3328ffc0d1b4.png",
        "/lovable-uploads/742f0c6c-0da1-4f29-ba60-011ff6a61a98.png",
        "/lovable-uploads/48c4eb2b-451a-4ce9-8e8a-504b22fcd8e6.png",
        "/lovable-uploads/65446efd-48bb-4572-a912-e653ff78a500.png",
        "/lovable-uploads/6d1de32e-26f0-4e09-ab07-d035b9b3a53f.png",
        "/lovable-uploads/78d06a0c-c2b6-4d01-8e17-03e966cad9d3.png",
        "/lovable-uploads/32218385-99c9-4275-918c-ed9f8fbdf180.png",
        "/lovable-uploads/52d1e32d-3557-4a34-8943-3e85c1ce774e.png",
        "/lovable-uploads/8094eb0f-eeda-4435-9914-e076a90d761c.png",
        "/lovable-uploads/153e8c1a-7341-4337-9b2d-da04b3472e9d.png"
      ]
    }
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
      iconSrc: "/lovable-uploads/8632c840-b866-4671-b08f-99e721251c1e.png",
      title: "Iconic Views",
      description: "Immerse yourself into nature as every room allows you to experience the iconic Matterhorn peak or the rushing Findelbach stream"
    },
    {
      iconSrc: "/lovable-uploads/5c03715d-46bb-46ec-8e5c-cec1806efce3.png",
      title: "Light-Flooded Spaces",
      description: "Our chalet celebrates natural light with generous windows and open spaces, creating a bright and welcoming atmosphere throughout"
    },
    {
      iconSrc: "/lovable-uploads/517d4fa4-498f-4b4f-90db-9840ff3b4e42.png",
      title: "Family Hub Concept",
      description: "Designed as a gathering place where families and friends return again and again to create lasting memories together"
    }
  ];

  const reviews = [
    {
      text: "A beautiful chalet with first-class amenities. Outstanding service and attentive care. The location suited us perfectly too—slightly outside the village center, yet wonderfully quiet.",
      rating: 5
    },
    {
      text: "Lovely chalet, equipped with quality appliances all around. Fantastic concierge and housekeeping. Truly exceeded our expectations.",
      rating: 5
    },
    {
      text: "Amazing accommodation! Incredible staff! Excellent food—loved it! 🙌",
      rating: 5
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
                src="/lovable-uploads/d18c950a-05e2-4013-9d7d-b0248de119bf.png" 
                alt="Chalet Tuftra Logo" 
                className="h-16 w-auto"
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
      <section id="home" className="relative h-screen flex items-end pb-8 overflow-hidden">
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
                <div className="inline-flex items-center justify-center w-32 h-32 mb-6 group-hover:scale-110 transition-transform">
                  <img 
                    src={feature.iconSrc} 
                    alt={feature.title}
                    className="w-24 h-24"
                  />
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
                src="/lovable-uploads/f5836598-b10f-4074-acad-8d6d7569ff16.png"
                alt="Our family at a beautiful temple location"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Gallery */}
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
          
          <div className="space-y-16">
            {galleryCategories.map((category, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-3xl font-bold text-emerald-900">{category.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {category.description}
                  </p>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Carousel className="w-full max-w-lg mx-auto">
                    <CarouselContent>
                      {category.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                            <img 
                              src={image}
                              alt={`${category.title} - Image ${imageIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-900 mb-6">
              What Our Guests Say
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover why guests return again and again to create lasting memories at Chalet Tuftra.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                      ⭐
                    </div>
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="text-sm text-stone-500 font-medium">
                  Verified Airbnb Guest
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-stone-600 mb-6">
              Join our family of satisfied guests and experience the magic of Chalet Tuftra yourself.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsInquiryOpen(true)}
              className="bg-emerald-900 hover:bg-emerald-800 text-white"
            >
              Book Your Stay
            </Button>
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
                onClick={() => window.open('https://www.google.com/maps/place/Chalet+Tuftra+Findelbach/@46.0117737,7.7433436,17z/data=!3m1!4b1!4m6!3m5!1s0x478f35b314ba925f:0xa18bb3cca3c5d433!8m2!3d46.0117737!4d7.7459185!16s%2Fg%2F11shjq8_7j?entry=ttu&g_ep=EgoyMDI1MDYxMS.wIKXMDSoASAFQAw%3D%3D', '_blank')}
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

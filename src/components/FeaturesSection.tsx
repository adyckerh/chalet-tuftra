
interface Feature {
  iconSrc: string;
  title: string;
  description: string;
}
export const FeaturesSection = ({ features }: { features: Feature[] }) => (
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
        {features.map((feature, index) => (
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
);

import { Egg, CheckCircle2, ShieldCheck, BookOpen, Truck, Settings } from "lucide-react";

const offerings = [
  {
    title: "Desi Chicken",
    description: "High-quality, farm-raised desi chickens for commercial trading.",
    icon: <CheckCircle2 className="w-8 h-8 text-brand-primary" />
  },
  {
    title: "1 Day Old Chicks",
    description: "Healthy, vaccinated day-old chicks to start your flock.",
    icon: <Egg className="w-8 h-8 text-brand-primary" />
  },
  {
    title: "Poultry Feed",
    description: "Nutritionally balanced feed for all growth stages.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />
  },
  {
    title: "Poultry Equipment",
    description: "Modern feeders, drinkers, and climate control tools.",
    icon: <Settings className="w-8 h-8 text-brand-primary" />
  },
  {
    title: "Business Guidance",
    description: "Consultation and training for new poultry farmers.",
    icon: <BookOpen className="w-8 h-8 text-brand-primary" />
  },
  {
    title: "Reliable Supply",
    description: "Consistent delivery and logistics for your farm's needs.",
    icon: <Truck className="w-8 h-8 text-brand-primary" />
  }
];

export default function OfferingsSection() {
  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-brand-dark">Our Products & Services</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Everything you need for a successful poultry business, from premium birds to expert consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-brand-light border border-brand-primary/10 hover:border-brand-primary/30 transition-colors shadow-sm hover:shadow-md group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

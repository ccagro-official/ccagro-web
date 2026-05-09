import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUsSection() {
  const points = [
    "Premium quality desi birds",
    "100% vaccinated and healthy chicks",
    "Reliable and on-time logistics",
    "Expert farming consultation",
    "High-grade, stage-specific poultry feed",
    "Years of industry trust"
  ];

  return (
    <section className="py-24 px-6 bg-brand-dark text-brand-light w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl font-bold leading-tight">
            Why Partner With <span className="text-brand-primary">CC Agro?</span>
          </h2>
          <p className="text-lg text-brand-light/80">
            We don't just supply birds; we partner with you to ensure your poultry business thrives. With strict quality control, reliable logistics, and continuous support, we make farming profitable and stress-free.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-center gap-3 text-brand-light/90">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 relative">
          <div className="aspect-square rounded-3xl bg-brand-light/5 border border-brand-light/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay" />
            <div className="text-center p-8">
              <h3 className="text-6xl font-black text-brand-primary mb-2">10+</h3>
              <p className="text-xl font-medium">Years of Trust</p>
              <p className="text-brand-light/60 mt-2">Delivering excellence in every flock.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

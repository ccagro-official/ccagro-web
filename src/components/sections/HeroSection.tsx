import { ButtonLink } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 z-10 pointer-events-none">
      {/* Background radial gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-light/40 via-brand-light/80 to-brand-light -z-10" />

      <div className="max-w-4xl mx-auto space-y-6 pointer-events-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-dark drop-shadow-sm">
          Trusted Poultry Trading &<br />
          <span className="text-brand-primary">Farm Growth Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto">
          From 1-day old chicks to premium desi chicken, we provide the best quality birds, feed, equipment, and expert guidance for your poultry business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <ButtonLink href="#services" size="lg">Explore Our Services</ButtonLink>
          <ButtonLink href="#contact" variant="outline" size="lg">Contact Us Today</ButtonLink>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-auto">
        <span className="text-sm font-medium text-brand-secondary tracking-widest uppercase">Scroll to explore</span>
        <div className="w-1 h-8 rounded-full bg-brand-primary/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-primary animate-pulse rounded-full" />
        </div>
      </div>
    </section>
  );
}

import { ButtonLink } from "../ui/Button";

export default function CTASection() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 bg-brand-dark text-white relative overflow-hidden w-full">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-light leading-tight">
          Ready to Grow Your Poultry Business?
        </h2>
        <p className="text-lg md:text-xl text-brand-light/80 max-w-2xl mx-auto">
          Partner with CC Agro for premium birds, quality feed, and expert farm guidance. Let's build a profitable future together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <ButtonLink href="tel:+919657272406" size="lg" className="bg-brand-light text-brand-dark hover:bg-white w-full sm:w-auto">
            Contact Us Now
          </ButtonLink>
          <ButtonLink
            href="https://wa.me/919657272406"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="outline"
            className="border-brand-light text-brand-light hover:bg-brand-light hover:text-brand-dark w-full sm:w-auto"
          >
            WhatsApp Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

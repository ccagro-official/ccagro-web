import { BookOpen } from "lucide-react";

export default function GuidanceSection() {
  return (
    <section className="py-24 px-6 bg-white w-full">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 mb-4">
          <BookOpen className="w-8 h-8 text-brand-primary" />
        </div>
        <h2 className="text-4xl font-bold text-brand-dark">Expert Farming Guidance</h2>
        <p className="text-lg text-brand-dark/80">
          New to poultry farming? Or looking to scale? We provide hands-on training, farm management consultation, and lifecycle guidance to help you maximize your yield and minimize losses.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-2xl bg-brand-light text-left">
            <h4 className="font-bold text-brand-dark mb-2">Farm Setup</h4>
            <p className="text-sm text-brand-dark/70">Guidance on shed construction, climate control, and initial equipment.</p>
          </div>
          <div className="p-6 rounded-2xl bg-brand-light text-left">
            <h4 className="font-bold text-brand-dark mb-2">Health Management</h4>
            <p className="text-sm text-brand-dark/70">Vaccination schedules, disease prevention, and nutrition plans.</p>
          </div>
          <div className="p-6 rounded-2xl bg-brand-light text-left">
            <h4 className="font-bold text-brand-dark mb-2">Market Strategy</h4>
            <p className="text-sm text-brand-dark/70">Tips on timing your sales and getting the best market rates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

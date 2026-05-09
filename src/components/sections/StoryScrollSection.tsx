"use client";

import { useRef } from "react";
import { useScroll, useSpring } from "framer-motion";
import PoultryScene from "../three/PoultryScene";

export default function StoryScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth it out for 3D updates
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-brand-light">
      {/* 3D Canvas Container - Sticky */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <PoultryScene progress={smoothProgress} />
      </div>

      {/* Content Overlays - Positioned along the scroll height */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-brand-dark flex flex-col justify-between py-[50vh]">
        
        {/* Stage 1: Egg Idle */}
        <div className="h-screen flex items-center justify-start px-10 md:px-24">
          <div className="max-w-md space-y-4 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-brand-primary">The Beginning</h2>
            <p className="text-lg">Every successful poultry farm starts with premium quality eggs. We source only the best layers to ensure high hatchability.</p>
          </div>
        </div>

        {/* Stage 2: Hatching */}
        <div className="h-screen flex items-center justify-end px-10 md:px-24">
          <div className="max-w-md space-y-4 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-brand-primary">A New Life</h2>
            <p className="text-lg">Our 1-day old chicks are healthy, vaccinated, and carefully transported. The perfect start for your growing flock.</p>
          </div>
        </div>

        {/* Stage 3: Growing */}
        <div className="h-screen flex items-center justify-start px-10 md:px-24">
          <div className="max-w-md space-y-4 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-brand-primary">Optimal Nutrition</h2>
            <p className="text-lg">We provide high-grade poultry feed mapped to every growth stage, ensuring steady, healthy growth and strong immunity.</p>
          </div>
        </div>

        {/* Stage 4: Maturation */}
        <div className="h-screen flex items-center justify-end px-10 md:px-24">
          <div className="max-w-md space-y-4 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-brand-primary">Strong & Healthy</h2>
            <p className="text-lg">With the right environment and our expert farming guidance, your birds grow resilient, hitting optimal weights quickly.</p>
          </div>
        </div>

        {/* Stage 5: Adult Chicken */}
        <div className="h-screen flex items-center justify-start px-10 md:px-24">
          <div className="max-w-md space-y-4 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/40">
            <h2 className="text-3xl font-bold text-brand-primary">Premium Desi Chicken</h2>
            <p className="text-lg">Fully grown, top-quality desi chickens ready for the market. CC Agro provides trusted trading you can count on.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

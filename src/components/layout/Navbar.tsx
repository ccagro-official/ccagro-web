"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-brand-dark tracking-tight">
          CC <span className="text-brand-primary">Agro</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-brand-dark font-medium">
          <a href="#" className="hover:text-brand-primary transition-colors">Offerings</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Process</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Guidance</a>
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden sm:inline-flex">Get Quote</Button>
        </div>
      </div>
    </nav>
  );
}

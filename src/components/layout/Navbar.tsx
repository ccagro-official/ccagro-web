"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ButtonLink } from "../ui/Button";
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
        <div className="relative h-10 w-36 sm:h-12 sm:w-44" aria-label="CC Agro">
          <Image
            src="/images/cc-agro-logo.png"
            alt="CC Agro — Your Trust Our Quality"
            fill
            sizes="(max-width: 640px) 144px, 176px"
            className="object-cover"
            preload
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-brand-dark font-medium">
          <a href="#guidance" className="hover:text-brand-primary transition-colors">Offerings</a>
          <a href="#gallery" className="hover:text-brand-primary transition-colors">Gallery</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Guidance</a>
        </div>

        <div className="flex items-center gap-4">
          <ButtonLink href="#contact" size="sm" className="hidden sm:inline-flex">
            Get Quote
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
}

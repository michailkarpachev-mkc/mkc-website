"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function MinimalCenteredHero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      const currentScroll = window.scrollY;
      const progress = Math.min(currentScroll / scrollableHeight, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mark animation as complete after initial fade-in
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000); // Match animation duration
    
    return () => clearTimeout(timer);
  }, []);

  const calculateOpacity = (progress: number) => {
    if (progress < 0.5) {
      return progress * 2;
    } else if (progress < 0.7) {
      return 1;
    } else {
      return Math.max(0, 1 - ((progress - 0.7) / 0.3));
    }
  };

  const opacity = calculateOpacity(scrollProgress);

  return (
    <div className="bg-black relative overflow-hidden">
      {/* Blurry banner just below the header */}
      <div className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1920&auto=format&fit=crop"
          alt="Construction drawings and site"
          className="h-full w-full object-cover blur-xl opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 isolate px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-5xl py-20 sm:py-28">
          <div className="text-center space-y-12">
            <h1 className="text-balance text-white font-normal" style={{ fontSize: 'clamp(2.295rem, 5.355vw, 3.4425rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              we optimise your construction project from day one
            </h1>
            <div className="mt-2">
              <h2 
                className="font-semibold tracking-tight text-balance leading-tight max-w-4xl mx-auto text-white"
                style={!hasAnimated ? { 
                  fontSize: 'clamp(2.475rem, 6.93vw, 4.95rem)',
                  animation: 'fadeUp 1s ease-out forwards',
                  opacity: 0
                } : {
                  fontSize: 'clamp(2.475rem, 6.93vw, 4.95rem)',
                  opacity: 1
                }}
              >
                <span className="inline-block">need.</span>{" "}
                <span className="inline-block">scope.</span>{" "}
                <span className="inline-block">price.</span>
              </h2>
              <div className="mt-16 flex justify-center animate-bounce">
                <div className="relative">
                  {/* Glow effect background */}
                  <div className="absolute inset-0 blur-xl bg-white/30 rounded-full" />
                  <ChevronDown 
                    className="h-8 w-8 text-white relative z-10" 
                    style={{ filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))' }}
                    aria-hidden="true" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si on scrolle vers le bas et qu'on a dépassé le top (ex: 50px)
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 pt-6 left-0 w-full z-50 flex justify-center px-4 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} 
      style={{ background: "transparent" }}
    >
      <nav className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-8 py-3.5 flex items-center justify-between border border-white/40">
        {/* Left: Branding */}
        <a href="#home" className="text-xl font-black tracking-tight" style={{ color: "var(--color-text-heading)" }}>
          Rami Chaimae
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["À Propos", "Compétences", "Parcours", "Portfolio", "Contact"].map((item) => {
            const ids = ["about", "skills", "experience", "portfolio", "contact"];
            return (
              <a
                key={item}
                href={`#${ids[["À Propos", "Compétences", "Parcours", "Portfolio", "Contact"].indexOf(item)]}`}
                className="text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: "var(--color-text-heading)" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--color-text-heading)")}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Right: CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-7 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/30"
          style={{ background: "var(--color-primary)" }}
        >
          Me Contacter
        </a>
      </nav>
    </header>
  );
}

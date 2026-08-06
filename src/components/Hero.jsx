"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/Portfolio/images/background%20final.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12 relative z-10">
        
        {/* ── Left Column: Text & Value Proposition ── */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7"
        >
          
          {/* Sub-heading Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-white/50 text-sm font-bold tracking-wider uppercase text-[var(--color-primary)]">
            Community Manager & Créatrice de Contenu
          </span>
          
          {/* Main Name Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] text-[var(--color-text-heading)]">
            Rami <br className="hidden lg:block" />
            <span className="text-[var(--color-primary)]">Chaimae</span>
          </h1>

          {/* Bio Paragraph */}
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium">
            Transformer des idées en contenus qui attirent, engagent et valorisent les marques.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto text-center bg-[var(--color-primary)] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/30"
            >
              Voir mon Portfolio ✨
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 hover:bg-[var(--color-primary)]/5 hover:scale-105"
            >
              Me Contacter
            </a>
          </div>

          {/* Stats Metrics Block */}
          <div className="pt-6 w-full max-w-lg">
            <div className="bg-white/50 backdrop-blur-lg border border-white/60 shadow-lg rounded-3xl p-6 sm:p-8 flex flex-row items-center justify-between gap-4">
              <div className="text-center flex-1">
                <div className="text-2xl sm:text-3xl font-black text-[var(--color-text-heading)]">167K+</div>
                <div className="text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)] mt-1">Vues TikTok</div>
              </div>
              <div className="w-px h-12 bg-[var(--color-text-secondary)]/20"></div>
              <div className="text-center flex-1">
                <div className="text-2xl sm:text-3xl font-black text-[var(--color-text-heading)]">70+</div>
                <div className="text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)] mt-1">Posts Créés</div>
              </div>
              <div className="w-px h-12 bg-[var(--color-text-secondary)]/20"></div>
              <div className="text-center flex-1">
                <div className="text-2xl sm:text-3xl font-black text-[var(--color-text-heading)]">100%</div>
                <div className="text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)] mt-1">A à Z</div>
              </div>
            </div>
          </div>

        </motion.div>



      </div>
    </div>
  );
}

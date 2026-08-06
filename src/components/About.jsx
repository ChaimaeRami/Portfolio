"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Colonne de gauche (Image) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <img 
            src="/images/cafe2.jpeg" 
            alt="À propos de Chaimae" 
            className="w-full max-w-md rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Colonne de droite (Texte) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">À Propos de Moi</h2>
          
          <div className="flex flex-col gap-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Diplômée en Commerce et Marketing, je suis dotée d&apos;une expérience solide en vente, marketing digital
              et gestion de la relation client. Dynamique, polyvalente et proactive, je suis motivée à contribuer
              efficacement au développement et à la réussite de nouveaux projets.
            </p>
            <p>
              Plus qu&apos;une Community Manager, je suis une créatrice de contenu qui aime raconter l&apos;histoire des marques
              à travers l&apos;image. De la photographie au Reel final, je conçois des contenus authentiques qui attirent,
              engagent et valorisent chaque produit.
            </p>
          </div>
          
          <div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <span>✉️</span> Travailler avec moi
            </a>
          </div>

          {/* Stats grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100"
          >
            {[
              { icon: "🎬", num: "167K+", label: "Vues sur TikTok" },
              { icon: "📱", num: "120,7K", label: "Vues sur un Reel" },
              { icon: "📝", num: "70+", label: "Posts & Reels créés" },
              { icon: "⭐", num: "100%", label: "Contenu réalisé A–Z" },
            ].map(({ icon, num, label }) => (
              <motion.div 
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="bg-pink-50/50 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-pink-100/50 hover:bg-pink-50 transition-colors"
              >
                <div className="text-3xl mb-2 drop-shadow-sm">{icon}</div>
                <div className="text-2xl font-extrabold text-pink-600">{num}</div>
                <div className="text-sm font-medium text-gray-600 mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

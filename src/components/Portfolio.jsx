"use client";

import Image from "next/image";
import { Search, Camera, Video, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  { num: "01", title: "Recherche", icon: <Search className="w-8 h-8 text-white" /> },
  { num: "02", title: "Photographie", icon: <Camera className="w-8 h-8 text-white" /> },
  { num: "03", title: "Montage", icon: <Video className="w-8 h-8 text-white" /> },
  { num: "04", title: "Rédaction", icon: <PenTool className="w-8 h-8 text-white" /> },
  { num: "05", title: "Publication", icon: <Rocket className="w-8 h-8 text-white" /> },
];

export default function Portfolio() {
  return (
    <div className="bg-pink-50 py-24 relative">
      <section id="portfolio" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Portfolio & Réalisations</h2>
          <p className="text-pink-600 font-medium">Création de contenu · Photographie · Design de marque</p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Card 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="md:col-span-1 md:row-span-2 bg-white rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
             <div className="relative w-full flex-grow min-h-[300px] md:min-h-[450px]">
               <Image 
                  src="/Portfolio/images/portfinal1.jpeg" 
                  fill 
                  className="object-cover" 
                  alt="Création de Contenu" 
               />
             </div>
             <div className="p-8">
               <h3 className="text-gray-900 font-bold text-2xl mb-2">Création de Contenu & Reels</h3>
               <p className="text-gray-600">Conception de posts et vidéos au design attractif.</p>
             </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-white rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
             <div className="relative w-full h-48 md:h-56">
               <Image 
                  src="/Portfolio/images/portfinal2.jpeg" 
                  fill 
                  className="object-cover" 
                  alt="Photographie Produit" 
               />
             </div>
             <div className="p-6">
               <h3 className="text-gray-900 font-bold text-xl mb-2">Photographie Produit</h3>
               <p className="text-gray-600">Mise en valeur visuelle et direction artistique.</p>
             </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="bg-white rounded-2xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
             <div className="relative w-full h-48 md:h-56">
               <Image 
                  src="/Portfolio/images/insfinal3.jpeg" 
                  fill 
                  className="object-cover" 
                  alt="Performances & Viralité" 
               />
             </div>
             <div className="p-6">
               <h3 className="text-gray-900 font-bold text-xl mb-2">Performances & Viralité</h3>
               <p className="text-gray-600">Stratégies orientées croissance (ex: Reel à 120K+ vues).</p>
             </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-16 mb-24"
        >
          <a 
            href="https://www.canva.com/design/DAHRbDAjMzU/k8OfB1dxUruGgSIm1N5DXA/edit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-pink-500 text-white text-lg font-bold rounded-full hover:bg-pink-600 hover:scale-105 shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            ✨ Découvrir mon Portfolio Complet
          </a>
        </motion.div>

        {/* Process Timeline */}
        <div className="mt-24 max-w-5xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">Mon Processus de Création</h3>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start text-center">
            {/* Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-pink-200 z-0"></div>
            
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center mb-10 md:mb-0 w-full md:w-1/5 group">
                <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-pink-500/40 transition-transform duration-300">
                  {step.icon}
                </div>
                <h4 className="text-gray-800 font-bold text-lg">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

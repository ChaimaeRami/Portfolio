"use client";

import { Sparkles, TrendingUp, Palette, MessageCircle, Camera, Video, LayoutTemplate, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { icon: Sparkles, title: "Création de Contenu Attractif", desc: "Posts, Stories, Reels qui captivent." },
    { icon: TrendingUp, title: "Augmentation de la Visibilité", desc: "Stratégies de contenu orientées croissance." },
    { icon: Palette, title: "Identité Visuelle Cohérente", desc: "Charte graphique et design de marque." },
    { icon: MessageCircle, title: "Engagement & Relation Client", desc: "Réponses personnalisées, communauté fidèle." },
    { icon: Camera, title: "Photographie Produit", desc: "Mise en valeur visuelle professionnelle." },
    { icon: Video, title: "Montage Vidéo", desc: "Reels et vidéos optimisés pour chaque plateforme." },
    { icon: LayoutTemplate, title: "Supports Marketing", desc: "Plaquettes, flyers, cartes de visite." },
    { icon: Lightbulb, title: "Idées Créatives & Tendances", desc: "Veille constante sur les tendances digitales." },
  ];

  return (
    <div style={{ background: "linear-gradient(135deg, #2A1D24 0%, #3D2631 100%)" }}>
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center !text-white mb-16">
          Ce que j&apos;Apporte à une Marque
        </h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div 
              key={title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors duration-300">
                <Icon className="text-pink-500 w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold !text-white mb-2">{title}</h3>
              <p className="text-pink-50/80 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

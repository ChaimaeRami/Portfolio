"use client";

import { useState } from 'react';
import { Code, User, CheckCircle2, Star, Briefcase, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = {
  "Compétences Techniques": [
    "Canva", "Marketing Digital", "Community Management",
    "Création de Contenu", "Photographie Produit", "Montage Vidéo",
    "Reels & Stories", "Planification Éditoriale", "Design Graphique",
  ],
  "Qualités Personnelles": [
    "Créativité", "Organisation", "Adaptabilité",
    "Esprit d'initiative", "Travail en équipe", "Communication",
  ]
};

const experiences = [
  {
    date: "2024 – 2025",
    title: "Community Manager",
    place: "Gorgeous Ladies – Oujda",
    items: [
      "Gestion et animation de la page Instagram (cosmétiques).",
      "Création de Posts, Stories et Reels viraux (167K+ vues).",
      "Photographie et mise en valeur des produits.",
      "Gestion des messages clients & supports marketing.",
    ],
  },
  {
    date: "Juillet 2025",
    title: "Stagiaire Commerciale",
    place: "MAXIPRO",
    items: [
      "Saisie et gestion des opérations commerciales (Atlascom).",
      "Suivi de la relation client et analyse des besoins.",
      "Préparation et suivi des commandes (logistique).",
    ],
  },
];

const formations = [
  {
    date: "2026",
    title: "TS en Gestion des Entreprises",
    place: "OFPPT – Oujda",
    sub: "Option Commerce et Marketing",
  },
  {
    date: "2025",
    title: "Certificat Innovation Entrepreneuriale",
    place: "OFPPT – Oujda",
    sub: "De l'idée de projet au projet viable",
  },
  {
    date: "2023",
    title: "Licence d'Études Anglaises",
    place: "Université Mohammed Premier, Oujda",
    sub: "",
  },
  {
    date: "2020",
    title: "Baccalauréat",
    place: "Lycée Ibn Khaldoun, Oujda",
    sub: "Sciences de la vie et de la Terre",
  },
];

function getCenterYear(dateStr) {
  if (dateStr === "2024 – 2025") return "2024-25";
  const match = dateStr.match(/\d{4}/);
  return match ? match[0] : dateStr;
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div className="bg-[#1c1218] py-24 relative">
      <div id="experience" className="absolute top-1/2"></div>
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="skills" 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12" style={{ color: '#ffffff' }}>Mes Compétences & Mon Parcours</h2>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#181116] border border-white/5 rounded-full p-1.5 flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'skills' ? 'bg-pink-500 text-white border border-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Star className="w-4 h-4" /> Compétences & Qualités
            </button>
            <button 
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'experience' ? 'bg-pink-500 text-white border border-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Briefcase className="w-4 h-4" /> Expériences
            </button>
            <button 
              onClick={() => setActiveTab('formations')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'formations' ? 'bg-pink-500 text-white border border-white' : 'text-gray-400 hover:text-white'}`}
            >
              <GraduationCap className="w-4 h-4" /> Formations
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'skills' && (
            <motion.div 
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
            {/* Compétences Techniques */}
            <div className="bg-[#291e25] border border-white/5 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-pink-500/10 rounded-2xl">
                  <Code className="w-6 h-6 text-pink-300" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#ffffff' }}>Compétences Techniques</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills["Compétences Techniques"].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-[#3e2433] border border-pink-500/30 rounded-full text-sm font-medium text-pink-50 hover:border-pink-500/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Qualités Personnelles */}
            <div className="bg-[#291e25] border border-white/5 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-pink-500/10 rounded-2xl">
                  <User className="w-6 h-6 text-pink-300" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#ffffff' }}>Qualités Personnelles</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills["Qualités Personnelles"].map((tag) => (
                  <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-[#3e2433] border border-pink-500/30 rounded-full text-sm font-medium text-pink-50 hover:border-pink-500/50 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </motion.div>
          )}

          {/* Experience & Formations Timeline */}
          {(activeTab === 'experience' || activeTab === 'formations') && (
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-4xl mx-auto py-8"
            >
            {/* Main vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-pink-900/50"></div>
            
            <div className="space-y-20 relative z-10">
              {(activeTab === 'experience' ? experiences : formations).map((item, index) => (
                <div key={index} className="flex items-center justify-between w-full group">
                  {/* Left side */}
                  <div className="w-[45%] text-right pr-6 md:pr-12">
                    <h4 className="text-xl md:text-2xl font-bold" style={{ color: '#ffffff' }}>{item.title}</h4>
                    <p className="text-pink-500 font-medium mt-1">{item.place}</p>
                  </div>
                  
                  {/* Center Dot and Year */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-pink-500 rounded-full shadow-[0_0_12px_#ec4899] relative z-10">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white font-bold text-sm md:text-base whitespace-nowrap">
                        {getCenterYear(item.date)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side */}
                  <div className="w-[45%] pl-6 md:pl-12 text-left">

                    {item.sub && (
                      <p className="text-gray-300 text-sm mb-2">{item.sub}</p>
                    )}
                    {item.items && (
                      <ul className="space-y-3">
                        {item.items.map((desc, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start text-left">
                            <span className="w-1.5 h-1.5 bg-pink-500 mr-3 mt-1.5 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}

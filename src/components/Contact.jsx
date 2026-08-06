"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'SUCCESS' or 'ERROR'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xppawdre", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("SUCCESS");
        window.location.href = "#contact";
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-[#181116] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Form (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Travaillons Ensemble ✨</h2>
            <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
              Je serais ravie de contribuer au développement de votre marque à travers des contenus créatifs et engageants.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Nom</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  className="w-full bg-black/20 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder-gray-600"
                  required 
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-black/20 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder-gray-600"
                  required 
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-black/20 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all placeholder-gray-600 resize-none"
                  required 
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-pink-500 hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] mt-4 flex items-center justify-center min-h-[56px]"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Send Message →"
                )}
              </button>
              
              {status === 'SUCCESS' && (
                <p className="text-green-400 text-sm mt-2 text-center">Message envoyé avec succès !</p>
              )}
              {status === 'ERROR' && (
                <p className="text-red-400 text-sm mt-2 text-center">Une erreur est survenue, veuillez réessayer.</p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Info Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex flex-col gap-6 justify-center"
          >
            {/* Card 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/50 transition-all">
                <Phone className="w-6 h-6 text-pink-500 group-hover:text-pink-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Téléphone</p>
                <p className="text-white font-bold text-lg">0606394999</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/50 transition-all">
                <Mail className="w-6 h-6 text-pink-500 group-hover:text-pink-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Email</p>
                <p className="text-white font-bold text-lg">sshaymae14@gmail.com</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-black/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-pink-500/50 transition-all">
                <MapPin className="w-6 h-6 text-pink-500 group-hover:text-pink-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">Adresse</p>
                <p className="text-white font-bold text-lg">Marrakech | Maroc</p>
              </div>
            </motion.div>
          </motion.div>
          
        </div>

      </div>
    </footer>
  );
}

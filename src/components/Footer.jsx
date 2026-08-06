"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#100b0e] pt-20 pb-8 text-white relative z-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          
          {/* Column 1: Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-3">
                Email
              </h3>
              <a href="mailto:sshaymae14@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                sshaymae14@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-3">
                Location
              </h3>
              <p className="text-gray-300 text-sm">
                Marrakech | Maroc
              </p>
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col">
            <h3 className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-6">
              Réseaux Sociaux
            </h3>
            <ul className="flex flex-col">
              {['Instagram', 'TikTok', 'LinkedIn'].map((network) => (
                <li key={network} className="border-b border-white/5">
                  <a href="#" className="flex items-center justify-between py-4 text-gray-400 hover:text-white transition-colors group text-sm">
                    {network}
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-pink-500 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h3 className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-6">
              Discutons de votre projet
            </h3>
            <ul className="flex flex-col">
              {[
                { label: 'WhatsApp', href: '#' },
                { label: 'Téléphone (0606394999)', href: 'tel:0606394999' }
              ].map((item) => (
                <li key={item.label} className="border-b border-white/5">
                  <a href={item.href} className="flex items-center justify-between py-4 text-gray-400 hover:text-white transition-colors group text-sm">
                    {item.label}
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-pink-500 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Rami Chaimae – Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs">
            Designed & Built with 💖
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

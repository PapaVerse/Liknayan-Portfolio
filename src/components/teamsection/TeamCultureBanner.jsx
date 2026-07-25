import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

export default function TeamCultureBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-28 rounded-3xl bg-gradient-to-r from-[#071A4A] via-[#0b2563] to-[#071A4A] px-8 py-14 text-center text-white shadow-2xl relative overflow-hidden border border-blue-900/40"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[90px] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          <Globe2 size={13} /> Cross-Border Collaboration
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Want to work with our expert engineering team?
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Let's collaborate to bring your vision to life with world-class technical execution and robust design.
        </p>
        <div className="pt-2">
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
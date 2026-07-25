import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutCTA({ itemVariants }) {
  return (
    <motion.div variants={itemVariants} className="mt-28">
      <div className="rounded-3xl bg-gradient-to-r from-[#071A4A] via-[#0b2563] to-[#071A4A] px-8 py-16 text-center text-white shadow-2xl relative overflow-hidden border border-blue-900/40">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles size={13} /> Let's Build Together
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to bring your digital vision to life?
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Let's collaborate to build something exceptional together. Reach out today to start your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
            <a 
              href="/projects" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 backdrop-blur-md transition-all"
            >
              View Our Projects
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
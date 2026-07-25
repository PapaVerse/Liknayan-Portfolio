import { motion } from "framer-motion";
import { Sparkles, Info } from "lucide-react";

export default function AboutHero({ itemVariants }) {
  return (
    <>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
          <Info size={14} /> Who We Are
        </div>
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-[#071A4A] tracking-tight mb-4">
          About Liknayan Tech Solutions
        </motion.h1>
        <motion.p variants={itemVariants} className="text-gray-600 text-base leading-relaxed">
          We are a passionate team of developers, designers, and technology enthusiasts dedicated to creating innovative digital solutions that help businesses grow, improve, and adapt in the modern digital world.
        </motion.p>
      </div>

      {/* Hero 3D Team Banner Showcase */}
      <motion.div 
        variants={itemVariants}
        className="mb-32 mt-16 relative rounded-3xl bg-gradient-to-b from-[#071A4A] via-[#0b2563] to-[#071A4A] px-8 pt-10 pb-0 md:px-12 md:pt-12 text-white shadow-2xl overflow-visible border border-blue-900/40"
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-[90px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-6 text-left space-y-4 pb-10 md:pb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles size={13} /> The Minds Behind the Code
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              United by Passion, Driven by Innovation
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              A dynamic cross-border synergy bridging technical excellence from the United Kingdom and world-class front-end design and engineering from the Philippines.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end relative self-end">
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative w-full max-w-lg flex items-end"
            >
              <div className="absolute inset-0 bg-blue-400/10 rounded-3xl filter blur-xl pointer-events-none"></div>
              <img 
                src="/images/3d_characters_transparent.png" 
                alt="Liknayan Tech Solutions Team Characters" 
                className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] relative z-20 scale-[1.3] md:scale-[1.4] origin-bottom translate-y-[1px]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
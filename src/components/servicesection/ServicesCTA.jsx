import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA({ itemVariants }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="mt-28 mb-16 relative rounded-3xl bg-[#071A4A] px-6 pt-12 pb-12 md:px-14 text-white shadow-2xl overflow-visible border border-blue-900/50"
    >
      <div className="absolute top-0 right-0 w-96 h-60 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-8 text-center lg:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Turning Ideas Into Digital Solutions</h2>
          <p className="max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
            Whether you need a website, web application, mobile app, or a complete digital solution, our team works closely with you to transform your ideas into reliable and impactful technology.
          </p>

          <div className="pt-2">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end relative self-end mt-8 lg:mt-0">
          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] flex items-end"
          >
            <div className="absolute inset-0 bg-blue-400/10 rounded-3xl filter blur-xl pointer-events-none"></div>
            <img 
              src="/images/character_4_isolated.png" 
              alt="Liknayan Tech Solutions Representative" 
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] relative z-30 scale-[1.15] sm:scale-[1.3] lg:scale-[1.88] origin-bottom translate-y-6 lg:translate-y-12 -scale-x-100"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
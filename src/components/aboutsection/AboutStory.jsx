import { motion } from "framer-motion";

export default function AboutStory({ itemVariants }) {
  return (
    <motion.div variants={itemVariants} className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-[#071A4A] mb-6">Our Story</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
          Founded in 2026, Liknayan Tech Solutions was built with a shared vision: to provide reliable, creative, and scalable technology solutions for businesses and organizations.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
          Our team consists of a Full Stack Developer based in the United Kingdom, Front-End Developers and a Graphic Layout Designer based in the Philippines. Together, we combine technical expertise, creativity, and dedication to transform ideas into powerful digital experiences.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          From web applications and business websites to customized digital solutions, we strive to deliver high-quality services that create meaningful impact for our clients.
        </p>
      </div>

      {/* Team Highlight Card */}
      <motion.div 
        whileHover={{ y: -6 }}
        className="bg-[#071A4A] rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group border border-blue-900/50"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px] pointer-events-none" />
        
        <h3 className="text-2xl font-bold tracking-tight mb-6">Our Global Team</h3>
        <ul className="space-y-4 text-gray-200 text-sm md:text-base">
          <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <span className="text-xl">🚀</span> 
            <div>
              <strong className="text-white block">1 Full Stack Developer</strong>
              <span className="text-xs text-blue-300">United Kingdom</span>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <span className="text-xl">💻</span> 
            <div>
              <strong className="text-white block">2 Front-End Developers</strong>
              <span className="text-xs text-blue-300">Philippines</span>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
            <span className="text-xl">🎨</span> 
            <div>
              <strong className="text-white block">1 Graphic Layout Designer</strong>
              <span className="text-xs text-blue-300">Philippines</span>
            </div>
          </li>
        </ul>
        <p className="mt-8 text-gray-300 text-xs md:text-sm leading-relaxed border-t border-white/10 pt-4">
          A collaborative team united by innovation, creativity, and a commitment to delivering exceptional technology solutions.
        </p>
      </motion.div>
    </motion.div>
  );
}
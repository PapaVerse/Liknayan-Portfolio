import { motion } from "framer-motion";
import { Sparkles, Info, Target, Eye, HeartHandshake, Globe2 } from "lucide-react";

export default function About() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden text-[#071A4A]">
      
      {/* Background Glow Orbs matching Team, Projects, and Services style */}
      <motion.div 
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-blue-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-indigo-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />

      {/* Floating Background Icons */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-40 left-12 text-blue-400/20 pointer-events-none hidden lg:block"
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 text-indigo-400/20 pointer-events-none hidden lg:block"
      >
        <Globe2 size={72} />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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

        {/* Hero 3D Team Banner Showcase with Bottom Edge Alignment & Overflow */}
        <motion.div 
          variants={itemVariants}
          className="mb-32 mt-16 relative rounded-3xl bg-gradient-to-b from-[#071A4A] via-[#0b2563] to-[#071A4A] px-8 pt-10 pb-0 md:px-12 md:pt-12 text-white shadow-2xl overflow-visible border border-blue-900/40"
        >
          {/* Ambient Lighting Accents inside banner */}
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

        {/* Our Story */}
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

        {/* Mission Vision Values */}
        <motion.div variants={containerVariants} className="mt-24 grid md:grid-cols-3 gap-8">
          
          <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="p-8 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl transition-all relative group overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
              <Target size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#071A4A] mb-3">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To develop innovative, accessible, and reliable digital solutions that empower businesses through modern technology and efficient automation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="p-8 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl transition-all relative group overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
              <Eye size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#071A4A] mb-3">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become a trusted global technology partner recognized for creativity, engineering excellence, and impactful digital transformation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="p-8 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl transition-all relative group overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
              <HeartHandshake size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#071A4A] mb-3">Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Innovation, integrity, close cross-border collaboration, and continuous improvement guide everything we design and build.
            </p>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}
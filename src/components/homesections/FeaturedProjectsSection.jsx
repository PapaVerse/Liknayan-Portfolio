import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

export default function FeaturedProjectsSection() {
  const featured = [
    { 
      title: "Macro Wiring Technologies", 
      desc: "Enterprise platform engineered for industrial wire harness solutions and vendor management.",
      img: "/images/desktopmacro.png", 
      link: "https://www.macrowiring.com/",
      tag: "Enterprise Web"
    },
    { 
      title: "WalkMap", 
      desc: "Interactive navigation tool optimized for seamless pathfinding and location exploration.",
      img: "/images/desktopwalk.png", 
      link: "https://walk-map-iota.vercel.app/",
      tag: "Web Application"
    },
    { 
      title: "Chavacano API", 
      desc: "Robust backend API service providing localized linguistic data and developer endpoints.",
      img: "/images/desktopchav.png", 
      link: "https://chavacano-api.vercel.app/",
      tag: "Backend & API"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      
      {/* Background Decorative Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading with Stagger Entrance */}
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
            >
              <Sparkles size={14} /> Portfolio Showcase
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-[#071A4A] tracking-tight"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed"
          >
            Explore our latest digital products, crafted with advanced architectures, seamless UI/UX, and robust performance.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 hover:shadow-2xl transition-all duration-300 group flex flex-col relative"
            >
              {/* Top Tech Laser Line Animation on Hover */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              {/* Image Preview Container with Smooth Scale & Browser Window Header Effect */}
              <div className="h-60 w-full overflow-hidden relative bg-gray-100 border-b border-gray-100">
                
                {/* Window Control Dots simulation */}
                <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>

                {/* Badge Tag */}
                <div className="absolute top-3 right-4 z-20">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#071A4A] px-3 py-1 rounded-full shadow-xs border border-gray-200/60">
                    {proj.tag}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#071A4A]/10 group-hover:bg-transparent transition-colors z-10" />
                <motion.img 
                  src={proj.img} 
                  alt={proj.title} 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-cover object-top pt-8" 
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-[#071A4A] mb-3 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#071A4A] group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Website</span>
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
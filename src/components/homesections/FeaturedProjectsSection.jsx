import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjectsSection() {
  const featured = [
    { title: "Macro Wiring Technologies", img: "/images/desktopmacro.png", link: "https://www.macrowiring.com/" },
    { title: "WalkMap", img: "/images/desktopwalk.png", link: "https://walk-map-iota.vercel.app/" },
    { title: "Chavacano API", img: "/images/desktopchav.png", link: "https://chavacano-api.vercel.app/" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading matching your existing site style */}
        <div className="mb-12">
          <h2 className="text-sm font-bold text-blue-600 tracking-[5px] uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl font-bold text-[#071A4A]">Featured Projects</h3>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((proj, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 group transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#071A4A] mb-4">{proj.title}</h4>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-[#071A4A] font-semibold hover:text-blue-700 transition-colors"
                >
                  View Website <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
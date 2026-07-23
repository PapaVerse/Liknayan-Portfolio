import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Cpu, Globe } from 'lucide-react';

export default function ProblemSolution() {
  // Track mouse coordinates for interactive card spotlight effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveCard(index);
  };

  const problems = [
    { 
      title: "Manual Processes", 
      desc: "Wasting time on repetitive, error-prone manual tasks.",
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />
    },
    { 
      title: "Legacy Systems", 
      desc: "Struggling with outdated tech that slows you down.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    { 
      title: "Outdated Presence", 
      desc: "Losing customers to a brand that doesn't stand out.",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Subtle Tech Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#071A4A_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Pain Point Strip with Interactive Spotlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => setActiveCard(null)}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-200/80 hover:shadow-2xl transition-all relative group overflow-hidden"
            >
              {/* Dynamic Interactive Mouse-Follow Spotlight Effect */}
              {activeCard === i && (
                <div
                  className="absolute pointer-events-none -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.12), transparent 80%)`,
                  }}
                />
              )}

              {/* Subtle Tech Laser Line on Top */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              <div className="relative z-10">
                {/* Icon Container with Glow */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {React.cloneElement(p.icon, {
                    className: "w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  })}
                </div>

                <h3 className="text-xl font-bold text-[#071A4A] mb-3 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Liknayan Difference with Tech Accent Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-gray-50/80 to-blue-50/30 border border-gray-100 shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#071A4A] mb-6">
            The Liknayan Difference
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We don't just build software; we engineer growth. By replacing manual bottlenecks 
            with intelligent automation and transforming legacy systems into scalable digital 
            assets, we ensure your technology works as hard as you do.
          </p>

          {/* Animated Tech Pulse Line */}
          <div className="w-24 h-1.5 bg-blue-600/30 mx-auto rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-blue-600 rounded-full"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
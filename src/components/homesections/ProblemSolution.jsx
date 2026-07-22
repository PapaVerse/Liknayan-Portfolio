import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Cpu, Globe } from 'lucide-react';

export default function ProblemSolution() {
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
        
        {/* Pain Point Strip with Smooth Stagger Animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, borderColor: "rgba(37, 99, 235, 0.3)" }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all relative group overflow-hidden"
            >
              {/* Subtle Tech Laser Line on Hover */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>

              <h3 className="text-xl font-bold text-[#071A4A] mb-3 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* The Liknayan Difference with Tech Accent Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto relative p-8 rounded-3xl bg-gradient-to-b from-gray-50/60 to-transparent border border-gray-100"
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
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-white/50"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
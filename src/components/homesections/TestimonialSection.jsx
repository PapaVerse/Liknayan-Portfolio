import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      company: "Macro Wiring Technologies Co. Inc.",
      quote: "Liknayan Tech Solutions transformed our static presence into a powerful, dynamic business platform. Their expertise and dedication are unmatched.",
      status: "Completed Project",
      // Path relative to the public folder
      image: "/images/macrocompleted.jpg" 
    },
    {
      company: "Cavite West Point College",
      quote: "Collaborating with Liknayan on our new system has been a seamless experience. They truly understand our vision for digital transformation.",
      status: "Ongoing Partnership",
      // Path relative to the public folder
      image: "/images/cwpcproposal.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header with Fade-In Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-600 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-3 inline-block"
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#071A4A]">
            Trusted Partnerships
          </h2>
        </motion.div>
        
        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.2 } 
              }}
              className="bg-white rounded-3xl shadow-sm border border-gray-200/80 overflow-hidden hover:shadow-2xl transition-all duration-300 relative group flex flex-col"
            >
              {/* Subtle Tech Laser Line on Top */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />

              {/* Image Container with Zoom Effect */}
              <div className="h-56 w-full overflow-hidden relative bg-gray-100">
                <div className="absolute inset-0 bg-[#071A4A]/10 group-hover:bg-transparent transition-colors z-10" />
                <motion.img 
                  src={t.image} 
                  alt={t.company} 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-gray-600 italic leading-relaxed mb-6 text-base sm:text-lg">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#071A4A] text-base sm:text-lg">
                      {t.company}
                    </h3>
                  </div>

                  {/* Sleek Status Badge with entrance scale */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      t.status === "Completed Project" 
                        ? "bg-green-50 text-green-700 border border-green-200/60" 
                        : "bg-blue-50 text-blue-700 border border-blue-200/60"
                    }`}
                  >
                    {t.status === "Completed Project" ? (
                      <CheckCircle2 size={13} className="text-green-600" />
                    ) : (
                      <Clock size={13} className="text-blue-600" />
                    )}
                    <span>{t.status}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
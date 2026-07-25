import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServicesGrid({ containerVariants, itemVariants, services }) {
  return (
    <motion.div 
      variants={containerVariants}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="p-8 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div>
            <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-3xl mb-6 shadow-2xs">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold text-[#071A4A] mb-3">{service.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
          </div>

          <div className="border-t border-gray-100 pt-4 mt-auto">
            <ul className="space-y-2">
              {service.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                  <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake } from "lucide-react";

export default function AboutMissionVision({ containerVariants, itemVariants }) {
  return (
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
  );
}
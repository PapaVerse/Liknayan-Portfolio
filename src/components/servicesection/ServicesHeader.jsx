import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export default function ServicesHeader({ itemVariants }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
        <Layers size={14} /> What We Offer
      </div>
      <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-[#071A4A] tracking-tight mb-4">
        Our Services
      </motion.h1>
      <motion.p variants={itemVariants} className="text-gray-600 text-base leading-relaxed">
        At Liknayan Tech Solutions, we provide innovative technology solutions designed to help businesses grow, automate processes, and build a stronger digital presence.
      </motion.p>
    </div>
  );
}
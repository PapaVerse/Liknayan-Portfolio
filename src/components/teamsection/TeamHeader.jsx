import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function TeamHeader({ itemVariants }) {
  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
      >
        <Users size={14} /> Expert Professionals
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl font-extrabold text-[#071A4A] tracking-tight mb-4"
      >
        Meet the Team
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto text-base"
      >
        A dedicated group of developers and automation specialists committed to building efficient, scalable, and user-centric digital solutions.
      </motion.p>
    </div>
  );
}
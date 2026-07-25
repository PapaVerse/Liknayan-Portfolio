import { motion } from "framer-motion";

export default function AboutStats({ itemVariants }) {
  const stats = [
    { value: "100%", label: "Client Commitment" },
    { value: "2+", label: "Countries Connected (UK & PH)" },
    { value: "10+", label: "Technologies Mastered" },
    { value: "24/7", label: "Dedication to Quality" },
  ];

  return (
    <motion.div variants={itemVariants} className="mt-28">
      <div className="rounded-3xl bg-[#071A4A] px-8 py-12 text-white shadow-xl border border-blue-900/40 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[80px] pointer-events-none" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{stat.value}</h3>
              <p className="text-xs md:text-sm text-blue-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function ServicesTechStack({ itemVariants }) {
  const techs = ["React & Next.js", "Node.js & Express", "React Native", "Tailwind CSS", "Python & APIs", "Cloud Infrastructure"];

  return (
    <motion.div variants={itemVariants} className="mt-28">
      <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-100 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Cpu size={14} /> Modern Technology Stack
        </div>
        <h3 className="text-2xl font-extrabold text-[#071A4A] mb-3">Engineered with Cutting-Edge Tools</h3>
        <p className="text-gray-600 text-sm max-w-xl mx-auto mb-6">
          We leverage industry-standard frameworks and reliable architectures to guarantee performance, security, and scalability.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 rounded-xl bg-white border border-blue-100 text-[#071A4A] text-xs font-semibold shadow-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
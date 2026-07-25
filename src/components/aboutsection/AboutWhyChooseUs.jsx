import { motion } from "framer-motion";
import { Globe, Layers, ShieldCheck } from "lucide-react";

export default function AboutWhyChooseUs({ itemVariants }) {
  const features = [
    {
      title: "Cross-Border Expertise",
      description: "Blending international engineering standards from the UK with cost-effective, world-class creative design from the Philippines.",
      icon: <Globe size={22} />,
    },
    {
      title: "End-to-End Capabilities",
      description: "From frontend development and backend architecture to branding, media production, and documentation under one roof.",
      icon: <Layers size={22} />,
    },
    {
      title: "Client-Centric Approach",
      description: "Tailor-made digital solutions built specifically to match your unique business growth goals and requirements.",
      icon: <ShieldCheck size={22} />,
    },
  ];

  return (
    <motion.div variants={itemVariants} className="mt-28">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
          Why Us
        </span>
        <h2 className="text-3xl font-extrabold text-[#071A4A] tracking-tight mb-3">Our Competitive Edge</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Discover what makes Liknayan Tech Solutions stand out as your ideal digital partner.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl border border-gray-100 bg-white shadow-xl relative group overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-2xs">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold text-[#071A4A] mb-3">{feat.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
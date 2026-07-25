import { motion } from "framer-motion";
import { Compass, Cpu, Code2, Rocket } from "lucide-react";

export default function AboutProcess({ itemVariants }) {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Understanding your goals, target audience, and technical requirements.",
      icon: <Compass size={22} />,
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Crafting intuitive UI/UX layouts and engineering the system blueprint.",
      icon: <Cpu size={22} />,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Writing clean, scalable code and rigorous quality checks.",
      icon: <Code2 size={22} />,
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launching your solution and providing ongoing maintenance.",
      icon: <Rocket size={22} />,
    },
  ];

  return (
    <motion.div variants={itemVariants} className="mt-28">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
          Workflow
        </span>
        <h2 className="text-3xl font-extrabold text-[#071A4A] tracking-tight mb-3">How We Deliver Excellence</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our streamlined process ensures transparency, collaboration, and high-performing final outputs from start to finish.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-gray-100 bg-white shadow-xl relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-3xl font-black text-gray-200 group-hover:text-blue-100 transition-colors">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#071A4A] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
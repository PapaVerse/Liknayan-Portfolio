import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareCode, Layers, Rocket } from "lucide-react";

export default function PathToSuccessSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Consult & Strategy",
      description: "We sit down with you to understand your business goals, target audience, and specific challenges, translating your vision into a clear, actionable tech roadmap.",
      icon: <MessageSquareCode className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team crafts intuitive user interfaces and builds robust, scalable code architectures, keeping you looped in with transparent progress updates.",
      icon: <Layers className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "03",
      title: "Deploy & Scale",
      description: "We launch your solution seamlessly into the wild, providing continuous optimization, monitoring, and support as your user base and business grow.",
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
    },
  ];

  // Loop through steps automatically every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-[5px] uppercase mb-2">
            Path to Success
          </h2>
          <h3 className="text-4xl font-bold text-[#071A4A] mb-4">
            How We Work With You
          </h3>
          <p className="text-gray-600 text-lg">
            We demystify the tech process with a clear, collaborative 3-step journey tailored for non-technical partners.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const isActive = currentStep === idx;

            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isActive ? 1.03 : 1.0,
                  borderColor: isActive ? "rgba(37, 99, 235, 0.5)" : "rgba(229, 231, 235, 1)",
                }}
                transition={{ duration: 0.4 }}
                className={`relative bg-white rounded-2xl p-8 border shadow-sm flex flex-col justify-between transition-all duration-300 ${
                  isActive ? "ring-4 ring-blue-500/10 shadow-md" : "opacity-80"
                }`}
              >
                {/* Active Highlight Glow Line on Top */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute top-0 left-8 right-8 h-1 bg-blue-600 rounded-t-2xl"
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-extrabold text-gray-200">
                      {step.number}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-[#071A4A] mb-3">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Animated progress bar indicator per card */}
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  {isActive && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="h-full bg-blue-600"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
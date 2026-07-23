import { motion } from "framer-motion";
import { Sparkles, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    { 
      title: "Web Application Development", 
      description: "We build secure, scalable, and high-performing web applications designed to streamline business processes and improve user experiences.", 
      icon: "💻",
      features: ["Custom SIS & CMS Integration", "RESTful API Development", "High-Performance Architecture"]
    },
    { 
      title: "Mobile Application Development", 
      description: "We craft high-quality, intuitive, and feature-rich mobile applications for iOS and Android, designed to engage users on the go.", 
      icon: "📱",
      features: ["Cross-Platform React Native", "Real-time Synchronization", "Secure Build Validation"]
    },
    { 
      title: "Website Development", 
      description: "From corporate websites to custom platforms, we create modern and responsive websites that represent your brand and help you reach more customers.", 
      icon: "🌐",
      features: ["Corporate & Dynamic Platforms", "SEO & Speed Optimization", "Mobile-First Design"]
    },
    { 
      title: "UI/UX Design", 
      description: "We design intuitive and engaging user interfaces focused on usability, accessibility, and creating meaningful digital experiences.", 
      icon: "🎨",
      features: ["User Research & Wireframing", "Interactive Prototyping", "Modern Design Systems"]
    },
    { 
      title: "Custom Software Solutions", 
      description: "Every business has unique needs. We develop customized software solutions tailored to your workflow, goals, and operational requirements.", 
      icon: "⚙️",
      features: ["Workflow Automation", "Centralized Data Dashboards", "Scalable Enterprise Tools"]
    },
    { 
      title: "IT Consulting & Technical Support", 
      description: "We provide technology guidance and continuous support to help businesses choose the right solutions, optimize systems, and maximize digital potential.", 
      icon: "🚀",
      features: ["System Maintenance & Audits", "Infrastructure Troubleshooting", "Technology Roadmap Planning"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white relative overflow-visible text-[#071A4A]">
      
      {/* Background Glow Orbs matching Team & Projects style */}
      <motion.div 
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-blue-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-indigo-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />

      {/* Floating Background Icons */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-40 left-12 text-blue-400/20 pointer-events-none hidden lg:block"
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 text-indigo-400/20 pointer-events-none hidden lg:block"
      >
        <Layers size={72} />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={14} /> What We Offer
          </div>
          <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-[#071A4A] tracking-tight mb-4">Our Services</motion.h1>
          <motion.p variants={itemVariants} className="text-gray-600 text-base leading-relaxed">
            At Liknayan Tech Solutions, we provide innovative technology solutions designed to help businesses grow, automate processes, and build a stronger digital presence.
          </motion.p>
        </div>

        {/* Services Grid */}
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

        {/* Closing Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-36 mb-16 relative rounded-3xl bg-[#071A4A] px-6 pt-12 pb-12 md:px-14 text-white shadow-2xl overflow-visible border border-blue-900/50"
        >
          {/* Ambient Lighting Accents inside banner */}
          <div className="absolute top-0 right-0 w-96 h-60 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Turning Ideas Into Digital Solutions</h2>
              <p className="max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
                Whether you need a website, web application, mobile app, or a complete digital solution, our team works closely with you to transform your ideas into reliable and impactful technology.
              </p>

              <div className="pt-2">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                >
                  Get in Touch <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Responsive character container: smaller scale & centered on mobile, full desktop scaling on large screens */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end relative self-end mt-8 lg:mt-0">
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] flex items-end"
              >
                <div className="absolute inset-0 bg-blue-400/10 rounded-3xl filter blur-xl pointer-events-none"></div>
                <img 
                  src="/images/character_4_isolated.png" 
                  alt="Liknayan Tech Solutions Representative" 
                  className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] relative z-30 scale-[1.15] sm:scale-[1.3] lg:scale-[1.88] origin-bottom translate-y-6 lg:translate-y-12 -scale-x-100"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";
import ServicesHeader from "../components/servicesection/ServicesHeader";
import ServicesGrid from "../components/servicesection/ServicesGrid";
import ServicesTechStack from "../components/servicesection/ServicesTechStack";
import ServicesCTA from "../components/servicesection/ServicesCTA";

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
      
      {/* Background Glow Orbs */}
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
        {/* 1. Header Section */}
        <ServicesHeader itemVariants={itemVariants} />

        {/* 2. Services Grid */}
        <ServicesGrid containerVariants={containerVariants} itemVariants={itemVariants} services={services} />

        {/* 3. Technology Stack Highlight */}
        <ServicesTechStack itemVariants={itemVariants} />

        {/* 4. Closing CTA & Banner */}
        <ServicesCTA itemVariants={itemVariants} />

      </motion.div>
    </section>
  );
}
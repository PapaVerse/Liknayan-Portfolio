import { motion } from "framer-motion";
import { Sparkles, Globe2 } from "lucide-react";
import AboutHero from "../components/aboutsection/AboutHero";
import AboutStory from "../components/aboutsection/AboutStory";
import AboutMissionVision from "../components/aboutsection/AboutMissionVision";
import AboutProcess from "../components/aboutsection/AboutProcess";
import AboutStats from "../components/aboutsection/AboutStats";
import AboutWhyChooseUs from "../components/aboutsection/AboutWhyChooseUs";
import AboutCTA from "../components/aboutsection/AboutCTA";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden text-[#071A4A]">
      
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
        <Globe2 size={72} />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 1. Hero & Banner */}
        <AboutHero itemVariants={itemVariants} />

        {/* 2. Story & Global Team Layout */}
        <AboutStory itemVariants={itemVariants} />

        {/* 3. Mission, Vision, and Values */}
        <AboutMissionVision containerVariants={containerVariants} itemVariants={itemVariants} />

        {/* 4. Our Core Process */}
        <AboutProcess itemVariants={itemVariants} />

        {/* 5. Key Milestones / Stats Counter */}
        <AboutStats itemVariants={itemVariants} />

        {/* 6. Why Choose Us / Competitive Edge */}
        <AboutWhyChooseUs itemVariants={itemVariants} />

        {/* 7. Call-to-Action Banner */}
        <AboutCTA itemVariants={itemVariants} />
        
      </motion.div>
    </section>
  );
}
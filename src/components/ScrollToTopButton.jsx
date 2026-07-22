import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Zap } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-2xl bg-[#071A4A] text-white border border-blue-500/40 shadow-xl shadow-blue-950/40 backdrop-blur-md overflow-hidden transition-colors"
          aria-label="Scroll to top"
        >
          {/* Tech Laser / Cyber Glow Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Subtle Outer Pulsing Ring */}
          <div className="absolute inset-0 rounded-2xl border border-blue-400/30 animate-ping opacity-20 pointer-events-none" />

          {/* Icons with micro-interaction */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <ChevronUp size={22} className="text-blue-400 group-hover:-translate-y-0.5 transition-transform duration-300" />
            <Zap size={10} className="text-blue-300 animate-pulse -mt-1" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
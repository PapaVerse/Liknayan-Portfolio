import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, Code2, Cpu } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#071A4A] text-white relative overflow-hidden pt-16 pb-12 border-t border-blue-900/40">
      
      {/* Background Animated Glow Elements */}
      <motion.div 
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -30, 30, 0], y: [0, 25, -25, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none"
      />

      {/* Floating Animated Icons in Footer Background */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-blue-400/10 pointer-events-none hidden lg:block"
      >
        <Sparkles size={48} />
      </motion.div>
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-16 right-12 text-indigo-400/10 pointer-events-none hidden lg:block"
      >
        <Code2 size={56} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2.5 shadow-lg shadow-blue-950/50">
                <img
                  src="/LIKNAYAN.png"
                  alt="Liknayan Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Liknayan Tech Solutions
                </h2>
                <p className="text-blue-300 text-xs font-medium uppercase tracking-wider">
                  We Build Solutions
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-300 text-sm leading-relaxed">
              We Likha. We Innovate. We Build Solutions. Creating modern software, applications, and digital platforms that empower businesses and institutions.
            </p>

            {/* Moving / Floating Tech Badge */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 mt-6 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-blue-200 shadow-sm"
            >
              <Cpu size={14} className="text-blue-400 animate-pulse" /> Global Tech Team (UK & PH)
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 tracking-wide text-white uppercase text-xs">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-bold mb-5 tracking-wide text-white uppercase text-xs">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={15} />
                </div>
                <span className="truncate">liknayantechsolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={15} />
                </div>
                <span>+63 999-470-2919</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin size={15} />
                </div>
                <span>Philippines</span>
              </div>
            </div>

            {/* Socials with Hover Animation */}
            <div className="flex gap-3 mt-6">
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/profile.php?id=61589032422619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-md"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </motion.a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-blue-900/60 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Liknayan Tech Solutions. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 text-blue-300/80 font-medium">Designed with precision & innovation.</p>
        </div>

      </div>
    </footer>
  );
}
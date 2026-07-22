import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, Code2, Cpu, ShieldCheck, X, Lock, FileText, Eye, CheckCircle2 } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
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

          {/* Copyright Bar with Modern Interactive Privacy Modal Trigger */}
          <div className="border-t border-blue-900/60 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-4">
            <p>© {new Date().getFullYear()} Liknayan Tech Solutions. All Rights Reserved.</p>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-blue-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium underline underline-offset-4 decoration-blue-500/50"
              >
                <ShieldCheck size={14} className="text-blue-400" /> Privacy Policy
              </button>
              <span className="text-blue-800">•</span>
              <p className="text-blue-300/80 font-medium">Designed with precision & innovation.</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Modern High-End Animated Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="bg-white text-[#071A4A] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden relative border border-gray-100 flex flex-col max-h-[85vh]"
            >
              {/* Modal Header */}
              <div className="bg-[#071A4A] text-white p-6 sm:px-8 flex items-center justify-between relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-300">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">Privacy Policy</h3>
                    <p className="text-blue-300 text-xs">Liknayan Tech Solutions • Secure & Transparent</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors relative z-10"
                  aria-label="Close Modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-600 leading-relaxed custom-scrollbar">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-blue-900 flex items-start gap-3">
                  <FileText size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm">
                    At <strong>Liknayan Tech Solutions</strong>, we value your privacy and are committed to safeguarding your personal and corporate information when you use our software solutions and services.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#071A4A] flex items-center gap-2 mb-1.5 text-base">
                      <span className="w-2 h-2 rounded-full bg-blue-600" /> 1. Information We Collect
                    </h4>
                    <p className="pl-4 text-xs sm:text-sm text-gray-600">
                      We collect information you voluntarily provide through our contact forms, service agreements, or project inquiries (such as your name, corporate email address, phone number, and project roadmap details). We also automatically gather anonymous analytics via cookies to optimize performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#071A4A] flex items-center gap-2 mb-1.5 text-base">
                      <span className="w-2 h-2 rounded-full bg-blue-600" /> 2. How We Use Your Data
                    </h4>
                    <p className="pl-4 text-xs sm:text-sm text-gray-600">
                      Your data is utilized strictly to deliver bespoke software engineering solutions, streamline client communication, manage project execution, and scale digital platforms securely.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#071A4A] flex items-center gap-2 mb-1.5 text-base">
                      <span className="w-2 h-2 rounded-full bg-blue-600" /> 3. Data Protection & Security
                    </h4>
                    <p className="pl-4 text-xs sm:text-sm text-gray-600">
                      We implement multi-layered encryption, robust administrative safeguards, and strict access protocols to protect your data against unauthorized access, alterations, disclosure, or destruction.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#071A4A] flex items-center gap-2 mb-1.5 text-base">
                      <span className="w-2 h-2 rounded-full bg-blue-600" /> 4. Your Rights
                    </h4>
                    <p className="pl-4 text-xs sm:text-sm text-gray-600">
                      You retain full control over your personal data. You may request access, modification, or complete deletion of your records from our databases at any time by reaching out directly via our official email.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 size={14} /> Compliant with Industry Standards
                  </span>
                  <span>Last Updated: June 2026</span>
                </div>
              </div>

              {/* Modal Footer Action */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#071A4A] text-white font-semibold text-xs sm:text-sm hover:bg-blue-900 transition shadow-md"
                >
                  Got It, Thanks
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
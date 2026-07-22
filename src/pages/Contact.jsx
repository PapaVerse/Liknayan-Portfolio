import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, XCircle, Code, Cpu, MessageSquare, Loader2 } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error', or null

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(
        "service_x0o96aq",
        "template_qxtrl9q",
        form.current,
        "Of-WnLY92Tzm_ExKX"
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setStatus('error');
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="pt-32 pb-20 bg-white text-[#071A4A] relative overflow-hidden">
      
      {/* Animated Popup Notification */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed bottom-10 right-10 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 border ${
              status === 'loading'
                ? 'bg-blue-600 border-blue-500 text-white'
                : status === 'success' 
                ? 'bg-green-600 border-green-500 text-white' 
                : 'bg-red-600 border-red-500 text-white'
            }`}
          >
            {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
            {status === 'success' && <CheckCircle className="w-5 h-5" />}
            {status === 'error' && <XCircle className="w-5 h-5" />}
            <p className="font-semibold text-sm">
              {status === 'loading' && "Sending message..."}
              {status === 'success' && "Message sent successfully!"}
              {status === 'error' && "Failed to send. Please try again."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Moving/Floating Background Glow Orbs */}
      <motion.div 
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-200/50 rounded-full filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-200/50 rounded-full filter blur-[140px] pointer-events-none"
      />

      {/* Floating Animated Icons in Background */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-36 left-12 text-blue-400/30 pointer-events-none hidden lg:block"
      >
        <Code size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-24 right-16 text-indigo-400/30 pointer-events-none hidden lg:block"
      >
        <Cpu size={72} />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare size={14} /> Get in Touch
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-[#071A4A] tracking-tight">
            Contact Us
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <motion.form 
            ref={form} 
            onSubmit={sendEmail} 
            variants={itemVariants} 
            className="space-y-6 bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-100 shadow-xl relative group overflow-hidden"
          >
            {/* Animated Top Border Line */}
            <motion.div 
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />

            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">
                Your Name
              </label>
              <input 
                type="text" 
                name="name" 
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#071A4A] transition text-sm" 
                placeholder="Your name" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">
                Email Address
              </label>
              <input 
                type="email" 
                name="email" 
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#071A4A] transition text-sm" 
                placeholder="your@email.com" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">
                Message
              </label>
              <textarea 
                name="message" 
                rows="4" 
                className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#071A4A] transition text-sm resize-none" 
                placeholder="How can we help you?" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-[#071A4A] hover:bg-blue-900 text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-900/10 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {/* Info Side with Moving Icons & Details */}
          <motion.div variants={itemVariants} className="space-y-8 lg:pl-6">
            
            <div className="bg-gray-50/80 backdrop-blur-md p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <h3 className="text-xl font-bold text-[#071A4A] mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6 text-gray-600 text-sm">
                <motion.div 
                  whileHover={{ x: 6 }} 
                  className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200/60 transition-all shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium text-gray-800">liknayantechsolutions@gmail.com</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 6 }} 
                  className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200/60 transition-all shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium text-gray-800">+63 999-470-2919</span>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 6 }} 
                  className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200/60 transition-all shadow-sm"
                >
                  <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600">
                    <MapPin size={18} />
                  </div>
                  <span className="font-medium text-gray-800">Philippines</span>
                </motion.div>
              </div>
            </div>

            <div className="bg-gray-50/80 backdrop-blur-md p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#071A4A] mb-6">
                Availability
              </h3>
              
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-gray-200/60 shadow-sm text-sm">
                <div className="relative flex items-center justify-center p-2.5">
                  {/* Pulsing indicator dot */}
                  <span className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                  <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-[#071A4A]">Available Hours: 24/7</div>
                  <div className="text-xs text-gray-500">Always ready to help you</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
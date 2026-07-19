import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe, CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jpbqbr9",
        "template_1bhoie6",
        form.current,
        "jOz-bIaQUgIA-HeI8"
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
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      {/* Animated Popup Notification */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`fixed bottom-10 right-10 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 ${
              status === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}
          >
            {status === 'success' ? <CheckCircle /> : <XCircle />}
            <p className="font-bold">
              {status === 'success' ? "Message sent successfully!" : "Failed to send. Please try again."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-300 rounded-full filter blur-[120px] opacity-40 animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-300 rounded-full filter blur-[120px] opacity-40 animate-float2"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-bold text-[#071A4A] mb-16 text-center">
          Contact Us
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.form 
            ref={form} 
            onSubmit={sendEmail} 
            variants={itemVariants} 
            className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-gray-100 shadow-xl"
          >
            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">Name</label>
              <input type="text" name="name" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071A4A] transition" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">Email</label>
              <input type="email" name="email" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071A4A] transition" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">Message</label>
              <textarea name="message" rows="4" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071A4A] transition" placeholder="How can we help?" required></textarea>
            </div>
            <button type="submit" className="w-full bg-[#071A4A] text-white py-4 rounded-xl font-bold hover:bg-[#0c2a75] transition transform hover:scale-[1.02]">
              Send Message
            </button>
          </motion.form>

          <motion.div variants={itemVariants} className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#071A4A] mb-6">Get In Touch</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-4"><Mail className="text-[#071A4A]" /> liknayantechsolutions@gmail.com</div>
                <div className="flex items-center gap-4"><Phone className="text-[#071A4A]" /> +63 999-470-2919</div>
                <div className="flex items-center gap-4"><MapPin className="text-[#071A4A]" /> Philippines</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#071A4A] mb-6">Availability</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-4"><Globe className="text-[#071A4A]" /> Available Hours: 24/7</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
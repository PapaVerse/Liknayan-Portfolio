import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of software solutions and digital platforms do you build?",
      answer: "We specialize in developing modern software, web applications, mobile applications, and customized digital platforms designed to empower businesses, organizations, and institutions."
    },
    {
      question: "How can I contact Liknayan Tech Solutions for a project proposal or inquiry?",
      answer: "You can easily get in touch by filling out our contact form on this page, emailing us directly at liknayantechsolutions@gmail.com, calling us at +63 999-470-2919, or connecting with us via our official Facebook page."
    },
    {
      question: "What are your operating hours and expected response times?",
      answer: "We are available 24/7 to support your needs. We typically review and respond to all incoming inquiries and project messages shortly after they are submitted."
    },
    {
      question: "Where is Liknayan Tech Solutions located?",
      answer: "We operate as a Global Tech Team spanning the United Kingdom and the Philippines, delivering precision-engineered digital solutions worldwide."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <HelpCircle size={14} /> Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#071A4A] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Find quick answers regarding our software development services, availability, and ways to get in touch.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-300 hover:border-blue-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-[#071A4A] text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-600 text-white" : ""}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100/80 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
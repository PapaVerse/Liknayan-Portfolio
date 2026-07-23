import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

export default function WebsiteChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi there! Welcome to Liknayan Tech Solutions. We Likha. We Innovate. We Build Solutions. How can we help you today?",
      options: [
        { label: "🛠️ What are your services?", next: "services" },
        { label: "💻 Show me your portfolio/projects", next: "projects" },
        { label: "👥 Who is on your team?", next: "team" },
        { label: "📞 How can I contact you?", next: "contact" },
      ],
    },
  ]);

  const messagesEndRef = useRef(null);

  // Track window scroll to compress/shrink the toggle button into an icon
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Pre-programmed tree of responses and options
  const handleOptionClick = (nextKey, label) => {
    const userMsg = { sender: "user", text: label };
    let updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    setTimeout(() => {
      let botResponse = getBotResponseData(nextKey);
      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  const getBotResponseData = (key) => {
    switch (key) {
      case "services":
        return {
          sender: "bot",
          text: "We provide comprehensive tech solutions tailored to scale your business and automate your workflows:",
          list: [
            "💻 **Web Application Development**: Custom SIS & CMS, RESTful APIs, high performance.",
            "📱 **Mobile Application Development**: Cross-platform React Native, real-time sync.",
            "🌐 **Website Development**: Corporate platforms, SEO optimization, mobile-first design.",
            "🎨 **UI/UX Design**: Wireframing, interactive prototyping, modern design systems.",
            "⚙️ **Custom Software**: Workflow automation & centralized dashboards.",
            "🚀 **IT Consulting & Support**: Infrastructure troubleshooting & maintenance.",
          ],
          options: [
            { label: "💻 View Projects", next: "projects" },
            { label: "📞 Get in Touch / Contact", next: "contact" },
            { label: "🏠 Main Menu", next: "main_menu" },
          ],
        };

      case "projects":
        return {
          sender: "bot",
          text: "Here are some of our notable completed and active developments:",
          list: [
            "🔹 **Macro Wiring Technologies**: Corporate website transformation.",
            "🔹 **CvSU Naic BSIT Hub**: Learning materials & resources platform.",
            "🔹 **IT Helpdesk Management System**: Centralized ticketing platform.",
            "🔹 **WalkMap**: AI-powered mapping and navigation tool.",
            "🔹 **Chavacano API**: First open-source REST API for Chavacano.",
            "🔹 **Cavite West Point College SIS**: Ongoing full Student Info System.",
          ],
          options: [
            { label: "🛠️ View Services", next: "services" },
            { label: "👥 Meet the Team", next: "team" },
            { label: "🏠 Main Menu", next: "main_menu" },
          ],
        };

      case "team":
        return {
          sender: "bot",
          text: "Our global team consists of experts across the UK and the Philippines:",
          list: [
            "🚀 **Eron**: Full Stack Developer (UK) - React, Node, PostgreSQL, C#, Python.",
            "💻 **Drex**: Front-End Developer & Co-Founder (PH) - React, Tailwind, Laravel.",
            "💻 **Val**: Front-End Developer (PH) - React, Next.js, Automation Specialist.",
            "🎨 **Ciara**: Graphic Layout Designer & Media Specialist (PH) - Figma, UI/UX.",
          ],
          options: [
            { label: "📞 Contact Us", next: "contact" },
            { label: "🛠️ View Services", next: "services" },
            { label: "🏠 Main Menu", next: "main_menu" },
          ],
        };

      case "contact":
        return {
          sender: "bot",
          text: "You can reach out to us 24/7 through any of the following channels:",
          list: [
            "📧 **Email**: liknayantechsolutions@gmail.com",
            "📱 **Phone**: +63 999-470-2919",
            "📍 **Location**: Philippines (Global Team supporting UK & PH)",
          ],
          options: [
            { label: "🛠️ Check Services", next: "services" },
            { label: "💻 View Portfolio", next: "projects" },
            { label: "🏠 Main Menu", next: "main_menu" },
          ],
        };

      case "main_menu":
      default:
        return {
          sender: "bot",
          text: "How else can we help you today?",
          options: [
            { label: "🛠️ What are your services?", next: "services" },
            { label: "💻 Show me your portfolio/projects", next: "projects" },
            { label: "👥 Who is on your team?", next: "team" },
            { label: "📞 How can I contact you?", next: "contact" },
          ],
        };
    }
  };

  // If the user dismissed/removed the widget from the screen, render nothing
  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      {/* Chat Toggle Button Container */}
      <AnimatePresence>
        {!isOpen && (
          <div className="relative">
            {/* Dismiss/Remove Badge Button (Always visible on top corner) */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 z-20 w-6 h-6 rounded-full bg-gray-900 text-white hover:bg-red-600 border-2 border-white flex items-center justify-center shadow-md transition-colors"
              title="Remove chat from screen"
              aria-label="Remove chat from screen"
            >
              <X size={12} />
            </motion.button>

            {/* Main Toggle Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className={`flex items-center justify-center bg-[#071A4A] text-white shadow-2xl border border-blue-900/50 group transition-all duration-300 ${
                isScrolled
                  ? "w-14 h-14 rounded-full p-0"
                  : "px-5 py-3.5 rounded-full gap-2.5"
              }`}
              aria-label="Open Chatbot"
            >
              <div className="relative flex items-center justify-center shrink-0">
                <span className="absolute w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75" />
                <MessageCircle
                  size={22}
                  className="text-blue-400 relative z-10 group-hover:rotate-12 transition-transform"
                />
              </div>

              {/* Text collapses smoothly when scrolled */}
              <AnimatePresence>
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-bold text-sm tracking-wide overflow-hidden whitespace-nowrap text-left"
                  >
                    Chat with us
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-[90vw] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden text-[#071A4A]"
          >
            {/* Header */}
            <div className="bg-[#071A4A] text-white p-4 px-5 flex items-center justify-between relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-300 shadow-inner">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                    Liknayan Assistant <Sparkles size={13} className="text-blue-400" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">Online 24/7</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 relative z-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Minimize Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-end gap-2 max-w-[88%]">
                    {msg.sender === "bot" && (
                      <div className="w-7 h-7 rounded-lg bg-[#071A4A] text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
                        <Bot size={14} />
                      </div>
                    )}

                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-[#071A4A] text-white rounded-br-none font-medium"
                          : "bg-white text-gray-700 rounded-bl-none border border-gray-100"
                      }`}
                    >
                      <p>{msg.text}</p>

                      {msg.list && (
                        <ul className="mt-2.5 space-y-1.5 border-t border-gray-100 pt-2.5">
                          {msg.list.map((item, lIdx) => (
                            <li key={lIdx} className="text-xs text-gray-600 flex items-start gap-1.5">
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mb-1 shadow-xs">
                        <User size={14} />
                      </div>
                    )}
                  </div>

                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 pl-9">
                      {msg.options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionClick(opt.next, opt.label)}
                          className="bg-white hover:bg-blue-50 text-[#071A4A] border border-blue-200/80 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all shadow-2xs hover:scale-[1.02] active:scale-95 text-left"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer Notice */}
            <div className="p-3 bg-white border-t border-gray-100 text-center shrink-0">
              <p className="text-[10px] text-gray-400 font-medium">
                Powered by Liknayan Tech Solutions Interactive System
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
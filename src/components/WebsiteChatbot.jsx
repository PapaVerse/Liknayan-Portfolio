import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowRight, ExternalLink, RefreshCw } from "lucide-react";

export default function WebsiteChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
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
      setUnreadCount(0);
    }
  }, [messages, isOpen]);

  // Pre-programmed tree of responses and options with typing delay effect
  const handleOptionClick = (nextKey, label) => {
    const userMsg = { sender: "user", text: label };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = getBotResponseData(nextKey);
      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
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

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      {/* Chat Toggle Button Container */}
      <AnimatePresence>
        {!isOpen && (
          <div className="relative">
            {/* Dismiss/Remove Badge Button */}
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

            {/* Unread Notification Badge */}
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -left-1 z-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce"
              >
                {unreadCount}
              </motion.span>
            )}

            {/* Main Toggle Button with Gradient Glow */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(true);
                setUnreadCount(0);
              }}
              className={`relative flex items-center justify-center bg-gradient-to-br from-[#071A4A] via-[#0d2a75] to-[#1e3a8a] text-white shadow-2xl border border-blue-400/30 group transition-all duration-300 overflow-hidden ${
                isScrolled
                  ? "w-14 h-14 rounded-full p-0"
                  : "px-5 py-3.5 rounded-full gap-2.5"
              }`}
              aria-label="Open Chatbot"
            >
              {/* Subtle shining background flare */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative flex items-center justify-center shrink-0">
                <span className="absolute w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60" />
                <MessageCircle
                  size={24}
                  className="text-blue-300 relative z-10 group-hover:rotate-12 transition-transform"
                />
              </div>

              {/* Text collapses smoothly when scrolled */}
              <AnimatePresence>
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-bold text-sm tracking-wide overflow-hidden whitespace-nowrap text-left relative z-10 flex items-center gap-1.5"
                  >
                    <span>Chat with us</span>
                    <Sparkles size={13} className="text-blue-300 animate-pulse" />
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
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden text-[#071A4A] relative"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#071A4A] via-[#0c235c] to-[#071A4A] text-white p-4 px-5 flex items-center justify-between relative overflow-hidden shrink-0 shadow-md">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-500/30 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-300 shadow-inner">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                    Liknayan Assistant <Sparkles size={13} className="text-blue-300 animate-pulse" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                    <span className="text-[10px] text-blue-200 uppercase tracking-wider font-semibold">Active & Online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 relative z-10">
                <button
                  onClick={() => {
                    setMessages([
                      {
                        sender: "bot",
                        text: "👋 Welcome back! How else can we help you today?",
                        options: [
                          { label: "🛠️ What are your services?", next: "services" },
                          { label: "💻 Show me your portfolio/projects", next: "projects" },
                          { label: "👥 Who is on your team?", next: "team" },
                          { label: "📞 How can I contact you?", next: "contact" },
                        ],
                      },
                    ]);
                  }}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  title="Restart Conversation"
                  aria-label="Restart Conversation"
                >
                  <RefreshCw size={14} />
                </button>
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
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-slate-50/70 to-blue-50/30 custom-scrollbar">
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-end gap-2 max-w-[90%]">
                    {msg.sender === "bot" && (
                      <div className="w-7 h-7 rounded-xl bg-[#071A4A] text-white flex items-center justify-center shrink-0 mb-1 shadow-sm">
                        <Bot size={14} />
                      </div>
                    )}

                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-[#071A4A] to-blue-900 text-white rounded-br-none font-medium shadow-blue-900/10"
                          : "bg-white text-gray-700 rounded-bl-none border border-blue-100/60 shadow-sm"
                      }`}
                    >
                      <p>{msg.text}</p>

                      {msg.list && (
                        <ul className="mt-3 space-y-2 border-t border-gray-100 pt-3">
                          {msg.list.map((item, lIdx) => (
                            <motion.li 
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: lIdx * 0.05 }}
                              key={lIdx} 
                              className="text-xs text-gray-600 flex items-start gap-2 bg-gray-50/80 p-2 rounded-xl border border-gray-100"
                            >
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mb-1 shadow-sm">
                        <User size={14} />
                      </div>
                    )}
                  </div>

                  {msg.options && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pl-9">
                      {msg.options.map((opt, oIdx) => (
                        <motion.button
                          whileHover={{ scale: 1.03, y: -1 }}
                          whileTap={{ scale: 0.97 }}
                          key={oIdx}
                          onClick={() => handleOptionClick(opt.next, opt.label)}
                          className="bg-white hover:bg-blue-50/80 text-[#071A4A] border border-blue-200/80 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 text-left group"
                        >
                          <span>{opt.label}</span>
                          <ArrowRight size={12} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Interactive Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 pl-2"
                >
                  <div className="w-7 h-7 rounded-xl bg-[#071A4A] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white border border-blue-100 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 shadow-xs">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer Notice */}
            <div className="p-3 bg-white border-t border-blue-50 text-center shrink-0 flex items-center justify-center gap-1">
              <Sparkles size={11} className="text-blue-500" />
              <p className="text-[10px] text-gray-400 font-medium tracking-wide">
                Powered by Liknayan Tech Solutions Interactive System
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
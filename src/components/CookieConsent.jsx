import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay so it pops up smoothly after page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShowBanner(false);
    // TODO: Initialize your analytics / tracking scripts here (e.g., Google Analytics)
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShowBanner(false);
    // TODO: Ensure tracking scripts are disabled
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto max-w-4xl w-full bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-6 sm:p-8 text-[#071A4A] relative overflow-hidden">
            
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full filter blur-[60px] pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                <Cookie size={24} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-tight mb-2 flex items-center gap-2">
                  Privacy & Cookie Notice <ShieldCheck size={16} className="text-blue-600" />
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
                  This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our{" "}
                  <a href="/privacy-policy" className="text-blue-600 font-semibold underline hover:text-blue-700">
                    Privacy Policy
                  </a>.
                </p>

                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-[#071A4A] font-semibold text-xs sm:text-sm hover:bg-gray-200 transition"
                  >
                    Decline
                  </button>
                </div>
              </div>

              {/* Close X button */}
              <button
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-600 transition p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
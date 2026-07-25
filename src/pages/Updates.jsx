import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Layers, Calendar, Tag, ArrowRight, Sparkles } from "lucide-react";

export default function Updates({ supabase }) {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUpdates(data || []);
    } catch (err) {
      console.error("Error fetching updates:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white relative overflow-hidden text-[#071A4A]">
      
      {/* Background Glow Orbs */}
      <motion.div 
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs"
          >
            <Layers size={14} /> Company Insights
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight mb-4"
          >
            News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base leading-relaxed"
          >
            Stay up to date with our latest announcements, feature releases, and project logs.
          </motion.p>
        </div>

        {/* Content list */}
        {loading ? (
          <div className="text-center py-20 text-gray-500 font-medium">Loading latest updates...</div>
        ) : updates.length === 0 ? (
          <div className="text-center py-16 bg-gray-50/80 backdrop-blur-md rounded-3xl border border-gray-100 text-gray-500 max-w-xl mx-auto shadow-sm">
            No updates posted yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => navigate(`/updates/${item.id}`)}
                className="group cursor-pointer bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                {/* Media Thumbnail */}
                {item.media_url && (
                  <div className="w-full h-52 bg-gray-50 overflow-hidden relative">
                    {isVideo(item.media_url) ? (
                      <video 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.media_url}
                      />
                    ) : (
                      <img 
                        src={item.media_url} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                )}

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/60 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                      <Tag size={12} /> {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Calendar size={12} /> {new Date(item.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#071A4A] mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {item.content}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mt-auto pt-4 border-t border-gray-100/80">
                    <span>Read full post</span> 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
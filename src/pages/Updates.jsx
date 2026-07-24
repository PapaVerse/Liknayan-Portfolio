import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Layers, Calendar, Tag, ArrowRight } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={14} /> Company Insights
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">News & Updates</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Stay up to date with our latest announcements, feature releases, and project logs.
          </p>
        </div>

        {/* Content list */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading latest updates...</div>
        ) : updates.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 max-w-xl mx-auto">
            No updates posted yet. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => navigate(`/updates/${item.id}`)}
                className="group cursor-pointer bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Media Thumbnail */}
                {item.media_url && (
                  <div className="w-full h-48 bg-gray-50 overflow-hidden relative">
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

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                      <Tag size={10} /> {item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Calendar size={12} /> {new Date(item.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#071A4A] mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {item.content}
                  </p>

                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 mt-auto">
                    Read full post <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
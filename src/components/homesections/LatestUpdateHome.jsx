import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Layers, Calendar, Tag, ArrowRight } from "lucide-react";

export default function LatestUpdateHome({ supabase }) {
  const [latestUpdate, setLatestUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLatestUpdate();
  }, []);

  const fetchLatestUpdate = async () => {
    try {
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== "PGRST116") throw error; // PGRST116 is 0 rows found
      setLatestUpdate(data || null);
    } catch (err) {
      console.error("Error fetching latest update:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  // Don't render anything if there are no updates and loading is done
  if (!loading && !latestUpdate) return null;

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100 text-[#071A4A]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers size={14} /> Stay Informed
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">Latest Announcement</h2>
          </div>
          <button
            onClick={() => navigate("/updates")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View More Updates <ArrowRight size={16} />
          </button>
        </div>

        {/* Latest Post Card */}
        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading latest announcement...</div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/updates/${latestUpdate.id}`)}
            className="group cursor-pointer bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Media Thumbnail (if available) */}
            {latestUpdate.media_url && (
              <div className="md:w-5/12 h-56 md:h-auto bg-gray-50 overflow-hidden relative shrink-0">
                {isVideo(latestUpdate.media_url) ? (
                  <video 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={latestUpdate.media_url}
                  />
                ) : (
                  <img 
                    src={latestUpdate.media_url} 
                    alt={latestUpdate.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            )}

            {/* Post Content */}
            <div className="p-8 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                    <Tag size={10} /> {latestUpdate.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <Calendar size={12} /> {new Date(latestUpdate.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#071A4A] mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {latestUpdate.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                  {latestUpdate.content}
                </p>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-blue-600">
                Read full announcement <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
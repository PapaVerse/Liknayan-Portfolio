import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Layers, Calendar, Tag, ArrowRight, FileText } from "lucide-react";

export default function LatestUpdateHome({ supabase }) {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      // Fetch the latest 3 updates (1 for main feature, 2 for the side list)
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

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

  // Don't render anything if there are no updates and loading is done
  if (!loading && updates.length === 0) return null;

  const latestUpdate = updates[0];
  const previousUpdates = updates.slice(1, 3); // Gets the next 2 updates

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100 text-[#071A4A]">
      <div className="max-w-7xl mx-auto px-6">
        
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

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12 text-gray-400">Loading announcements...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Latest Full Announcement Card (Takes 7 cols) */}
            {latestUpdate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/updates/${latestUpdate.id}`)}
                className="lg:col-span-7 group cursor-pointer bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full"
              >
                {/* Media Thumbnail (if available) */}
                {latestUpdate.media_url && (
                  <div className="w-full h-64 bg-gray-50 overflow-hidden relative shrink-0">
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

            {/* Right Side: List of Previous 2 Posts - Titles Only (Takes 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 px-1">
                Previous Announcements
              </h3>

              {previousUpdates.length === 0 ? (
                <div className="p-6 bg-white border border-gray-100 rounded-2xl text-sm text-gray-400 text-center">
                  No earlier posts available.
                </div>
              ) : (
                previousUpdates.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => navigate(`/updates/${post.id}`)}
                    className="group cursor-pointer bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-semibold">
                        <Tag size={9} /> {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                        <Calendar size={11} /> {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#071A4A] group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>

                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                      Read more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
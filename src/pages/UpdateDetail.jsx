import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Sparkles } from "lucide-react";

export default function UpdateDetail({ supabase }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (err) {
      console.error("Error fetching post:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500 font-medium">Loading announcement...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
        <h2 className="text-2xl font-bold text-[#071A4A] mb-4">Post not found</h2>
        <button 
          onClick={() => navigate("/updates")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all"
        >
          Back to Updates
        </button>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white text-[#071A4A] relative overflow-hidden">
      
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

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate("/updates")}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Updates
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
        >
          {/* Top Accent Gradient Line */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500" />

          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100/60 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <Calendar size={14} /> {new Date(post.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-[#071A4A] leading-snug">
            {post.title}
          </h1>

          {/* Media Attachment */}
          {post.media_url && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-md">
              {isVideo(post.media_url) ? (
                <video controls className="w-full max-h-[500px] object-contain bg-black" src={post.media_url}>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={post.media_url} alt={post.title} className="w-full max-h-[500px] object-cover" />
              )}
            </div>
          )}

          {/* Full Content */}
          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-line text-base">
            {post.content}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
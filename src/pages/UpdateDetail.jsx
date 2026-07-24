import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

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
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading announcement...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-bold text-[#071A4A] mb-4">Post not found</h2>
        <button 
          onClick={() => navigate("/updates")}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold"
        >
          Back to Updates
        </button>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 min-h-screen bg-white text-[#071A4A]">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate("/updates")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Updates
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <Calendar size={14} /> {new Date(post.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight mb-6">{post.title}</h1>

          {/* Media Attachment */}
          {post.media_url && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 shadow-md">
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
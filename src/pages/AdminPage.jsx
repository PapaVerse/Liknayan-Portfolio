import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, LogOut, Send, CheckCircle2, Trash2, Edit3, X, Image as ImageIcon } from "lucide-react";

export default function AdminPage({ supabase }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // Post form state
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("Announcement");
  const [postContent, setPostContent] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [existingMediaUrl, setExistingMediaUrl] = useState("");

  useEffect(() => {
    checkAdminSession();
    fetchPosts();
  }, []);

  const checkAdminSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/login");
      return;
    }
    const { data: adminData } = await supabase
      .from("admins")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (!adminData) {
      navigate("/login");
    }
  };

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("updates")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) {
      setPosts(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const handleSavePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let mediaUrl = existingMediaUrl;

      // 1. Upload new media file if selected
      if (mediaFile) {
        const fileExt = mediaFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from("media")
          .upload(fileName, mediaFile);

        if (uploadError) throw uploadError;

        const { data: publicURLData } = supabase.storage
          .from("media")
          .getPublicUrl(fileName);
          
        mediaUrl = publicURLData.publicUrl;
      }

      if (editingId) {
        // Update existing post
        const { error } = await supabase
          .from("updates")
          .update({
            title: postTitle,
            category: postCategory,
            content: postContent,
            media_url: mediaUrl,
          })
          .eq("id", editingId);

        if (error) throw error;
        setMessage("Post updated successfully!");
      } else {
        // Create new post
        const { error } = await supabase.from("updates").insert([
          {
            title: postTitle,
            category: postCategory,
            content: postContent,
            media_url: mediaUrl,
            created_at: new Date(),
          },
        ]);

        if (error) throw error;
        setMessage("Post published successfully!");
      }

      resetForm();
      fetchPosts();
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (post) => {
    setEditingId(post.id);
    setPostTitle(post.title);
    setPostCategory(post.category);
    setPostContent(post.content);
    setExistingMediaUrl(post.media_url || "");
    setMediaFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    
    setLoading(true);
    try {
      const { error } = await supabase.from("updates").delete().eq("id", id);
      if (error) throw error;
      setMessage("Post deleted successfully!");
      fetchPosts();
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setPostTitle("");
    setPostCategory("Announcement");
    setPostContent("");
    setMediaFile(null);
    setExistingMediaUrl("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6 text-[#071A4A]">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-extrabold">Admin Control Center</h1>
            <p className="text-gray-500 text-sm">Manage updates, announcements, and media attachments</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-100 transition"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        {/* Feedback Message */}
        {message && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-3 text-blue-700 text-sm">
            <CheckCircle2 size={18} className="shrink-0" />
            <span>{message}</span>
          </div>
        )}

        {/* Main Content Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div>
            {/* Form Section */}
            <form onSubmit={handleSavePost} className="space-y-6 pb-8 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FileText size={20} className="text-blue-600" />
                  {editingId ? "Edit Update / Announcement" : "Create New Update / Announcement"}
                </h2>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-red-500 flex items-center gap-1 font-semibold hover:underline"
                  >
                    <X size={14} /> Cancel Editing
                  </button>
                )}
              </div>
              
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Title</label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="e.g., Version 2.0 Released"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Category</label>
                <select
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                >
                  <option value="Announcement">Announcement</option>
                  <option value="News">News</option>
                  <option value="Update">Update / Patch Note</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Content</label>
                <textarea
                  required
                  rows={6}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Write your update details here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                  Attach Image or Video (Optional)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => setMediaFile(e.target.files[0])}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
                  />
                </div>
                {existingMediaUrl && !mediaFile && (
                  <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <ImageIcon size={14} /> Current attachment exists. Uploading a new file will replace it.
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-2 disabled:opacity-50"
                >
                  <Send size={16} /> {loading ? "Saving..." : editingId ? "Update Post" : "Publish Post"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3.5 bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            {/* List of Existing Posts for Management */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Existing Posts ({posts.length})</h3>
              {posts.length === 0 ? (
                <p className="text-gray-500 text-sm">No posts found.</p>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="font-bold text-base">{post.title}</h4>
                        <p className="text-gray-600 text-xs line-clamp-1">{post.content}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleEditClick(post)}
                          className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
                          title="Edit Post"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                          title="Delete Post"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FileText, LogOut, Send, CheckCircle2, Trash2, Edit3, X, Image as ImageIcon, Loader2, AlertTriangle, ArrowLeft, LayoutDashboard, Layers } from "lucide-react";

export default function AdminPage({ supabase }) {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("success"); // "loading", "success", "error"
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  
  // Custom delete confirmation modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDeleteId, setPostToDeleteId] = useState(null);

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

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    if (type !== "loading") {
      setTimeout(() => {
        setToastMessage(null);
      }, 4000);
    }
  };

  const checkAdminSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/loginpage");
      return;
    }
    const { data: adminData } = await supabase
      .from("admins")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (!adminData) {
      navigate("/loginpage");
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
    navigate("/loginpage");
  };

  const handleSavePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    showToast(editingId ? "Updating post..." : "Publishing post...", "loading");

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
        showToast("Post updated successfully!", "success");
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
        showToast("Post published successfully!", "success");
      }

      resetForm();
      fetchPosts();
    } catch (err) {
      showToast(`Error: ${err.message}`, "error");
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

  const confirmDeleteClick = (id) => {
    setPostToDeleteId(id);
    setDeleteModalOpen(true);
  };

  const executeDeletePost = async () => {
    if (!postToDeleteId) return;

    setDeleteModalOpen(false);
    setLoading(true);
    showToast("Deleting post...", "loading");
    
    try {
      const { error } = await supabase.from("updates").delete().eq("id", postToDeleteId);
      if (error) throw error;
      showToast("Post deleted successfully!", "success");
      fetchPosts();
    } catch (err) {
      showToast(`Error: ${err.message}`, "error");
    } finally {
      setLoading(false);
      setPostToDeleteId(null);
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
    <div className="min-h-screen bg-gray-50/50 pb-20 px-4 sm:px-6 text-[#071A4A]">
      
      {/* Top Navigation & Header Bar */}
      <div className="max-w-7xl mx-auto pt-6 mb-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-2xl shadow-xs">
              <img src="/LIKNAYAN.png" alt="Liknayan Logo" className="h-8 w-auto object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                  Admin Control Center
                </span>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-[#071A4A]">Dashboard & Updates</h1>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Manage announcements, news feeds, and dynamic content layers.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 relative z-10 w-full md:w-auto justify-end">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-red-100 border border-red-100 transition shadow-2xs"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Quick Overview Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md shadow-blue-950/5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Active Posts</p>
            <h3 className="text-3xl font-black text-[#071A4A]">{posts.length}</h3>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100">
            <LayoutDashboard size={22} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md shadow-blue-950/5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">System Status</p>
            <h3 className="text-lg font-bold text-emerald-600 flex items-center gap-2 mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> Operational
            </h3>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100">
            <Layers size={22} />
          </div>
        </div>
      </div>

      {/* Popup Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border text-sm font-medium ${
            toastType === "loading" ? "bg-blue-600 text-white border-blue-500" :
            toastType === "success" ? "bg-emerald-600 text-white border-emerald-500" :
            "bg-red-600 text-white border-red-500"
          }`}>
            {toastType === "loading" ? (
              <Loader2 size={18} className="animate-spin shrink-0" />
            ) : (
              <CheckCircle2 size={18} className="shrink-0" />
            )}
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Custom Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3.5 text-red-600 mb-4">
              <div className="p-3 bg-red-50 rounded-2xl border border-red-100">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#071A4A]">Delete Confirmation</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Are you sure you want to delete this post? This action cannot be undone from the database.
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-2xl text-sm hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={executeDeletePost}
                className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-2xl text-sm hover:bg-red-700 transition shadow-lg shadow-red-600/20"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Creation / Editing Form Container */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100 sticky top-6">
          <form onSubmit={handleSavePost} className="space-y-5">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <h2 className="text-base font-bold flex items-center gap-2 text-[#071A4A]">
                <FileText size={18} className="text-blue-600" />
                {editingId ? "Edit Update Post" : "Create New Update"}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-red-500 flex items-center gap-1 font-semibold hover:underline bg-red-50 px-2.5 py-1 rounded-xl"
                >
                  <X size={14} /> Cancel Edit
                </button>
              )}
            </div>
            
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Post Title</label>
              <input
                type="text"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="e.g., Version 2.0 Released"
                className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Category</label>
              <select
                value={postCategory}
                onChange={(e) => setPostCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
              >
                <option value="Announcement">Announcement</option>
                <option value="News">News</option>
                <option value="Update">Update / Patch Note</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Content Details</label>
              <textarea
                required
                rows={5}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Write your update details here..."
                className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                Attach Image or Video (Optional)
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setMediaFile(e.target.files[0])}
                className="w-full text-xs text-gray-500 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition cursor-pointer bg-gray-50/80 border border-gray-200 rounded-2xl p-1.5"
              />
              {existingMediaUrl && !mediaFile && (
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5 bg-blue-50/60 p-2 rounded-xl text-blue-800 border border-blue-100">
                  <ImageIcon size={14} className="text-blue-600" /> Attachment exists. Uploading a new file will replace it.
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3.5 bg-[#071A4A] text-white font-semibold rounded-2xl text-sm hover:bg-blue-900 transition shadow-lg shadow-blue-950/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} 
                {loading ? "Processing..." : editingId ? "Save Changes" : "Publish Post"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-3.5 bg-gray-100 text-gray-700 font-semibold rounded-2xl text-sm hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: Existing Posts Management Container */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100">
          <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-100">
            <h3 className="text-base font-bold text-[#071A4A]">Manage Existing Posts</h3>
            <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
              Total: {posts.length}
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50/80 rounded-2xl border border-dashed border-gray-200">
              <FileText size={36} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-600 font-medium text-sm">No posts found.</p>
              <p className="text-gray-400 text-xs mt-1">Create your first announcement using the form on the left!</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1">
              {posts.map((post) => (
                <div key={post.id} className="p-5 bg-gray-50/80 border border-gray-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-blue-200 hover:bg-white transition group shadow-2xs">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-lg">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-[#071A4A] group-hover:text-blue-600 transition">{post.title}</h4>
                    <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">{post.content}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={() => handleEditClick(post)}
                      className="p-2.5 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-100 border border-amber-100/60 transition"
                      title="Edit Post"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => confirmDeleteClick(post.id)}
                      className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 border border-red-100/60 transition"
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
  );
}
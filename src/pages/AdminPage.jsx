import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, LogOut, Send, CheckCircle2, Trash2, Edit3, X, Image as ImageIcon, Loader2, AlertTriangle } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50 pt-4 pb-16 px-6 text-[#071A4A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header with Logo */}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <img src="/LIKNAYAN.png" alt="Liknayan Logo" className="h-10 w-auto object-contain" />
            <div>
              <h1 className="text-2xl font-extrabold">Admin Control Center</h1>
              <p className="text-gray-500 text-sm">Manage updates, announcements, and media attachments</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-100 transition"
          >
            <LogOut size={16} /> Sign Out
          </button>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-200">
              <div className="flex items-center gap-3 text-red-600 mb-3">
                <div className="p-3 bg-red-50 rounded-xl">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#071A4A]">Delete Confirmation</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Are you sure you want to delete this post? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteModalOpen(false)}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={executeDeletePost}
                  className="px-5 py-2.5 bg-red-600 text-white font-semibold rounded-xl text-sm hover:bg-red-700 transition shadow-lg shadow-red-600/20"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Section - Side by Side Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Creation / Editing Form Container */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
            <form onSubmit={handleSavePost} className="space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <FileText size={18} className="text-blue-600" />
                  {editingId ? "Edit Update" : "Create New Update"}
                </h2>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-red-500 flex items-center gap-1 font-semibold hover:underline"
                  >
                    <X size={14} /> Cancel
                  </button>
                )}
              </div>
              
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Title</label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="e.g., Version 2.0 Released"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Category</label>
                <select
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
                >
                  <option value="Announcement">Announcement</option>
                  <option value="News">News</option>
                  <option value="Update">Update / Patch Note</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">Content</label>
                <textarea
                  required
                  rows={5}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Write your update details here..."
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition"
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
                  className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
                />
                {existingMediaUrl && !mediaFile && (
                  <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                    <ImageIcon size={12} /> Attachment exists. Uploading a new one replaces it.
                  </p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} 
                  {loading ? "Processing..." : editingId ? "Update Post" : "Publish Post"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Side: Existing Posts Management Container */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold mb-4">Existing Posts ({posts.length})</h3>
            {posts.length === 0 ? (
              <p className="text-gray-500 text-sm py-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                No posts found. Create your first announcement on the left!
              </p>
            ) : (
              <div className="space-y-4 max-h-[650px] overflow-y-auto pr-1">
                {posts.map((post) => (
                  <div key={post.id} className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-blue-200 transition">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(post.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#071A4A]">{post.title}</h4>
                      <p className="text-gray-600 text-xs line-clamp-1">{post.content}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleEditClick(post)}
                        className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition"
                        title="Edit Post"
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        onClick={() => confirmDeleteClick(post.id)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                        title="Delete Post"
                      >
                        <Trash2 size={15} />
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
  );
}
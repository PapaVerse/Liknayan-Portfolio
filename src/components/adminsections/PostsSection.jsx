import { FileText, Send, Trash2, Edit3, X, Image as ImageIcon, Loader2, Search } from "lucide-react";

export default function PostsSection({
  posts,
  postSearch,
  setPostSearch,
  handleSavePost,
  handleEditClick,
  confirmDeleteClick,
  editingId,
  resetForm,
  postTitle,
  setPostTitle,
  postCategory,
  setPostCategory,
  postContent,
  setPostContent,
  setMediaFile,
  existingMediaUrl,
  loading,
  highlightMatch
}) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex items-center gap-3">
        <Search size={18} className="text-gray-400 ml-2" />
        <input 
          type="text"
          placeholder="Search posts by title, content or category..."
          value={postSearch}
          onChange={(e) => setPostSearch(e.target.value)}
          className="w-full text-sm bg-transparent border-none focus:outline-none text-[#071A4A]"
        />
        {postSearch && (
          <button onClick={() => setPostSearch("")} className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1">Clear</button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100 lg:sticky lg:top-6">
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
              {existingMediaUrl && (
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5 bg-blue-50/60 p-2 rounded-xl text-blue-800 border border-blue-100">
                  <ImageIcon size={14} className="text-blue-600" /> Attachment exists. Uploading a new file replaces it.
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
            </div>
          </form>
        </div>

        {/* Right Posts Feed */}
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
              <p className="text-gray-600 font-medium text-sm">No matching posts found.</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-1">
              {posts.map((post) => (
                <div key={post.id} className="p-5 bg-gray-50/80 border border-gray-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-blue-200 hover:bg-white transition group shadow-2xs">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-lg">
                        {highlightMatch(post.category, postSearch)}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-[#071A4A] group-hover:text-blue-600 transition">
                      {highlightMatch(post.title, postSearch)}
                    </h4>
                    <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">
                      {highlightMatch(post.content, postSearch)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={() => handleEditClick(post)}
                      className="p-2.5 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-100 border border-amber-100/60 transition"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => confirmDeleteClick(post.id)}
                      className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 border border-red-100/60 transition"
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
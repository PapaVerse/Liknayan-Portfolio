import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LogOut, CheckCircle2, Loader2, AlertTriangle, LayoutDashboard, 
  FileText, UserCheck, Activity, Database, ShieldCheck, Server 
} from "lucide-react";

import PostsSection from "../components/adminsections/PostsSection";
import SystemLogsSection from "../components/adminsections/SystemLogsSection";
import AuditLogsSection from "../components/adminsections/AuditLogsSection";
import AdminUsersSection from "../components/adminsections/AdminUsersSection";
import HealthSection from "../components/adminsections/HealthSection";

export default function AdminPage({ supabase }) {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("success");
  const [activeTab, setActiveTab] = useState("posts"); // "posts", "system_logs", "audit_logs", "admin_users", "health"

  // Data states
  const [posts, setPosts] = useState([]);
  const [systemLogs, setSystemLogs] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [adminName, setAdminName] = useState(""); // State to store logged-in admin's name

  // Search queries per tab
  const [postSearch, setPostSearch] = useState("");
  const [sysLogSearch, setSysLogSearch] = useState("");
  const [auditSearch, setAuditSearch] = useState("");

  // Post form state
  const [editingId, setEditingId] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("Announcement");
  const [postContent, setPostContent] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [existingMediaUrl, setExistingMediaUrl] = useState("");

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postToDeleteId, setPostToDeleteId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    checkAdminSession();
    fetchAllData();
  }, []);

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    if (type !== "loading") {
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  const checkAdminSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/loginpage");
      return;
    }
    
    // Verify admin exists in the database and fetch their name
    const { data: adminData } = await supabase
      .from("admins")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (!adminData) {
      navigate("/loginpage");
    } else {
      setAdminName(adminData.name || "Admin");
    }
  };

  const fetchAllData = async () => {
    // 1. Fetch all Posts
    const { data: postsData } = await supabase
      .from("updates")
      .select("*")
      .order("created_at", { ascending: false });
    if (postsData) setPosts(postsData);

    // 2. Fetch ALL System Logs without truncation or single-item fallbacks
    const { data: sysData, error: sysError } = await supabase
      .from("system_logs")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (!sysError && sysData) {
      setSystemLogs(sysData);
    } else {
      setSystemLogs([]);
    }

    // 3. Fetch ALL Audit Logs dynamically from the database
    const { data: auditData, error: auditError } = await supabase
      .from("audit_logs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!auditError && auditData) {
      setAuditLogs(auditData);
    } else {
      setAuditLogs([]);
    }
  };

  const logActionToAudit = async (actionText, notesText) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: adminData } = await supabase
        .from("admins")
        .select("email, name")
        .eq("id", session.user.id)
        .single();

      const userEmail = adminData?.email || session.user.email;
      const userName = adminData?.name || "Admin";

      await supabase.from("audit_logs").insert([
        { 
          email: userEmail, 
          name: userName, 
          action: actionText, 
          notes: notesText, 
          created_at: new Date() 
        }
      ]);
    } catch (e) {
      console.error("Audit log error:", e);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    navigate("/loginpage");
  };

  const handleSavePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    showToast(editingId ? "Updating post..." : "Publishing post...", "loading");

    try {
      let mediaUrl = existingMediaUrl;

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
      } else if (!mediaUrl) {
        mediaUrl = "/images/Liknayan.jpg";
      }

      const { data: { session } } = await supabase.auth.getSession();
      
      let userEmail = session?.user?.email;
      if (session) {
        const { data: adminData } = await supabase
          .from("admins")
          .select("email")
          .eq("id", session.user.id)
          .single();
        if (adminData) userEmail = adminData.email;
      }

      if (editingId) {
        const { error } = await supabase
          .from("updates")
          .update({ title: postTitle, category: postCategory, content: postContent, media_url: mediaUrl })
          .eq("id", editingId);

        if (error) throw error;
        await logActionToAudit("Updated Post", `Modified post titled: "${postTitle}" by ${userEmail}`);
        showToast("Post updated successfully!", "success");
      } else {
        const { error } = await supabase.from("updates").insert([
          { title: postTitle, category: postCategory, content: postContent, media_url: mediaUrl, created_at: new Date() },
        ]);

        if (error) throw error;
        await logActionToAudit("Created Post", `Published new post: "${postTitle}" by ${userEmail}`);
        showToast("Post published successfully!", "success");
      }

      resetForm();
      fetchAllData();
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
      await logActionToAudit("Deleted Post", `Removed post entry ID: ${postToDeleteId}`);
      showToast("Post deleted successfully!", "success");
      fetchAllData();
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

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 text-yellow-900 rounded px-0.5">{part}</mark>
      ) : part
    );
  };

  // Helper generator to compute 7-day activity breakdown for trend widget
  const get7DayActivity = (dataList) => {
    const counts = [0, 0, 0, 0, 0, 0, 0];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    dataList.forEach(item => {
      const itemDate = new Date(item.created_at);
      itemDate.setHours(0, 0, 0, 0);
      const diffTime = today - itemDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays >= 0 && diffDays < 7) {
        // Index 6 is today, Index 0 is 6 days ago
        const index = 6 - diffDays;
        counts[index]++;
      }
    });

    const maxVal = Math.max(...counts, 1);
    return counts.map(count => Math.round((count / maxVal) * 100)); // Height percentage 0-100%
  };

  const postTrend = useMemo(() => get7DayActivity(posts), [posts]);
  const systemLogTrend = useMemo(() => get7DayActivity(systemLogs), [systemLogs]);
  const auditLogTrend = useMemo(() => get7DayActivity(auditLogs), [auditLogs]);

  const filteredPosts = useMemo(() => {
    return posts.filter(p => 
      p.title.toLowerCase().includes(postSearch.toLowerCase()) ||
      p.content.toLowerCase().includes(postSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(postSearch.toLowerCase())
    );
  }, [posts, postSearch]);

  const filteredSystemLogs = useMemo(() => {
    return systemLogs.filter(l => 
      (l.email && l.email.toLowerCase().includes(sysLogSearch.toLowerCase())) ||
      (l.status && l.status.toLowerCase().includes(sysLogSearch.toLowerCase()))
    );
  }, [systemLogs, sysLogSearch]);

  const filteredAuditLogs = useMemo(() => {
    return auditLogs.filter(a => 
      (a.email && a.email.toLowerCase().includes(auditSearch.toLowerCase())) ||
      (a.action && a.action.toLowerCase().includes(auditSearch.toLowerCase())) ||
      (a.notes && a.notes.toLowerCase().includes(auditSearch.toLowerCase()))
    );
  }, [auditLogs, auditSearch]);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 px-4 sm:px-6 text-[#071A4A]">
      {/* Top Header Bar */}
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
              <h1 className="text-2xl font-black tracking-tight text-[#071A4A]">System & Content Hub</h1>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Manage announcements, security system access logs, and audit trails.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 relative z-10 w-full md:w-auto justify-end">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-400 font-medium">Logged in as</p>
              <p className="text-sm font-bold text-[#071A4A]">{adminName || "Loading..."}</p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-red-100 border border-red-100 transition shadow-2xs"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards with 7-Day Trend Widget */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {/* Total Active Posts Card */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md shadow-blue-950/5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Active Posts</p>
              <h3 className="text-3xl font-black text-[#071A4A]">{posts.length}</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shrink-0">
              <LayoutDashboard size={22} />
            </div>
          </div>
          <div className="pt-3 border-t border-gray-50 flex items-end justify-between gap-1 h-14">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-tight self-end pb-0.5">7-Day Trend</span>
            <div className="flex items-end gap-1.5 h-full flex-1 justify-end">
              {postTrend.map((height, idx) => (
                <div key={idx} className="w-2 bg-blue-100 rounded-full overflow-hidden flex flex-col justify-end h-full">
                  <div 
                    className="bg-blue-600 rounded-full transition-all duration-500" 
                    style={{ height: `${Math.max(height, 12)}%` }} 
                    title={`Activity level: ${height}%`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Sessions Card */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md shadow-blue-950/5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">System Sessions</p>
              <h3 className="text-3xl font-black text-[#071A4A]">{systemLogs.length}</h3>
            </div>
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center border border-indigo-100 shrink-0">
              <Activity size={22} />
            </div>
          </div>
          <div className="pt-3 border-t border-gray-50 flex items-end justify-between gap-1 h-14">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-tight self-end pb-0.5">7-Day Trend</span>
            <div className="flex items-end gap-1.5 h-full flex-1 justify-end">
              {systemLogTrend.map((height, idx) => (
                <div key={idx} className="w-2 bg-indigo-100 rounded-full overflow-hidden flex flex-col justify-end h-full">
                  <div 
                    className="bg-indigo-600 rounded-full transition-all duration-500" 
                    style={{ height: `${Math.max(height, 12)}%` }} 
                    title={`Activity level: ${height}%`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Records Card */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md shadow-blue-950/5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Audit Records</p>
              <h3 className="text-3xl font-black text-[#071A4A]">{auditLogs.length}</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 shrink-0">
              <Database size={22} />
            </div>
          </div>
          <div className="pt-3 border-t border-gray-50 flex items-end justify-between gap-1 h-14">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-tight self-end pb-0.5">7-Day Trend</span>
            <div className="flex items-end gap-1.5 h-full flex-1 justify-end">
              {auditLogTrend.map((height, idx) => (
                <div key={idx} className="w-2 bg-emerald-100 rounded-full overflow-hidden flex flex-col justify-end h-full">
                  <div 
                    className="bg-emerald-600 rounded-full transition-all duration-500" 
                    style={{ height: `${Math.max(height, 12)}%` }} 
                    title={`Activity level: ${height}%`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-wrap bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 gap-2 justify-around sm:justify-start">
          <button
            onClick={() => setActiveTab("posts")}
            title="Posts & Updates"
            className={`flex items-center justify-center gap-2 p-3 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "posts" ? "bg-[#071A4A] text-white shadow-md shadow-blue-950/20" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FileText size={18} className="shrink-0" /> 
            <span className="hidden sm:inline">1. Posts & Updates</span>
          </button>
          
          <button
            onClick={() => setActiveTab("system_logs")}
            title="System Login Logs"
            className={`flex items-center justify-center gap-2 p-3 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "system_logs" ? "bg-[#071A4A] text-white shadow-md shadow-blue-950/20" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <UserCheck size={18} className="shrink-0" /> 
            <span className="hidden sm:inline">2. System Login Logs</span>
          </button>

          <button
            onClick={() => setActiveTab("audit_logs")}
            title="Audit Trails & Changes"
            className={`flex items-center justify-center gap-2 p-3 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "audit_logs" ? "bg-[#071A4A] text-white shadow-md shadow-blue-950/20" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Activity size={18} className="shrink-0" /> 
            <span className="hidden sm:inline">3. Audit Trails & Changes</span>
          </button>

          <button
            onClick={() => setActiveTab("admin_users")}
            title="Admin User Management"
            className={`flex items-center justify-center gap-2 p-3 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "admin_users" ? "bg-[#071A4A] text-white shadow-md shadow-blue-950/20" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <ShieldCheck size={18} className="shrink-0" /> 
            <span className="hidden sm:inline">4. Admin User Management</span>
          </button>

          <button
            onClick={() => setActiveTab("health")}
            title="System Health"
            className={`flex items-center justify-center gap-2 p-3 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "health" ? "bg-[#071A4A] text-white shadow-md shadow-blue-950/20" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Server size={18} className="shrink-0" /> 
            <span className="hidden sm:inline">5. System Health</span>
          </button>
        </div>
      </div>

      {/* Toasts and Modals */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border text-sm font-medium ${
            toastType === "loading" ? "bg-blue-600 text-white border-blue-500" :
            toastType === "success" ? "bg-emerald-600 text-white border-emerald-500" :
            "bg-red-600 text-white border-red-500"
          }`}>
            {toastType === "loading" ? <Loader2 size={18} className="animate-spin shrink-0" /> : <CheckCircle2 size={18} className="shrink-0" />}
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100">
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
              <button onClick={() => setDeleteModalOpen(false)} className="px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-2xl text-sm hover:bg-gray-200 transition">
                Cancel
              </button>
              <button onClick={executeDeletePost} className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-2xl text-sm hover:bg-red-700 transition shadow-lg shadow-red-600/20">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render Active Section Component */}
      <div className="max-w-7xl mx-auto">
        {activeTab === "posts" && (
          <PostsSection 
            posts={filteredPosts}
            postSearch={postSearch}
            setPostSearch={setPostSearch}
            handleSavePost={handleSavePost}
            handleEditClick={handleEditClick}
            confirmDeleteClick={confirmDeleteClick}
            editingId={editingId}
            resetForm={resetForm}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postCategory={postCategory}
            setPostCategory={setPostCategory}
            postContent={postContent}
            setPostContent={setPostContent}
            setMediaFile={setMediaFile}
            existingMediaUrl={existingMediaUrl}
            loading={loading}
            highlightMatch={highlightMatch}
          />
        )}

        {activeTab === "system_logs" && (
          <SystemLogsSection 
            systemLogs={filteredSystemLogs}
            sysLogSearch={sysLogSearch}
            setSysLogSearch={setSysLogSearch}
            highlightMatch={highlightMatch}
          />
        )}

        {activeTab === "audit_logs" && (
          <AuditLogsSection 
            auditLogs={filteredAuditLogs}
            auditSearch={auditSearch}
            setAuditSearch={setAuditSearch}
            highlightMatch={highlightMatch}
          />
        )}

        {activeTab === "admin_users" && (
          <AdminUsersSection 
            supabase={supabase}
            showToast={showToast}
            logActionToAudit={logActionToAudit}
            currentAdminEmail={adminName}
          />
        )}

        {activeTab === "health" && (
          <HealthSection 
            supabase={supabase}
            showToast={showToast}
          />
        )}
      </div>
    </div>
  );
}
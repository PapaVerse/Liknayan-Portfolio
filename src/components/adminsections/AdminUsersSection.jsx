import { useState, useEffect } from "react";
import { UserPlus, Trash2, ShieldCheck, Mail, User, Loader2, Lock, AlertTriangle, X } from "lucide-react";

export default function AdminUsersSection({ supabase, showToast, logActionToAudit, currentAdminEmail }) {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Add Admin Form State
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Custom Delete Modal State
  const [adminToDelete, setAdminToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("admins")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setAdmins(data);
    } else {
      showToast("Failed to fetch administrator accounts", "error");
    }
    setLoading(false);
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!newName || !newEmail || !newPassword) {
      showToast("Please fill in all fields", "error");
      return;
    }

    setIsAdding(true);
    showToast("Creating new admin account...", "loading");

    try {
      const { data: resData, error: rpcError } = await supabase.rpc("create_admin_user", {
        admin_email: newEmail,
        admin_password: newPassword,
        admin_name: newName
      });

      if (rpcError) throw rpcError;
      if (resData && resData.error) throw new Error(resData.error);

      await logActionToAudit(
        "Added Admin Account", 
        `Created new administrator account for ${newEmail} (${newName}) by ${currentAdminEmail}`
      );

      showToast("Admin account created successfully!", "success");
      setNewName("");
      setNewEmail("");
      setNewPassword("");
      fetchAdmins();
    } catch (err) {
      showToast(`Error: ${err.message}`, "error");
    } finally {
      setIsAdding(false);
    }
  };

  const confirmDeleteAdmin = async () => {
    if (!adminToDelete) return;

    setIsDeleting(true);
    showToast("Removing admin account...", "loading");

    try {
      // Call secure RPC function to delete from auth.users and public.admins
      const { data: resData, error: rpcError } = await supabase.rpc("delete_admin_user", {
        target_admin_id: adminToDelete.id
      });

      if (rpcError) throw rpcError;
      if (resData && resData.error) throw new Error(resData.error);

      await logActionToAudit(
        "Removed Admin Account", 
        `Deleted administrator account for ${adminToDelete.email} (${adminToDelete.name}) by ${currentAdminEmail}`
      );

      showToast("Admin account removed successfully!", "success");
      setAdminToDelete(null);
      fetchAdmins();
    } catch (err) {
      showToast(`Error: ${err.message}`, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* Top Banner / Add Admin Form */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100">
            <UserPlus size={22} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#071A4A]">Register New Administrator</h2>
            <p className="text-xs sm:text-sm text-gray-500">Add a new admin who will have backend control and tracking access.</p>
          </div>
        </div>

        <form onSubmit={handleAddAdmin} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Juan Dela Cruz"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="admin@liknayan.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Temporary Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                required
                minLength={6}
              />
            </div>
          </div>

          <div className="sm:col-span-3 flex justify-end mt-2">
            <button
              type="submit"
              disabled={isAdding}
              className="flex items-center gap-2 px-6 py-3 bg-[#071A4A] text-white font-semibold rounded-2xl text-sm hover:bg-blue-950 transition shadow-lg shadow-blue-950/20 disabled:opacity-50"
            >
              {isAdding ? <Loader2 size={16} className="animate-spin" /> : <UserPlus size={16} />}
              <span>Create Admin Account</span>
            </button>
          </div>
        </form>
      </div>

      {/* Admins Table List */}
      <div className="bg-white rounded-3xl shadow-xl shadow-blue-950/5 border border-gray-100 overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#071A4A]">Active Administrator Accounts</h2>
              <p className="text-xs sm:text-sm text-gray-500">List of all users with authorization to manage this system.</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
            {admins.length} Total
          </span>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 size={32} className="animate-spin text-blue-600" />
          </div>
        ) : admins.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">No administrator accounts found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/75 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Email</th>
                  <th className="py-4 px-6">Date Added</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {admins.map((adm) => (
                  <tr key={adm.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-6 font-bold text-[#071A4A] flex items-center gap-2.5 align-middle">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-xs">
                        {adm.name ? adm.name.charAt(0).toUpperCase() : "A"}
                      </div>
                      {adm.name || "Unnamed Admin"}
                    </td>
                    <td className="py-4 px-6 text-gray-600 align-middle">{adm.email}</td>
                    <td className="py-4 px-6 text-gray-500 text-xs align-middle whitespace-nowrap">
                      {new Date(adm.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </td>
                    <td className="py-4 px-6 text-right align-middle">
                      <button
                        onClick={() => setAdminToDelete(adm)}
                        className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 border border-red-100 transition inline-flex items-center gap-1.5 text-xs font-semibold"
                        title="Remove Admin"
                      >
                        <Trash2 size={15} /> Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Custom Clean Confirmation Modal */}
      {adminToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-md w-full p-6 sm:p-8 space-y-6 relative">
            <button 
              onClick={() => setAdminToDelete(null)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-red-50 text-red-600 rounded-2xl border border-red-100">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#071A4A]">Remove Administrator?</h3>
                <p className="text-xs text-gray-500">This action will revoke access rights for this user immediately.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-1">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Target Account</p>
              <p className="text-sm font-bold text-[#071A4A]">{adminToDelete.name || "Unnamed Admin"}</p>
              <p className="text-xs text-gray-600">{adminToDelete.email}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setAdminToDelete(null)}
                disabled={isDeleting}
                className="px-5 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl text-xs hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteAdmin}
                disabled={isDeleting}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-semibold rounded-xl text-xs hover:bg-red-700 transition shadow-lg shadow-red-600/20 disabled:opacity-50"
              >
                {isDeleting && <Loader2 size={14} className="animate-spin" />}
                <span>Yes, Remove Admin</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
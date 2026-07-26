import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Mail, ArrowRight, AlertCircle, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function LoginPage({ supabase }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // 1. Authenticate with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      // 2. Verify if the user has an admin role in your database ('admins' table) and grab their database email & name fields
      const { data: adminData, error: adminError } = await supabase
        .from("admins")
        .select("*")
        .eq("id", authData.user.id)
        .single();

      if (adminError || !adminData) {
        await supabase.auth.signOut();
        throw new Error("Access denied. Unauthorized user account.");
      }

      // 3. Log the successful system login directly to your 'system_logs' table including both email and name
      const { error: logError } = await supabase.from("system_logs").insert([
        { 
          email: adminData.email, 
          name: adminData.name || "Admin",
          status: "Successful Login", 
          created_at: new Date().toISOString() 
        }
      ]);

      if (logError) {
        console.error("Failed to insert system log:", logError.message);
      }

      // 4. Save the correct database email, name, & ID to localStorage for dashboard references
      localStorage.setItem("adminEmail", adminData.email);
      localStorage.setItem("adminName", adminData.name || "Admin");
      localStorage.setItem("adminId", authData.user.id);

      // Successful login and verified admin role
      navigate("/CMSadmin");
    } catch (err) {
      setError(err.message || "Failed to log in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center px-6 text-[#071A4A] overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-blue-100/60 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-indigo-100/60 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-100 relative z-10">
        
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 px-3.5 py-2 rounded-xl border border-gray-200/80 shadow-2xs"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-xs">
            <Lock size={26} />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#071A4A]">Admin Portal</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to manage posts and system updates</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm animate-shake">
            <AlertCircle size={18} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Email Address</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@liknayantech.com"
                className="w-full pl-10 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-12 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#071A4A] text-white font-semibold rounded-2xl text-sm hover:bg-blue-900 transition shadow-lg shadow-blue-950/20 flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
          >
            {loading ? "Verifying..." : "Sign In to Dashboard"} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
import { Search, ShieldAlert } from "lucide-react";

export default function SystemLogsSection({ systemLogs, sysLogSearch, setSysLogSearch, highlightMatch }) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-950/5 border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#071A4A]">System Login Logs</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Track every successful admin login session history.</p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={sysLogSearch}
            onChange={(e) => setSysLogSearch(e.target.value)}
            placeholder="Search login logs..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-blue-600 transition"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 text-[11px] uppercase tracking-wider font-semibold">
              <th className="py-3 px-4">Admin Name</th>
              <th className="py-3 px-4">Admin Email</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs sm:text-sm text-[#071A4A]">
            {systemLogs && systemLogs.length > 0 ? (
              systemLogs.map((log) => {
                const timestampVal = log.created_at || log.date || new Date().toISOString();
                return (
                  <tr key={log.id || Math.random()} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-4 font-bold align-middle">{highlightMatch(log.name || "Unknown", sysLogSearch)}</td>
                    <td className="py-4 px-4 text-gray-600 align-middle">{highlightMatch(log.email || "Unknown", sysLogSearch)}</td>
                    <td className="py-4 px-4 align-middle">
                      <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full text-xs border border-emerald-100 whitespace-nowrap">
                        {highlightMatch(log.status || "Successful Login", sysLogSearch)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-500 text-xs align-middle">
                      {new Date(timestampVal).toLocaleString()}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="py-12 text-center text-gray-400 text-sm">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <ShieldAlert size={24} className="text-gray-300" />
                    <span>No system login logs found.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
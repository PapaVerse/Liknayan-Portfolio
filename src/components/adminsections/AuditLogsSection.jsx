import { Search, Database } from "lucide-react";

export default function AuditLogsSection({ auditLogs, auditSearch, setAuditSearch, highlightMatch }) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-950/5 border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#071A4A]">Audit Trails & Changes</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Complete history of content creations, updates, and deletions.</p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
            <Search size={16} />
          </span>
          <input
            type="text"
            value={auditSearch}
            onChange={(e) => setAuditSearch(e.target.value)}
            placeholder="Search audit trail..."
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
              <th className="py-3 px-4">Action</th>
              <th className="py-3 px-4">Details / Notes</th>
              <th className="py-3 px-4">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-xs sm:text-sm text-[#071A4A]">
            {auditLogs && auditLogs.length > 0 ? (
              auditLogs.map((audit) => {
                const timestampVal = audit.created_at || audit.date || new Date().toISOString();
                return (
                  <tr key={audit.id || Math.random()} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-4 font-bold">{highlightMatch(audit.name || "Admin", auditSearch)}</td>
                    <td className="py-4 px-4 text-gray-600">{highlightMatch(audit.email || "Unknown", auditSearch)}</td>
                    <td className="py-4 px-4 font-semibold text-blue-900">
                      {highlightMatch(audit.action || "Action Performed", auditSearch)}
                    </td>
                    <td className="py-4 px-4 text-gray-600 max-w-xs truncate">
                      {highlightMatch(audit.notes || "—", auditSearch)}
                    </td>
                    <td className="py-4 px-4 text-gray-500 text-xs whitespace-nowrap">
                      {new Date(timestampVal).toLocaleString()}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="py-12 text-center text-gray-400 text-sm">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Database size={24} className="text-gray-300" />
                    <span>No audit trails recorded yet.</span>
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
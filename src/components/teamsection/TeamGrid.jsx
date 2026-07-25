import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TeamGrid({ teamMembers, setSelectedMember }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div 
          key={member.name} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-xl flex flex-col items-center text-center relative group overflow-hidden"
        >
          {/* Top Accent Line on Hover */}
          <motion.div 
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
          />
          
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
            <img src={member.image} alt={member.name} className="relative w-28 h-28 rounded-full object-cover shadow-md border-4 border-white" />
          </div>

          <h3 className="text-2xl font-bold text-[#071A4A] mb-1">{member.name}</h3>
          <p className="text-xs font-semibold text-blue-600 mb-8 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100/60">{member.role}</p>
          
          <button 
            onClick={() => setSelectedMember(member)} 
            className="w-full mt-auto py-3 px-4 bg-gradient-to-r from-[#071A4A] to-blue-900 text-white rounded-xl font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Profile</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}
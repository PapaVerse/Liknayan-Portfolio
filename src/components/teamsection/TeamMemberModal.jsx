import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Code2, Database, Wrench, Sparkles, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function TeamMemberModal({ selectedMember, setSelectedMember }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <AnimatePresence>
      {selectedMember && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] overflow-y-auto px-4 py-8 md:py-16 flex justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl border border-gray-100 relative p-6 md:p-12 overflow-hidden my-auto"
          >
            {/* Background Ambient Glow inside Modal */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            {/* Close Button */}
            <button 
              onClick={() => {
                setSelectedMember(null);
                setIsImageExpanded(false);
              }} 
              className="absolute top-6 right-6 p-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-[#071A4A] rounded-full transition-all duration-300 z-20 shadow-sm group"
              aria-label="Close modal"
            >
              <X size={22} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* Header Info */}
            <div className="text-center mb-12 relative z-10">
              <div className="relative inline-block mb-4 group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-sm opacity-30 group-hover:opacity-75 transition duration-300"></div>
                <motion.img 
                  src={selectedMember.image} 
                  animate={{ scale: isImageExpanded ? 1.1 : 1 }}
                  onClick={() => setIsImageExpanded(!isImageExpanded)}
                  className="relative w-36 h-36 rounded-full mx-auto shadow-xl cursor-pointer object-cover border-4 border-white transition-transform"
                  title="Click to zoom photo"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#071A4A] tracking-tight">{selectedMember.name}</h2>
              <div className="inline-block mt-3">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200/60 px-4 py-1.5 rounded-full shadow-2xs">
                  {selectedMember.role}
                </span>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="mb-14 relative z-10">
              <h3 className="text-xl font-bold text-[#071A4A] mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                <Sparkles size={20} className="text-blue-600"/> Core Expertise & Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(selectedMember.skills).map(([category, items], idx) => (
                  <motion.div 
                    key={category} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-b from-gray-50/80 to-blue-50/30 backdrop-blur-md p-6 rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-md transition-shadow flex flex-col"
                  >
                    <h4 className="font-bold text-[#071A4A] mb-4 flex items-center gap-2 text-xs uppercase tracking-wider">
                      {category === 'Frontend' && <Code2 size={16} className="text-blue-600"/>}
                      {category === 'Backend' && <Database size={16} className="text-blue-600"/>}
                      {category === 'Tools' && <Wrench size={16} className="text-blue-600"/>}
                      {category !== 'Frontend' && category !== 'Backend' && category !== 'Tools' && <Sparkles size={16} className="text-blue-600"/>}
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {items.map(s => (
                        <span key={s} className="text-xs bg-white px-3 py-1.5 rounded-lg border border-gray-200/90 text-gray-700 font-semibold shadow-2xs hover:border-blue-300 transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work Experience Timeline Section */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#071A4A] border-b border-gray-100 pb-3">
                <Briefcase size={24} className="text-blue-600"/> Professional Experience & Journey
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-blue-100">
                {selectedMember.workHistory.map((job, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="relative pl-10 group"
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-blue-600 shadow-sm group-hover:scale-125 transition-transform"></div>

                    <div className="bg-gray-50/70 hover:bg-white p-6 rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="font-bold text-lg text-[#071A4A]">{job.role}</h4>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/65 w-fit">
                          <Calendar size={12} /> {job.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 font-semibold mb-4 text-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {job.company}
                      </p>
                      <ul className="space-y-2.5 text-gray-600 text-sm">
                        {job.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle size={15} className="text-blue-600 shrink-0 mt-1" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Code2, Database, Wrench } from "lucide-react";

const teamMembers = [
  {
    name: "Eron",
    role: "Full Stack Developer",
    image: "/images/Eron.jpg",
    skills: {
      Frontend: ["Skill 1", "Skill 2"],
      Backend: ["Skill 1", "Skill 2"],
      Tools: ["Tool 1", "Tool 2"]
    },
    workHistory: [
      { 
        role: "Job Title", 
        company: "Company Name", 
        duration: "2026 - Present", 
        tasks: ["Task description goes here."] 
      }
    ]
  },
  {
    name: "Drex",
    role: "Front-End Developer",
    image: "/images/Drex.jpg",
    skills: {
      Frontend: ["Skill 1", "Skill 2"],
      Backend: ["Skill 1", "Skill 2"],
      Tools: ["Tool 1", "Tool 2"]
    },
    workHistory: [
      { 
        role: "Job Title", 
        company: "Company Name", 
        duration: "2026 - Present", 
        tasks: ["Task description goes here."] 
      }
    ]
  },
  {
    name: "Val",
    role: "Front-End Developer",
    image: "/images/Val.jpg",
    skills: {
      Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Blade", "HTML", "CSS", "JavaScript"],
      Backend: ["PHP", "Laravel", "Node.js", "MySQL", "Supabase", "Resend", "EmailJS"],
      Tools: ["Git", "Github", "VSCode", "Figma", "Canva", "phpMyAdmin", "Vercel", "Bluehost"]
    },
    workHistory: [
      { 
        role: "Web Developer (Freelance)", 
        company: "Cavite West Point College", 
        duration: "2026 - Present", 
        tasks: [
          "Currently developing a comprehensive Student Information System (SIS) to digitize and centralize academic record management.",
          "Implementing secure modules for student enrollment, grade tracking, and faculty management.",
          "Designing a scalable database architecture to ensure data integrity and facilitate efficient information retrieval for administrative staff."
        ] 
      },
      { 
        role: "Excel Automation Specialist", 
        company: "BPO Services", 
        duration: "2025 - Present", 
        tasks: [
          "Developing automated performance trackers using Excel Web, integrating complex formulas.",
          "Engineered end-to-end tracking solutions for specific entire teams.",
          "Automating data extraction by integrating Outlook emails with Excel using Power Automate, streamlining lead and report management.",
          "Implementing advanced Excel functions to maintain high data precision."
        ] 
      },
      { 
        role: "IT Helpdesk Developer", 
        company: "Internal Company Project", 
        duration: "2026", 
        tasks: [
          "Architected and deployed a centralized IT Helpdesk Web Platform for streamlined internal ticket management.",
          "Implemented automated ticket routing, status tracking, and department-wide issue resolution workflows.",
          "Enhanced operational efficiency by reducing manual request handling time through a responsive, user-friendly interface."
        ] 
      },
      { 
        role: "Web Developer", 
        company: "Macro Wiring Technologies Co. Inc.", 
        duration: "2026", 
        tasks: [
          "Developing and maintaining the company website to showcase products and services.",
          "Managing vendor inquiries and communications.",
          "Handling admin access and overseeing inquiry management functions."
        ] 
      },
      { 
        role: "Tech Support", 
        company: "HRD Singapore, PTE, LTD.", 
        duration: "2025", 
        tasks: [
          "Provided technical support for applications, systems, hardware, and software concerns across departments and other group of companies.",
          "Resolved daily technical issues related to devices, systems, and production software to ensure smooth operations."
        ] 
      },
      { 
        role: "Computer Laboratory Intern", 
        company: "PUP Maragondon Campus", 
        duration: "2021 - 2024", 
        tasks: [
          "Assisted in installation, troubleshooting, and maintenance of computer systems, printers, and networks.",
          "Supported inventory management, data encoding, and asset tracking.",
          "Assisted in system setups and IT support for events and laboratory operations."
        ] 
      }
    ]
  },
  {
    name: "Ciara",
    role: "Graphic Layout Designer",
    image: "/images/Ciara.jpg",
    skills: {
      Frontend: ["Skill 1", "Skill 2"],
      Backend: ["Skill 1", "Skill 2"],
      Tools: ["Tool 1", "Tool 2"]
    },
    workHistory: [
      { 
        role: "Job Title", 
        company: "Company Name", 
        duration: "2026 - Present", 
        tasks: ["Task description goes here."] 
      }
    ]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <section className="pt-32 pb-20 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#071A4A] mb-4">Meet the Team</h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          A dedicated group of developers and automation specialists committed to building efficient, scalable, and user-centric digital solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div key={member.name} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-bold text-[#071A4A]">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{member.role}</p>
              <button onClick={() => setSelectedMember(member)} className="w-full py-3 bg-[#071A4A] text-white rounded-2xl font-semibold hover:bg-blue-900 transition">View Profile</button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-white z-[100] overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto p-8 md:p-16">
              <button onClick={() => setSelectedMember(null)} className="fixed top-8 right-8 p-4 bg-gray-100 rounded-full hover:bg-gray-200 transition z-[101]">
                <X size={24} />
              </button>
              
              <div className="text-center mb-16">
                <motion.img 
                  src={selectedMember.image} 
                  animate={{ scale: isImageExpanded ? 1.2 : 1 }}
                  onClick={() => setIsImageExpanded(!isImageExpanded)}
                  className="w-40 h-40 rounded-full mx-auto mb-6 shadow-xl cursor-pointer object-cover" 
                />
                <h2 className="text-5xl font-bold text-[#071A4A]">{selectedMember.name}</h2>
                <p className="text-xl text-gray-500 mt-2">{selectedMember.role}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {Object.entries(selectedMember.skills).map(([category, items]) => (
                  <div key={category} className="bg-gray-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-[#071A4A] mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                      {category === 'Frontend' && <Code2 size={18}/>}
                      {category === 'Backend' && <Database size={18}/>}
                      {category === 'Tools' && <Wrench size={18}/>}
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map(s => <span key={s} className="text-xs bg-white px-3 py-1 rounded-lg border border-gray-200 text-gray-700">{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#071A4A]"><Briefcase size={28}/> Work Experience</h4>
              <div className="space-y-8">
                {selectedMember.workHistory.map((job, idx) => (
                  <div key={idx} className="border-l-4 border-[#071A4A] pl-8">
                    <h5 className="font-bold text-lg text-gray-900">{job.role}</h5>
                    <p className="text-blue-600 font-semibold mb-3">{job.company} • {job.duration}</p>
                    <ul className="list-disc text-gray-600 pl-4 space-y-2">
                      {job.tasks.map((task, tIdx) => <li key={tIdx}>{task}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
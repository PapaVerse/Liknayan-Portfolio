import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Code2, Database, Wrench, Sparkles, Cpu, Users, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const teamMembers = [
{
    name: "Eron",
    role: "Full Stack Developer",
    image: "/images/Eron.jpg",
    skills: {
      Frontend: ["React.js", "React Native", "JavaScript"],
      Backend: ["Node.js", "PostgreSQL", "C#", "Python", "C++", "SQL"],
      Tools: ["POSTMAN", "Microsoft Office", "Google Workspace"]
    },
    workHistory: [
      { 
        role: "Full Stack Developer", 
        company: "Liknayan Tech Solution", 
        duration: "Present", 
        tasks: [
          "Develop and maintain the Cavite Westpoint College website, integrating a Student Information System (SIS) and Content Management System (CMS).",
          "Design, develop, and maintain scalable backend APIs to support web application functionality and system integrations.",
          "Build responsive and interactive user interfaces using React.js.",
          "Develop server-side applications with Node.js and manage relational databases using PostgreSQL.",
          "Collaborate with the development team to implement new features, optimize application performance, and ensure system reliability."
        ] 
      },
      { 
        role: "Mobile Developer", 
        company: "SVEN – The Digital 1st Agency", 
        duration: "2023 - 2024", 
        tasks: [
          "Updated and optimized mobile applications for ToyotaPH and LexusPH.",
          "Conducted build validation, bug checks, and implemented security features."
        ] 
      },
      { 
        role: "Software Engineer", 
        company: "Cyberland Consultancy Ltd.", 
        duration: "2020 - 2023", 
        tasks: [
          "Developed Sunbeam Place MIS, a web and mobile application for a Singapore care home, enabling centralized management of resident data, schedules, and operations.",
          "Built mobile apps using React Native and integrated APIs for real-time data synchronization.",
          "Designed dashboards to improve system monitoring and reporting accuracy.",
          "Created backend APIs and tested endpoints using POSTMAN, ensuring data integrity across platforms."
        ] 
      },
      { 
        role: "Instructor", 
        company: "Polytechnic University of the Philippines - Maragondon Campus", 
        duration: "2020 - 2024", 
        tasks: [
          "Taught computer programming courses covering C++, Python, C#, JavaScript, SQL, and modern frameworks (React Native, React.js).",
          "Designed lesson plans and practical exercises to strengthen students’ coding skills.",
          "Guided students through software development projects and database applications.",
          "Utilized Microsoft Office Tools (Word, Excel, PowerPoint) and Google Workspace (Sheets, Docs, Slides) for curriculum delivery and administrative tasks."
        ] 
      }
    ]
  },
  {
    name: "Drex",
    role: "Front-End Developer",
    image: "/images/Drex.jpg",
    skills: {
      Frontend: ["React", "Tailwind CSS", "Alpine.js", "Blade"],
      Backend: ["PHP", "Laravel", "Node.js", "Express.js", "MySQL / SQL", "MongoDB", "Supabase"],
      Tools: ["Git", "GitHub", "VS Code", "Vercel", "Bluehost", "phpMyAdmin"]
    },
workHistory: [
  { 
    role: "Part-Time IT Instructor", 
    company: "Cavite Westpoint College", 
    duration: "July 2026 - Present", 
    tasks: [
      "Teach Information Technology courses, prepare lesson plans and instructional materials.",
      "Conduct lectures and laboratory activities.",
      "Assess students' performance and provide guidance to help them develop their technical knowledge and practical IT skills."
    ] 
  },
  { 
    role: "Front-End Web Developer & Co-Founder", 
    company: "Liknayan Tech Solutions", 
    duration: "April 2026 - Present", 
    tasks: [
      "Build responsive and user-centered web applications for educational institutions and businesses.",
      "Develop interactive user interfaces, implement modern web technologies, and collaborate with designers and stakeholders.",
      "Contribute to project planning, client relations, and the overall growth and direction of the company."
    ] 
  },
  { 
    role: "Freelance Web Developer", 
    company: "Freelancer", 
    duration: "September 2025 - February 2026", 
    tasks: [
      "Designed and developed responsive websites for clients.",
      "Focused on creating intuitive user interfaces, implementing web functionalities, and ensuring a seamless user experience across different devices."
    ] 
  },
  { 
    role: "Front-End Web Developer / Tech Team (Intern)", 
    company: "Polytechnic University of the Philippines", 
    duration: "July 2022 - September 2022", 
    tasks: [
      "Contributed to the development of a website for PUP Alfonso Campus to support its accreditation process.",
      "Designed and implemented user-friendly interfaces, ensured responsiveness, and optimized website performance."
    ] 
  },
  { 
    role: "Annotator", 
    company: "Hikari Japanese Translation", 
    duration: "May 2022 - July 2023", 
    tasks: [
      "Responsible for annotating Japanese texts found in various images.",
      "Translated texts and inputted them into the designated application for further processing."
    ] 
  },
{ 
  role: "Tech Support (Intern)", 
  company: "Laboratory Office Polytechnic University of the Philippines", 
  duration: "February 2024 - June 2024", 
  tasks: [
    "Managed and troubleshot technical issues across various campus offices.",
    "Maintained computer systems and servers.",
    "Diagnosed hardware and software problems.",
    "Set up workstations.",
    "Assisted faculty and staff with IT-related concerns."
  ] 
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
      role: "Front-End Developer (Liknayan Tech Solutions)",
      company: "Cavite West Point College",
      duration: "2026 - Present",
      tasks: [
      "Managing the creation of responsive and intuitive front-end features for the comprehensive Student Information System (SIS) to digitize and centralize academic record management.",
      "Managing the creation of secure front-end modules for student enrollment, grade tracking, and faculty management dashboards.",
      "Managing the optimization of front-end performance and component architecture to ensure efficient data rendering and a seamless user experience for administrative staff."
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
      image: "/images/Ciara.png",
      skills: {
        "Creative & Media": ["Videographer", "Video Editor", "Photographer", "Photo Editor", "Sublimation Designer"],
        "Documentation": ["Document Controller"],
        "Design & Tools": ["Figma", "Canva", "Photoshop", "Capcut"]
      
    },
workHistory: [
  { 
    role: "Graphic Layout Designer (Liknayan Tech Solutions)", 
    company: "Cavite West Point College",
      duration: "2026 - Present", 
    tasks: [
      "Designed and implemented clean visual layouts, brand assets, and digital graphics to elevate the company's web and software interfaces.",
      "Produced initial UI/UX prototypes and wireframes to map out user flows and guide front-end development.",
      "Handled project documentation and visual assets organization to ensure consistency across all brand platforms."
    ] 
  },
  { 
    role: "Document Controller / Safety Officer", 
    company: "Macro Wiring Technologies Co Inc.", 
    duration: "April 2025 - Present", 
    tasks: [
      "Managed technical and project documentation for wire harness manufacturing, ensuring accuracy, version control, and compliance with industry standards.",
      "Maintained safety records, monitored workplace safety compliance, and supported the implementation of health and safety procedures."
    ] 
  },
  { 
    role: "Quality Control", 
    company: "Macro Wiring Technologies Co Inc.", 
    duration: "Sept 2024 - March 2025", 
    tasks: [
      "Performed quality control in wire harness production, ensuring compliance with safety and performance standards through thorough inspections of wiring, connections, insulation, and overall assembly."
    ] 
  },
  { 
    role: "Photographer / Video Editor", 
    company: "Part-Time", 
    duration: "Not specified", 
    tasks: [
      "Performed part-time video editing, photography, and photo editing, producing engaging visual content while ensuring high-quality standards and meeting project deadlines."
    ] 
  },
  { 
    role: "IT-Support Specialist (OJT)", 
    company: "Polytechnic University of the Philippines Maragondon Campus", 
    duration: "August 2023 - Sept 2023, March 2024 - June 2024", 
    tasks: [
      "Offered extensive support to address connectivity issues in campus labs and offices.",
      "Identified and fixed computer problems to ensure everything runs smoothly."
    ] 
  }
]
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <section className="pt-32 pb-20 bg-white text-[#071A4A] relative overflow-hidden">
      
      {/* Background Glow Orbs */}
      <motion.div 
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-indigo-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />

      {/* Floating Background Icons */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-36 left-12 text-blue-400/20 pointer-events-none hidden lg:block"
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-24 right-16 text-indigo-400/20 pointer-events-none hidden lg:block"
      >
        <Cpu size={72} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Users size={14} /> Expert Professionals
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold text-[#071A4A] tracking-tight mb-4"
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-base"
          >
            A dedicated group of developers and automation specialists committed to building efficient, scalable, and user-centric digital solutions.
          </motion.p>
        </div>

        {/* Team Cards Grid */}
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
      </div>

      {/* Modernized Interactive Full Screen Modal */}
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

              {/* Skills Grid - Modernized Card Layout */}
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
    </section>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, Clock, Sparkles, FolderGit2 } from "lucide-react";

export default function Projects() {
  const [views, setViews] = useState({
    macro: "desktop",
    hub: "desktop",
    help: "desktop",
    walk: "desktop",
    chav: "desktop",
    finder: "desktop",
    cwpc: "desktop",
  });

  const toggleView = (key, view) => setViews((prev) => ({ ...prev, [key]: view }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="pt-32 pb-20 min-h-screen bg-white relative overflow-hidden text-[#071A4A]">
      
      {/* Background Glow Orbs matching the Team section style */}
      <motion.div 
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-blue-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-indigo-100/60 rounded-full filter blur-[140px] pointer-events-none"
      />

      {/* Floating Background Icons */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-40 left-12 text-blue-400/20 pointer-events-none hidden lg:block"
      >
        <Sparkles size={64} />
      </motion.div>
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 text-indigo-400/20 pointer-events-none hidden lg:block"
      >
        <FolderGit2 size={72} />
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 size={14} /> Portfolio Works
          </div>
          <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-[#071A4A] tracking-tight mb-4">Projects</motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Explore our curated collection of deployed web apps, platforms, APIs, and active development milestones.
          </p>
        </div>

        {/* COMPLETED PROJECTS */}
        <motion.h2 variants={itemVariants} className="text-[#071A4A] tracking-[4px] text-xs font-bold mb-8 uppercase flex items-center gap-3">
          <span className="w-8 h-[2px] bg-blue-600"></span> Completed Projects
        </motion.h2>
        
        <ProjectCard title="Macro Wiring Technologies Co. Inc." desc="A corporate website transformation project that converted a static landing page into a dynamic business platform." tech={["Laravel", "MySQL", "Tailwind CSS", "Bluehost"]} link="https://www.macrowiring.com/" view={views.macro} onToggle={(v) => toggleView("macro", v)} imgDesk="/images/desktopmacro.png" imgMob="/images/mobilemacro.png" />
        <ProjectCard title="CvSU Naic BSIT Hub" desc="A website platform for BSIT students in CvSU Naic, designed for efficient access to learning materials and department resources." tech={["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"]} link="https://deybumm.freedev.app/login.php?i=1" view={views.hub} onToggle={(v) => toggleView("hub", v)} imgDesk="/images/desktophub.png" imgMob="/images/mobilehub.png" />
        <ProjectCard title="IT Helpdesk Management System" desc="An internal company platform enabling employees to submit, track, and manage IT-related concerns through a centralized ticketing system." tech={["PHP", "Blade", "XAMPP", "MySQL"]} view={views.help} onToggle={(v) => toggleView("help", v)} imgDesk="/images/desktophelp.png" imgMob="/images/mobilehelp.png" showButton={true} btnText="Internal Company Website" />
        <ProjectCard title="WalkMap" desc="An AI-powered mapping tool that helps users plan, explore, and navigate routes — blending geolocation with intelligent suggestions." tech={["React", "Supabase", "AI"]} link="https://walk-map-iota.vercel.app/" view={views.walk} onToggle={(v) => toggleView("walk", v)} imgDesk="/images/desktopwalk.png" imgMob="/images/mobilewalk.png" />
        <ProjectCard title="Chavacano API" desc="Built the first open-source REST API for Chavacano, the only Spanish-based creole language in Asia, enabling developers to integrate language translation into their applications." tech={["Node.js", "Express", "MongoDB"]} link="https://chavacano-api.vercel.app/" view={views.chav} onToggle={(v) => toggleView("chav", v)} imgDesk="/images/desktopchav.png" imgMob="/images/mobilechav.png" />
        <ProjectCard title="LocFinder" desc="A location finder application for easy navigation and tracking." tech={["React", "Vercel"]} link="https://loc-finder.vercel.app/" view={views.finder} onToggle={(v) => toggleView("finder", v)} imgDesk="/images/desktopfinder.png" imgMob="/images/mobilefinder.png" />

        {/* CURRENT DEVELOPMENT */}
        <motion.h2 variants={itemVariants} className="text-[#071A4A] tracking-[4px] text-xs font-bold mb-8 uppercase flex items-center gap-3 mt-16">
          <span className="w-8 h-[2px] bg-blue-600"></span> Current Development
        </motion.h2>
        
        <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl overflow-hidden mb-16 shadow-xl relative group">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Active Project</span>
              <h2 className="text-3xl font-bold text-[#071A4A]">Cavite West Point College SIS Website</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">A complete Student Information System and institutional website solution currently being developed.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3.5 py-1.5 border border-gray-200/80 rounded-lg text-xs font-medium text-gray-700 bg-gray-50/80 shadow-2xs">SIS Integration</span>
                <span className="px-3.5 py-1.5 border border-gray-200/80 rounded-lg text-xs font-medium text-gray-700 bg-gray-50/80 shadow-2xs">Web Platform</span>
              </div>
              <button disabled className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-xl border border-blue-200 text-blue-700 font-semibold bg-blue-50/50 cursor-not-allowed w-fit text-sm">
                <Clock size={18}/> On-Going Development
              </button>
            </div>
            <div className="bg-gray-50/60 p-6 md:p-8 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="flex gap-3 mb-5">
                <button onClick={() => toggleView("cwpc", "desktop")} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition shadow-2xs ${views.cwpc === "desktop" ? "border-blue-600 text-blue-600 bg-white shadow-xs" : "border-gray-200 text-gray-500 bg-white/50"}`}><Monitor size={16}/> Desktop</button>
                <button onClick={() => toggleView("cwpc", "mobile")} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition shadow-2xs ${views.cwpc === "mobile" ? "border-blue-600 text-blue-600 bg-white shadow-xs" : "border-gray-200 text-gray-500 bg-white/50"}`}><Smartphone size={16}/> Mobile</button>
              </div>
              <div className="h-[380px] w-full relative overflow-hidden rounded-xl border border-gray-200/80 shadow-md bg-white">
                <img src={views.cwpc === "desktop" ? "/images/desktopcwpc.png" : "/images/mobilecwpc.png"} className="w-full h-full object-contain" alt="CWPC Preview" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* UPCOMING PROJECTS */}
        <motion.h2 variants={itemVariants} className="text-[#071A4A] tracking-[4px] text-xs font-bold mb-8 uppercase flex items-center gap-3 mt-16">
          <span className="w-8 h-[2px] bg-blue-600"></span> Upcoming Projects
        </motion.h2>
        
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8 pb-10">
          <ProjectCardUpcoming title="MChat Communication System" description="A secure internal communication platform featuring real-time messaging and administrative monitoring." technologies={["Laravel", "React", "MySQL", "WebSockets"]} />
          <ProjectCardUpcoming title="Future Digital Solutions" description="Additional upcoming systems focused on automation, business intelligence, and customized software." technologies={["Web Development", "Cloud", "Automation"]} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, desc, tech, link, view, onToggle, imgDesk, imgMob, showButton = true, btnText = "Visit Website" }) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
      className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl overflow-hidden mb-12 shadow-xl relative group"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="grid lg:grid-cols-2">
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#071A4A]">{title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tech.map((t) => <span key={t} className="px-3.5 py-1.5 border border-gray-200/80 rounded-lg text-xs font-medium text-gray-700 bg-gray-50/80 shadow-2xs">{t}</span>)}
            </div>
          </div>
          {showButton && (
            <div className="mt-8">
              <a href={link || "#"} target={link ? "_blank" : undefined} rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#071A4A] text-white text-sm font-semibold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/10">
                {btnText} {link && <ExternalLink size={16} />}
              </a>
            </div>
          )}
        </div>
        <div className="bg-gray-50/60 p-6 md:p-8 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100">
          <div className="flex gap-3 mb-5">
            <button onClick={() => onToggle("desktop")} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition shadow-2xs ${view === "desktop" ? "border-blue-600 text-blue-600 bg-white shadow-xs" : "border-gray-200 text-gray-500 bg-white/50"}`}><Monitor size={16} /> Desktop</button>
            <button onClick={() => onToggle("mobile")} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition shadow-2xs ${view === "mobile" ? "border-blue-600 text-blue-600 bg-white shadow-xs" : "border-gray-200 text-gray-500 bg-white/50"}`}><Smartphone size={16} /> Mobile</button>
          </div>
          <div className="h-[380px] w-full relative overflow-hidden rounded-xl border border-gray-200/80 shadow-md bg-white">
            <img src={view === "desktop" ? imgDesk : imgMob} className="w-full h-full object-contain" alt="Project Preview" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCardUpcoming({ title, description, technologies }) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
      whileHover={{ y: -6 }} 
      className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl p-8 shadow-xl transition-all relative group overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-blue-600 text-xs font-semibold tracking-wider uppercase">Upcoming Project</span>
      <h3 className="text-2xl font-bold mt-3 text-[#071A4A]">{title}</h3>
      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-6">
        {technologies.map(item => <span key={item} className="px-3.5 py-1.5 border border-gray-200/80 bg-gray-50/80 rounded-lg text-xs font-medium text-gray-700 shadow-2xs">{item}</span>)}
      </div>
    </motion.div>
  );
}
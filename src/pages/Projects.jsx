import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, Clock } from "lucide-react";

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
    <section className="pt-32 min-h-screen bg-white relative overflow-hidden text-[#071A4A]">
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-200 rounded-full filter blur-[150px] opacity-30 animate-float"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-indigo-200 rounded-full filter blur-[150px] opacity-30 animate-float2"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-16">Projects</motion.h1>

        {/* COMPLETED PROJECTS */}
        <motion.h2 variants={itemVariants} className="text-[#071A4A] tracking-[5px] text-sm font-bold mb-8 uppercase">Completed Projects</motion.h2>
        <ProjectCard title="Macro Wiring Technologies Co. Inc." desc="A corporate website transformation project that converted a static landing page into a dynamic business platform." tech={["Laravel", "MySQL", "Tailwind CSS", "Bluehost"]} link="https://www.macrowiring.com/" view={views.macro} onToggle={(v) => toggleView("macro", v)} imgDesk="/images/desktopmacro.png" imgMob="/images/mobilemacro.png" />
        <ProjectCard title="CvSU Naic BSIT Hub" desc="A website platform for BSIT students in CvSU Naic, designed for efficient access to learning materials and department resources." tech={["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"]} view={views.hub} onToggle={(v) => toggleView("hub", v)} imgDesk="/images/desktophub.png" imgMob="/images/mobilehub.png" />
        <ProjectCard title="IT Helpdesk Management System" desc="An internal company platform enabling employees to submit, track, and manage IT-related concerns through a centralized ticketing system." tech={["PHP", "Blade", "XAMPP", "MySQL"]} view={views.help} onToggle={(v) => toggleView("help", v)} imgDesk="/images/desktophelp.png" imgMob="/images/mobilehelp.png" showButton={true} btnText="Internal Company Website" />
        <ProjectCard title="WalkMap" desc="An AI-powered mapping tool that helps users plan, explore, and navigate routes — blending geolocation with intelligent suggestions." tech={["React", "Supabase", "AI"]} link="https://walk-map-iota.vercel.app/" view={views.walk} onToggle={(v) => toggleView("walk", v)} imgDesk="/images/desktopwalk.png" imgMob="/images/mobilewalk.png" />
        <ProjectCard title="Chavacano API" desc="Built the first open-source REST API for Chavacano, the only Spanish-based creole language in Asia, enabling developers to integrate language translation into their applications." tech={["Node.js", "Express", "MongoDB"]} link="https://chavacano-api.vercel.app/" view={views.chav} onToggle={(v) => toggleView("chav", v)} imgDesk="/images/desktopchav.png" imgMob="/images/mobilechav.png" />
        <ProjectCard title="LocFinder" desc="A location finder application for easy navigation and tracking." tech={["React", "Vercel"]} link="https://loc-finder.vercel.app/" view={views.finder} onToggle={(v) => toggleView("finder", v)} imgDesk="/images/desktopfinder.png" imgMob="/images/mobilefinder.png" />

        {/* CURRENT DEVELOPMENT */}
        <motion.h2 variants={itemVariants} className="text-[#071A4A] tracking-[5px] text-sm font-bold mb-8 uppercase">Current Development</motion.h2>
        <motion.div variants={itemVariants} className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl overflow-hidden mb-16 shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10">
              <h2 className="text-3xl font-bold">Cavite West Point College SIS Website</h2>
              <p className="mt-5 text-gray-600 leading-relaxed">A complete Student Information System and institutional website solution currently being developed.</p>
              <button disabled className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg border border-[#071A4A] text-[#071A4A] font-semibold bg-gray-50 cursor-not-allowed">
                <Clock size={18}/> On-Going Development
              </button>
            </div>
            <div className="bg-gray-50/50 p-8 flex flex-col">
              <div className="flex gap-3 mb-5">
                <button onClick={() => toggleView("cwpc", "desktop")} className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${views.cwpc === "desktop" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"}`}><Monitor size={16}/> Desktop</button>
                <button onClick={() => toggleView("cwpc", "mobile")} className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${views.cwpc === "mobile" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"}`}><Smartphone size={16}/> Mobile</button>
              </div>
              <img src={views.cwpc === "desktop" ? "/images/desktopcwpc.png" : "/images/mobilecwpc.png"} className="w-full h-[400px] object-contain bg-white rounded-xl border border-gray-200" alt="CWPC Preview" />
            </div>
          </div>
        </motion.div>

        {/* UPCOMING PROJECTS */}
        <motion.h2 variants={itemVariants} className="text-[#071A4A] tracking-[5px] text-sm font-bold mb-8 uppercase">Upcoming Projects</motion.h2>
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8 pb-20">
          <ProjectCardUpcoming title="MChat Communication System" description="A secure internal communication platform featuring real-time messaging and administrative monitoring." technologies={["Laravel", "React", "MySQL", "WebSockets"]} />
          <ProjectCardUpcoming title="Future Digital Solutions" description="Additional upcoming systems focused on automation, business intelligence, and customized software." technologies={["Web Development", "Cloud", "Automation"]} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ title, desc, tech, link, view, onToggle, imgDesk, imgMob, showButton = true, btnText = "Visit Website" }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl overflow-hidden mb-16 shadow-xl">
      <div className="grid lg:grid-cols-2">
        <div className="p-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-5 text-gray-600 leading-relaxed">{desc}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {tech.map((t) => <span key={t} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 bg-white">{t}</span>)}
          </div>
          {showButton && (
            <a href={link || "#"} target={link ? "_blank" : undefined} rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg bg-[#071A4A] text-white font-semibold hover:bg-blue-900 transition-colors">
              {btnText} {link && <ExternalLink size={18} />}
            </a>
          )}
        </div>
        <div className="bg-gray-50/50 p-8 flex flex-col">
          <div className="flex gap-3 mb-5">
            <button onClick={() => onToggle("desktop")} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${view === "desktop" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"}`}><Monitor size={16} /> Desktop</button>
            <button onClick={() => onToggle("mobile")} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${view === "mobile" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"}`}><Smartphone size={16} /> Mobile</button>
          </div>
          <div className="h-[400px] w-full relative overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <img src={view === "desktop" ? imgDesk : imgMob} className="w-full h-full object-contain bg-white" alt="Project Preview" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCardUpcoming({ title, description, technologies }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -10 }} className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
      <span className="text-[#071A4A] text-sm tracking-widest font-semibold">UPCOMING PROJECT</span>
      <h3 className="text-2xl font-bold mt-5 text-[#071A4A]">{title}</h3>
      <p className="mt-4 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-3 mt-6">
        {technologies.map(item => <span key={item} className="px-3 py-2 border border-gray-200 bg-white rounded-full text-xs text-gray-600">{item}</span>)}
      </div>
    </motion.div>
  );
}
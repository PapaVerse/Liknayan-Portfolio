import { useState } from "react";
import { ExternalLink, Monitor, Smartphone } from "lucide-react";

export default function Projects() {
  const [macroView, setMacroView] = useState("desktop");
  const [cwpcView, setCwpcView] = useState("desktop");

  return (
    <section className="pt-32 min-h-screen bg-white relative overflow-hidden text-[#071A4A]">
      
      {/* VIBRANT FLOATING BACKGROUND EFFECTS */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-200 rounded-full filter blur-[150px] opacity-30 animate-float"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-indigo-200 rounded-full filter blur-[150px] opacity-30 animate-float2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-[#071A4A]">Projects</h1>
          <p className="mt-6 text-gray-600 max-w-3xl">
            A showcase of completed systems, ongoing developments, and upcoming
            digital solutions focused on automation, business improvement, and
            modern user experiences.
          </p>
        </div>

        {/* COMPLETED PROJECTS */}
        <h2 className="text-[#071A4A] tracking-[5px] text-sm font-bold mb-8 uppercase">
          Completed Projects
        </h2>

        {/* MACRO WIRING */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl overflow-hidden mb-16 shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10">
              <span className="text-xs tracking-widest text-[#071A4A] font-semibold">
                COMPLETED • MAY 2026
              </span>
              <h2 className="text-3xl font-bold mt-5">Macro Wiring Technologies Co. Inc.</h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                A corporate website transformation project that converted a
                static landing page into a dynamic business platform.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Laravel", "MySQL", "Tailwind CSS", "Bluehost", "Responsive Design"].map(item => (
                  <span key={item} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 bg-white">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href="https://www.macrowiring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-5 py-3 rounded-lg bg-[#071A4A] text-white font-semibold hover:bg-blue-900 transition-colors"
              >
                Visit Website <ExternalLink size={18}/>
              </a>
            </div>

            <div className="bg-gray-50/50 p-8 flex flex-col">
              <div className="flex gap-3 mb-5">
                <button
                  onClick={() => setMacroView("desktop")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                    macroView === "desktop" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"
                  }`}
                >
                  <Monitor size={16}/> Desktop
                </button>
                <button
                  onClick={() => setMacroView("mobile")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                    macroView === "mobile" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"
                  }`}
                >
                  <Smartphone size={16}/> Mobile
                </button>
              </div>
              <div className="h-[400px] w-full relative overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                <img
                  src={macroView === "desktop" ? "/images/desktopmacro.png" : "/images/mobilemacro.png"}
                  className="w-full h-full object-contain bg-white"
                  alt="Macro Wiring Preview"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CURRENT PROJECT */}
        <h2 className="text-[#071A4A] tracking-[5px] text-sm font-bold mb-8 uppercase">
          Current Development
        </h2>

        <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl overflow-hidden mb-16 shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10">
              <span className="text-xs tracking-widest text-[#071A4A] font-semibold">IN DEVELOPMENT</span>
              <h2 className="text-3xl font-bold mt-5">Cavite West Point College SIS Website</h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                A complete Student Information System and institutional website solution currently being developed.
              </p>
              <div className="mt-6 space-y-3 text-gray-600">
                <p>• Public Website & CMS</p>
                <p>• Online Admission System</p>
                <p>• Student & Faculty Portal</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                {["React", "Node.js", "TypeScript", "Firebase", "Cloud"].map(item => (
                  <span key={item} className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50/50 p-8 flex flex-col">
              <div className="flex gap-3 mb-5">
                <button
                  onClick={() => setCwpcView("desktop")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                    cwpcView === "desktop" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"
                  }`}
                >
                  <Monitor size={16}/> Desktop
                </button>
                <button
                  onClick={() => setCwpcView("mobile")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                    cwpcView === "mobile" ? "border-[#071A4A] text-[#071A4A] bg-white" : "border-gray-300 text-gray-500"
                  }`}
                >
                  <Smartphone size={16}/> Mobile
                </button>
              </div>
              <div className="h-[400px] w-full relative overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                <img
                  src={cwpcView === "desktop" ? "/images/desktopcwpc.png" : "/images/mobilecwpc.png"}
                  className="w-full h-full object-contain bg-white"
                  alt="Project Preview"
                />
              </div>
            </div>
          </div>
        </div>

        {/* UPCOMING */}
        <h2 className="text-[#071A4A] tracking-[5px] text-sm font-bold mb-8 uppercase">Upcoming Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 pb-20">
          <ProjectCard
            title="MChat Communication System"
            description="A secure internal communication platform featuring real-time messaging and administrative monitoring."
            technologies={["Laravel", "React", "MySQL", "WebSockets"]}
          />
          <ProjectCard
            title="Future Digital Solutions"
            description="Additional upcoming systems focused on automation, business intelligence, and customized software."
            technologies={["Web Development", "Cloud", "Automation"]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, technologies }) {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
      <span className="text-[#071A4A] text-sm tracking-widest font-semibold">UPCOMING PROJECT</span>
      <h3 className="text-2xl font-bold mt-5 text-[#071A4A]">{title}</h3>
      <p className="mt-4 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-3 mt-6">
        {technologies.map(item => (
          <span key={item} className="px-3 py-2 border border-gray-200 bg-white rounded-full text-xs text-gray-600">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { ExternalLink, X } from "lucide-react";

const teamMembers = [
  {
    name: "Eron",
    role: "Full Stack Developer",
    experience: "8 years of experience in IT.",
    facebook: "https://www.facebook.com/estoresaaron013",
    portfolio: "#",
    image: "/images/Eron.jpg",
    skills: ["Laravel", "React", "Node.js", "MySQL"]
  },
  {
    name: "Drex",
    role: "Front-End Developer",
    experience: "2 years of experience in IT.",
    facebook: "https://www.facebook.com/deysqui",
    portfolio: "https://drex-portfolio.vercel.app/",
    image: "/images/Drex.jpg",
    skills: ["React", "TypeScript", "Tailwind", "Next.js"]
  },
  {
    name: "Val",
    role: "Front-End Developer",
    experience: "2 years of experience in IT.",
    facebook: "https://www.facebook.com/paulunicus/",
    portfolio: "https://my-portfolio-eight-coral-j4512g2pfn.vercel.app/",
    image: "/images/Val.jpg",
    skills: ["React", "JavaScript", "HTML/CSS", "Bootstrap"]
  },
  {
    name: "Ciara",
    role: "Graphic Layout Designer",
    experience: "2 years of experience in design.",
    facebook: "https://www.facebook.com/linsydee",
    portfolio: "#",
    image: "/images/Ciara.jpg",
    skills: ["Figma", "Canva", "CapCut", "Adobe Suite"]
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      
      {/* VIBRANT FLOATING BACKGROUND EFFECTS */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-300 rounded-full filter blur-[120px] opacity-30 animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-300 rounded-full filter blur-[120px] opacity-30 animate-float2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#071A4A]">Meet the Team</h1>
          <p className="mt-6 text-gray-600">The creative minds and technical experts behind Liknayan Tech Solutions.</p>
        </div>

        {/* Existing Grid Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl hover:border-[#071A4A] transition-all hover:shadow-lg flex flex-col items-center cursor-pointer"
            >
              <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#071A4A]">{member.name}</h3>
              <p className="text-[#071A4A] font-bold text-sm uppercase tracking-wider mt-1">{member.role}</p>
              <p className="text-gray-600 text-sm mt-4 text-center">{member.experience}</p>

              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-[10px] bg-gray-100 text-[#071A4A] px-3 py-1 rounded-full font-bold uppercase">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#071A4A]"><FaFacebookF size={20} /></a>
                {member.portfolio !== "#" && <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#071A4A]"><ExternalLink size={20} /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Overlay */}
      {selectedMember && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-300">
          <button onClick={() => setSelectedMember(null)} className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <X size={30} />
          </button>
          
          <div className="max-w-2xl text-center">
            <img src={selectedMember.image} className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-[#071A4A] shadow-xl" />
            <h2 className="text-6xl font-bold text-[#071A4A] mt-8">{selectedMember.name}</h2>
            <p className="text-2xl font-bold text-[#071A4A]/80 uppercase mt-2">{selectedMember.role}</p>
            <p className="text-gray-600 mt-6 text-xl">{selectedMember.experience}</p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              {selectedMember.skills.map((skill) => (
                <span key={skill} className="bg-[#071A4A] text-white px-8 py-3 rounded-full font-bold uppercase shadow-lg">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
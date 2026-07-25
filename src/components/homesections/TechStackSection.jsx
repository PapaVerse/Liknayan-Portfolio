import { motion } from "framer-motion";
import { Sparkles, Globe, Video } from "lucide-react";

export default function TechStackSection() {
  const techStack = [
    // Frontend
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Blade", icon: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Alpine.js", icon: "https://api.iconify.design/logos:alpinejs-icon.svg" },

    // Backend
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Resend", icon: "https://api.iconify.design/simple-icons:resend.svg?color=%23000000" },
    { name: "EmailJS", icon: "https://api.iconify.design/simple-icons:mailgun.svg?color=%23EA4335" },

    // Tools & DevOps
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    { 
      name: "Bluehost", 
      customFallback: <Globe size={20} className="text-[#005595]" />,
      icon: "https://www.vectorlogo.zone/logos/bluehost/bluehost-icon.svg" 
    },
    { name: "phpMyAdmin", icon: "https://www.vectorlogo.zone/logos/phpmyadmin/phpmyadmin-icon.svg" },
    { name: "Microsoft Office", icon: "https://api.iconify.design/simple-icons:microsoftoffice.svg?color=%23D83B01" },
    { name: "Google Workspace", icon: "https://api.iconify.design/logos:google-workspace.svg" },

    // Creative, Design & Docs
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { 
      name: "Capcut", 
      customFallback: <Video size={20} className="text-black" />,
      icon: "https://www.vectorlogo.zone/logos/capcut/capcut-icon.svg" 
    },
  ];

  const marqueeItems = [...techStack, ...techStack];

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100 text-[#071A4A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Expertise & Capabilities
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Technologies & Tools We Use</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We leverage a modern, robust stack of frameworks, databases, and creative tools to engineer high-performing digital solutions.
          </p>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 whitespace-nowrap shrink-0 py-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-5 py-3 bg-white border border-gray-200/80 rounded-2xl shadow-sm text-sm font-bold text-[#071A4A] hover:border-blue-300 hover:shadow-md transition-all shrink-0"
            >
              {tech.customFallback ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-6 h-6 object-contain" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }} 
                  />
                  <div className="w-6 h-6 items-center justify-center hidden">
                    {tech.customFallback}
                  </div>
                </div>
              ) : (
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-6 h-6 object-contain" 
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
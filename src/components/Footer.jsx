import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#071A4A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>

            <div className="flex items-center gap-3">

              <div className="bg-white rounded-lg p-2">
                <img
                  src="/LIKNAYAN.png"
                  alt="Liknayan Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Liknayan Tech Solutions
                </h2>

                <p className="text-blue-200 text-sm">
                  We Build Solutions
                </p>
              </div>

            </div>

            <p className="mt-5 text-gray-300 leading-7">
              We Likha. We Innovate. We Build Solutions.
              Creating modern software solutions that empower businesses.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              {links.map((link) => (

                <NavLink
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-blue-400 transition"
                >
                  {link.name}
                </NavLink>

              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@liknayan.tech</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+63 999-470-2919</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Philippines</span>
              </div>

            </div>

            {/* Socials */}

            <div className="flex gap-4 mt-6">

            <a
                href="https://www.facebook.com/profile.php?id=61589032422619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition duration-300"
                aria-label="Facebook"
            >
                <FaFacebookF size={18} />
            </a>

            </div>

          </div>

        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Liknayan Tech Solutions. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
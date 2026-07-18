import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/LIKNAYAN.png"
            alt="Liknayan Logo"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-lg md:text-xl font-bold text-[#071A4A]">
              Liknayan Tech Solutions
            </h1>

            <p className="text-xs md:text-sm text-gray-500">
              We Build Solutions
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-[#071A4A]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className="text-[#071A4A]" />
          ) : (
            <Menu size={28} className="text-[#071A4A]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col py-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-4 transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-[#071A4A] hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
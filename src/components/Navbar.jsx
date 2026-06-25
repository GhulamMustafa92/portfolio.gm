import { useState } from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [active, setActive] = useState("home"); // default active = home

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 pt-5 z-1000">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 bg-black border shadow-[0_0_10px_0_#1447e6] rounded-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center text-2xl  font-bold space-x-1">
            <span className="rotate-parent">
            <img src={logo} className="w-10 h-10 rotate rounded-full" alt="Logo" />
            </span>
            <span className="text-white">Port</span>
            <span className="text-blue-700">Folio</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-4 font-medium">
            <li
              className={`cursor-pointer px-4 py-2 rounded ${
                active === "home" ? "bg-blue-600 text-white" : "text-blue-600"
              }`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded ${
                active === "work" ? "bg-blue-600 text-white" : "text-blue-600"
              }`}
              onClick={() => scrollToSection("work")}
            >
              About
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded ${
                active === "services"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => scrollToSection("services")}
            >
              Projects
            </li>
          </ul>

          {/* Resume Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              Resume
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

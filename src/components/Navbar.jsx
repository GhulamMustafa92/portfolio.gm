import { useState, useEffect } from "react";
import TechText from './TechText'; // Make sure path is correct based on your folder structure

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background blur on scroll for professional look
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setIsOpen(false); // Close mobile menu on click
    }
  };

  const itemClass = (id) =>
    `relative cursor-pointer px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
      active === id
        ? "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-[0_4px_20px_-4px_#06b6d4]"
        : "text-gray-400 hover:text-white hover:bg-white/10"
    }`;

  return (
    <nav className={`w-full fixed top-0 left-0 pt-4 px-4 z-[1000] transition-all duration-300 ${scrolled ? "pt-2" : "pt-4"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-2xl border border-blue-500/20 shadow-[0_10px_30px_-10px_rgba(20,71,230,0.3)] rounded-full transition-all duration-300">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / TechText Section */}
          <div className="flex items-center cursor-pointer  group h-10 w-40 overflow-hidden" onClick={() => scrollToSection("home")}>
<TechText
  text="PortFolio"
  fontWeight={700}
  fontSize={150}
  reveal="letter"
  dashLength={4}
  dashGap={2}
  specks={6}
  intro="metrics"
  introDuration={2.8}
  clickKick
  letterSpacing={-0.03}
  accentColor="#ffffff"
  reach={200}
  softness={0.7}
  lineStyle="solid"
  strokeWidth={1.25}
  speed={1}
  bounce={0.75}
  selection
  color="#3317ea"
  align="center"
  draggable
  sweep
/>        
      </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-cyan-500/20 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_24px_-10px_#06b6d4]">
            <li className={itemClass("home")} onClick={() => scrollToSection("home")}>
              Home
            </li>
            <li className={itemClass("work")} onClick={() => scrollToSection("work")}>
              About
            </li>
            <li className={itemClass("services")} onClick={() => scrollToSection("services")}>
              Projects
            </li>
          </ul>

          {/* Resume & Hire Me CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-300 group-hover:scale-105"></span>
              <span className="relative px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300 group-hover:bg-opacity-0 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <span>Resume</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-xl bg-blue-950/30 border border-blue-500/20 hover:bg-blue-900/40 transition-all focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-2xl border border-blue-500/30 rounded-2xl p-5 shadow-[0_10px_40px_rgba(20,71,230,0.4)] transition-all animate-fadeIn">
          <ul className="flex flex-col space-y-3 font-medium text-center">
            <li className={itemClass("home")} onClick={() => scrollToSection("home")}>
              Home
            </li>
            <li className={itemClass("work")} onClick={() => scrollToSection("work")}>
              About
            </li>
            <li className={itemClass("services")} onClick={() => scrollToSection("services")}>
              Projects
            </li>
            <div className="pt-2">
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Download Resume
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
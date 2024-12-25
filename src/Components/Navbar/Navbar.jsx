import { useState } from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 text-gray-500">
      {/* Logo */}
      <div className="flex items-center">
        <a
          href="#"
          className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 bg-clip-text text-transparent"
        >
          Syed Rizwan
        </a>
      </div>

      {/* Hamburger Menu - Positioned Absolutely */}
      <div className="block lg:hidden absolute top-4 right-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none transition-transform duration-200"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 right-4 lg:right-0 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg shadow-lg lg:shadow-none min-w-[200px] lg:min-w-0 z-50`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-4 space-y-2 lg:space-y-0 list-none">
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">About</a>
          </li>
          <li>
            <a href="#tech-stack" onClick={(e) => scrollToSection(e, 'tech-stack')} className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Tech Stack</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="https://github.com/Syedrizwan23"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 w-6 h-6"
        >
          <img src={github} alt="GitHub Profile" className="w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-rizwan-ghani/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6"
        >
          <img src={linkedin} alt="LinkedIn Profile" className="w-full h-full" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
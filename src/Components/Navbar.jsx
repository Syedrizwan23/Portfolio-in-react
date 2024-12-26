import { useState } from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 text-gray-500">
      <div className="flex items-center">
        <a
          href="#"
          className="text-xl md:text-4xl font-bold bg-gradient-to-r from-black  via-rose-600 to-yellow-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
        >
          Syed Rizwan
        </a>
      </div>

      <div className="block lg:hidden absolute top-4 right-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none transition-transform duration-200 hover:scale-110"
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

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:relative top-16 lg:top-0 right-4 lg:right-0 bg-white lg:bg-transparent p-4 lg:p-4 rounded-[30px] shadow-lg lg:shadow-slate-200 min-w-[200px] lg:min-w-0 z-50`}
      >
        <ul className="flex flex-col lg:flex-row lg:gap-4 space-y-2 lg:space-y-0 list-none">
          <Link to='/' onClick={handleNavClick}><li>
            <a href="#home" className="block text-gray-600 hover:text-gray-900 hover:translate-y-[-2px] text-sm sm:text-base transition-all duration-300 ease-in-out">Home</a>
          </li></Link>
          <Link to='/about' onClick={handleNavClick}><li>
            <a href="#about" className="block text-gray-600 hover:text-gray-900 hover:translate-y-[-2px] text-sm sm:text-base transition-all duration-300 ease-in-out">About</a>
          </li></Link>
          <Link to='/tech' onClick={handleNavClick}><li>
            <a href="#tech-stack" className="block text-gray-600 hover:text-gray-900 hover:translate-y-[-2px] text-sm sm:text-base transition-all duration-300 ease-in-out">Tech Stack</a>
          </li></Link>
          <Link to='/projects' onClick={handleNavClick}><li>
            <a href="#projects" className="block text-gray-600 hover:text-gray-900 hover:translate-y-[-2px] text-sm sm:text-base transition-all duration-300 ease-in-out">Projects</a>
          </li></Link>
          <Link to='/contact' onClick={handleNavClick}><li>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 hover:translate-y-[-2px] text-sm sm:text-base transition-all duration-300 ease-in-out">Contact</a>
          </li></Link>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <a
          href="https://github.com/Syedrizwan23"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-6 w-6 h-6 hover:opacity-80 transition-opacity duration-300 hover:scale-110"
        >
          <img src={github} alt="GitHub Profile" className="w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-rizwan-ghani/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 hover:opacity-80 transition-opacity duration-300 hover:scale-110"
        >
          <img src={linkedin} alt="LinkedIn Profile" className="w-full h-full" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
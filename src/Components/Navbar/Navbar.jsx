import { useState } from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-evenly  text-gray-500">
      {/* Logo */}
      <div className="flex items-center lg:flex-1">
        <a
          href="#"
          className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 bg-clip-text text-transparent"
        >
          Syed Rizwan
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
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
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:gap-4 list-none`}
      >
        <li className="cursor-pointer hover:text-gray-800">Home</li>
        <li className="cursor-pointer hover:text-gray-800">About</li>
        <li className="cursor-pointer hover:text-gray-800">Tech Stack</li>
        <li className="cursor-pointer hover:text-gray-800">Projects</li>
        <li className="cursor-pointer hover:text-gray-800">Contact</li>
      </ul>

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

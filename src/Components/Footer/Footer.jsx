import { Github, Linkedin } from 'lucide-react';
import Profile from '../../Assets/Profile.png';

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-8 space-y-6 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2">
            
            <img src={Profile} alt="Profile" className="w-12 h-12 rounded-full" />
            <span className="text-purple-600 text-xl font-semibold">{'Syed Rizwan'}</span>
            <span className="text-xl font-semibold">{"Front-End Developer"}</span>
          </div>

          {/* Contact and Social Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <span className="text-gray-600 text-sm sm:text-base">+92 313 5544049</span>
              <span className="text-gray-600 text-sm sm:text-base">syedrizwanghani@gmail.com</span>
            </div> */}
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Syedrizwan23" target='_blank' className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/syed-rizwan-ghani/" target='_blank' className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col-reverse md:flex-row justify-between items-center space-y-6 space-y-reverse md:space-y-0">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">About</a>
            <a href="#tech-stack" onClick={(e) => scrollToSection(e, 'tech-stack')} className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Tech Stack</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-600 hover:text-gray-900 text-sm sm:text-base transition-colors">Contact</a>
          </nav>

          {/* Credit Text */}
          <div className="text-center md:text-right text-sm text-gray-600">
            Designed and built by{' '}
            <span className="text-purple-600">Syed Rizwan</span> with Love ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
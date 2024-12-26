import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

import Eduford from '../assets/project/Eduford.png';
  import Edusity from '../assets/project/Edusity.png';
import Gemini from '../assets/project/Gemini.png';
import Homemaster from '../assets/project/Homemaster.png';
import Prime from '../assets/project/Prime.png';
import Sushiman from '../assets/project/Sushiman.png';

const ProjectCard = ({ image, title, description, techStack, href }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-fill" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1">Tech stack :</p>
        <p className="text-sm text-gray-700">{techStack}</p>
      </div>
      <div className="flex space-x-4">
        
        <a href= {href} target='_blank' rel='noopener noreferrer' className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
        <FaGithub className="mr-2" /> 
          <span>View Code</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      image: Edusity,
      title: "Edusity University",
      description: "This is sample project for Edusity University. In this project we have used React, Css and make it responsive for all devices. Created multiple sections for  About, Program, Testimonial, students and contact us",
      techStack: " React, Css",
      href: "https://github.com/Syedrizwan23/Edusity.git" ,
    },
   
    {
      image: Gemini,
      title: "Gemini clone ",
      description: "This is sample project for Gemini clone. In this project we have used React js, CSS, and make it responsive for all devices. Created multiple sections as Sidebar, Header, Footer, and Main Content",
      techStack: "React, CSS",
      href:"https://github.com/Syedrizwan23/Gemini.git",
    },
    {
        image: Homemaster,
        title: "HomeMaster Cleaning Services",
        description: "This is sample project for HomeMaster Cleaning Services. In this project we have used HTML, CSS, JavaScript and make it responsive for all devices. Created multiple sections Home, About, Services, Blog contact us",
        techStack: "HTML, Tailwind Css",
        href:"https://github.com/Syedrizwan23/Home-Cleaning-Master.git"
      },
      {
        image: Prime,
        title: "Prime Energy Drink",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML, CSS, JavaScript,",
        href:"https://github.com/Syedrizwan23/Prime-Energy.git"
      },
      {
        image: Sushiman,
        title: "Sushiman Restaurant",
        description: "This is sample project for Sushiman Restaurant. In this project we have used HTML, CSS, JavaScript and make it responsive for all devices. Created multiple sections Home, About, Menu, Blog contact us",
        techStack: "HTML, CSS, JavaScript,",
        href:"https://github.com/Syedrizwan23/ShushiMan.git"

      },
      {
        image: Eduford,
        title: "Eduford University",
        description: "This is sample project for Eduford University. In this project we have used HTML, CSS, JavaScript and make it responsive for all devices. Created multiple sections Home, About, Courses, Blog contact us",
        techStack: "HTML,CSS, ",
        href:"https://github.com/Syedrizwan23/University.git"
      },
  ];

  return (
    <div id='projects' className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Projects</h2>
          <p className="text-gray-600">Things I&apos;ve built so far</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };

export default Projects;
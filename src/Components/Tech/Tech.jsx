import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";

const Tech = () => {
    const technologies = [
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "JavaScript", icon: Js },
      { name: "React", icon: react },
      { name: "Tailwind", icon: tailwind },
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Bootstrap", icon: bootstrap }
    ];
  
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700 mb-4">
            Technologies
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-bold">
            Some of the technologies I have worked with:
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center justify-center p-4">
              <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Tech;
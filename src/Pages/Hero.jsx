import { useEffect } from 'react';
import profile from '../assets/Profile.png'
import About from "./About";


import Projects from "./Projects";
import Tech from "./Tech";
import Contact from "./Contact";


const Hero = () => {
  useEffect(() => {
    const image = document.querySelector('.profile-image');
    image.style.animation = 'float 3s ease-in-out infinite';
  }, []);

  return (
    <>
    <div id="home" className="grid grid-cols-1 md:grid-cols-2 mt-[100px] w-full h-[350px]">
      <div className="flex flex-col justify-center p-4 md:p-0 md:w-[636px] h-full order-2 md:order-1"> 
        <h1 className="text-lg md:text-4xl font-bold text-slate-700">Hi👋,</h1>
        <p className="text-lg md:text-4xl font-bold text-slate-700">My name is</p>
        <p className="text-lg md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-yellow-500 bg-clip-text text-transparent">Syed Rizwan Ghani</p>
        <p className="text-lg md:text-4xl font-bold text-slate-700">Transforming Ideas into Interactive Code</p>
      </div>
      <div className="flex justify-center items-center p-4 md:p-0 h-full order-1 md:order-2"> 
        <img
          src={profile}
          alt=""
          className="profile-image rounded-full border-solid border-8 
          h-[200px] md:h-[340px] 
          w-[200px] md:w-[340px] 
          border-t-transparent border-l-transparent 
          border-r-transparent border-b-transparent bg-gradient-to-br from-blue-500 to-purple-500
          hover:scale-105 transition-transform duration-300"
        />
        <style>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
            
        `}</style>
      </div>
    </div>
    <About/>
    <Tech/>
    <Projects/>
    <Contact/>
    </>
  );
};

export default Hero;

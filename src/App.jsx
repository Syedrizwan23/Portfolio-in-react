import About from "./Pages/About";
import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import Tech from "./Pages/Tech";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from './Pages/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      
      <Footer />
    </div>
  );
};

export default App;

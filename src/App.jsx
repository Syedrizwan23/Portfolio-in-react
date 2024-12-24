import About from "./Components/About/About"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Tech from "./Components/Tech/Tech"
import Contact from "./Components/Contact/Contact"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

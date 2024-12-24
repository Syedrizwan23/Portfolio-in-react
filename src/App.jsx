import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Tech from "./Components/Tech/Tech"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
    </div>
  )
}

export default App

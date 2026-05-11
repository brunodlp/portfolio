import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/aboutme";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#111827] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

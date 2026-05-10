import { useEffect, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      const sections = document.querySelectorAll("section");

      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-800 text-white bg-[#020817]/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto py-5 flex justify-end items-center">
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoMdClose className="text-3xl mr-4" />
          ) : (
            <IoIosMenu className="text-3xl mr-4" />
          )}
        </button>
        <ul
          className={`
    flex flex-col md:flex-row gap-6 text-sm
    absolute md:static top-16 left-0 w-full md:w-auto
    bg-[#020817]/95 md:bg-transparent
    backdrop-blur-md md:backdrop-blur-none
    p-6 md:p-0 transition-all duration-300

    ${menuOpen ? "flex" : "hidden md:flex"}
  `}
        >
          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "home"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Inicio{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "home" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "about"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Sobre mí{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "about" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "experience"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Experiencia{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "experience" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "education"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Educación{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "education" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "skills"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Habilidades{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "skills" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "projects"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Proyectos{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "projects" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium

${
  activeSection === "contact"
    ? "text-cyan-300 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
    : "text-slate-300 hover:text-cyan-300 hover:bg-white/5"
}
`}
            >
              Contacto{" "}
              <span
                className={`absolute left-1/2 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300

      ${activeSection === "contact" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

import { useEffect, useState } from "react";
function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-800 text-white bg-[#020817]/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto py-5 flex justify-end items-center">
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="#home"
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

      ${activeSection === "proyects" ? "w-3/4 left-[12%]" : "w-0"}
      `}
              />
            </a>
          </li>
          <li>
            <a
              href="#contact"
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

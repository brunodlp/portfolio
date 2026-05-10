import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 flex flex-col px-4 md:px-10 py-10 items-center md:items-start md:m-10"
    >
      <h1 className="text-5xl m-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-clip-text text-transparent font-mono font-bold">
        Experiencia
      </h1>
      <div className="text-gray-200 font-sans border border-gray-700 rounded-xl m-5 p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46]">
        <h2 className="text-xl font-bold">Ayudante de catedra - Web 2</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <h3 className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            UNICEN - Tandil
          </h3>
          <h3 className="flex items-center gap-2 text-gray-400">
            <FaCalendarAlt className="text-blue-400" />
            Agosto 2024 - Diciembre 2024
          </h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaChevronRight className="text-5xl md:text-xl" />
            Brinde soporte a alumnos, corrigiendo trabajos practicos y examenes
            y aclarando dudas sobre temas de Backend.
          </li>
          <li className="flex items-center gap-3">
            <FaChevronRight /> Herramientas: PHP - MySQL - Git
          </li>
          <li className="flex items-center gap-3">
            <FaChevronRight />
            Conceptos claves: Ruteo, API REST, Seguridad.
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Experience;

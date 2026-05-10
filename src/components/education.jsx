import { FaGraduationCap } from "react-icons/fa";
function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 flex flex-col px-4 md:px-10 py-10 items-center md:items-start md:m-10"
    >
      <h1 className="text-5xl m-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-clip-text text-transparent font-mono font-bold">
        Educación
      </h1>
      <div className="text-gray-200 font-sans border border-gray-700 rounded-xl m-5 p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46]">
        <h2 className="text-xl font-bold">
          Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas
        </h2>
        <div className="flex gap-10 flex-col md:flex-row">
          <h3 className="flex items-center gap-2 text-[#6f6fff] font-bold">
            <FaGraduationCap className="text-blue-400 text-5xl md:text-xl" />
            Universidad Nacional del Centro de la Provincia de Buenos Aires -
            Tandil
          </h3>
          <h3 className="flex items-center gap-2 text-gray-400">
            Marzo 2023 - Actualidad
          </h3>
        </div>
        <p>
          He finalizado todas las cursadas, adeudando finales y Practicas
          Profesionales para graduarme.
        </p>
      </div>
    </section>
  );
}
export default Education;

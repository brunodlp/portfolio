import { FaJava, FaPhp, FaHtml5, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 flex flex-col px-4 md:px-10 py-10 items-center md:items-start md:m-10"
    >
      <h1 className="text-5xl m-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-clip-text text-transparent font-mono font-bold">
        Habilidades
      </h1>
      <div className="grid md:grid-cols-2 gap-6 m-5 md:w-full">
        <div className="text-gray-200 flex flex-col items-center  font-sans border border-gray-700 rounded-xl p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20  duration-300 hover:translate-y-[-6px]">
          <h2 className="font-bold text-cyan-300 ">Backend</h2>
          <ul className="grid grid-cols-2 gap-8 md:flex md:flex-wrap">
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              {" "}
              <FaJava className="text-red-500 text-4xl" />
              Java
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              {" "}
              <FaPhp className="text-indigo-400 text-4xl" />
              PHP
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              {" "}
              <SiSpringboot className="text-green-500 text-4xl" />
              Spring Boot
            </li>
          </ul>
        </div>
        <div className="text-gray-200 flex flex-col items-center font-sans border border-gray-700 rounded-xl p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20  duration-300 hover:translate-y-[-6px]">
          <h2 className="font-bold text-cyan-300">Frontend</h2>
          <ul className="grid grid-cols-2 gap-8 md:flex md:flex-wrap">
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <FaHtml5 className="text-orange-500 text-4xl" />
              HTML5
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <IoLogoCss3 className="text-blue-500 text-4xl" />
              CSS3
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiJavascript className="text-yellow-400 text-4xl" />
              Javascript
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <FaReact className="text-cyan-400 text-4xl" />
              React
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiTailwindcss className="text-sky-400 text-4xl" />
              Tailwind
            </li>
          </ul>
        </div>
        <div className="text-gray-200 flex flex-col items-center font-sans border border-gray-700 rounded-xl p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20  duration-300 hover:translate-y-[-6px]">
          <h2 className="font-bold text-cyan-300">Bases de Datos</h2>
          <ul className="grid grid-cols-1 gap-8 md:flex md:flex-wrap">
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <GrMysql className="text-blue-400 text-4xl" />
              MySQL
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiPostgresql className="text-[#336791] text-4xl" />
              PostgreSQL
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiMongodb className="text-[#47A248] text-4xl" />
              MongoDB
            </li>
          </ul>
        </div>
        <div className="text-gray-200 flex flex-col items-center font-sans border border-gray-700 rounded-xl p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20  duration-300 hover:translate-y-[-6px]">
          <h2 className="font-bold text-cyan-300">Herramientas</h2>
          <ul className="grid grid-cols-2 gap-8 md:flex md:flex-wrap">
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <FaGitAlt className="text-orange-500 text-4xl" />
              Git
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiGithub className="text-black bg-white rounded-full text-4xl " />
              GitHub
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiPostman className="text-orange-500 bg-white rounded-full text-4xl " />
              Postman
            </li>
            <li className="flex flex-col items-center border border-transparent hover:bg-[#2a2a9c89] rounded-xl duration-300 p-6 hover:translate-y-[-3px]">
              <SiDocker className="text-sky-500 text-4xl " />
              Docker
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Skills;

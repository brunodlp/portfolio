import {
  FaChevronCircleRight,
  FaGithub,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import imgMonopatin from "../images/monopatines.jpg";
import imgAldesal from "../images/aldesalgames.png";
import imgEcommerce from "../images/jybcelulares.png";
import imgPortfolio from "../images/portfolio.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-20 flex flex-col px-4 md:px-10 py-10 md:py-0 items-center md:items-start md:m-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 60 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.2 }}
    >
      <h1 className="text-5xl m-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-clip-text text-transparent font-mono font-bold">
        Proyectos
      </h1>
      <div className=" relative w-full">
        <button className=" swiper-button-prev-custom absolute md:-left-6 -left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition duration-300 flex items-center justify-center ">
          <FaChevronLeft />
        </button>
        <button className=" swiper-button-next-custom absolute md:-right-6 -right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition duration-300 flex items-center justify-center">
          <FaChevronRight />
        </button>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          className="w-full overflow-hidden min-h-[600px] md:min-h-[750px]"
        >
          <SwiperSlide>
            <div className=" text-gray-200 font-sans border border-gray-700 rounded-xl p-6 text-lg max-w-none h-full min-h-[700px] bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:translate-y-[-6px] grid md:grid-cols-2 gap-7 items-stretch overflow-hidden">
              {" "}
              <div className="flex flex-col justify-between h-full space-y-7">
                <h2 className="font-bold font-sans text-2xl">
                  Sistema de alquiler de monopatines electricos{" "}
                </h2>
                <div className="space-y-3 border border-gray-600 rounded-xl px-5 py-3 bg-gray-800">
                  <p>
                    Plataforma de alquiler de monopatines eléctricos
                    desarrollada bajo una arquitectura de microservicios
                    utilizando Java y Spring Boot.
                  </p>
                  <p>
                    Backend de servicios REST implementado bajo una arquitectura
                    de microservicios, desarrollado con Java y Spring Boot.
                  </p>
                </div>

                <ul>
                  <h3>Servicios principales</h3>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900" /> Gestión
                    de usuarios y autenticación JWT
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900" /> API REST
                    para control de paradas y disponibilidad
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900" /> Monitoreo
                    de monopatines
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900" />{" "}
                    Facturación y tarifas
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900" /> Chatbot
                    IA integrado mediante LLM
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-3">
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    Java
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    Spring Boot
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    MySQL
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    MongoDB
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    API Rest
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    Docker
                  </li>
                </ul>

                <a
                  href="https://github.com/juann0278/Integrador4"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300"
                >
                  <FaGithub className="text-white" />
                  Repositorio
                </a>
              </div>
              <div className="  h-full bg-[#1d2942] relative rounded-2xl md:p-4 flex items-center overflow-hidden justify-center">
                <img
                  src={imgMonopatin}
                  alt=""
                  className="md:opacity-50 hover:opacity-100 z-10 w-full h-auto rounded-xl shadow-2xl border-gray-700 hover:scale-[1.02] transition duration-500 group-hover:scale-105 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" text-gray-200 font-sans border border-gray-700 rounded-xl p-6 text-lg max-w-none h-full min-h-[700px] bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:translate-y-[-6px] grid md:grid-cols-2 gap-7 items-stretch overflow-hidden">
              {" "}
              <div className="flex flex-col justify-between h-full space-y-7">
                <h2 className="font-bold font-sans text-2xl">Aldesal Games </h2>
                <div className="space-y-3 border border-gray-600 rounded-xl px-5 py-3 bg-gray-800">
                  <p>
                    Plataforma web interactiva inspirada en los clásicos juegos
                    Flash, orientada a ofrecer una experiencia dinámica y
                    nostálgica para usuarios casuales.
                  </p>

                  <p>
                    Desarrollada utilizando HTML, CSS y JavaScript con un
                    enfoque basado en Programación Orientada a Objetos (POO).
                  </p>

                  <p>
                    Destacada por su interfaz moderna, animaciones CSS, efectos
                    visuales y experiencia de usuario interactiva.
                  </p>
                </div>

                <ul>
                  <h3>Servicios principales</h3>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Interfaz amigable avanzada con una excelente experiencia de
                    usuario
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Home interactivo basado en paginas de videojuegos
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Sección de logueo y registro
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Videojuego integrado: Star Clash: Battlefront. Versión
                    mejorada del clasico 4 en línea
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-3">
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    HTML
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    JavaScript
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    CSS
                  </li>
                </ul>
                <div className="flex gap-8">
                  <a
                    href="https://github.com/brunodlp/aldesal-games"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <FaGithub className="text-white" />
                    Repositorio
                  </a>
                  <a
                    href="https://lukasaldivia.github.io/aldesal-games/TP3/EntregaFinal/"
                    target="_blank"
                    className=" flex items-center gap-2 text-gray-300"
                  >
                    <FiExternalLink className="text-white" />
                    Demo
                  </a>
                </div>
              </div>
              <div className="  h-full bg-[#1d2942] relative rounded-2xl md:p-4 flex items-center overflow-hidden justify-center">
                <img
                  src={imgAldesal}
                  alt=""
                  className="z-10 md:opacity-50 hover:opacity-100 w-full h-auto rounded-xl shadow-2xl border-gray-700 hover:scale-[1.02] transition duration-500 group-hover:scale-105 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" text-gray-200 font-sans border border-gray-700 rounded-xl p-6 text-lg max-w-none h-full min-h-[700px] bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:translate-y-[-6px] grid md:grid-cols-2 gap-7 items-stretch overflow-hidden">
              <div className="flex flex-col justify-between h-full space-y-7">
                <h2 className="font-bold font-sans text-2xl">
                  {" "}
                  Ecommerce de celulares - Server Side Rendering{" "}
                </h2>
                <div className="space-y-3 border border-gray-600 rounded-xl px-5 py-3 bg-gray-800">
                  <p>
                    Aplicación web dinámica desarrollada con PHP y MySQL
                    utilizando renderizado del lado del servidor (SSR).
                  </p>
                  <p>
                    Cuenta con un enfoque Modelo-Vista-Controlador (MVC),
                    destacandose la implementación de un enrutador (Router) y
                    API Rest
                  </p>
                </div>

                <ul>
                  <h3>Servicios principales</h3>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Sección de logueo y registro
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Acceso público y privado
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Listado y CRUD de items y categorias
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    API Rest - RESTful
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Manejo de codigos de error
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-3">
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    PHP
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    MySQL
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    API Rest
                  </li>
                </ul>
                <div className="flex gap-8">
                  <a
                    href="https://github.com/Jcambareri6/TPE-WEB2-ECOMMERCE"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <FaGithub className="text-white" /> Repositorio v1
                  </a>
                  <a
                    href="https://github.com/brunodlp/TPE3-WEB2-API"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <FaGithub className="text-white" />
                    Repositorio v2
                  </a>
                </div>
              </div>
              <div className="  h-full bg-[#1d2942] relative rounded-2xl md:p-4 flex items-center overflow-hidden justify-center">
                <img
                  src={imgEcommerce}
                  alt=""
                  className="md:opacity-50 hover:opacity-100 z-10 w-full h-auto rounded-xl shadow-2xl border-gray-700 hover:scale-[1.02] transition duration-500 group-hover:scale-105 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" text-gray-200 font-sans border border-gray-700 rounded-xl p-6 text-lg max-w-none h-full min-h-[700px] bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:translate-y-[-6px] grid md:grid-cols-2 gap-7 items-stretch overflow-hidden">
              {" "}
              <div className="flex flex-col justify-between h-full space-y-7">
                <h2 className="font-bold font-sans text-2xl">
                  Portfolio personal{" "}
                </h2>
                <div className="space-y-3 border border-gray-600 rounded-xl px-5 py-3 bg-gray-800">
                  <p>
                    Portfolio web personal desarrollado para presentar de manera
                    profesional mi perfil, experiencia, habilidades técnicas y
                    proyectos. Diseñado con una interfaz moderna, animaciones
                    dinámicas y un enfoque completamente responsivo orientado a
                    la experiencia de usuario.
                  </p>
                </div>

                <ul>
                  <h3>Caracteristicas destacables</h3>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Diseño responsivo
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Interfaz moderna con animaciones y efectos visuales
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Framer Motion
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />{" "}
                    Buena UX
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-3">
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    React.js
                  </li>
                  <li className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px]">
                    Tailwind CSS
                  </li>
                </ul>
                <div className="flex gap-8">
                  <a
                    href="https://github.com/brunodlp/portfolio"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <FaGithub className="text-white" /> Repositorio
                  </a>
                  <a
                    href="https://brunodelapenna.vercel.app/"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <FiExternalLink className="text-white" />
                    Demo
                  </a>
                </div>
              </div>
              <div className="  h-full bg-[#1d2942] relative rounded-2xl md:p-4 flex items-center overflow-hidden justify-center">
                <img
                  src={imgPortfolio}
                  alt=""
                  className="md:opacity-50 hover:opacity-100 z-10 w-full h-auto rounded-xl shadow-2xl border-gray-700 hover:scale-[1.02] transition duration-500 group-hover:scale-105 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  );
}
export default Projects;

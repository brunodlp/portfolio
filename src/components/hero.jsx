import pcBg from "../images/pc-bg.png";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.section
      id="home"
      className="scroll-mt-20 max-w-4x1 text-center min-h-screen flex flex-col text-white justify-center items-center text-center px-4 gap-4"
      style={{
        backgroundImage: `url(${pcBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 60 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/80 items-center "></div>
      <div className="relative z-10 max-w-4xl text-center text-white space-y-6">
        <p className="text-teal-500  mb-4 font-semibold tracking-wide">
          Hola, soy
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Bruno De la Penna
        </h1>
        <h2 className="text-4xl text-gray-200 font-sans font-semibold">
          Desarrollador Fullstack
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
          Desarrollador fullstack en formacion apasionado por la tecnologia y el
          desarrollo de soluciones escalables, dinámicas y eficientes.
        </p>
        <button className="px-6 py-3 m-5 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-black font-semibold hover:opacity-90 transition">
          <a href="/Bruno_DelaPenna_BackendJavaDeveloper.pdf" download>
            Descargar CV
          </a>
        </button>
      </div>
    </motion.section>
  );
}
export default Hero;

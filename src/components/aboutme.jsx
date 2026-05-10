import img from "../assets/Img_cv.jpeg";
function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 flex flex-col px-4 md:px-10 py-10 items-center md:items-start md:m-10"
    >
      <h1 className="text-5xl m-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-clip-text text-transparent font-mono font-bold">
        Sobre mí
      </h1>
      <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center m-5 ">
        <div className="text-gray-200 font-sans border border-gray-700 rounded-xl p-6 text-lg space-y-5 max-w-none h-full bg-[#242e46]">
          <p>
            Soy estudiante avanzado de la Tecnicatura Universitaria en
            Desarrollo de Aplicaciones Informaticas, perteneciente a la
            Universidad Nacional del Centro de la Provincia de Buenos Aires.
            Actualmente estoy en la etapa final de mi formación academica,
            adeudando solamente finales y las Practicas Profesionales
            Supervisadas para graduarme.
          </p>
          <p>
            Soy una persona proactiva, responsable y atento con los desafios que
            tenga por delante. Siempre estoy dispuesto a aprender conocimientos
            nuevos.
          </p>
        </div>
        <div className="bg-[#242e46] flex justify-center items-center border rounded-xl border-gray-700 hover:shadow-lg hover:shadow-blue-500/20  duration-300 hover:translate-y-[-6px] transition-all ease-out transform-gpu will-change-transform">
          <img
            src={img}
            alt="faceImage"
            className="w-80 h-80 object-cover rounded-full object-[50%_15%] scale-[0.85]"
          />
        </div>
      </div>
    </section>
  );
}
export default About;

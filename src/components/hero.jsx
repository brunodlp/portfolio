function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 max-w-4x1 text-center min-h-screen flex flex-col text-white justify-center items-center text-center px-4 gap-4"
    >
      <p className="text-teal-500 mb-4 font-bold">Hola, soy</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-400">
        Bruno De la Penna
      </h1>
      <h3 className="text-[50px] text-gray-300">Desarrollador Fullstack</h3>
      <p className="text-gray-300">
        Desarrollador fullstack en formacion apasionado por la tecnologia y el
        desarrollo de soluciones escalables, dinámicas y eficientes.
      </p>
      <button className="px-6 py-3 m-5 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-black font-semibold hover:opacity-90 transition">
        <a href="/public/bruno-delapenna-fullstack-cv.pdf" download>
          Descargar CV
        </a>
      </button>
    </section>
  );
}
export default Hero;

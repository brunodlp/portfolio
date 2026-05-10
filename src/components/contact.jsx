import { IoIosMail, IoIosMailOpen } from "react-icons/io";
import { MdOutlinePhone, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 flex flex-col px-4 md:px-5 py-5 md:pt-0 items-center space-y-6"
    >
      <h1 className="text-5xl m-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-clip-text text-transparent font-mono font-bold">
        Contacto
      </h1>
      <p className="text-gray-400 text-xl text-center">
        Actualmente disponible para nuevas oportunidades
      </p>

      <h2 className="text-3xl font-bold text-white font-mono mt-8">
        ¡Conectemos!
      </h2>
      <a
        href="mailto:bdelapenna@gmail.com"
        className="group flex items-center gap-1 hover:text-cyan-400 text-xl text-slate-300"
      >
        <div className="relative w-6 h-6">
          <IoIosMail className="absolute text-2xl transition duration-500 group-hover:opacity-0" />
          <IoIosMailOpen className="absolute text-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
        bdelapenna@gmail.com
      </a>
      <a
        href="https://wa.me/542983410156"
        target="_blank"
        className="group flex items-center gap-1 hover:text-cyan-400 text-xl text-slate-300"
      >
        <div className="relative w-6 h-6">
          <MdOutlinePhone className="absolute text-2xl transition duration-500 group-hover:opacity-0" />
          <MdOutlinePhoneInTalk className="absolute text-2xl opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
        +54 2983410156
      </a>
      <p className="flex gap-1 items-center text-xl text-slate-300 hover:text-cyan-400">
        <FaMapMarkerAlt />
        Tandil, Buenos Aires, Argentina
      </p>
      <div className="flex gap-3 text-4xl text-slate-600">
        <a href="https://linkedin.com/in/brunodelapenna" target="_blank">
          {" "}
          <FaLinkedin className="hover:text-slate-300" />
        </a>
        <a href="https://github.com/brunodlp" target="_blank">
          <SiGithub className="hover:text-slate-300" />
        </a>
      </div>
    </section>
  );
}
export default Contact;

import {
  FaChevronCircleRight,
  FaGithub,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import { projectsData } from "../data/projectsData.jsx";

function ProjectCard({ project }) {
  return (
    <div className="text-gray-200 font-sans border border-gray-700 rounded-xl p-6 text-lg max-w-none h-full min-h-[700px] bg-[#242e46] hover:shadow-lg hover:shadow-blue-500/20 duration-300 hover:translate-y-[-6px] grid md:grid-cols-2 gap-7 items-stretch overflow-hidden">
      <div className="flex flex-col justify-between h-full space-y-7">
        <h2 className="font-bold font-sans text-2xl">{project.title}</h2>

        <div className="space-y-3 border border-gray-600 rounded-xl px-5 py-3 bg-gray-800">
          {project.descriptions.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </div>

        <ul>
          {project.featuresTitle && <h3>{project.featuresTitle}</h3>}
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <FaChevronCircleRight className="text-gray-900 mt-1 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="border rounded-xl bg-gray-800 px-3 py-1 text-sm text-[12px] border-gray-700 hover:bg-gray-900 hover:translate-y-[-2px] transition duration-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-8">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-200"
            >
              {link.type === "github" ? (
                <FaGithub className="text-white" />
              ) : (
                <FiExternalLink className="text-white" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="h-full bg-[#1d2942] relative rounded-2xl md:p-4 flex items-center overflow-hidden justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="md:opacity-50 hover:opacity-100 z-10 w-full h-auto rounded-xl shadow-2xl border-gray-700 hover:scale-[1.02] transition duration-500 group-hover:scale-105 object-contain"
        />
      </div>
    </div>
  );
}

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

      <div className="relative w-full">
        <button
          aria-label="Previous"
          className="swiper-button-prev-custom absolute md:-left-6 -left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition duration-300 flex items-center justify-center cursor-pointer"
        >
          <FaChevronLeft />
        </button>
        <button
          aria-label="Next"
          className="swiper-button-next-custom absolute md:-right-6 -right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400 hover:text-black transition duration-300 flex items-center justify-center cursor-pointer"
        >
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
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default Projects;

import imgMonopatin from "../images/monopatines.jpg";
import imgAldesal from "../images/aldesalgames.png";
import imgEcommerce from "../images/jybcelulares.png";
import imgPortfolio from "../images/portfolio.png";
import imgTempoglass from "../images/tempoglass.png";
import imgPureza from "../images/pureza.png";

export const projectsData = [
  {
    id: "pureza-app",
    title: "Juegos interactivos Pureza de las Sierras",
    descriptions: [
      <>
        Desarrollo de juegos interactivos con premios para Pureza de las
        Sierras, fabrica de aguas de la ciudad de Tandil. Diseñada junto a
        Martin Biondi (
        <a
          href="https://www.behance.net/martinbiondi1"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300 transition duration-200"
        >
          portfolio
        </a>
        ), diseñador grafico.
      </>,
    ],
    featuresTitle: "Funcionalidades",
    features: [
      "Juegos de dados y ruleta interactiva",
      "Diversos premios",
      "Calculos de probabilidades",
      "Interfaz dinámica y moderna",
      "Disponible para utilizar en dispositivos Android(APK)",
      "Modo offline",
    ],
    technologies: ["React", "Tailwind CSS"],
    image: imgPureza,
    links: [
      {
        label: "Web en vivo",
        url: "https://pureza-juegos.vercel.app/",
        type: "demo",
      },
    ],
  },
  {
    id: "tempoglass-web",
    title: "Landing page Tempoglass",
    descriptions: [
      "Rediseño de landing page para Tempoglass, vidrieria de Tandil especializada en DVH. Utilizando tecnologías e interfaces modernas como React y Tailwind.",
    ],
    featuresTitle: "Servicios principales",
    features: [
      "Secciones: Inicio, Nosotros, Productos, Trabajos, Contacto",
      "Acceso directo a Whatsapp para presupuestos",
      "Carrusel de imagenes en alta definición",
      "Interfaz dinámica y moderna",
      "Adaptada a todas las pantallas",
    ],
    technologies: ["React", "Tailwind CSS"],
    image: imgTempoglass,
    links: [
      {
        label: "Web en vivo",
        url: "https://tempoglass.com.ar",
        type: "demo",
      },
    ],
  },
  {
    id: "monopatines",
    title: "Sistema de alquiler de monopatines electricos",
    descriptions: [
      "Plataforma de alquiler de monopatines eléctricos desarrollada bajo una arquitectura Backend de microservicios utilizando Java y Spring Boot, incorporando ademas servicios REST.",
    ],
    featuresTitle: "Servicios principales",
    features: [
      "Gestión de usuarios y autenticación JWT",
      "API REST para control de paradas y disponibilidad",
      "Monitoreo de monopatines",
      "Facturación y tarifas",
      "Chatbot IA integrado mediante LLM",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "API Rest",
      "Docker",
    ],
    image: imgMonopatin,
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/juann0278/Integrador4",
        type: "github",
      },
    ],
  },
  {
    id: "aldesal",
    title: "Aldesal Games",
    descriptions: [
      "Plataforma web interactiva inspirada en los clásicos juegos Flash, orientada a ofrecer una experiencia dinámica y nostálgica para usuarios casuales.",
      "Desarrollada utilizando HTML, CSS y JavaScript con un enfoque basado en Programación Orientada a Objetos (POO).",
      "Destacada por su interfaz moderna, animaciones CSS, efectos visuales y experiencia de usuario interactiva.",
    ],
    featuresTitle: "Servicios principales",
    features: [
      "Interfaz amigable avanzada con una excelente experiencia de usuario",
      "Home interactivo basado en paginas de videojuegos",
      "Sección de logueo y registro",
      "Videojuego integrado: Star Clash: Battlefront. Versión mejorada del clasico 4 en línea",
    ],
    technologies: ["HTML", "JavaScript", "CSS"],
    image: imgAldesal,
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/brunodlp/aldesal-games",
        type: "github",
      },
      {
        label: "Demo",
        url: "https://lukasaldivia.github.io/aldesal-games/TP3/EntregaFinal/",
        type: "demo",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "Ecommerce de celulares - Server Side Rendering",
    descriptions: [
      "Aplicación web dinámica desarrollada con PHP y MySQL utilizando renderizado del lado del servidor (SSR).",
      "Cuenta con un enfoque Modelo-Vista-Controlador (MVC), destacandose la implementación de un enrutador (Router) y API Rest",
    ],
    featuresTitle: "Servicios principales",
    features: [
      "Sección de logueo y registro",
      "Acceso público y privado",
      "Listado y CRUD de items y categorias",
      "API Rest - RESTful",
      "Manejo de codigos de error",
    ],
    technologies: ["PHP", "MySQL", "API Rest"],
    image: imgEcommerce,
    links: [
      {
        label: "Repositorio v1",
        url: "https://github.com/Jcambareri6/TPE-WEB2-ECOMMERCE",
        type: "github",
      },
      {
        label: "Repositorio v2",
        url: "https://github.com/brunodlp/TPE3-WEB2-API",
        type: "github",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio personal",
    descriptions: [
      "Portfolio web personal desarrollado para presentar de manera profesional mi perfil, experiencia, habilidades técnicas y proyectos. Diseñado con una interfaz moderna, animaciones dinámicas y un enfoque completamente responsivo orientado a la experiencia de usuario.",
    ],
    featuresTitle: "Caracteristicas destacables",
    features: [
      "Diseño responsivo",
      "Interfaz moderna con animaciones y efectos visuales",
      "Framer Motion",
      "Buena UX",
    ],
    technologies: ["React.js", "Tailwind CSS"],
    image: imgPortfolio,
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/brunodlp/portfolio",
        type: "github",
      },
      {
        label: "Demo",
        url: "https://brunodelapenna.vercel.app/",
        type: "demo",
      },
    ],
  },
];

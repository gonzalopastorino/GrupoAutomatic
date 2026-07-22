const projects = [
  {
    number: "01",
    title: "Inteligencia Artificial",
    category: "Soluciones de IA para automatizar procesos.",
    bullets: [
      "✓ Chatbots inteligentes para atención",
      "✓ Análisis predictivo de datos",
      "✓ Automatización de tareas repetitivas",
      "✓ Optimización de procesos",
      "✓ Análisis de sentimiento y datos",
    ],
    image: "/selection/aum1.jpg",
    alt: "Inteligencia Artificial",
  },
  {
    number: "02",
    title: "Desarrollo de Software",
    category: "Aplicaciones personalizadas para su negocio",
    bullets: [
      "✓ Aplicaciones web empresarialesa",
      "✓ Sistemas de gestión personalizados",
      "✓ Integración de sistemas",
      "✓ Aplicaciones móvil iOS/Android",
    ],
    image: "/selection/code2.jpg",
    alt: "Desarrollo de Software",
  },
  {
    number: "03",
    title: "Seguridad Informática",
    category: "Protección de datos y sistemas de información",
    bullets: [
      "✓ Evaluación de vulnerabilidades",
      "✓ Implementación de firewalls y VPN",
      "✓ Control de acceso y autenticación",
      "✓ Copias de seguridad encriptadas",
      "✓ Plan de respuesta ante incidentes",
    ],
    image: "/selection/silice.jpg",
    alt: "Seguridad Informática",
  },
  {
    number: "04",
    title: "Mesa de Ayuda",
    category: "Soporte técnico rápido y eficiente para su equipo",
    bullets: [
      "✓ Atención telefónica y por correo",
      "✓ Ticketing y seguimiento de incidentes",
      "✓ Soporte en sitio cuando es necesario",
      "✓ Base de conocimiento disponibleo",
      "✓ Escalamiento rápido de problemas críticos",
    ],
    image: "/selection/software2.jpg",
    alt: "Mesa de Ayuda",
  },
  {
    number: "05",
    title: "OutSourcing IT",
    category: "Gestión completa de su infraestructura tecnológica",
    bullets: [
      "✓ Gestión de servidores y bases de datos",
      "✓ Administración de redes",
      "✓ Actualizaciones y parches de seguridad",
      "✓ Monitoreo preventivo 24/7",
      "✓ Respaldo y recuperación de datos",
    ],
    image: "/selection/network1.jpg",
    alt: "OutSourcing IT",
  },
  {
    number: "06",
    title: "Admin de Servicios",
    category: "Monitoreo y mantenimiento de sistemas",
    bullets: [
      "✓ Monitoreo de rendimiento del sistema",
      "✓ Gestión de actualizaciones",
      "✓ Optimización de infraestructura",
      "✓ Asesoramiento técnico proactivo",
    ],
    image: "/selection/software.jpg",
    alt: "Administración de Servicios",
  },
];

function ProjectRow({ project }) {
  return (

    <div className="project-row group relative flex items-center justify-between py-12 border-thin cursor-crosshair">
      <div className="flex items-center gap-8 md:gap-24">
        <span className="text-xs font-medium opacity-40">{project.number}</span>

        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-[#13284D] group-hover:translate-x-4 transition-transform duration-500">
          {project.title}
        </h2>
              {project.bullets && (
                <ul className="text-gray-500 text-sm leading-relaxed mb-4 list-none">
                  {project.bullets.map((bullet, index) => (
                    <li key={index} className="mb-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
      </div>

      <div className="flex items-center gap-8">
        <p className="text-xs uppercase tracking-widest opacity-60 hidden sm:block">
          {project.category}
        </p>

        <span className="material-symbols-outlined text-3xl text-[#4F46E5] group-hover:rotate-45 transition-transform duration-300">
          north_east
        </span>
      </div>

      <div className="project-preview absolute left-1/2 top-1/2 z-0 w-64 h-80 overflow-hidden rounded-xl bg-gray-200">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  );
}

export default function Galeria() {
  return (
    <div id="servicios">
      <section className="relative overflow-hidden pt-24 px-6">
        <div className="bg-gradient-to-b from-[#13284D] to-[#203A73] -mx-6 md:-mx-12 -mt-24 px-6 md:px-12 py-16 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Nuestros Servicios
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar el crecimiento de tu empresa.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16">
        <div className="flex items-end justify-between border-thin pb-4 mb-2">
          <h3 className="text-xs uppercase font-bold tracking-[0.2em] text-[#6b807d]">
            Nuestros principales servicios ({projects.length})
          </h3>

          <span className="text-[10px] opacity-50 uppercase tracking-widest hidden md:block">
            Explorá y descubrí nuestros servicios destacados.
          </span>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-40">
        {projects.map((project) => (
          <ProjectRow key={project.number} project={project} />
        ))}
      </section>
    </div>
  );
}
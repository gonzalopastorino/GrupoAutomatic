import CallToAction from "../sections/CalltoAction";

const articles = [
  {
    image: "/images/aum3.jpg",
    date: "JUNIO 22, 7 PM",
    title: "Cómo la IA ayuda a las Pymes",
    intro: "La inteligencia artificial ha dejado de ser una tecnología futurista para convertirse en una herramienta práctica y accesible. Para las pequeñas y medianas empresas, la IA representa una oportunidad única de automatizar procesos, mejorar la experiencia del cliente y optimizar costos operacionales.",
    subtitle: "¿Cómo puede la IA beneficiar tu Pyme?",
    bullets: [
      "Automatización inteligente: Los chatbots de IA pueden manejar consultas básicas de clientes 24/7, liberando a tu equipo para tareas más estratégicas.",
      "Análisis de datos: La IA puede procesar grandes volúmenes de datos para identificar patrones, tendencias y oportunidades de negocio.",
      "Predicción y prevención: Modelos de machine learning pueden predecir problemas antes de ocurrir, permitiendo acciones preventivas.",
      "Eficiencia operacional: Desde la gestión de inventario hasta la optimización de rutas, la IA mejora la eficiencia en múltiples áreas.",
    ] ,
    subtitle2: "Casos de éxito",
    exito: "Empresas colombianas en retail, manufactura y servicios ya están utilizando IA para transformar sus operaciones. Las que lo han implementado reportan reducciones de hasta 40% en costos operacionales y mejoras significativas en satisfacción del cliente.",
    cta: "Primeros pasos",
    call: "No necesitas ser una startup tech para beneficiarte de la IA. Comenzar es más simple que nunca: identifica un proceso que consuma mucho tiempo o recursos, y explora cómo la IA puede automatizarlo. En Grupo Automatic podemos ayudarte a identificar las oportunidades de IA más prometedoras para tu negocio.",
    ctatext: "Solicita asesoría",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/stats.jpg",
    date: "JUNIO 23, 8:30 AM",
    title: "Beneficios del Outsourcing IT",
    intro: "Muchas empresas pequeñas y medianas luchan con la complejidad de mantener una infraestructura IT robusta mientras contratan y retienen personal técnico especializado. El outsourcing IT emerge como una solución estratégica que ofrece múltiples beneficios.",
    subtitle: "Ventajas del Outsourcing IT",
    bullets: [
      "Reducción de costos: Elimina la necesidad de salarios altos de especialistas IT a tiempo completo. Pagas solo por lo que necesitas.",
      "Acceso a expertos: Obtienes un equipo de profesionales certificados sin los costos de reclutamiento y capacitación.",
      "Enfoque en el negocio: Tu equipo interno puede concentrarse en iniciativas que generan valor directo al negocio.",
      "Escalabilidad: Fácilmente amplía o reduce servicios según tus necesidades sin compromisos a largo plazo.",
      "Seguridad mejorada: Acceso a estándares de seguridad y cumplimiento normativo que serían costosos implementar internamente.",
    ] ,
    subtitle2: "¿Cuánto puedes ahorrar?",
    exito: "Las empresas que implementan outsourcing IT reportan ahorros de 30-50% en costos de IT. Además, la inversión en infraestructura de TI se transforma en gastos operacionales predecibles y controlables.",
    ctatext: "Pídenos presupuesto",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/empresa.jpg",
    date: "JUNIO 24, 8 PM",
    title: "Tecnología para pequeñas empresas",
    intro: "En un mundo donde la transformación digital es prácticamente obligatoria, muchas pequeñas empresas se sienten abrumadas por la cantidad de opciones tecnológicas disponibles. ¿Por dónde empezar? ¿Cuáles herramientas realmente necesitas?",
    subtitle: "Tecnologías clave para crecer",
    bullets: [
      "Cloud Computing: Migrar a la nube permite escalabilidad sin inversión en servidores costosos.",
      "CRM (Customer Relationship Management): Gestiona mejor tus relaciones con clientes y aumenta ventas.",
      "Automatización de marketing: Herramientas que permiten personalizar comunicaciones a escala.",
      "Análisis de datos: Toma decisiones basadas en datos, no en intuición.",
      "Seguridad en la nube: Protege tus datos sin inversiones en infraestructura física.",
    ] ,
    subtitle2: "Estrategia de adopción",
    exito: "La clave no es adoptar todas las tecnologías al mismo tiempo. Comienza con lo más crítico para tu operación: si eres un ecommerce, un CRM sólido. Si eres un servicio, automatización y comunicación. Construye gradualmente tu stack tecnológico.",
    ctatext: "Agenda una consulta",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/code4.jpg",
    date: "JUNIO 25, 8 PM",
    title: "Cómo reducir costos con soporte administrado",
    intro: "El soporte IT tradicional es reactivo: algo se rompe, llamas al técnico, esperas reparación, pagas la factura. El soporte administrado invierte este modelo, siendo proactivo para evitar problemas antes de que causen daño o pérdida de productividad.",
    subtitle: "Ventajas del soporte administrado",
    bullets: [
      "Prevención vs. reacción: Identificamos y resolvemos problemas antes de que afecten tu operación.",
      "Costos predecibles: Una cuota mensana fija en lugar de sorpresas de emergencia.",
      "Menos tiempo de inactividad: Monitoreo 24/7 significa menos horas en que tus sistemas están fuera de línea.",
      "Reportes detallados: Visibilidad completa sobre la salud de tu infraestructura.",
    ] ,
    subtitle2: "ROI comprobado",
    exito: "Las empresas con soporte administrado reportan hasta 60% menos incidentes críticos, reducción en tiempos de resolución de 80% y costos totales de IT 35% más bajos comparado con servicios reactivos.",   
    ctatext: "Compruébalo!",
    aspect: "aspect-square",
  },
];

export default function Blog() {
  return (
    <>
    <section className="relative overflow-hidden pt-24 px-6">
      <div className="bg-gradient-to-b from-[#13284D] to-[#203A73] -mx-6 md:-mx-12 -mt-24 px-6 md:px-12 py-16 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">Blog</h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Compartimos algunos artículos, para que conozcas más sobre nuestros servicios.
        </p>
      </div>
    </section>
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {articles.map((article, i) => (
            <div key={i} className="flex flex-col">
              <div className={`rounded-xl overflow-hidden mb-5 ${article.aspect} bg-gray-200`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#4F46E5] font-bold text-xs tracking-wider mb-2">
                {article.date}
              </span>
              <h3 className="text-lg font-bold text-[#13284D] mb-2">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {article.intro}
              </p>
              <h3 className="text-lg font-bold text-[#13284D] mb-2">
                {article.subtitle}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {article.bullets && article.bullets.map((bullet, index) => (
                  <li key={index} className="mb-2">
                    {bullet}
                  </li>
                ))}
              </p>
              <h3 className="text-lg font-bold text-[#13284D] mb-2">
                {article.subtitle2}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {article.exito}
              </p>
                            <h3 className="text-lg font-bold text-[#13284D] mb-2">
                {article.cta}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {article.call}
              </p>
              <a
              href="/contacto"
              className="self-start border-2 
              border-[#4F46E5] 
              text-[#4F46E5] 
              font-bold text-sm px-5 py-2 rounded-lg
              hover:bg-[#4F46E5] 
              hover:text-white 
              transition mt-auto"
              >
                {article.ctatext}
              </a>
          </div>   
          ))}
        </div>
      </div>
    </section>
    <CallToAction />
    </>
  );
}   

const articles = [
  {
    image: "/images/aum3.jpg",
    date: "JUNIO 22, 7 PM",
    title: "Cómo la IA ayuda a las Pymes",
    description: "Descubre cómo la inteligencia artificial puede transformar tus procesos empresariales.",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/stats.jpg",
    date: "JUNIO 23, 8:30 AM",
    title: "Beneficios del Outsourcing IT",
    description: "Optimiza costos y eficiencia delegando tu infraestructura tecnológica.",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/empresa.jpg",
    date: "JUNIO 24, 8 PM",
    title: "Tecnología para pequeñas empresas",
    description: "Herramientas y soluciones accesibles para tu negocio en crecimiento.",
    aspect: "aspect-[3/4]",
  },
  {
    image: "/images/code4.jpg",
    date: "JUNIO 25, 8 PM",
    title: "Cómo reducir costos con soporte administrado",
    description: "Las empresas con soporte administrado reportan hasta 60% menos incidentes críticos, reducción en tiempos de resolución de 80%.",
    aspect: "aspect-square",
  },
];

export default function Blog() {
  return (


    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="section-header">
          <span className="text-lg font-bold text-[#13284D] mb-2">BLOG</span>
          <h2 className="text-gray-500 leading-relaxed mb-4">
            Compartimos algunos artículos, para que conozcas más sobre los servicios que ofrecemos.
          </h2>
        </div>

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
                {article.description}
              </p>
              <a href="/blog" className="self-start border-2 border-[#4F46E5] text-[#4F46E5] font-bold text-sm px-5 py-2 rounded-lg hover:bg-[#4F46E5] hover:text-white transition">
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   

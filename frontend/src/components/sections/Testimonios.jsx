const testimonials = [
  {
    id: 1,
    name: "Carlos Martínez",
    company: "CEO · Tech Solutions",
    text: "El equipo de GrupoAutomatic entendió nuestras necesidades desde el primer día. Implementaron una solución robusta, moderna y con un soporte impecable.",
  },
  {
    id: 2,
    name: "María González",
    company: "Gerente de Operaciones",
    text: "Logramos optimizar nuestros procesos internos y reducir tiempos operativos. La experiencia fue excelente de principio a fin.",
  },
  {
    id: 3,
    name: "Javier Rodríguez",
    company: "Director Comercial",
    text: "Profesionalismo, rapidez y compromiso. Hoy contamos con una infraestructura tecnológica mucho más segura y escalable.",
  },
];

export default function TestimoniosTailwind() {
  return (
    <>
      <style>{`
        .tw-testimonials::before {
          content: "";
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          background: rgba(124, 92, 255, .15);
          top: -250px;
          right: -180px;
          filter: blur(30px);
        }
      `}</style>

      <section className="py-[110px] bg-gradient-to-b from-[#13284D] to-[#203A73] relative overflow-hidden max-md:py-[80px] tw-testimonials" style={{ fontFamily: "sans-serif" }}>
        <div className="w-[min(1200px,90%)] mx-auto">

          <div className="text-center max-w-[720px] mx-auto mb-[70px] relative z-10">
            <span className="inline-block px-[18px] py-[10px] rounded-full bg-white/[.08] text-white text-[0.8rem] tracking-[2px] font-bold mb-[22px]">
              TESTIMONIOS
            </span>
            <h2 className="text-white text-[clamp(2rem,4vw,3.3rem)] font-extrabold mb-[18px]">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-white/75 leading-[1.8]">
              Empresas que confiaron en nosotros para impulsar su
              transformación tecnológica.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[30px] relative z-10 max-w-[1100px] mx-auto max-[1100px]:grid-cols-1">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="bg-white/[.08] border border-white/[.12] backdrop-blur-[18px] rounded-[22px] p-[35px] transition duration-[.35s] hover:-translate-y-[10px] hover:bg-white/[.12] max-md:p-[28px]"
              >
                <div className="text-[#FFD166] text-[20px] mb-[28px] tracking-[4px]">
                  ★★★★★
                </div>
                <p className="text-white leading-[1.9] text-[1rem] mb-[35px] italic">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-[18px]">
                  <div className="w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C5CFF] flex items-center justify-center text-white text-[22px] font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white mb-[6px] text-[1rem]">{item.name}</h4>
                    <span className="text-white/65 text-[0.9rem]">{item.company}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

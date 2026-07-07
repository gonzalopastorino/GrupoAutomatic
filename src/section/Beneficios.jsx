const benefits = [
  {
    number: "01",
    title: "Reducción de costos",
    text: "Optimizamos tu infraestructura para disminuir gastos operativos sin afectar el rendimiento.",
    icon: "💰",
  },
  {
    number: "02",
    title: "Mayor seguridad",
    text: "Protegemos la información de tu empresa mediante soluciones modernas y monitoreo constante.",
    icon: "🛡️",
  },
  {
    number: "03",
    title: "Soporte especializado",
    text: "Nuestro equipo responde rápidamente para mantener la continuidad de tu negocio.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Escalabilidad",
    text: "Implementamos tecnologías preparadas para acompañar el crecimiento de tu empresa.",
    icon: "📈",
  },
];

export default function BenefitsTailwind() {
  return (
    <>
      <style>{`
        .bt-card::before {
          content: "";
          position: absolute;
          inset: 0;
          height: 5px;
          background: linear-gradient(90deg, #4F46E5, #7C5CFF);
        }
        .bt-icon {
          background: linear-gradient(135deg, #4F46E5, #7C5CFF);
        }
      `}</style>

      <section className="py-[110px] bg-[#f7f9fc] max-md:py-[80px]">
        <div className="w-[min(1200px,90%)] mx-auto">

          <div className="text-center max-w-[760px] mx-auto mb-[70px]">
            <span className="inline-block px-[18px] py-[10px] rounded-full bg-[rgba(108,92,231,.12)] text-[#6C5CE7] text-[0.8rem] font-bold tracking-[2px] mb-[22px]">
              Lo que te ofrecemos
            </span>
            <h2 className="text-[#13284D] text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-[1.15] mb-[20px]">
              ¿Por qué elegir nuestras soluciones?
            </h2>
            <p className="text-[#69748c] text-[1.05rem] leading-[1.8]">
              Ayudamos a empresas a optimizar sus procesos mediante
              infraestructura moderna, soporte continuo y tecnología
              orientada a resultados.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[30px] max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1 max-[768px]:gap-[22px]">
            {benefits.map((item) => (
              <article
                className="bt-card relative bg-white rounded-[22px] p-[35px] overflow-hidden transition-all duration-[.35s] ease-[ease] border border-[#edf0f6] shadow-[0_15px_35px_rgba(17,38,78,.06)] hover:-translate-y-[10px] hover:shadow-[0_30px_60px_rgba(17,38,78,.12)] max-[768px]:p-[28px]"
                key={item.number}
              >
                <div className="flex justify-between items-center mb-[28px]">
                  <span className="bt-icon w-[64px] h-[64px] rounded-[18px] flex justify-center items-center text-white text-[1.7rem] shadow-[0_15px_25px_rgba(108,92,231,.25)] max-[768px]:w-[58px] max-[768px]:h-[58px] max-[768px]:text-[1.5rem]">
                    {item.icon}
                  </span>
                  <span className="text-[2.8rem] font-extrabold text-[rgba(79,70,229,.08)] select-none max-[768px]:text-[2.2rem]">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-[#13284D] text-[1.35rem] mb-[18px] font-bold">
                  {item.title}
                </h3>
                <p className="text-[#6E7892] leading-[1.8] text-[0.97rem]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

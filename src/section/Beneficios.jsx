import "../css/beneficios.css";

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

export default function Benefits() {
  return (
    <section className="benefits">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Lo que te ofrecemos
          </span>

          <h2>
            ¿Por qué elegir nuestras soluciones?
          </h2>

          <p>
            Ayudamos a empresas a optimizar sus procesos mediante
            infraestructura moderna, soporte continuo y tecnología
            orientada a resultados.
          </p>

        </div>

        <div className="benefits-grid">

          {benefits.map((item) => (

            <article
              className="benefit-card"
              key={item.number}
            >

              <div className="benefit-top">

                <span className="benefit-icon">
                  {item.icon}
                </span>

                <span className="benefit-number">
                  {item.number}
                </span>

              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
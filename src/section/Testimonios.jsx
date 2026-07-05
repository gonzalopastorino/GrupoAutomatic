import "../css/testimonios.css";

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

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            TESTIMONIOS
          </span>

          <h2>
            Lo que dicen nuestros clientes
          </h2>

          <p>
            Empresas que confiaron en nosotros para impulsar su
            transformación tecnológica.
          </p>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((item) => (

            <article
              key={item.id}
              className="testimonial-card"
            >

              <div className="testimonial-stars">

                ★★★★★

              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="testimonial-footer">

                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.company}</span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}
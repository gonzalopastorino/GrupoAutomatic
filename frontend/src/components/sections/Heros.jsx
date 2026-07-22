import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-blur hero-blur-left"></div>
      <div className="hero-blur hero-blur-right"></div>

      <div className="container">

        <div className="hero-content">

          <span className="hero-badge">
            SOLUCIONES TECNOLÓGICAS PARA EMPRESAS
          </span>

          <h1>
            Impulsamos la
            <span> transformación digital </span>
            de tu negocio
          </h1>

          <p>
            Ayudamos a empresas a optimizar su infraestructura,
            automatizar procesos y proteger su información mediante
            soluciones tecnológicas modernas y escalables.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Solicitar asesoría
            </button>

            <button className="btn-outline">
              Nuestros servicios
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h3>+250</h3>
              <span>Clientes</span>
            </div>

            <div>
              <h3>12+</h3>
              <span>Años</span>
            </div>

            <div>
              <h3>99%</h3>
              <span>Satisfacción</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
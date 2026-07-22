const CallToAction = () => {
  return (
    <section className="relative w-full min-h-[626px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/redes.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60"></div>
      </div>

      <div className="relative z-10 flex items-center min-h-[626px]">
        <div className="max-w-[1200px] mx-auto px-5 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-4">
            ¿Listo para transformar
            <br />
            tu empresa?
          </h1>
          <p className="text-base md:text-2xl font-normal text-white mb-7 leading-relaxed">
          Agenda una consulta con nuestro equipo y descubre
          cómo podemos ayudarte a implementar soluciones
          inteligentes para tu negocio.
          </p>

                      <a
            href="https://wa.me/573116298867"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Llamar ahora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

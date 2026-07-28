const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-50 via-white to-blue-50" />

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200 opacity-40 blur-3xl" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold leading-tight text-[#13284D] md:text-5xl">
          ¿Listo para llevar tu empresa
          <br />
          <span className="text-blue-600">al siguiente nivel?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Agenda una consulta con nuestro equipo y descubrí cómo podemos ayudarte
          a implementar soluciones inteligentes para tu negocio.
        </p>

        <a
          href="tel:+573001234567"
          className="
            mt-10
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-linear-to-r
            from-[#4F46E5]
            to-[#7C5CFF]
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-lg
            shadow-blue-200
            transition-all
            duration-300
            hover:scale-105
            hover:brightness-110
            hover:shadow-xl
            active:scale-95
          "
        >
          Llamar ahora
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
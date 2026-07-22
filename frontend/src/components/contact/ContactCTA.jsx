function ContactCTA() {

  return (

    <section
      className="
      relative
      overflow-hidden
      py-24
      px-6
      bg-white
      "
    >


      {/* Fondo decorativo */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-50
        via-white
        to-blue-50
        "
      />


      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-96
        h-96
        bg-blue-200
        rounded-full
        blur-3xl
        opacity-40
        "
      />



      <div
        className="
        relative
        max-w-5xl
        mx-auto
        text-center
        "
      >


        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-gray-900
          leading-tight
          "
        >
          ¿Listo para llevar tu empresa
          <span className="text-blue-600">
            {" "}al siguiente nivel?
          </span>
        </h2>



        <p
          className="
          mt-6
          text-lg
          text-gray-600
          max-w-2xl
          mx-auto
          leading-relaxed
          "
        >
          Agenda una consulta con nuestro equipo y descubrí
          cómo podemos ayudarte a implementar soluciones
          inteligentes para tu negocio.
        </p>




        <a
          href="tel:+573001234567"
          className="
          inline-flex
          items-center
          justify-center
          mt-10
          px-8
          py-4
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          shadow-lg
          shadow-blue-200
          hover:bg-blue-700
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Llamar ahora
        </a>



      </div>


    </section>

  );

}


export default ContactCTA;
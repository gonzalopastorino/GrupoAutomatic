function Nosotros() {

  return (
    <section
      className="
      relative
      overflow-hidden
      pt-24
      px-6
      "
    >
      <div className="bg-gradient-to-b from-[#13284D] to-[#203A73] -mx-6 md:-mx-12 -mt-24 px-6 md:px-12 py-16 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold">Quienes somos</h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Conoce la historia y valores de Grupo Automatic
        </p>
      </div>

      {/* Decoraciones */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-blue-100
        rounded-full
        blur-3xl
        opacity-20
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        bg-blue-50
        rounded-full
        blur-3xl
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



        <h1
          className="
          mt-12
          text-5xl
          md:text-6xl
          font-bold
          tracking-tight
          text-[#13284D]
          leading-tight
          "
        >
          Nuestra Historia

        </h1>



        <p
          className="
          mt-6
          text-xl
          text-gray-600
          max-w-3xl
          mx-auto
          leading-relaxed
          "
        >
          Grupo Automatic nace en 2025 con la visión de transformar la forma en que las pymes y pequeñas empresas acceden a soluciones tecnológicas de clase mundial. Durante este corto tiempo, hemos acompañado a empresas en Medellín y en toda Colombia en su transformación digital.
        <br />
          Hemos comenzado como un pequeño equipo de especialistas IT y hoy esperamos ser en el futuro una empresa consolidada con experiencia en diversos sectores, desde retail hasta manufactura, servicios financieros y educación.
        </p>



      </div>


    </section>
  );
}


export default Nosotros;
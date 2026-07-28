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

    <section
      className="
        relative
        overflow-hidden
        bg-linear-to-b
        from-[#13284D]
        to-[#203A73]
        py-24
        md:py-27.5
      "
    >

      {/* Decoración */}
      <div
        className="
          absolute
          -right-44
          -top-64
          h-162.5
          w-162.5
          rounded-full
          bg-[#7C5CFF]/20
          blur-3xl
        "
      />


      <div
        className="
          relative
          mx-auto
          w-[90%]
          max-w-300
        "
      >


        {/* Header */}
        <div
          className="
            relative
            z-10
            mx-auto
            mb-16
            max-w-180
            text-center
          "
        >

          <span
            className="
              inline-block
              rounded-full
              bg-white/10
              px-5
              py-2.5
              text-xs
              font-bold
              tracking-[2px]
              text-white
            "
          >
            TESTIMONIOS
          </span>


          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
            "
          >
            Lo que dicen nuestros clientes
          </h2>


          <p
            className="
              mt-4
              leading-relaxed
              text-white/75
            "
          >
            Empresas que confiaron en nosotros para impulsar su
            transformación tecnológica.
          </p>


        </div>



        {/* Cards */}
        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-175
            grid-cols-1
            gap-8
            lg:grid-cols-3
          "
        >

          {testimonials.map((item) => (

            <article
              key={item.id}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/10
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-3
                hover:bg-white/15
              "
            >


              {/* Estrellas */}
              <div
                className="
                  mb-7
                  text-xl
                  tracking-[4px]
                  text-[#FFD166]
                "
              >
                ★★★★★
              </div>



              {/* Texto */}
              <p
                className="
                  mb-8
                  italic
                  leading-relaxed
                  text-white
                "
              >
                "{item.text}"
              </p>



              {/* Usuario */}
              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-linear-to-br
                    from-[#4F46E5]
                    to-[#7C5CFF]
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {item.name.charAt(0)}
                </div>


                <div>

                  <h4
                    className="
                      text-base
                      font-semibold
                      text-white
                    "
                  >
                    {item.name}
                  </h4>


                  <span
                    className="
                      text-sm
                      text-white/65
                    "
                  >
                    {item.company}
                  </span>


                </div>

              </div>


            </article>

          ))}


        </div>


      </div>


    </section>

  );
}
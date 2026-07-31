const testimonials = [
  {
    id: 1,
    author: "Carlos Mendez - CEO · Tech Solutions",
    text: "Grupo Automatic transformó nuestra infraestructura IT. Ahora nos enfocamos en crecer.",
  },
  {
    id: 2,
    author: "Maria González - Directora Operativa",
    text: "El soporte 24/7 nos ha permitido operar sin interrupciones. Brindan un excelente servicio.",
  },
  {
    id: 3,
    author: "Roberto Díaz - Propietario",
    text: "Profesionales con experiencia. Teníamos dudas en la adopción de IA pero nos dieron confianza en la implementación",
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
            Lo que dicen 
            <br />
            nuestros clientes
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
          gap-8
          grid-cols-[repeat(auto-fit,minmax(200px,1fr))]


          "
        >

          {testimonials.map((item) => (

            <article
              key={item.id}
              className="
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  p-8
                  backdrop-blur-xl

              "
            >

              {/* Texto */}
              <p
                className="
                  mb-4
                  italic
                  leading-relaxed
                  text-white
                "
              >
                "{item.text}"
              </p>



              {/* Usuario */}


                <div>
                <p className="text-right text-sm text-white/65">
                  {item.author}
                </p>
                

              </div>

            </article>

          ))}


        </div>


      </div>


    </section>

  );
}
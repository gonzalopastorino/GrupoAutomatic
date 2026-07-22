const faq = [
  [
    "¿Cuánto demora implementar IA?",
    "Depende del proyecto. Las soluciones simples pueden estar listas en pocas semanas, mientras que proyectos más complejos requieren una planificación personalizada."
  ],
  [
    "¿Necesito conocimientos técnicos?",
    "No. Nuestro equipo se encarga del análisis, desarrollo e implementación de la solución completa."
  ],
  [
    "¿Ofrecen soporte luego del lanzamiento?",
    "Sí. Acompañamos a nuestros clientes con mantenimiento, mejoras y soporte continuo."
  ],
  [
    "¿Trabajan con empresas pequeñas?",
    "Sí. Diseñamos soluciones escalables adaptadas a las necesidades y objetivos de cada empresa."
  ]
];


function ContactFAQ() {

  return (

    <section
      className="
      py-20
      px-6
      bg-white
      "
    >

      <div
        className="
        max-w-[1200px]
        mx-auto
        "
      >


        <div
          className="
          text-center
          mb-14
          "
        >

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#13284D] 
            "
          >
            Preguntas frecuentes
          </h2>


          <p
            className="
            mt-4
            text-gray-600
            max-w-2xl
            mx-auto
            "
          >
            Resolvemos algunas de las dudas más comunes sobre
            nuestros servicios y procesos de implementación.
          </p>


        </div>




        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >


          {
            faq.map((item,index)=>(

              <div
                key={index}
                className="
                p-7
                rounded-3xl
                border
                border-gray-200
                bg-white
                hover:border-blue-300
                hover:shadow-xl
                transition-all
                duration-300
                "
              >


                <h3
                  className="
                  text-lg
                  font-bold
                  text-[#13284D] 
                  mb-3
                  "
                >
                  {item[0]}
                </h3>



                <p
                  className="
                  text-gray-600
                  leading-relaxed
                  "
                >
                  {item[1]}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default ContactFAQ;
function ContactInfo() {

  const contactItems = [
    {
      label: "Email",
      value: "info@visionartificial.co",
      icon: "✉"
    },
    {
      label: "Teléfono",
      value: "+57 300 123 4567",
      icon: "☎"
    },
    {
      label: "Ubicación",
      value: "Bogotá, Colombia",
      icon: "⌖"
    }
  ];


  return (
    <div className="relative">


      {/* Glow decorativo */}
      <div
        className="
        absolute
        -top-20
        -left-20
        w-64
        h-64
        bg-blue-100
        rounded-full
        blur-3xl
        opacity-70
        "
      />


      <div className="relative">


        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          tracking-tight
          text-[#13284D]
          leading-tight
          "
        >
          Conectemos para
          <br />
          crear algo 
          <span className="text-blue-600">
             {" "} extraordinario
          </span>
        </h2>




        <p
          className="
          mt-6
          text-lg
          text-gray-600
          leading-relaxed
          max-w-xl
          "
        >
          Contanos tu desafío. Nuestro equipo desarrolla
          soluciones digitales, automatización y software
          personalizado para empresas que buscan crecer.
        </p>




        <div
          className="
          mt-10
          space-y-4
          "
        >


          {contactItems.map((item, index) => (

            <div
              key={index}
              className="
              flex
              items-center
              gap-5
              p-5
              rounded-2xl
              border
              border-gray-200
              bg-white
              hover:border-blue-300
              hover:shadow-lg
              transition-all
              duration-300
              "
            >


              <div
                className="
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-xl
                bg-gradient-to-r 
                from-[#4F46E5] 
                to-[#7C5CFF]
                text-white
                text-xl
                "
              >
                {item.icon}
              </div>



              <div>

                <p
                  className="
                  text-sm
                  text-gray-500
                  "
                >
                  {item.label}
                </p>


                <p
                  className="
                  font-semibold
                  text-[#13284D]
                  "
                >
                  {item.value}
                </p>


              </div>


            </div>

          ))}


        </div>




        <div
          className="
          mt-10
          "
        >

          <p
            className="
            text-sm
            text-gray-500
            mb-4
            "
          >
            Seguinos en redes
          </p>


          <div className="flex gap-3">


            <a
              href="https://www.instagram.com/grupoautomatic/"
              className="
              px-5
              py-3
              rounded-xl
              bg-red-900
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition
              "
            >
              Instagram
            </a>



            <a
              href="https://www.facebook.com/grupoautomaticoficial/"
              className="
              px-5
              py-3
              rounded-xl
              bg-blue-900
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition
              "
            >
              Facebook
            </a>



            <a
              href="https://wa.me/573116298867"
              className="
              px-5
              py-3
              rounded-xl
              bg-green-500
              text-white
              text-sm
              font-medium
              hover:scale-105
              transition
              "
            >
              WhatsApp
            </a>


          </div>

        </div>


      </div>


    </div>
  );
}


export default ContactInfo;
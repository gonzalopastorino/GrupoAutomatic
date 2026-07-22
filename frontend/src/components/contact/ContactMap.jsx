function ContactMap() {

  return (

    <section
      className="
      px-6
      pb-20
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
          mb-8
          "
        >

          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-gray-900
            "
          >
            Nuestra ubicación
          </h2>


          <p
            className="
            mt-3
            text-gray-600
            max-w-2xl
            "
          >
            Estamos listos para recibirte y conversar sobre
            nuevas oportunidades de innovación y tecnología.
          </p>

        </div>



        <div
          className="
          h-[400px]
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          shadow-xl
          shadow-gray-200/50
          "
        >

          <iframe
            className="
            w-full
            h-full
            grayscale
            hover:grayscale-0
            transition
            duration-500
            "
            src="https://maps.google.com/maps?q=Bogota%20Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Ubicación"
          >
          </iframe>


        </div>


      </div>


    </section>

  );

}


export default ContactMap;
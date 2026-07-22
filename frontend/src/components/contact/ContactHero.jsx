function ContactHero() {

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
        opacity-60
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
          text-5xl
          md:text-6xl
          font-bold
          tracking-tight
          text-gray-900
          leading-tight
          "
        >
          Hablemos de tu
          <span className="text-blue-600">
            {" "}próximo proyecto
          </span>
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
          Estamos listos para escuchar tus ideas y ayudarte a
          crear soluciones inteligentes mediante tecnología,
          automatización e innovación.
        </p>



      </div>


    </section>
  );
}


export default ContactHero;
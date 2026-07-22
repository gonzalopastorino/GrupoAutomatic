function ContactHero() {

  return (
    <section
      className="
      relative
      overflow-hidden
      pt-24
      px-6
      "
    >
  <div className="bg-gradient-to-b from-[#13284D] to-[#203A73] -mx-6 md:-mx-12 -mt-24 px-6 md:px-12 py-16  text-center">
  <h2 className="text-white text-3xl md:text-4xl font-bold">          
          Hablemos de tu
          <span className="text-blue-600">
            {" "}próximo proyecto
          </span></h2>
  <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Estamos listos para escuchar tus ideas y ayudarte a
          crear soluciones mediante tecnología,
          automatización e innovación.
  </p>
</div>
    </section>
  );
}

export default ContactHero;
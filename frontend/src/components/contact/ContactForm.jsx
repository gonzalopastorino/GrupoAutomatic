import { useRef } from "react";

function ContactForm() {

  const formRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const inputs = form.querySelectorAll("input, textarea, select");


    let valid = true;


    inputs.forEach((field) => {

      field.setCustomValidity("");


      if (!field.value.trim()) {

        field.setCustomValidity(
          "Por favor completa este campo."
        );

        valid = false;

      }


    });



    const email = form.querySelector('input[type="email"]');


    if (
      email.value &&
      !email.value.includes("@")
    ) {

      email.setCustomValidity(
        "Por favor ingresa un email válido."
      );

      valid = false;

    }



    const service = form.querySelector("select");


    if (!service.value) {

      service.setCustomValidity(
        "Por favor selecciona un servicio."
      );

      valid = false;

    }



    if (!valid) {

      form.reportValidity();

      return;

    }



    alert("Mensaje enviado correctamente");

    form.reset();

  };



  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="
      bg-white
      border border-gray-200
      rounded-3xl
      p-8
      space-y-5
      shadow-lg
      "
    >

      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        Envíanos un mensaje
      </h3>



      <div className="grid md:grid-cols-2 gap-5">


        <input
          type="text"
          placeholder="Nombre"
          className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-gray-300
          text-gray-900
          outline-none
          focus:border-blue-600
          transition
          "
        />


        <input
          type="text"
          placeholder="Apellido"
          className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-gray-300
          text-gray-900
          outline-none
          focus:border-blue-600
          transition
          "
        />


      </div>




      <input
        type="email"
        placeholder="Email"
        className="
        w-full
        px-4
        py-3
        rounded-xl
        border
        border-gray-300
        text-gray-900
        outline-none
        focus:border-blue-600
        transition
        "
      />




      <div className="grid md:grid-cols-2 gap-5">


        <input
          type="tel"
          placeholder="Teléfono"
          className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-gray-300
          text-gray-900
          outline-none
          focus:border-blue-600
          transition
          "
        />



        <input
          type="text"
          placeholder="Empresa"
          className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-gray-300
          text-gray-900
          outline-none
          focus:border-blue-600
          transition
          "
        />

      </div>




      <select
        defaultValue=""
        className="
        w-full
        px-4
        py-3
        rounded-xl
        border
        border-gray-300
        text-gray-900
        outline-none
        focus:border-blue-600
        transition
        "
      >

        <option value="">
          Servicio de interés
        </option>

        <option value="Agentes de IA">
          Agentes de IA
        </option>

        <option value="Automatización">
          Automatización
        </option>

        <option value="Machine Learning">
          Machine Learning
        </option>

        <option value="Chatbots">
          Chatbots
        </option>

        <option value="Otro">
          Otro
        </option>

      </select>




      <textarea
        placeholder="Cuéntanos sobre tu proyecto..."
        className="
        w-full
        px-4
        py-3
        rounded-xl
        border
        border-gray-300
        text-gray-900
        outline-none
        focus:border-blue-600
        transition
        h-36
        "
      />




      <button
        type="submit"
        className="
        w-full
        py-4
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        text-white
        transition
        font-semibold
        "
      >
        Enviar mensaje
      </button>


    </form>
  );
}

export default ContactForm;
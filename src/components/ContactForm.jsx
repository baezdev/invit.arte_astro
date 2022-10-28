import React from "react";
import { FormButton } from "./FormButton";
import { FormInput } from "./FormInput";

export const ContactForm = () => {
  return (
    <div class="form">
      <h1>Envíanos un mensaje</h1>
      <p>Te contestaremos lo antes posible.</p>
      <form class="form__inputs margin__top-md">
        <div class="margin__bottom-md">
          <FormInput
            type="text"
            name="name"
            placeholder="Nombre"
            icon="fa-solid fa-user"
          />
        </div>
        <div class="margin__bottom-md">
          <FormInput
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            icon="fa-solid fa-envelope"
          />
        </div>
        <textarea
          class="form__textarea margin__bottom-lg"
          name="message"
          id=""
          rows="7"
          placeholder="Mensaje"
        ></textarea>
        <div class="form__buttons">
          <FormButton text="Enviar" icon="fa-solid fa-paper-plane" />
        </div>
      </form>
    </div>
  );
};

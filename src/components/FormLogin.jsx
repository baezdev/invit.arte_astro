import React from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export const FormLogin = () => {
  return (
    <div className="form">
      <div className="form__header">
        <a href="/">
          <img src="/images/logo.svg" alt="Logo Invit-Arte" />
        </a>
        <span>
          ¿No tienes cuenta? <a href="/register/">Registrate</a>
        </span>
      </div>
      <h1>Iniciar Sesión</h1>
      <p>Crea invitaciones a tu estilo.</p>
      <form className="form__inputs margin__top-md">
        <div className="margin__bottom-md">
          <FormInput
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            icon="fa-solid fa-envelope"
            secIcon="fa-regular fa-circle-check"
          />
        </div>
        <div className="margin__bottom-lg">
          <FormInput name="password" />
        </div>
        <div className="form__buttons">
          <FormButton text="Iniciar Sesión" icon="fa-solid fa-arrow-right" />
        </div>
      </form>
    </div>
  );
};

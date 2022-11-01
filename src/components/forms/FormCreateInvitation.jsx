import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import validator from "validator";

import { getUserLogged } from "../../helpers/auth/getUserLogged";
import { useForm } from "../../hooks/useForm";

import { FormButton } from "./FormButton";
import { FormInput } from "./FormInput";

const initialForms = {
  name: "",
  date: "",
  time: "",
  direction: "",
  dressCode: "",
};

const validFields = {
  name: false,
  date: false,
  time: false,
  direction: false,
  dressCode: false,
};

const validationsForm = (form, e) => {
  const errors = {};

  if (validator.isEmpty(form.name)) {
    errors.name = "El nombre del evento es obligatorio";
    validFields.name = false;
  } else {
    validFields.name = true;
  }

  if (validator.isEmpty(form.date)) {
    errors.date = "La fecha es obligatoria";
    validFields.date = false;
  } else {
    validFields.date = true;
  }

  if (validator.isEmpty(form.time)) {
    errors.time = "El horario es obligatorio";
    validFields.time = false;
  } else {
    validFields.time = true;
  }

  if (validator.isEmpty(form.direction)) {
    errors.direction = "La direccion es obligatoria";
    validFields.direction = false;
  } else {
    validFields.direction = true;
  }

  if (validator.isEmpty(form.dressCode)) {
    errors.dressCode = "El codigo de vestimenta es obligatorio";
    validFields.dressCode = false;
  } else {
    validFields.dressCode = true;
  }

  return errors;
};

const FormCreateInvitation = () => {
  const { form, errors, handleChange, handleEventValidation } = useForm(
    initialForms,
    validationsForm
  );

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserLogged().then((data) => setUser(data));
  }, []);

  const handleCreateInvitation = (e) => {
    e.preventDefault();
    if (
      !validFields.name ||
      !validFields.time ||
      !validFields.date ||
      !validFields.direction ||
      !validFields.dressCode
    ) {
      Swal.fire({
        title: "Algo anda mal",
        icon: "warning",
        text: "Revisa tus datos",
        customClass: "fs-lg",
      });
      return;
    }

    Swal.fire({
      title: "Próximamente",
      icon: "success",
      text: "Crearemos tu invitación",
      customClass: "fs-lg",
    }).then((res) => {
      if (res.isConfirmed) {
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }
    });
  };

  if (!user) {
    return (
      <span className="message-logged">
        Por favor inicié sesión para continuar 🥸
      </span>
    );
  }

  return (
    <div className="form">
      <h1>Bien, elegiste una plantilla.</h1>
      <p>Ahora solo debes de llenar los siguientes datos.</p>
      <form
        className="form__inputs margin__top-md"
        onSubmit={handleCreateInvitation}
      >
        <div>
          <div className="margin__bottom-lg">
            <FormInput
              type="text"
              name="name"
              placeholder="Nombre del evento"
              icon="fa-solid fa-user"
              onChange={handleChange}
              eventValidation={handleEventValidation}
              value={form.name}
              error={errors.name}
            />
          </div>
          <div className="margin__bottom-lg">
            <FormInput
              type="date"
              name="date"
              placeholder="Correo Electrónico"
              icon="fa-solid fa-calendar-days"
              onChange={handleChange}
              eventValidation={handleEventValidation}
              value={form.date}
              error={errors.date}
            />
          </div>
          <div className="margin__bottom-lg">
            <FormInput
              type="time"
              name="time"
              placeholder="Correo Electrónico"
              icon="fa-solid fa-clock"
              onChange={handleChange}
              eventValidation={handleEventValidation}
              value={form.time}
              error={errors.time}
            />
          </div>
          <div className="margin__bottom-lg">
            <FormInput
              type="text"
              name="direction"
              placeholder="Dirección del evento"
              icon="fa-solid fa-location-dot"
              onChange={handleChange}
              eventValidation={handleEventValidation}
              value={form.direction}
              error={errors.direction}
            />
          </div>
          <div className="margin__bottom-lgg">
            <div className="form__input-container">
              <div className="form__input">
                <span>
                  <i className="fa-solid fa-shirt"></i>
                </span>
                <select
                  name="dressCode"
                  onChange={handleChange}
                  onBlur={handleEventValidation}
                  required
                >
                  <option defaultValue="" disabled>Codigo de vestimenta</option>
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="random">A gusto personal</option>
                </select>
              </div>
              <span className="form__input-message">{errors?.dressCode}</span>
            </div>
          </div>
        </div>
        <div className="form__buttons">
          <FormButton text="Crear invitación" icon="bx bxs-party" />
        </div>
      </form>
    </div>
  );
};

export default FormCreateInvitation;

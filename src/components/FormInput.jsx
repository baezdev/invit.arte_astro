import React, { useState } from "react";

export const FormInput = ({ type, name, placeholder, icon, secIcon }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  if (name === "password") {
    const showPassword = () => {
      setIsShowPassword(!isShowPassword);
    };

    return (
      <div className="form__input">
        <span>
          <i className="fa-solid fa-lock"></i>
        </span>
        <input
          type={isShowPassword ? "text" : "password"}
          name="password"
          placeholder="Contraseña"
        />
        <button className="show__pass" type="button" onClick={showPassword}>
          <i className="fa-regular fa-eye"></i>
        </button>
      </div>
    );
  }

  return (
    <div className="form__input">
      <span>
        <i className={icon}></i>
      </span>
      <input type={type} name={name} placeholder={placeholder} />
      <span>
        <i className={secIcon}></i>
      </span>
    </div>
  );
};

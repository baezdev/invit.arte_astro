import React from "react";

export const UserCard = ({
  id,
  email,
  user_metadata,
  created_at,
  last_sign_in_at,
  numUser,
}) => {
  const createdDate = created_at.split("T")[0];
  const lastSign = last_sign_in_at.split("T")[0];

  return (
    <div className="grid__item">
      <div className="grid__item-content">
        <div className="item__title">
          <span>#{numUser + 1}</span>
          <p>{user_metadata.name}</p>
        </div>
        <div className="item__content">
          <div>
            <span>Correo:</span>
            <p>{email}</p>
          </div>
          <div className="item__content-dates">
            <div>
              <span>Creado:</span>
              <p>{createdDate}</p>
            </div>
            <div>
              <span>Última sesión:</span>
              <p>{lastSign}</p>
            </div>
          </div>
        </div>
        <div className="item__footer">
          <button className="item__button-warning">
            Editar<i class="fa-solid fa-pencil"></i>
          </button>
          <button className="item__button-danger">
            Eliminar <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

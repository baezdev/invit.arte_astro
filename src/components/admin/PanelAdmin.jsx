import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

import { userLog } from "../../helpers/auth/getUserLogged";

import { Page404 } from "../Page404";

export const PanelAdmin = () => {
  const [user, setUser] = useState(null);
  const $user = useStore(userLog);

  useEffect(() => {
    setUser($user);
  }, [$user]);

  if (user?.id !== "84bfe9c6-a464-42b5-b251-d0620173985e" || !user) {
    return <Page404 />;
  }

  return (
    <div className="page__complete center__section">
      <section className="container margin__bottom">
        <h4 className="subtitle" style={{ marginTop: "150px" }}>
          Opciones de Administrador
        </h4>
        <div className="buttons__container">
          <div className="button__select-container">
            <a href="/admin/users" className="button__select">
              <span>Usuarios</span>
              <img src="/images/undraw_people_re_8spw.svg" alt="s" />
            </a>
          </div>
          <div className="button__select-container">
            <a href="/admin/designs" className="button__select">
              <span>Plantillas</span>
              <img src="/images/undraw_designer_re_5v95.svg" alt="s" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

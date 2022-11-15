import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { userLog } from "../../helpers/auth/getUserLogged";

export const PanelAdmin = () => {
  const [user, setUser] = useState(null);
  const $user = useStore(userLog);

  useEffect(() => {
    setUser($user);
  }, [$user]);

  /* if (user?.id !== "84bfe9c6-a464-42b5-b251-d0620173985e") {
    return <h1>404</h1>;
    window.location.href = "/"
  } */

  return <div>PanelAdmin</div>;
};

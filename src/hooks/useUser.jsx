import { useEffect, useState } from "react";
import { getUserLogged } from "../helpers/auth/getUser";

const useUser = () => {
  const [user, setUser] = useState(null);

  const getUser = getUserLogged();

  useEffect(() => {
    getUser.then((response) => setUser(response));
  }, []);

  return user;
};

export default useUser;

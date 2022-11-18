import { useEffect, useState } from "react";

import { useStore } from "@nanostores/react";

import { userLog } from "../../helpers/auth/getUserLogged";
import { supabaseAdm } from "../../config/supabase.config";

import { LoadingPage } from "../LoadingPage";
import { Page404 } from "../Page404";
import { UserCard } from "./UserCard";

export const UsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [listUsers, setListUsers] = useState([]);

  const [user, setUser] = useState(null);
  const $user = useStore(userLog);

  useEffect(() => {
    setUser($user);
  }, [$user]);

  useEffect(() => {
    supabaseAdm.auth.admin
      .listUsers()
      .then(({ data }) => setListUsers(data.users));
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return <LoadingPage complete />;
  }

  if (user?.id !== "84bfe9c6-a464-42b5-b251-d0620173985e" || !user) {
    return <Page404 />;
  }

  return (
    <section className="mt__100">
      <h2 className="subtitle">Usuarios</h2>
      <div className="container grid">
        {listUsers.map((user, i) => (
          <UserCard key={user.id} {...user} numUser={i} />
        ))}
      </div>
    </section>
  );
};

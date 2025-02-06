import { useState, useEffect } from "react";
import "../components/Profil.jsx";

function Profil() {
  const [user, setUser] = useState(null);

  const getUsers = () => {
    return fetch("https://api.github.com/users/github-john-doe").then((res) => res.json());
  };

  useEffect(() => {
    getUsers().then((json) => setUser(json));
  }, []);

  return (
    user && (
      <div className="container-fluid text-center p-5">
        <h1 className="fw-bold">Github user</h1>
        <h2>{user.name}</h2>
        <img src={user.avatar_url} className="avatar" alt={user.name} />
        <p>{user.bio}</p>
        <p>Abonnés: {user.followers}</p>
        <p>Abonnement: {user.following}</p>
        <p>Créé le : {user.created_at}</p>
        <p>Modifié le : {user.updated_at}</p>
        <p>
          URL repositories :{" "}
          <a href={user.repos_url} target="blank">
            {user.repos_url}
          </a>
        </p>
      </div>
    )
  );
}

export default Profil;

import { useEffect, useState } from "react";
import "./App.css";

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get USERS() {
    return `${this.BASE}/users`;
  },
};

function useRandomUsers() {
  const [randomUser, setRandomUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewUser = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.USERS)
      .then((r) => r.json())
      .then((user) => {
        console.log({ user });
        setRandomUsers(user);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewUser();
  }, []);

  return { randomUser, loading, setLoading, error, fetchNewUser };
}

function App() {
  const { randomUser, loading, error, fetchNewUser } = useRandomUsers();

  if (loading) {
    return `Caricamento`;
  }

  if (error || !randomUser) {
    return `Errore `;
  }

  const { id, username, email } = randomUser;

  return (
    <div className="App">
      <div>User: {id}</div>
      <h1>{username}</h1>
      <h2>{email}</h2>
      <hr />
      <button onClick={() => fetchNewUser()}>Click!</button>
    </div>
  );
}

export default App;

import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/user.module.scss";

export default function User() {
  let { user } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  const onClickPrevBtn = () => navigate(`/users/${--user}`);
  const onClickNextBtn = () => navigate(`/users/${++user}`);

  return (
    <div className={styles.User} id={userData.id}>
      <div className={styles.content}>
        <h3>{userData.username}</h3>
        <p>{userData.email}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>
        {/* <Link to={`/users/2`}>Vai</Link> */}
        <button onClick={() => navigate("/")}>To Homepage</button>
        <button onClick={onClickNextBtn}>Next</button>
      </div>
    </div>
  );
}

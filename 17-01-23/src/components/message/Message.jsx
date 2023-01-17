import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Message">
      <img src={user.image} alt={user.firstName} />
      <div className="Message__textContent">
        <h1>@{user.firstName}</h1>
        <h4>{data.title}</h4>
        <p>{data.body}</p>
        <button>LIKE</button>
      </div>
    </div>
  );
};

export default Message;

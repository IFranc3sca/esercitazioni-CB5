import { useState } from "react";
import "./index.css";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(messageText);
  };

  return (
    <div className="NewMessage">
      {console.log(messageText)}
      <form onSubmit={onSubmit}>
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="what's in your mind?"
          name="text"
        />
        <input type="submit" value="Send" name="button" />
      </form>
    </div>
  );
};

export default NewMessage;

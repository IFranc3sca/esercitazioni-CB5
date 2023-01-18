import { useState } from "react";
import "./App.css";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import FriendsList from "./components/friendsList";
import Modal from "./components/modal";
import Button from "./components/button";
import Filter from "./components/filter";

function App() {
  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        {isModalEnabled && (
          <Modal>
            <NewMessage />
          </Modal>
        )}
        <Filter setFilterState={setFilterState} />
        <MessagesList nPost={"full"} filterSearch={filterState} />
      </div>
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
    </div>
  );
}

export default App;

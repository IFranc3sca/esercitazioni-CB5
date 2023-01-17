import "./App.css";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import FriendsList from "./components/friendsList";

function App() {
  return (
    <div className="App">
      <div className="friendsSection">
        <FriendsList />
      </div>
      <div className="mainSection">
        <NewMessage />
        <MessagesList />
      </div>
    </div>
  );
}

export default App;

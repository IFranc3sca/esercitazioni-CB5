import { Link } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello!</h1>
      <Link to="/users">Vai a users</Link>
    </div>
  );
}

export default App;

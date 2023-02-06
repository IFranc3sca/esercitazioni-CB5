import styles from "./App.module.scss";
import Counter from "./components/counter/Counter";
function App() {
  return (
    <div className={styles.App}>
      <Counter />
    </div>
  );
}

export default App;

import styles from "./App.module.scss";
import AddNote from "./components/addNote/AddNote";
import NoteContent from "./components/noteContent/NoteContent";

import { ApplicationCtx } from "./store";
import { useReducer } from "react";
import { initialState } from "./store";
import { globalReducer } from "./store/reducers";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        <main>
          <AddNote />
          <NoteContent />
        </main>
      </ApplicationCtx.Provider>
    </div>
  );
}

export default App;

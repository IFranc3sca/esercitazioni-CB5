import { useContext } from "react";
import { ApplicationCtx } from "../../store";
import NoteList from "../noteList/NoteList";
import styles from "./index.module.scss";

const NoteContent = () => {
  const { dispatch } = useContext(ApplicationCtx);

  return (
    <div className={styles.NoteContent}>
      <h2>Le tue note</h2>
      <NoteList />
    </div>
  );
};

export default NoteContent;

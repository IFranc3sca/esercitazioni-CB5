import { createContext } from "react";

const initialState = {
  noteList: JSON.parse(localStorage.getItem("note-list")) || [],
  initialNoteList: JSON.parse(localStorage.getItem("initial-note-list")) || [],
  user: {
    username: localStorage.getItem("Note-app-username"),
  },
};

const ApplicationCtx = createContext(initialState);

export { initialState, ApplicationCtx };

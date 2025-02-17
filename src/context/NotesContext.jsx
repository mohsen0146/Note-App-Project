import { createContext, useContext, useEffect, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

const initialState = [];

const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localNotes")) || initialValue;

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((note) => note.id !== payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    case "edit":{
      return [...notes.filter((note) => note.id !== payload.id), payload];
    }
    default:
      throw new Error("Unknown Error" + type);
  }
}

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("localNotes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
export function useNotesDisptch() {
  return useContext(NotesDispatchContext);
}

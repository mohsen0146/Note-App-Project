import NotesProvider from "../context/NotesContext";

function AppProvider({ children }) {
  return <NotesProvider>{children}</NotesProvider>;
}

export default AppProvider;

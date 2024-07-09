import { useState } from "react";
import "./App.css";
import NoteHeader from "./components/NoteHeader";
import NoteApp from "./components/NoteApp";
import AppProvider from "./providers/AppProvider";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <AppProvider>
      <div>
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </AppProvider>
  );
}

export default App;

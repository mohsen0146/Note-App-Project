import { useNotes } from "../context/NotesContext";
import Message from "./Message";
function NoteStatus() {
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const uncompletedNotes = notes.filter((note) => !note.completed).length;
  if (!allNotes)
    return (
      <Message>
        <span>ℹ️</span>
        <span>No notes has been already added!</span>
      </Message>
    );
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        completed <span>{completedNotes}</span>
      </li>
      <li>
        uncompleted <span>{uncompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;

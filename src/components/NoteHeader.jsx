import { useNotes } from "../context/NotesContext";

function NoteHeader({ sortBy, onSort }) {
  const notes = useNotes();
  return (
    <div className="note-header pb-8">
      <h1 className="font-bold text-xl">My notes({notes.length})</h1>
      <select value={sortBy} onChange={onSort} className="form-select rounded-lg text-sm">
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;

import { useState } from "react";
import { useNotes, useNotesDisptch } from "../context/NotesContext";

function EditNote({ noteId, onSubmit }) {
  const notes = useNotes();
  const note = notes.find((note) => note.id === noteId);
  const dispatch = useNotesDisptch();
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!title || !description) return null;
    const EditedNote = {
      title,
      description,
      id: note.id,
      completed: note.completed,
      createdAt: note.createdAt,
    };
    dispatch({ type: "edit", payload: EditedNote });
    onSubmit();
  };

  return (
    <div className="w-full">
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field shadow-md"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field shadow-md"
        />
        <button type="submit" className="btn btn--primary shadow-lg font-bold">
          Edit Note
        </button>
      </form>
    </div>
  );
}

export default EditNote;

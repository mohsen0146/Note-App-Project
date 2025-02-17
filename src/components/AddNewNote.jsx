import { useState } from "react";
import { useNotesDisptch } from "../context/NotesContext";

function AddNewNote() {
  const dispatch = useNotesDisptch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2 className="font-bold">Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field shadow-md"
          placeholder="Note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field shadow-md"
          placeholder="Note description"
        />
        <button type="submit" className="btn btn--primary shadow-lg font-bold">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;

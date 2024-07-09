import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNotes, useNotesDisptch } from "../context/NotesContext";
import Modal from "./Modal";
import { useState } from "react";
import EditNote from "./EditNote";

function NoteList({ sortBy }) {
  const notes = useNotes();
  let sortedNotes = notes;
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }
  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const [open, setOpen] = useState(false);
  const dispatch = useNotesDisptch();
  const options = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };

  return (
    <div
      className={`note-item ${note.completed ? "completed" : ""} shadow-md`}
      data-testId="note-item"
    >
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => setOpen(true)} >
            <PencilSquareIcon className="w-5 h-5 text-[#4f46e5]" />
          </button>
          <Modal open={open} onClose={() => setOpen(false)} title={`Edit Note ${note.title}`} >
            <EditNote noteId={note.id} onSubmit={()=>setOpen(false)} />
          </Modal>
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            <TrashIcon className="w-5 h-5 text-rose-500" />
          </button>
          <input
            className="form-checkbox w-5 h-5 rounded-md border-[#4f46e5]"
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}

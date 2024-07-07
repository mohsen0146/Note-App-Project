import { expect, test } from "vitest";
import { fireEvent, render, screen } from "../../test.utils";
import NoteApp from "../NoteApp";

function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/Note title/i);
  const inputDescription = screen.getByPlaceholderText(/Note description/i);
  const button = screen.getByRole("button", { name: /Add New Note/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, {
      target: { value: note.description },
    });

    fireEvent.click(button);
  });
}

test("Note App#1 : input should be empty after submit", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([
    {
      title: "first note title",
      description: "first note description",
    },
  ]);
  const inputTitle = screen.getByPlaceholderText(/Note title/i);
  expect(inputTitle.value).toBe("");
});

test("Note App#2 : should add multiple items", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([
    {
      title: "first note title",
      description: "first note description",
    },
    {
      title: "first note title",
      description: "first note description",
    },
    {
      title: "first note title",
      description: "first note description",
    },
  ]);
  const divElements = screen.getAllByTestId("note-item");
  expect(divElements.length).toBe(3);
});

test("Note App#3 : should not have active class when initially rendered", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([
    {
      title: "first note title",
      description: "first note description",
    },
  ]);
  const divElement = screen.getByTestId("note-item");
  expect(divElement).not.toHaveClass("completed");
});

test("Note App#4 : should have active class when item clicked", () => {
  render(<NoteApp sortBy="latest" />);
  addNote([
    {
      title: "first note title",
      description: "first note description",
    },
  ]);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const divElement = screen.getByTestId("note-item");
  expect(divElement).toHaveClass("completed");
});

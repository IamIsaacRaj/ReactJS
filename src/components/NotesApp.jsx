import { useEffect, useState } from "react";
import "./NotesApp.css";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Load notes from Local Storage on app start
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to Local Storage whenever `notes` change
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = () => {
    if (title.trim() === "" || content.trim() === "") return;

    let updatedNotes;
    if (editIndex !== null) {
      // Editing an existing note
      updatedNotes = notes.map((note, index) =>
        index === editIndex ? { title, category, content } : note
      );
      setEditIndex(null);
    } else {
      // Adding a new note
      updatedNotes = [...notes, { title, category, content }];
    }

    setNotes(updatedNotes);
    setTitle("");
    setContent("");
    setCategory("");
  };

  const editNote = (index) => {
    const note = notes[index];
    setTitle(note.title);
    setCategory(note.category);
    setContent(note.content);
    setEditIndex(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter((note) =>
    note?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>📝 NotesApp</h2>
      <input
        type="text"
        className="input-style"
        placeholder="Search note"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        className="input-style"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="input-style"
        placeholder="Category (e.g., Work, Personal)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        name="Write your note"
        className="textarea-styles"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="button-style" onClick={addNote}>
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>

      <ul>
        {filteredNotes.map((note, index) => (
          <li className="list-item-style" key={index}>
            <div className="note-header">
              <span>{note.title}</span>
              <span className="note-category">
                {note.category || "No Category"}
              </span>
            </div>
            <p className="note-content">
              <ol>
                {note.content.split("\n").map((line, i) => (
                  <li key={i}>
                     {line}
                  </li>
                ))}
              </ol>
            </p>
            <div className="button-container">
              <button className="button-style" onClick={() => editNote(index)}>
                Edit ✏️
              </button>
              <button
                className="button-style"
                onClick={() => deleteNote(index)}
              >
                Delete ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;

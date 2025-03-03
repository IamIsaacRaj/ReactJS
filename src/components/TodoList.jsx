import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // funtion to add a new todo
  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo(""); // to clear the input after adding
    }
  };
  // function to delete a task from todo list
  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new Task"
        style={{ padding: "10px", width: "200px", marginRight: "5px" }}
      />
      <button onClick={addTodo} style={{ padding: "10px" }}>
        Add Todo
      </button>

      <div style={{ marginTop: "20px" }}>
        {todos.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            {item}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: "10px", padding: "4px 8px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

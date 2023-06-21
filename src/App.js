import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodoSync = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleAddTodoAsync = () => {
    setLoading(true);

    // Simulating an asynchronous delay (e.g., API request)
    setTimeout(() => {
      setTodos([...todos, newTodo]);
      setNewTodo("");
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodoSync}>Add Todo (Sync)</button>
      <button onClick={handleAddTodoAsync} disabled={loading}>
        {loading ? "Adding Todo (Async)..." : "Add Todo (Async)"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

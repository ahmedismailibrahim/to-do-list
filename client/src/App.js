import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const loadTodos = async () => {
    const res = await axios.get("http://localhost:5000/");
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    await axios.post("http://localhost:5000/", { text });
    setText("");
    loadTodos();
  };

  const toggleTodo = async (todo) => {
    await axios.put(`http://localhost:5000/${todo._id}`, {
      completed: !todo.completed,
    });
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/${id}`);
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h2>MERN Todo</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t._id}>
            <span
              onClick={() => toggleTodo(t)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t._id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

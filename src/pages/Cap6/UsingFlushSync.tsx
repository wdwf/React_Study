import { useState, useRef } from "react";
import { flushSync } from "react-dom";

let nextId = 0;
const initialTodos = [
  { id: 1, text: "todo..." },
  { id: 2, text: "todo..." },
  { id: 3, text: "todo..." },
];

export default function UsingFlushSync() {
  const listRef = useRef<any>(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [isVisible, setIsVisible] = useState(false);

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginTop: "200px" }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}


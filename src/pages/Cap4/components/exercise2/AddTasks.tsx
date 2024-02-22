import React, { useState } from "react";

export default function AddTasks({
  handleAddTodo,
}: {
  handleAddTodo: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (title) {
            handleAddTodo(title);
          }
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
}


import React, { useState } from "react";
import { todoProps } from "../..";

export default function Task({
  theTask,
  onRemove,
  onChange,
}: {
  theTask: {
    id: number;
    title: string;
    done: boolean;
  };
  onRemove: (removeTodo: number) => void;
  onChange: (nextTodo: todoProps) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        margin: "10px 0px",
      }}
    >
      <input
        type='checkbox'
        id={`${theTask.id}`}
        onChange={(e) => onChange({ ...theTask, done: e.target.checked })}
      />
      {isEditing ? (
        <>
          <input
            type='text'
            name='name'
            value={theTask.title}
            onChange={(e) => onChange({ ...theTask, title: e.target.value })}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <label htmlFor={`${theTask.id}`}>{theTask.title}</label>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onRemove(theTask.id)}>Del</button>
    </li>
  );
}


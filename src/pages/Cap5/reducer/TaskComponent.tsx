import React, { useState } from "react";

type taskProps = {
  id: number;
  text: string;
  done: boolean;
};

export default function TaskComponent({
  theTask,
  onRemove,
  onChange,
}: {
  theTask: {
    id: number;
    text: string;
    done: boolean;
  };
  onRemove: (removeTodo: number) => void;
  onChange: (nextTodo: taskProps) => void;
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
            value={theTask.text}
            onChange={(e) => onChange({ ...theTask, text: e.target.value })}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <label htmlFor={`${theTask.id}`}>{theTask.text}</label>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onRemove(theTask.id)}>Del</button>
    </li>
  );
}

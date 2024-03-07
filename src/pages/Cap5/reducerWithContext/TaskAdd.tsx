import React, { useContext, useState } from "react";
import { useTasksDispatch } from "./TaskContextEx";

export default function TaskAdd() {
  const [text, setText] = useState("");
  const { handleAddTask } = useTasksDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask(text);
          setText("");
        }}
      >
        <input
          type='text'
          placeholder='task text...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Salvar</button>
      </form>
    </div>
  );
}


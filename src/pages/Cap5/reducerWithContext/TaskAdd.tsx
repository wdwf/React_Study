import React, { useState } from "react";

export default function TaskAdd({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.defaultPrevented;
          onAddTask(text);
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


import React, { useState } from "react";
import { taskReducerProps } from "./TaskReducerEx";
import { useTasksDispatch } from "./TaskContextEx";

export default function TaskItem({ task }: { task: taskReducerProps }) {
  const [isEditing, setIsEditing] = useState(false);
  const { handleChangeTask, handleDeleteTask } = useTasksDispatch();

  return (
    <label>
      <input
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          handleChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />

      {isEditing ? (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              handleChangeTask({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </label>
  );
}


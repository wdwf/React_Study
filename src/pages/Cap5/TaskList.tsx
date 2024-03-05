const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

type taskProps = {
  id: number;
  text: string;
  done: boolean;
};

import React, { useReducer, useState } from "react";
import TaskComponent from "./TaskComponent";
import { tasksReducer } from "./tasksReducer";

export default function TaskList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAdd() {
    //Todo
  }
  function handleEdit(task: taskProps) {
    dispatch({
      type: "changed",
      task: task,
    });
    // setTasks(
    //   tasks.map((t) => {
    //     if (t.id === task.id) {
    //       return task;
    //     }
    //     return t;
    //   })
    // );
  }
  function handleRemove(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
    // setTasks(tasks.filter((item) => item.id !== removeTodoId));
  }

  return (
    <div>
      {tasks.map((item) => (
        <TaskComponent
          onChange={handleEdit}
          onRemove={handleRemove}
          theTask={item}
        />
      ))}
    </div>
  );
}
